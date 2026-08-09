// Envoie un digest email (via l'API Resend) du contenu courant de offres-web.js
// et signaux-strategiques.js. Déclenché par le workflow notify-email.yml à
// chaque push touchant l'un de ces deux fichiers.
const fs = require('fs');
const https = require('https');
const Module = require('module');

function loadDataModule(file, exportNames) {
  if (!fs.existsSync(file)) return {};
  const code = fs.readFileSync(file, 'utf8');
  const wrapped = code + '\n' + exportNames
    .map((n) => `module.exports.${n} = typeof ${n} !== 'undefined' ? ${n} : undefined;`)
    .join('\n');
  const m = new Module(file);
  m.filename = file;
  m._compile(wrapped, file);
  return m.exports;
}

function escapeHtml(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

const offresMod = loadDataModule('./offres-web.js', ['OFFRES_WEB', 'OFFRES_WEB_META']);
const signauxMod = loadDataModule('./signaux-strategiques.js', ['SIGNAUX', 'SIGNAUX_META']);

const OFFRES_WEB = offresMod.OFFRES_WEB || [];
const META = offresMod.OFFRES_WEB_META || {};
const SIGNAUX = signauxMod.SIGNAUX || [];

const TIER_LABEL = { A: 'Tier A — ressources propres', B: 'Tier B — agence déléguée', C: 'Tier C — budget national' };
const TIER_COLOR = { A: '#3f7d2c', B: '#a8720f', C: '#8a4a3d' };

function offreRow(o) {
  return `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #e2e6da;">
        <div style="font-weight:600;color:#20281a;font-size:13px;">${escapeHtml(o.titre)}</div>
        <div style="font-size:12px;color:#5b6552;margin-top:2px;">${escapeHtml(o.client)} · ${escapeHtml(o.pays)}${o.quickWin ? ' · <span style="color:#497A1D;font-weight:600;">Quick-win</span>' : ''}</div>
      </td>
      <td style="padding:10px 12px;border-bottom:1px solid #e2e6da;white-space:nowrap;font-size:12px;color:#5b6552;">${escapeHtml(o.deadline) || '—'}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #e2e6da;white-space:nowrap;">
        <a href="${o.lien}" style="color:#497A1D;text-decoration:none;font-size:12px;font-weight:600;">Voir →</a>
      </td>
    </tr>`;
}

function groupByTier(list) {
  return ['A', 'B', 'C']
    .map((t) => ({ tier: t, items: list.filter((o) => o.tier === t) }))
    .filter((g) => g.items.length);
}

const groups = groupByTier(OFFRES_WEB);

const sections = groups.map((g) => `
  <h3 style="margin:24px 0 8px;font-size:14px;color:${TIER_COLOR[g.tier]};">${TIER_LABEL[g.tier]} (${g.items.length})</h3>
  <table style="width:100%;border-collapse:collapse;">${g.items.map(offreRow).join('')}</table>
`).join('');

const signauxSection = SIGNAUX.length ? `
  <h3 style="margin:28px 0 8px;font-size:14px;color:#5b6552;">Signaux stratégiques (${SIGNAUX.length})</h3>
  <ul style="padding-left:18px;margin:0;">
    ${SIGNAUX.map((s) => `<li style="margin-bottom:8px;font-size:13px;color:#20281a;">${escapeHtml(s.titre)} — <span style="color:#5b6552;">${escapeHtml(s.bailleurOuSource)}, ${escapeHtml(s.pays)}</span> — <a href="${s.lien}" style="color:#497A1D;">source</a></li>`).join('')}
  </ul>
` : '';

const html = `
<div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;">
  <div style="background:#497A1D;color:#fff;padding:18px 22px;border-radius:10px 10px 0 0;">
    <div style="font-size:18px;font-weight:700;">Veille AO/AMI — Dakar Construction</div>
    <div style="font-size:12px;opacity:0.9;margin-top:4px;">Mise à jour du ${escapeHtml(META.derniereMiseAJour) || ''}</div>
  </div>
  <div style="border:1px solid #e2e6da;border-top:none;padding:18px 22px;border-radius:0 0 10px 10px;">
    <p style="font-size:13px;color:#5b6552;margin:0 0 12px;">${OFFRES_WEB.length} offre(s) actionnable(s) suivie(s) dans la zone Sénégal → Côte d'Ivoire/Mauritanie → Bénin/Togo/Gambie/Cap-Vert.</p>
    ${sections || '<p style="font-size:13px;color:#5b6552;">Aucune offre actionnable en base actuellement.</p>'}
    ${signauxSection}
  </div>
</div>`;

const payload = JSON.stringify({
  from: process.env.EMAIL_FROM,
  to: [process.env.EMAIL_TO],
  subject: `Veille AO/AMI DC — ${OFFRES_WEB.length} offres (${META.derniereMiseAJour || 'mise à jour'})`,
  html,
});

if (!process.env.RESEND_API_KEY) {
  console.error('RESEND_API_KEY absent (secret GitHub non configuré) — email non envoyé.');
  process.exit(1);
}

const req = https.request({
  hostname: 'api.resend.com',
  path: '/emails',
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload),
  },
}, (res) => {
  let body = '';
  res.on('data', (d) => { body += d; });
  res.on('end', () => {
    console.log('Resend response status:', res.statusCode);
    console.log(body);
    if (res.statusCode >= 400) process.exit(1);
  });
});
req.on('error', (e) => { console.error(e); process.exit(1); });
req.write(payload);
req.end();
