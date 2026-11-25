
const SAMPLE = {
  id: 'sample', sample: true, createdAt: 1,
  title: 'Tiny Forests in Big Cities',
  category: 'nature',
  summary: 'Как в городах сажают «крошечные леса» размером с теннисный корт и что о них думают учёные.',
  levels: {
    A1: `Some cities have a new kind of forest. It is very small. It is about the size of a tennis court.

A Japanese scientist, Akira Miyawaki, had this idea. People plant many young trees close together. They plant about three trees in one square metre. They use trees from the local area.

The trees grow fast. After two or three years, the forest does not need help. Birds and insects come and live there.

Children often help to plant the trees. People in the city like their new green place.`,
    A2: `Many cities now have tiny forests. A tiny forest is a small area of trees, often about the size of a tennis court. You can find them next to schools, roads and parking areas.

The idea comes from Akira Miyawaki, a Japanese botanist. In his method, people first prepare the soil carefully. Then they plant young trees very close together, about three in every square metre. They only choose trees that grow naturally in that area.

Because the trees are so close, they compete for light and grow quickly. After about three years, the forest usually looks after itself.

Supporters say tiny forests bring birds, bees and butterflies back to the city. They can also make hot streets a little cooler. Local people, often schoolchildren, help to plant them, and many of them visit their forest again and again.`,
    B1: `Across Europe, India and other parts of the world, small groups of volunteers are planting forests that are no bigger than a tennis court. These "tiny forests" are appearing in schoolyards, beside busy roads and on unused pieces of land.

The method was developed by Akira Miyawaki, a Japanese botanist who died in 2021. First, the soil is improved so that it can hold water and nutrients. Then volunteers plant young native trees and bushes very close together, usually about three plants per square metre. Native species are chosen because they are already suited to the local climate.

Planted so densely, the young trees compete for sunlight and grow upwards quickly. They need watering and weeding for the first two or three years, but after that the forest is expected to take care of itself.

Supporters believe tiny forests can attract wildlife, reduce noise and help to cool down hot streets in summer. Some scientists are more careful. They say there is still not much long-term research, and that tiny forests cannot replace large, old woodlands. Even so, many communities enjoy the chance to create something green with their own hands.`,
    B2: `In cities from Paris to Chennai, community groups are turning neglected corners of land into so-called tiny forests: dense patches of woodland roughly the size of a tennis court. They are being squeezed in next to schools, motorways and car parks, places where a traditional park would never fit.

The approach is based on the work of Akira Miyawaki, a Japanese botanist who spent decades studying the natural vegetation of his country. His method starts underground. The soil is dug up and enriched with organic material so that it can retain moisture. Volunteers then plant a wide mix of native trees and shrubs at a remarkable density of around three saplings per square metre.

The idea is that the crowded young plants compete for light and therefore shoot upwards faster than they would in a conventional plantation. For the first two or three years, the site needs regular watering and weeding. After that, the canopy closes and the forest is supposed to become largely self-sustaining.

Advocates claim that tiny forests boost biodiversity, absorb noise and lower temperatures on hot days. Researchers, however, point out that many of these claims are based on short-term observations, and that the speed of growth varies a great deal from site to site. Nor can a few hundred square metres of trees replace the ecological value of an ancient forest. For many neighbourhoods, though, the main benefit may be social: residents who plant a forest together tend to keep coming back to see how it is doing.`,
    C1: `Wedged between ring roads, schoolyards and retail car parks, a new kind of urban woodland is quietly taking root. So-called tiny forests, dense thickets of native vegetation occupying little more than a tennis court, have spread over the past decade from Japan to cities across Europe and South Asia, championed by local councils, environmental charities and a growing number of enthusiastic volunteers.

Their intellectual origin lies with Akira Miyawaki, a Japanese botanist who spent much of his career surveying the remnants of his country's native forest. Convinced that degraded land could be restored far faster than conventional forestry assumed, he devised a technique that begins with the soil. The ground is excavated and amended with organic matter to improve its structure and water retention, after which dozens of species of native trees and shrubs are planted at an unusually high density, typically three saplings to the square metre.

The rationale is that intense competition for light drives rapid vertical growth, while the diversity of species mimics the layered structure of a mature forest. Provided the site is watered and weeded through its first few seasons, the canopy should close within about three years, at which point the plot is meant to sustain itself with minimal intervention.

Proponents credit tiny forests with an impressive list of benefits, from enhanced biodiversity to noise reduction and local cooling. Ecologists, while broadly sympathetic, caution that the evidence base remains thin: much of it is anecdotal or drawn from short monitoring periods, and growth rates have proved highly variable. Critics also warn that the appeal of a quick, photogenic fix could distract from the far less glamorous task of protecting the old-growth woodland that still exists.

Yet the projects' most durable legacy may be civic rather than ecological. A forest planted by schoolchildren and neighbours becomes, in a very literal sense, common ground.`
  },
  extras: {
    A1: {
      vocab: [
        { word: 'forest', match: 'forest', pos: 'noun', ipa: '/ˈfɒrɪst/', def: 'a big area with many trees', ru: 'лес' },
        { word: 'scientist', match: 'scientist', pos: 'noun', ipa: '/ˈsaɪəntɪst/', def: 'a person who studies the natural world', ru: 'учёный' },
        { word: 'plant', match: 'plant', pos: 'verb', ipa: '/plɑːnt/', def: 'to put a young tree or seed in the ground', ru: 'сажать' },
        { word: 'young', match: 'young', pos: 'adjective', ipa: '/jʌŋ/', def: 'not old', ru: 'молодой' },
        { word: 'close together', match: 'close together', pos: 'phrase', ipa: '/kləʊs təˈɡeðə/', def: 'very near each other', ru: 'близко друг к другу' },
        { word: 'local', match: 'local', pos: 'adjective', ipa: '/ˈləʊkl/', def: 'from the place where you are', ru: 'местный' },
        { word: 'insect', match: 'insects', pos: 'noun', ipa: '/ˈɪnsekt/', def: 'a very small animal with six legs', ru: 'насекомое' }
      ],
      quiz: [
        { type: 'mc', q: 'How big is a tiny forest?', options: ['About the size of a city', 'About the size of a tennis court', 'About one square metre', 'About the size of a school'], answer: 1 },
        { type: 'mc', q: 'Who had the idea?', options: ['A teacher from India', 'Children in the city', 'A Japanese scientist', 'A bird expert'], answer: 2 },
        { type: 'gap', sentence: 'People plant about three trees in one square ____.', options: ['metre', 'forest', 'year', 'city'], answer: 0 },
        { type: 'gap', sentence: 'Birds and ____ come and live there.', options: ['cars', 'insects', 'children', 'scientists'], answer: 1 },
        { type: 'order', q: 'Put the events in order.', items: ['A scientist has an idea.', 'People plant young trees close together.', 'The trees grow fast.', 'Birds and insects come to live in the forest.'] }
      ]
    },
    A2: {
      vocab: [
        { word: 'botanist', match: 'botanist', pos: 'noun', ipa: '/ˈbɒtənɪst/', def: 'a scientist who studies plants', ru: 'ботаник' },
        { word: 'prepare', match: 'prepare', pos: 'verb', ipa: '/prɪˈpeə/', def: 'to make something ready', ru: 'подготавливать' },
        { word: 'soil', match: 'soil', pos: 'noun', ipa: '/sɔɪl/', def: 'the top layer of ground where plants grow', ru: 'почва' },
        { word: 'naturally', match: 'naturally', pos: 'adverb', ipa: '/ˈnætʃrəli/', def: 'without help from people', ru: 'естественным образом' },
        { word: 'compete', match: 'compete', pos: 'verb', ipa: '/kəmˈpiːt/', def: 'to try to get something that others also want', ru: 'соперничать, бороться' },
        { word: 'look after', match: 'looks after', pos: 'phrasal verb', ipa: '/lʊk ˈɑːftə/', def: 'to take care of', ru: 'заботиться о' },
        { word: 'supporter', match: 'supporters', pos: 'noun', ipa: '/səˈpɔːtə/', def: 'a person who likes and helps an idea', ru: 'сторонник' }
      ],
      quiz: [
        { type: 'mc', q: 'Where can you find tiny forests?', options: ['Only in the mountains', 'Next to schools, roads and parking areas', 'Only in Japan', 'Inside big buildings'], answer: 1 },
        { type: 'mc', q: 'Why do the trees grow quickly?', options: ['People water them every hour', 'They are very old trees', 'They are close together and compete for light', 'They come from other countries'], answer: 2 },
        { type: 'gap', sentence: 'They only choose trees that grow ____ in that area.', options: ['quickly', 'naturally', 'slowly', 'badly'], answer: 1 },
        { type: 'gap', sentence: 'They can also make hot streets a little ____.', options: ['cooler', 'louder', 'busier', 'darker'], answer: 0 },
        { type: 'order', q: 'Put the steps in order.', items: ['People prepare the soil.', 'They plant young trees very close together.', 'The trees compete for light and grow quickly.', 'The forest looks after itself.'] }
      ]
    },
    B1: {
      vocab: [
        { word: 'volunteer', match: 'volunteers', pos: 'noun', ipa: '/ˌvɒlənˈtɪə/', def: 'a person who works without being paid', ru: 'волонтёр' },
        { word: 'nutrient', match: 'nutrients', pos: 'noun', ipa: '/ˈnjuːtriənt/', def: 'a substance that plants need to grow', ru: 'питательное вещество' },
        { word: 'native', match: 'native', pos: 'adjective', ipa: '/ˈneɪtɪv/', def: 'growing naturally in a particular place', ru: 'местный, коренной' },
        { word: 'suited', match: 'suited', pos: 'adjective', ipa: '/ˈsuːtɪd/', def: 'right or good for something', ru: 'подходящий, приспособленный' },
        { word: 'densely', match: 'densely', pos: 'adverb', ipa: '/ˈdensli/', def: 'very close together', ru: 'густо, плотно' },
        { word: 'weeding', match: 'weeding', pos: 'noun', ipa: '/ˈwiːdɪŋ/', def: 'removing unwanted plants', ru: 'прополка' },
        { word: 'attract', match: 'attract', pos: 'verb', ipa: '/əˈtrækt/', def: 'to make something come to a place', ru: 'привлекать' },
        { word: 'replace', match: 'replace', pos: 'verb', ipa: '/rɪˈpleɪs/', def: 'to take the place of something', ru: 'заменять' }
      ],
      quiz: [
        { type: 'mc', q: 'What happens first when a tiny forest is planted?', options: ['Volunteers water the trees', 'The soil is improved', 'Old trees are cut down', 'Scientists count the birds'], answer: 1 },
        { type: 'mc', q: 'What do some scientists say?', options: ['Tiny forests are dangerous', 'Tiny forests grow too slowly', 'There is not much long-term research yet', 'Tiny forests should only be planted in Japan'], answer: 2 },
        { type: 'gap', sentence: 'Native species are chosen because they are already ____ to the local climate.', options: ['suited', 'attracted', 'replaced', 'planted'], answer: 0 },
        { type: 'gap', sentence: 'They need watering and ____ for the first two or three years.', options: ['cooling', 'weeding', 'building', 'reading'], answer: 1 },
        { type: 'order', q: 'Put the steps in order.', items: ['The soil is improved.', 'Volunteers plant native trees close together.', 'The young trees compete for sunlight.', 'The forest takes care of itself.'] }
      ]
    },
    B2: {
      vocab: [
        { word: 'neglected', match: 'neglected', pos: 'adjective', ipa: '/nɪˈɡlektɪd/', def: 'not looked after for a long time', ru: 'заброшенный' },
        { word: 'squeeze in', match: 'squeezed in', pos: 'phrasal verb', ipa: '/skwiːz ɪn/', def: 'to fit something into a small space', ru: 'втиснуть' },
        { word: 'enrich', match: 'enriched', pos: 'verb', ipa: '/ɪnˈrɪtʃ/', def: 'to improve something by adding to it', ru: 'обогащать' },
        { word: 'retain', match: 'retain', pos: 'verb', ipa: '/rɪˈteɪn/', def: 'to keep or hold', ru: 'удерживать' },
        { word: 'sapling', match: 'saplings', pos: 'noun', ipa: '/ˈsæplɪŋ/', def: 'a young tree', ru: 'саженец' },
        { word: 'self-sustaining', match: 'self-sustaining', pos: 'adjective', ipa: '/ˌself səˈsteɪnɪŋ/', def: 'able to continue without outside help', ru: 'самоподдерживающийся' },
        { word: 'advocate', match: 'advocates', pos: 'noun', ipa: '/ˈædvəkət/', def: 'a person who publicly supports an idea', ru: 'сторонник' },
        { word: 'biodiversity', match: 'biodiversity', pos: 'noun', ipa: '/ˌbaɪəʊdaɪˈvɜːsəti/', def: 'the variety of living things in an area', ru: 'биоразнообразие' }
      ],
      quiz: [
        { type: 'mc', q: 'Why are tiny forests planted near motorways and car parks?', options: ['Because the land there is very cheap', 'Because a traditional park would not fit there', 'Because trees grow faster near cars', 'Because the law requires it'], answer: 1 },
        { type: 'mc', q: 'What problem do researchers see in the claims about tiny forests?', options: ['They come from short-term observations', 'They were invented by companies', 'They only apply to Japan', 'They have been proved false'], answer: 0 },
        { type: 'gap', sentence: 'The soil is enriched with organic material so that it can ____ moisture.', options: ['replace', 'retain', 'attract', 'compete'], answer: 1 },
        { type: 'gap', sentence: 'After that, the canopy closes and the forest is supposed to become largely ____.', options: ['neglected', 'conventional', 'self-sustaining', 'crowded'], answer: 2 },
        { type: 'order', q: 'Put the steps in order.', items: ['The soil is dug up and enriched.', 'Saplings are planted at high density.', 'The site is watered and weeded for two or three years.', 'The canopy closes.'] }
      ]
    },
    C1: {
      vocab: [
        { word: 'wedged', match: 'wedged', pos: 'adjective', ipa: '/wedʒd/', def: 'fixed tightly into a narrow space', ru: 'зажатый, втиснутый' },
        { word: 'champion', match: 'championed', pos: 'verb', ipa: '/ˈtʃæmpiən/', def: 'to publicly support and fight for', ru: 'отстаивать, продвигать' },
        { word: 'remnant', match: 'remnants', pos: 'noun', ipa: '/ˈremnənt/', def: 'a small part that is left', ru: 'остаток' },
        { word: 'degraded', match: 'degraded', pos: 'adjective', ipa: '/dɪˈɡreɪdɪd/', def: 'damaged and in a worse condition', ru: 'деградировавший, истощённый' },
        { word: 'rationale', match: 'rationale', pos: 'noun', ipa: '/ˌræʃəˈnɑːl/', def: 'the reasons behind a plan or decision', ru: 'обоснование' },
        { word: 'mimic', match: 'mimics', pos: 'verb', ipa: '/ˈmɪmɪk/', def: 'to copy the way something looks or works', ru: 'имитировать' },
        { word: 'anecdotal', match: 'anecdotal', pos: 'adjective', ipa: '/ˌænɪkˈdəʊtl/', def: 'based on personal stories, not research', ru: 'основанный на отдельных случаях' },
        { word: 'legacy', match: 'legacy', pos: 'noun', ipa: '/ˈleɡəsi/', def: 'something that remains after a project or person', ru: 'наследие' }
      ],
      quiz: [
        { type: 'mc', q: 'What did Miyawaki believe about degraded land?', options: ['It could never be restored', 'It could be restored faster than foresters assumed', 'It should be used for car parks', 'It only needed new soil'], answer: 1 },
        { type: 'mc', q: 'What concern do critics raise?', options: ['Tiny forests use too much water', 'A quick fix might distract from protecting old-growth woodland', 'Volunteers are not properly trained', 'Native species are too expensive'], answer: 1 },
        { type: 'gap', sentence: 'Ecologists caution that the evidence base remains ____.', options: ['durable', 'photogenic', 'thin', 'dense'], answer: 2 },
        { type: 'gap', sentence: 'The diversity of species ____ the layered structure of a mature forest.', options: ['excavates', 'mimics', 'replaces', 'sustains'], answer: 1 },
        { type: 'order', q: 'Put the steps in order.', items: ["Miyawaki surveys the remnants of Japan's native forest.", 'The ground is excavated and amended with organic matter.', 'Saplings are planted at high density.', 'The canopy closes within about three years.'] }
      ]
    }
  },
  gloss: {},
  results: {}
};
/* ===== constants ===== */
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];
const LEVEL_NAME = { A1: 'Начальный', A2: 'Элементарный', B1: 'Средний', B2: 'Выше среднего', C1: 'Продвинутый' };
const CATS = { world: 'Мир', science: 'Наука', health: 'Здоровье', technology: 'Технологии', business: 'Бизнес', sport: 'Спорт', nature: 'Природа', culture: 'Культура', curious: 'Любопытное' };
const DAY = 86400000;
const WORD_RE = /[A-Za-z0-9]+(?:['’\-][A-Za-z0-9]+)*/g;

const I = {
  play: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>',
  spk: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
  plus: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
  check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>',
  trash: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>',
  back: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>',
  up: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 15 6-6 6 6"/></svg>',
  down: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
  next: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>',
  pen: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/></svg>',
  gear: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  stop: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>'
};
const LOGO = '<svg width="28" height="22" viewBox="0 0 28 22" aria-hidden="true">' +
  LEVELS.map((L, i) => `<rect x="${i * 5.7}" y="${22 - (6 + i * 4)}" width="4.6" height="${6 + i * 4}" rx="1.2" style="fill:var(--${L})"/>`).join('') + '</svg>';

/* ===== helpers ===== */
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clone = o => JSON.parse(JSON.stringify(o));
const countWords = t => (String(t || '').match(WORD_RE) || []).length;
const norm = w => w.toLowerCase().replace(/’/g, "'");
const LS = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { } }
};
function shuffle(arr, seed) {
  const a = arr.slice(); let s = seed ?? Math.floor(Math.random() * 1e9);
  const rnd = () => { s = (s * 1103515245 + 12345) % 2147483648; return s / 2147483648; };
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function plural(n, one, few, many) {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
  return many;
}
let toastTimer;
function toast(msg) {
  const t = document.getElementById('toast'); t.textContent = msg; t.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; }, 3800);
}
const queues = {};
function enqueue(key, fn) { const p = (queues[key] || Promise.resolve()).then(fn, fn); queues[key] = p.catch(() => { }); return p; }

/* ===== text parsing ===== */
const parseCache = new Map();
function parseText(text) {
  if (parseCache.has(text)) return parseCache.get(text);
  const paras = String(text || '').split(/\n\s*\n/).map(p => p.replace(/\s+/g, ' ').trim()).filter(Boolean);
  const sents = [], out = [];
  for (const p of paras) {
    const ss = (p.match(/[^.!?]+(?:[.!?]+["'”’)]*|$)/g) || [p]).map(s => s.trim()).filter(Boolean);
    const idxs = [];
    for (const s of ss) { idxs.push(sents.length); sents.push(s); }
    out.push(idxs);
  }
  const res = { paras: out, sents, words: countWords(text) };
  parseCache.set(text, res); return res;
}
function tokens(s) {
  const re = new RegExp(WORD_RE.source, 'g'); const out = []; let last = 0, m;
  while ((m = re.exec(s))) {
    if (m.index > last) out.push({ t: s.slice(last, m.index) });
    out.push({ t: m[0], w: true }); last = re.lastIndex;
  }
  if (last < s.length) out.push({ t: s.slice(last) });
  return out;
}
const wordsOf = s => (norm(s).match(/[a-z0-9]+(?:'[a-z]+)?/g) || []);
function vocabMarks(sents, vocab) {
  const marks = {};
  (vocab || []).forEach((v, vi) => {
    const phrase = norm(v.match || v.word || '').split(/\s+/).filter(Boolean);
    if (!phrase.length) return;
    sents.forEach((s, si) => {
      const ws = tokens(s).filter(t => t.w).map(t => norm(t.t));
      for (let i = 0; i + phrase.length <= ws.length; i++) {
        let ok = true;
        for (let j = 0; j < phrase.length; j++) if (ws[i + j] !== phrase[j]) { ok = false; break; }
        if (ok) for (let j = 0; j < phrase.length; j++) marks[si + ':' + (i + j)] = vi;
      }
    });
  });
  return marks;
}

/* ===== local database (IndexedDB) ===== */
const IDB = {
  db: null,
  open() {
    if (this.db) return Promise.resolve(this.db);
    return new Promise((res, rej) => {
      const r = indexedDB.open('stupeni', 1);
      r.onupgradeneeded = () => { const d = r.result; for (const n of ['stories', 'words', 'kv']) if (!d.objectStoreNames.contains(n)) d.createObjectStore(n); };
      r.onsuccess = () => { this.db = r.result; res(this.db); };
      r.onerror = () => rej(r.error);
    });
  },
  async tx(store, mode, fn) {
    const d = await this.open();
    return new Promise((res, rej) => {
      const t = d.transaction(store, mode); const s = t.objectStore(store); let out;
      const r = fn(s); if (r) r.onsuccess = () => { out = r.result; };
      t.oncomplete = () => res(out); t.onerror = () => rej(t.error); t.onabort = () => rej(t.error);
    });
  },
  all(store) { return this.tx(store, 'readonly', s => s.getAll()); },
  get(store, key) { return this.tx(store, 'readonly', s => s.get(key)); },
  put(store, key, val) { return this.tx(store, 'readwrite', s => s.put(val, key)); },
  del(store, key) { return this.tx(store, 'readwrite', s => s.delete(key)); }
};

const Store = {
  mode: 'local', warned: false,
  async init() { try { await IDB.open(); } catch { this.mode = 'ls'; } },
  async list(name) {
    if (this.mode === 'ls') return Object.values(LS.get('stupeni.' + name, {}));
    try { return (await IDB.all(name)) || []; } catch { return []; }
  },
  async raw(name, obj) { // write without touching updatedAt (used by sync/import)
    if (this.mode === 'ls') { const all = LS.get('stupeni.' + name, {}); all[obj.id] = obj; LS.set('stupeni.' + name, all); return; }
    try { await enqueue(name + obj.id, () => IDB.put(name, obj.id, clone(obj))); } catch { if (!this.warned) { this.warned = true; toast('Не удалось сохранить данные на устройстве.'); } }
  },
  async put(name, obj) { obj.updatedAt = Date.now(); await this.raw(name, obj); Sync.soon(); },
  listStories() { return this.list('stories'); },
  putStory(s) { return this.put('stories', s); },
  listWords() { return this.list('words'); },
  putWord(w) { return this.put('words', w); },
  delWord(id) { const t = { id, deleted: true }; words[id] = t; return this.put('words', t); },
  async kvGet(k, d) { try { const v = await IDB.get('kv', k); return v === undefined ? d : v; } catch { return d; } },
  async kvSet(k, v) { try { await IDB.put('kv', k, v); } catch { } }
};

let stories = {}, words = {}, loaded = false;
let settings = { newPerDay: 3, reviewsPerDay: 30, grammarOn: true, topicsOff: [], updatedAt: 0 };
async function loadAll() {
  const [s, w, st] = await Promise.all([Store.listStories(), Store.listWords(), Store.kvGet('settings', null)]);
  const keepS = stories, keepW = words;
  stories = {}; for (const x of s) stories[x.id] = x;
  for (const id in keepS) if (!stories[id] || (keepS[id].updatedAt || 0) > (stories[id].updatedAt || 0)) stories[id] = keepS[id];
  words = {}; for (const x of w) words[x.id] = normalizeWord(x);
  for (const id in keepW) if (!words[id] || (keepW[id].updatedAt || 0) > (words[id].updatedAt || 0)) words[id] = keepW[id];
  if (st) settings = { ...settings, ...st };
  loaded = true;
}
function saveSettings() { settings.updatedAt = Date.now(); Store.kvSet('settings', settings); Sync.soon(); }
function storyList() {
  const list = Object.values(stories).filter(s => !s.deleted && s.levels);
  if (!stories.sample) list.push(SAMPLE);
  return list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
}
function getStory(id) {
  if (stories[id]) return stories[id].deleted ? null : stories[id];
  return id === 'sample' ? SAMPLE : null;
}
const saveTimers = {};
function saveStorySoon(s, delay = 900) {
  stories[s.id] = s;
  clearTimeout(saveTimers[s.id]);
  saveTimers[s.id] = setTimeout(() => {
    const keys = Object.keys(s.gloss || {});
    if (keys.length > 400) for (const k of keys.slice(0, keys.length - 400)) delete s.gloss[k];
    Store.putStory(s);
  }, delay);
}
function wordId(lemma) {
  const base = String(lemma || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);
  return 'w-' + (base || Date.now().toString(36));
}
const liveWords = () => Object.values(words).filter(w => !w.deleted && w.word);

/* ===== days & scheduling (FSRS-4.5) ===== */
const DAY_SHIFT = 4 * 3600000; // a study day starts at 04:00
const dayKey = (t = Date.now()) => { const d = new Date(t - DAY_SHIFT); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
const dayStart = (t = Date.now()) => { const d = new Date(t - DAY_SHIFT); d.setHours(0, 0, 0, 0); return d.getTime() + DAY_SHIFT; };
const FSRS = {
  w: [0.4872, 1.4003, 3.7145, 13.8206, 5.1618, 1.2298, 0.8975, 0.031, 1.6474, 0.1367, 1.0461, 2.1072, 0.0793, 0.3246, 1.587, 0.2272, 2.8755],
  DECAY: -0.5, FACTOR: 19 / 81, RET: 0.9, MAX: 365,
  clampD(d) { return Math.min(10, Math.max(1, d)); },
  d0(g) { return this.clampD(this.w[4] - (g - 3) * this.w[5]); },
  r(t, s) { return Math.pow(1 + this.FACTOR * t / s, this.DECAY); },
  ivl(s) { return Math.min(this.MAX, Math.max(1, Math.round(s / this.FACTOR * (Math.pow(this.RET, 1 / this.DECAY) - 1)))); },
  // returns new card state; g: 1 again, 2 hard, 3 good, 4 easy
  next(c, g, now = Date.now()) {
    const w = this.w; let s, d, lapses = c?.lapses || 0;
    if (!c || !c.s) { s = w[g - 1]; d = this.d0(g); }
    else {
      const t = Math.max(0, (now - (c.last || now)) / DAY); const r = this.r(t, c.s);
      d = this.clampD(w[7] * this.d0(4) + (1 - w[7]) * (c.d - w[6] * (g - 3)));
      if (g === 1) { s = w[11] * Math.pow(c.d, -w[12]) * (Math.pow(c.s + 1, w[13]) - 1) * Math.exp(w[14] * (1 - r)); lapses++; }
      else s = c.s * (1 + Math.exp(w[8]) * (11 - c.d) * Math.pow(c.s, -w[9]) * (Math.exp(w[10] * (1 - r)) - 1) * (g === 2 ? w[15] : 1) * (g === 4 ? w[16] : 1));
      s = Math.max(0.1, s);
    }
    const days = g === 1 ? 0 : this.ivl(s);
    const due = g === 1 ? now + 10 * 60000 : dayStart(now) + days * DAY;
    return { s, d, last: now, due, reps: (c?.reps || 0) + 1, lapses, days };
  }
};
const ivlLabel = days => days <= 0 ? '10 мин' : days === 1 ? '1 день' : days < 30 ? `${days} ${plural(days, 'день', 'дня', 'дней')}` : days < 365 ? `${Math.round(days / 30)} мес.` : `${(days / 365).toFixed(1)} г.`;

// words from the old Leitner version → FSRS
const OLD_INTERVALS = [0, 1, 3, 7, 16, 35];
function normalizeWord(w) {
  if (w.deleted || w.state) return w;
  if ((w.box || 0) > 0) {
    const s = OLD_INTERVALS[w.box] || 1;
    w.state = 'review'; w.fsrs = { s, d: 5, last: (w.due || Date.now()) - s * DAY, due: w.due || Date.now(), reps: w.box, lapses: 0 };
  } else w.state = 'new';
  delete w.box; delete w.mistakes; delete w.listenedAt; delete w.dictUsed;
  return w;
}
function dueWords() {
  const now = Date.now();
  return liveWords().filter(w => w.state === 'review' && (w.fsrs?.due || 0) <= now).sort((a, b) => a.fsrs.due - b.fsrs.due);
}
const reviewedToday = () => liveWords().filter(w => w.lastReviewDay === dayKey()).length;
const introducedToday = () => liveWords().filter(w => w.introDay === dayKey()).length;
const newQueue = () => liveWords().filter(w => w.state === 'new' || w.state === 'practice').sort((a, b) => (a.state === 'practice' ? -1 : 0) - (b.state === 'practice' ? -1 : 0) || (a.added || 0) - (b.added || 0));
function reviewsLeft() { return Math.max(0, (settings.reviewsPerDay || 30) - reviewedToday()); }
function dueCount() { return Math.min(dueWords().length, reviewsLeft()); }
function newLeft() {
  const inProgress = liveWords().some(w => w.state === 'practice' && w.introDay === dayKey());
  return Math.max(0, (settings.newPerDay || 3) - introducedToday()) || (inProgress ? 1 : 0);
}

/* ===== AI client (OpenAI-compatible) ===== */
const AI = {
  get base() { return (LS.get('stupeni.api.base', 'https://api.electronhub.ai/v1') || '').replace(/\/+$/, ''); },
  get key() { return LS.get('stupeni.api.key', ''); },
  get main() { return LS.get('stupeni.api.main', ''); },
  get fast() { return LS.get('stupeni.api.fast', '') || this.main; },
  ready() { return !!(this.key && this.main); },
  async chat(prompt, { tier, signal, onText, json, temperature } = {}) {
    if (!this.ready()) throw { code: 'no_config' };
    const model = tier === 'quick' ? this.fast : this.main;
    const messages = typeof prompt === 'string' ? [{ role: 'user', content: prompt }] : prompt;
    if (json) messages.unshift({ role: 'system', content: 'You reply with a single valid JSON value and nothing else. No markdown fences.' });
    let res;
    try {
      res = await fetch(this.base + '/chat/completions', {
        method: 'POST', signal,
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + this.key },
        body: JSON.stringify({ model, messages, stream: !!onText, ...(temperature != null ? { temperature } : {}) })
      });
    } catch (e) { throw { code: e?.name === 'AbortError' ? 'cancelled' : 'network' }; }
    if (!res.ok) {
      let msg = ''; try { const j = await res.json(); msg = j?.error?.message || j?.message || ''; } catch { }
      throw { code: 'http', status: res.status, message: msg };
    }
    let text = '';
    if (onText && res.body && (res.headers.get('content-type') || '').includes('event-stream')) {
      const reader = res.body.getReader(); const dec = new TextDecoder(); let buf = '';
      try {
        for (; ;) {
          const { value, done } = await reader.read(); if (done) break;
          buf += dec.decode(value, { stream: true });
          let i;
          while ((i = buf.indexOf('\n')) >= 0) {
            const line = buf.slice(0, i).trim(); buf = buf.slice(i + 1);
            if (!line.startsWith('data:')) continue;
            const data = line.slice(5).trim(); if (data === '[DONE]') continue;
            try { const d = JSON.parse(data).choices?.[0]?.delta?.content; if (d) { text += d; onText({ text, delta: d }); } } catch { }
          }
        }
      } catch (e) { if (e?.name === 'AbortError') throw { code: 'cancelled' }; throw { code: 'network' }; }
    } else {
      const j = await res.json();
      text = j?.choices?.[0]?.message?.content || '';
      if (onText && text) onText({ text, delta: text });
    }
    text = String(text).replace(/<think>[\s\S]*?<\/think>/g, '').trim();
    if (!text) throw { code: 'empty' };
    return text;
  },
  async models() {
    const r = await fetch(this.base + '/models', { headers: this.key ? { Authorization: 'Bearer ' + this.key } : {} });
    if (!r.ok) throw { code: 'http', status: r.status };
    const j = await r.json();
    return (j.data || j.models || []).map(m => typeof m === 'string' ? m : m.id).filter(Boolean).sort();
  }
};
function parseJSON(text) {
  let t = String(text).trim();
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/); if (fence) t = fence[1].trim();
  try { return JSON.parse(t); } catch { }
  const a = Math.min(...['{', '['].map(c => t.indexOf(c)).filter(i => i >= 0));
  const b = Math.max(t.lastIndexOf('}'), t.lastIndexOf(']'));
  if (isFinite(a) && b > a) { try { return JSON.parse(t.slice(a, b + 1)); } catch { } }
  throw { code: 'invalid_json' };
}
// same call shape as the old in-Claude version
const sampleFn = (input, o = {}) => AI.chat(input, { tier: o.modelTier, signal: o.signal, onText: o.onText }).then(text => ({ text }));
sampleFn.json = (input, o = {}) => AI.chat(input, { tier: o.modelTier, signal: o.signal, onText: o.onText, json: true }).then(parseJSON);
const canClaude = () => AI.ready();
function claudeError(e) {
  if (e?.msg) return e.msg;
  switch (e?.code) {
    case 'no_config': return 'Укажите ключ API и модель в настройках.';
    case 'cancelled': return 'Остановлено.';
    case 'network': return 'Нет связи с сервисом API. Проверьте интернет и адрес API в настройках.';
    case 'invalid_json': return 'Ответ модели пришёл в неожиданном виде. Попробуйте ещё раз или выберите другую модель.';
    case 'empty': return 'Модель вернула пустой ответ. Попробуйте ещё раз.';
    case 'http':
      if (e.status === 401 || e.status === 403) return 'Ключ API не подошёл. Проверьте его в настройках.';
      if (e.status === 402) return 'На счёте API закончились средства.';
      if (e.status === 404) return 'Модель или адрес API не найдены. Проверьте настройки.';
      if (e.status === 429) return 'Слишком много запросов или исчерпан лимит. Подождите немного.';
      if (e.status === 400) return 'Модель не приняла запрос' + (e.message ? ': ' + e.message.slice(0, 140) : '.');
      return `Ошибка сервиса API (${e.status}). Попробуйте ещё раз.`;
    default: return 'Не удалось получить ответ модели. Попробуйте ещё раз.';
  }
}

/* ===== sync through a private GitHub repository ===== */
const b64enc = str => { const bytes = new TextEncoder().encode(str); let bin = ''; for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000)); return btoa(bin); };
const b64dec = b64 => { const bin = atob(String(b64).replace(/\s/g, '')); const bytes = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i); return new TextDecoder().decode(bytes); };
const Sync = {
  get token() { return LS.get('stupeni.gh.token', ''); },
  get repo() { return (LS.get('stupeni.gh.repo', '') || '').trim().replace(/^https?:\/\/github\.com\//, '').replace(/\.git$/, '').replace(/\/+$/, ''); },
  get path() { return LS.get('stupeni.gh.path', 'stupeni-data.json') || 'stupeni-data.json'; },
  ready() { return !!(this.token && /^[^/\s]+\/[^/\s]+$/.test(this.repo)); },
  busy: false, last: LS.get('stupeni.gh.last', 0), err: '', timer: null, again: false,
  soon(ms = 4000) { if (!this.ready()) return; clearTimeout(this.timer); this.timer = setTimeout(() => this.run(), ms); },
  headers() { return { Authorization: 'Bearer ' + this.token, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' }; },
  url() { return `https://api.github.com/repos/${this.repo}/contents/${this.path.split('/').map(encodeURIComponent).join('/')}`; },
  async fetchRemote() {
    const r = await fetch(this.url() + '?t=' + Date.now(), { headers: this.headers(), cache: 'no-store' });
    if (r.status === 404) return { data: null, sha: null };
    if (!r.ok) throw { status: r.status };
    const j = await r.json(); let txt;
    if (j.content && j.encoding === 'base64') txt = b64dec(j.content);
    else {
      const b = await fetch(`https://api.github.com/repos/${this.repo}/git/blobs/${j.sha}`, { headers: this.headers(), cache: 'no-store' });
      if (!b.ok) throw { status: b.status };
      txt = b64dec((await b.json()).content);
    }
    let data = null; try { data = JSON.parse(txt); } catch { }
    return { data, sha: j.sha };
  },
  pack() {
    const st = {}; for (const id in stories) { const s = stories[id]; if (!s) continue; const { gloss, ...rest } = s; st[id] = rest; }
    const wd = {}; for (const id in words) wd[id] = words[id];
    return { app: 'stupeni', v: 1, stories: st, words: wd, settings };
  },
  async run() {
    if (!this.ready()) return false;
    if (this.busy) { this.again = true; return false; }
    this.busy = true; this.err = ''; this.lastPull = Date.now(); paintSync();
    try {
      for (let attempt = 0; attempt < 3; attempt++) {
        const { data, sha } = await this.fetchRemote();
        const remote = data || { stories: {}, words: {} };
        let changedLocal = false;
        for (const [kind, map] of [['stories', stories], ['words', words]]) {
          const rm = remote[kind] || {};
          for (const id in rm) {
            const r = rm[id]; const l = map[id];
            if (!l || (r.updatedAt || 0) > (l.updatedAt || 0)) {
              const merged = kind === 'stories' && l?.gloss ? { ...r, gloss: l.gloss } : clone(r);
              if (kind === 'words' && l && !l.deleted && !merged.deleted) keepSentences(merged, l);
              map[id] = kind === 'words' ? normalizeWord(clone(merged)) : clone(merged);
              await Store.raw(kind, map[id]); changedLocal = true;
            } else if (kind === 'words' && l && !l.deleted && !r.deleted && keepSentences(l, r)) {
              await Store.raw(kind, l); // local copy is newer, but the other device wrote sentences too
            }
          }
        }
        if (remote.settings && (remote.settings.updatedAt || 0) > (settings.updatedAt || 0)) { settings = { ...settings, ...remote.settings }; Store.kvSet('settings', settings); changedLocal = true; }
        const out = JSON.stringify(this.pack());
        const same = data && JSON.stringify({ app: 'stupeni', v: 1, stories: remote.stories, words: remote.words, settings: remote.settings }) === out;
        if (!same) {
          const p = await fetch(this.url(), {
            method: 'PUT', headers: { ...this.headers(), 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: 'Ступени: синхронизация ' + new Date().toISOString().slice(0, 16).replace('T', ' '), content: b64enc(out), ...(sha ? { sha } : {}) })
          });
          if (p.status === 409 || p.status === 422) continue; // changed on the other device meanwhile: merge again
          if (!p.ok) throw { status: p.status };
        }
        this.last = Date.now(); LS.set('stupeni.gh.last', this.last);
        if (changedLocal && !ui.busyTyping) render();
        return true;
      }
      throw { status: 409 };
    } catch (e) {
      this.err = e?.status === 401 ? 'GitHub не принял ключ доступа.' : e?.status === 403 ? 'У ключа нет прав на запись в репозиторий.' : e?.status === 404 ? 'Репозиторий не найден. Проверьте название и права ключа.' : e?.status ? `GitHub ответил ошибкой ${e.status}.` : 'Нет связи с GitHub.';
      return false;
    } finally {
      this.busy = false; paintSync();
      if (this.again) { this.again = false; this.soon(2000); }
    }
  }
};
function paintSync() { const n = document.getElementById('sync-state'); if (n) n.innerHTML = syncStateHtml(); }
function syncStateHtml() {
  if (!Sync.ready()) return '<span class="muted">Синхронизация не настроена</span>';
  if (Sync.busy) return '<span class="spinner sm" aria-hidden="true"></span> Синхронизирую…';
  if (Sync.err) return `<span class="err">${esc(Sync.err)}</span>`;
  return Sync.last ? `Синхронизировано ${new Date(Sync.last).toLocaleString('ru-RU', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}` : 'Ещё не синхронизировалось';
}
// sentences written on both devices are never lost: union by time + text
function unionSent(a = [], b = [], cap = 40) {
  const seen = new Map(); for (const x of [...a, ...b]) if (x && x.text) seen.set((x.at || 0) + '|' + x.text, x);
  return [...seen.values()].sort((x, y) => (x.at || 0) - (y.at || 0)).slice(-cap);
}
function keepSentences(into, other) {
  let changed = false;
  if (other.mySentences?.length) { const u = unionSent(into.mySentences, other.mySentences); if (u.length !== (into.mySentences || []).length) { into.mySentences = u; changed = true; } }
  if (into.state === 'practice' && other.state === 'practice' && other.practice?.items?.length) {
    const u = unionSent(into.practice?.items, other.practice.items, PRACTICE_N);
    if (u.length !== (into.practice?.items || []).length) { into.practice = { ...(into.practice || {}), items: u }; changed = true; }
  }
  return changed;
}
// pull fresh data whenever the app comes back to the screen, and every 2 minutes while it is open
function pullSoon() { if (Sync.ready() && !Sync.busy && Date.now() - (Sync.lastPull || 0) > 20000) Sync.run(); }
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') { if (Sync.timer) { clearTimeout(Sync.timer); Sync.timer = null; Sync.run(); } }
  else pullSoon();
});
addEventListener('focus', pullSoon); addEventListener('pageshow', pullSoon); addEventListener('online', pullSoon);
setInterval(() => { if (document.visibilityState === 'visible') pullSoon(); }, 120000);

/* ===== import / export ===== */
function exportData() {
  const blob = new Blob([JSON.stringify({ ...Sync.pack(), exportedAt: new Date().toISOString() }, null, 1)], { type: 'application/json' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `stupeni-${dayKey()}.json`;
  document.body.append(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
}
async function importData(file) {
  const data = JSON.parse(await file.text());
  let nS = 0, nW = 0; const now = Date.now();
  for (const s of Object.values(data.stories || {})) {
    if (!s?.id) continue; const l = stories[s.id];
    if (!l || (s.updatedAt || 0) > (l.updatedAt || 0)) { s.updatedAt = s.updatedAt || now; stories[s.id] = s; await Store.raw('stories', s); nS++; }
  }
  for (const w0 of Object.values(data.words || {})) {
    if (!w0?.id) continue; const l = words[w0.id];
    if (!l || (w0.updatedAt || 0) > (l.updatedAt || 0)) { const w = normalizeWord(w0); w.updatedAt = w.updatedAt || now; words[w.id] = w; await Store.raw('words', w); nW++; }
  }
  Sync.soon(1000);
  return { nS, nW };
}

/* ===== prompts ===== */
function genPrompt({ mode, text, topic, cat }) {
  const task = mode === 'topic'
    ? 'Write an original, factual, engaging news-style article about the TOPIC below, and produce it as five separate versions'
    : 'Rewrite the SOURCE TEXT below as five separate versions';
  const facts = mode === 'topic'
    ? 'Only include facts you are confident are true; prefer well-established general facts over precise figures, names or dates you are unsure of.'
    : 'Keep the facts accurate to the source. Do not invent names, numbers, dates or quotes that are not in the source.';
  return `You are an expert writer of graded readers for learners of English.
TASK: ${task} for CEFR levels A1, A2, B1, B2 and C1. Every version tells the same story with the same key facts, in its own words.

Level rules:
- A1: 80-110 words. Mostly present simple, a little past simple. Sentences of 5-9 words. Only very common words.
- A2: 120-160 words. Past simple, future, basic linking words (because, so, but). Sentences up to 12 words.
- B1: 180-230 words. A range of tenses, some passive voice, relative clauses, common phrasal verbs.
- B2: 240-300 words. Varied structures, less common vocabulary, contrast and opinion.
- C1: 300-380 words. Sophisticated journalistic style, complex sentences, precise and idiomatic vocabulary.
General: ${facts} Split every version into 2-5 paragraphs separated by a blank line (\\n\\n). No headings, lists or markdown.

Reply with ONLY a JSON object of this shape:
{"title":"English headline, max 10 words","category":"${cat && CATS[cat] ? cat : 'one of: ' + Object.keys(CATS).join(', ')}","summary":"one sentence in Russian describing the story","levels":{"A1":"...","A2":"...","B1":"...","B2":"...","C1":"..."}}

${mode === 'topic' ? 'TOPIC' : 'SOURCE TEXT'}:
"""
${mode === 'topic' ? topic : text}
"""`;
}
function extrasPrompt(story, L) {
  return `You are preparing study materials for a Russian-speaking learner of English. The text below is written at CEFR level ${L}.

TEXT:
"""
${story.levels[L]}
"""

Create:
1. "vocab": 6-8 key words or phrases from the text that are most useful or difficult for a ${L} learner. For each: "word" (dictionary form), "match" (the exact form as it appears in the text, same spelling; for a phrase, the exact words), "pos" (part of speech), "ipa" (British IPA in slashes), "def" (simple English definition, max 10 words), "ru" (Russian translation that fits this context).
2. "quiz": exactly 5 comprehension items in this order:
   - two {"type":"mc","q":"question","options":[4 answers],"answer":index of correct option}
   - two {"type":"gap","sentence":"a sentence close to the text with ____ in place of ONE word","options":[4 single words],"answer":index}
   - one {"type":"order","q":"Put the events in order.","items":[4 short statements in the CORRECT order they happen in the text]}
Questions must be answerable from the text, at ${L} difficulty.

Reply with ONLY JSON: {"vocab":[...],"quiz":[...]}`;
}
function glossPrompt(L, surface, sentence) {
  return `A Russian-speaking learner of English (level ${L}) tapped the word "${surface}" in this sentence:
"${sentence}"
Explain the word as it is used in THIS sentence. If here it is part of a phrasal verb, idiom or fixed expression, explain the whole expression and write it in "phrase".
Reply with ONLY JSON: {"lemma":"dictionary form","pos":"part of speech","ipa":"/British IPA/","ru":"short Russian translation for this context, 1-4 words","def":"simple English definition, max 12 words","phrase":"","note_ru":"optional very short note in Russian, or empty string"}`;
}
function cleanExtras(x) {
  const vocab = (Array.isArray(x?.vocab) ? x.vocab : []).filter(v => v && v.word && v.ru).map(v => ({
    word: String(v.word), match: String(v.match || v.word), pos: String(v.pos || ''), ipa: String(v.ipa || ''), def: String(v.def || ''), ru: String(v.ru)
  })).slice(0, 10);
  const quiz = [];
  for (const q of (Array.isArray(x?.quiz) ? x.quiz : [])) {
    if ((q?.type === 'mc' || q?.type === 'gap') && Array.isArray(q.options) && q.options.length >= 2 && Number.isInteger(q.answer) && q.options[q.answer] != null) {
      const order = shuffle(q.options.map((_, i) => i));
      quiz.push({ type: q.type, q: String(q.q || ''), sentence: String(q.sentence || ''), options: order.map(i => String(q.options[i])), answer: order.indexOf(q.answer) });
    } else if (q?.type === 'order' && Array.isArray(q.items) && q.items.length >= 3) {
      quiz.push({ type: 'order', q: String(q.q || 'Put the events in order.'), items: q.items.map(String) });
    }
  }
  if (!vocab.length || !quiz.length) throw { code: 'invalid_json' };
  return { vocab, quiz };
}
/* ===== speech ===== */
const TTS = {
  ok: 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window,
  rate: LS.get('stupeni.rate', 1), voiceName: LS.get('stupeni.voice', ''),
  voices() { try { return speechSynthesis.getVoices().filter(v => /^en[-_]/i.test(v.lang) || v.lang === 'en'); } catch { return []; } },
  voice() { const vs = this.voices(); return vs.find(v => v.name === this.voiceName) || vs.find(v => /en[-_]GB/i.test(v.lang)) || vs[0] || null; },
  speak(text, { rate, onend } = {}) {
    if (!this.ok) return;
    const u = new SpeechSynthesisUtterance(text);
    const v = this.voice(); if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'en-GB';
    u.rate = rate ?? this.rate;
    if (onend) { u.onend = onend; u.onerror = onend; }
    speechSynthesis.speak(u);
  },
  stop() { if (this.ok) try { speechSynthesis.cancel(); } catch { } },
  say(text, rate = 0.9) { this.stop(); this.speak(text, { rate }); }
};
if (TTS.ok) try { speechSynthesis.addEventListener('voiceschanged', () => { const sel = document.getElementById('voice-sel'); if (sel) sel.outerHTML = voiceSelect(); }); } catch { }

const player = { playing: false, idx: 0, run: 0, key: '' };
function stopPlayer(reset) {
  player.playing = false; player.run++; TTS.stop();
  if (reset) player.idx = 0;
  paintPlayer();
}
function togglePlay() {
  const s = cur(); if (!s) return;
  const key = s.id + ui.level;
  if (player.key !== key) { player.key = key; player.idx = 0; }
  if (player.playing) { stopPlayer(); return; }
  const P = parseText(s.levels[ui.level]);
  if (player.idx >= P.sents.length) player.idx = 0;
  player.playing = true; const run = ++player.run;
  const next = () => {
    if (run !== player.run) return;
    if (player.idx >= P.sents.length) { player.playing = false; player.idx = 0; paintPlayer(); return; }
    paintPlayer();
    TTS.speak(P.sents[player.idx], { onend: () => { if (run !== player.run) return; player.idx++; next(); } });
  };
  TTS.stop(); next();
}
function paintPlayer() {
  document.querySelectorAll('.s.speaking').forEach(n => n.classList.remove('speaking'));
  const btn = document.getElementById('play-btn');
  if (btn) { btn.innerHTML = player.playing ? I.pause : I.play; btn.setAttribute('aria-label', player.playing ? 'Пауза' : 'Слушать'); }
  const s = cur(); if (!s || player.key !== s.id + ui.level) return;
  const cnt = document.getElementById('play-cnt');
  const P = parseText(s.levels[ui.level]);
  if (cnt) cnt.textContent = `${Math.min(player.idx + 1, P.sents.length)} / ${P.sents.length}`;
  if (player.playing) {
    const el = document.querySelector(`.s[data-si="${player.idx}"]`);
    if (el) { el.classList.add('speaking'); const r = el.getBoundingClientRect(); if (r.top < 70 || r.bottom > innerHeight - 20) el.scrollIntoView({ block: 'center', behavior: 'smooth' }); }
  }
}
/* ===== UI state ===== */
const ui = {
  view: 'today', storyId: null, level: LS.get('stupeni.level', 'B1'), tab: 'read', cat: 'all',
  confirmDel: null, draft: { mode: 'paste', text: '', topic: '', cat: '' }, gen: null,
  extras: {}, quiz: {}, dict: {}, mem: {}, rev: null, prac: null, openWord: null, models: null, testOut: '', kvView: 'list', addw: { q: '', loading: false, err: '', res: null, sense: 0 }, justAdded: null,
  cmp: { word: 'reluctant', sent: 'She was reluctant for leave the party early.', models: '', running: false, res: [] }
};
if (!LEVELS.includes(ui.level)) ui.level = 'B1';
const cur = () => getStory(ui.storyId);
const app = document.getElementById('app');

/* ===== rendering ===== */
function render() {
  hidePop();
  const a = document.activeElement; const fid = a && a.id; let sel = null;
  if (fid && a.setSelectionRange && typeof a.selectionStart === 'number') sel = [a.selectionStart, a.selectionEnd];
  app.innerHTML = renderHeader() + `<main class="wrap">${renderView()}</main>`;
  if (fid) { const n = document.getElementById(fid); if (n) { n.focus({ preventScroll: true }); if (sel) try { n.setSelectionRange(sel[0], sel[1]); } catch { } } }
  paintPlayer();
}
function renderHeader() {
  const due = dueCount() + Math.min(newLeft(), newQueue().length);
  const nav = (to, label, extra = '') => `<button class="navbtn" data-act="nav" data-to="${to}" ${ui.view === to || (to === 'today' && ['review', 'practice'].includes(ui.view)) ? 'aria-current="page"' : ''}>${label}${extra}</button>`;
  return `<header class="top"><div class="bar">
    <button class="logo" data-act="nav" data-to="today" aria-label="Ступени, сегодня">${LOGO}<span>Ступени</span></button>
    <nav class="main" aria-label="Разделы">
      ${nav('today', 'Сегодня', `<span class="badge" id="due-badge" ${due ? '' : 'hidden'}>${due}</span>`)}
      ${nav('library', 'Тексты')}
      ${nav('words', 'Слова')}
      <button class="navbtn icon" data-act="nav" data-to="settings" ${ui.view === 'settings' ? 'aria-current="page"' : ''} aria-label="Настройки">${I.gear}</button>
      <button class="btn primary sm" data-act="nav" data-to="add">${I.plus}<span class="hide-s">Текст</span></button>
    </nav></div></header>`;
}
function updateBadge() { const b = document.getElementById('due-badge'); if (b) { const d = dueCount() + Math.min(newLeft(), newQueue().length); b.textContent = d; b.hidden = !d; } }
function renderView() {
  if (ui.view === 'story') { const s = cur(); if (s) return renderStory(s); ui.view = 'library'; }
  if (ui.view === 'add') return renderAdd();
  if (ui.view === 'words') return renderWords();
  if (ui.view === 'review') return renderReview();
  if (ui.view === 'practice') return renderPractice();
  if (ui.view === 'settings') return renderSettings();
  if (ui.view === 'library') return renderLibrary();
  return renderToday();
}
function lvStyle(L) { return `--lc:var(--${L})`; }
function levelPicker(act, active, story) {
  return `<div class="stairs" role="group" aria-label="Уровень">` + LEVELS.map((L, i) => {
    const wc = story ? parseText(story.levels[L]).words : null;
    const done = story?.results?.[L] && story.results[L].score / story.results[L].total >= 0.8;
    return `<button class="step" style="${lvStyle(L)};--n:${i}" data-act="${act}" data-l="${L}" aria-pressed="${L === active}" title="${LEVEL_NAME[L]}">
      <span class="riser">${done ? I.check : (story?.results?.[L] ? `<span class="rs">${story.results[L].score}/${story.results[L].total}</span>` : '')}</span>
      <span class="lbl">${L}</span>
      <span class="cnt">${wc != null ? wc + ' сл.' : LEVEL_NAME[L]}</span></button>`;
  }).join('') + `</div>`;
}

function renderLibrary() {
  const list = storyList();
  const cats = [...new Set(list.map(s => s.category).filter(c => CATS[c]))];
  const shown = list.filter(s => ui.cat === 'all' || s.category === ui.cat);
  const claudeNote = !AI.ready()
    ? `<p class="note">Чтобы создавать тексты и переводить слова, подключите API в настройках.</p>` : '';
  return `<section class="intro">
      <div class="intro-text">
        <p class="eyebrow">Чтение по уровням</p>
        <h1>Один текст, пять ступеней сложности</h1>
        <p class="lede">Вставьте любую статью на английском, и ИИ перепишет её на уровнях от A1 до C1. Читайте, слушайте, нажимайте на слова для перевода, проходите тест и диктант.</p>
        ${claudeNote}
      </div>
      <div class="intro-pick">
        <p class="eyebrow">Мой уровень</p>
        ${levelPicker('pref', ui.level)}
        <p class="muted small">${LEVEL_NAME[ui.level]}. Истории будут открываться на этом уровне.</p>
      </div>
    </section>
    ${cats.length > 1 ? `<div class="filters" role="group" aria-label="Темы">
      <button class="chip" data-act="cat" data-c="all" aria-pressed="${ui.cat === 'all'}">Все</button>
      ${cats.map(c => `<button class="chip" data-act="cat" data-c="${c}" aria-pressed="${ui.cat === c}">${CATS[c]}</button>`).join('')}
    </div>` : ''}
    ${!loaded ? `<p class="muted small">Загружаю библиотеку…</p>` : ''}
    <div class="grid">${shown.map(storyCard).join('')}</div>
    ${shown.length === 0 && loaded ? `<div class="empty"><p>Здесь пока пусто.</p><button class="btn primary" data-act="nav" data-to="add">${I.plus} Добавить первый текст</button></div>` : ''}`;
}
function storyCard(s) {
  const wc = parseText(s.levels[ui.level]).words;
  const date = s.createdAt > 1 ? new Date(s.createdAt).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }) : 'Пример';
  const confirming = ui.confirmDel === s.id;
  return `<article class="card">
    <button class="cardlink" data-act="open" data-id="${s.id}">
      <span class="eyebrow">${esc(CATS[s.category] || 'Разное')}</span>
      <h3>${esc(s.title)}</h3>
      <span class="sum">${esc(s.summary || '')}</span>
    </button>
    <div class="meta">
      <span class="lvdots" aria-label="Пройденные уровни">${LEVELS.map(L => `<i style="${lvStyle(L)}" class="${s.results?.[L] ? 'on' : ''}" title="${L}"></i>`).join('')}</span>
      <span>${ui.level} · ${wc} сл. · ${Math.max(1, Math.round(wc / 180))} мин</span>
      <span class="spacer"></span>
      <span>${date}</span>
      <button class="iconbtn ${confirming ? 'danger' : ''}" data-act="del" data-id="${s.id}" aria-label="Удалить историю">${confirming ? 'Удалить?' : I.trash}</button>
    </div></article>`;
}

function renderStory(s) {
  const L = ui.level; const P = parseText(s.levels[L]);
  const tabs = [['read', 'Текст'], ['vocab', 'Слова'], ['quiz', 'Тест'], ['dict', 'Диктант'], ['mem', 'Запоминание']];
  let body = '';
  if (ui.tab === 'read') body = renderRead(s, L);
  else if (ui.tab === 'vocab') body = renderVocab(s, L);
  else if (ui.tab === 'quiz') body = renderQuiz(s, L);
  else if (ui.tab === 'dict') body = renderDict(s, L);
  else body = renderMem(s, L);
  return `<div class="story" style="--lvc:var(--${L})">
    <button class="btn ghost sm backbtn" data-act="nav" data-to="library">${I.back} Библиотека</button>
    <p class="eyebrow">${esc(CATS[s.category] || 'Разное')}${s.sample ? ' · пример' : ''}</p>
    <h1>${esc(s.title)}</h1>
    <p class="lede">${esc(s.summary || '')}</p>
    <div class="levelrow">
      ${levelPicker('lvl', L, s)}
      <p class="muted small levelmeta"><b style="color:var(--lvc)">${L}</b> ${LEVEL_NAME[L]} · ${P.words} слов · ${Math.max(1, Math.round(P.words / 180))} мин чтения</p>
    </div>
    <div class="tabs" role="tablist">${tabs.map(([k, l]) => `<button class="tab" role="tab" data-act="tab" data-t="${k}" aria-selected="${ui.tab === k}">${l}</button>`).join('')}</div>
    <div class="tabbody">${body}</div>
  </div>`;
}
function voiceSelect() {
  const vs = TTS.voices(); const v = TTS.voice();
  if (vs.length < 2) return '<span id="voice-sel" hidden></span>';
  return `<select id="voice-sel" aria-label="Голос">${vs.map(x => `<option value="${esc(x.name)}" ${v && v.name === x.name ? 'selected' : ''}>${esc(x.name.replace(/^(Microsoft|Google)\s+/, ''))} · ${esc(x.lang)}</option>`).join('')}</select>`;
}
function rateSeg(act) {
  return `<span class="seg" role="group" aria-label="Скорость">${[0.75, 1, 1.25].map(r => `<button data-act="${act}" data-r="${r}" aria-pressed="${TTS.rate === r}">${r}×</button>`).join('')}</span>`;
}
function renderRead(s, L) {
  const P = parseText(s.levels[L]);
  const marks = vocabMarks(P.sents, s.extras?.[L]?.vocab);
  const html = P.paras.map(idxs => '<p>' + idxs.map(si => {
    let wi = 0;
    return `<span class="s" data-si="${si}">` + tokens(P.sents[si]).map(tk => {
      if (!tk.w) return esc(tk.t);
      const kv = marks[si + ':' + wi];
      const h = `<span class="w${kv != null ? ' kv' : ''}" data-si="${si}" data-wi="${wi}"${kv != null ? ` data-kv="${kv}"` : ''}>${esc(tk.t)}</span>`;
      wi++; return h;
    }).join('') + '</span>';
  }).join(' ') + '</p>').join('');
  const audio = TTS.ok ? `<div class="audio">
      <button class="play" id="play-btn" data-act="play" aria-label="Слушать">${I.play}</button>
      <span class="small muted tabnum" id="play-cnt">1 / ${P.sents.length}</span>
      ${rateSeg('rate')}
      ${voiceSelect()}
    </div>` : `<p class="note">Озвучка недоступна в этом браузере.</p>`;
  return `${audio}
    <p class="hint">Нажмите на любое слово, чтобы увидеть перевод. Подчёркнуты ключевые слова уровня.</p>
    <article class="reader" lang="en">${html}</article>
    <div class="readnext"><button class="btn" data-act="tab" data-t="quiz">Проверить понимание ${I.next}</button></div>`;
}
function extrasPending(s, L) {
  const st = ui.extras[s.id + L];
  if (st?.running) return `<div class="pending"><span class="spinner" aria-hidden="true"></span><div><b>Готовлю словарь и тест для уровня ${L}…</b><p class="muted small">Обычно это занимает 15–40 секунд.</p></div><button class="btn sm" data-act="ex-stop">${I.stop} Остановить</button></div>`;
  if (!canClaude()) return `<p class="note">Словарь и тест создаются через API. Подключите его в настройках.</p>`;
  return `<div class="pending"><div><b>Словарь и тест для уровня ${L} ещё не готовы.</b>${st?.error ? `<p class="err small">${esc(st.error)}</p>` : ''}</div><button class="btn primary" data-act="ex-gen">Подготовить</button></div>`;
}
async function startExtras(s, L) {
  const k = s.id + L;
  if (s.extras?.[L] || ui.extras[k]?.running || !canClaude()) return;
  const ctl = new AbortController();
  ui.extras[k] = { running: true, ctl };
  render();
  try {
    const raw = await sampleFn.json(extrasPrompt(s, L), { signal: ctl.signal });
    const ex = cleanExtras(raw);
    s.extras = s.extras || {}; s.extras[L] = ex;
    ui.extras[k] = null;
    saveStorySoon(s, 0);
  } catch (e) {
    ui.extras[k] = { running: false, error: e?.code === 'cancelled' ? '' : claudeError(e) };
  }
  if (ui.view === 'story' && ui.storyId === s.id) render();
}
function renderVocab(s, L) {
  const ex = s.extras?.[L]; if (!ex) return extrasPending(s, L);
  const all = ex.vocab.every(v => words[wordId(v.word)]);
  return `<div class="vhead"><h2>Ключевые слова · ${L}</h2>
      <button class="btn sm" data-act="kv-all" ${all ? 'disabled' : ''}>${all ? I.check + ' Все в словаре' : I.plus + ' Добавить все в словарь'}</button></div>
    <div class="vlist">${ex.vocab.map((v, i) => {
      const saved = !!words[wordId(v.word)];
      return `<div class="vrow">
        <div class="vw"><b lang="en">${esc(v.word)}</b> <span class="muted small">${esc(v.ipa)}</span><span class="pos">${esc(v.pos)}</span></div>
        <div class="vru">${esc(v.ru)}</div>
        <div class="vdef muted" lang="en">${esc(v.def)}</div>
        <div class="vact">
          ${TTS.ok ? `<button class="iconbtn" data-act="say" data-text="${esc(v.word)}" aria-label="Произнести">${I.spk}</button>` : ''}
          <button class="iconbtn ${saved ? 'on' : ''}" data-act="kv-save" data-i="${i}" aria-label="${saved ? 'В словаре' : 'Добавить в словарь'}" ${saved ? 'disabled' : ''}>${saved ? I.check : I.plus}</button>
        </div></div>`;
    }).join('')}</div>`;
}
function newQuizState(quiz) {
  const orders = {};
  quiz.forEach((q, i) => {
    if (q.type === 'order') {
      const ids = q.items.map((_, j) => j); let sh = shuffle(ids);
      if (sh.every((v, j) => v === j)) sh = sh.slice(1).concat(sh[0]);
      orders[i] = sh;
    }
  });
  return { answers: {}, orders, checked: false, score: 0 };
}
function renderQuiz(s, L) {
  const ex = s.extras?.[L]; if (!ex) return extrasPending(s, L);
  const k = s.id + L;
  if (!ui.quiz[k]) {
    const last = s.quizLast?.[L];
    ui.quiz[k] = last && last.orders && last.answers ? { answers: { ...last.answers }, orders: clone(last.orders), checked: true, score: last.score } : newQuizState(ex.quiz);
  }
  const st = ui.quiz[k];
  const items = ex.quiz.map((q, qi) => {
    const a = st.answers[qi];
    let inner = '';
    if (q.type === 'mc' || q.type === 'gap') {
      const cls = oi => st.checked ? (oi === q.answer ? 'right' : (oi === a ? 'wrong' : '')) : '';
      if (q.type === 'mc') {
        inner = `<p class="qq" lang="en">${esc(q.q)}</p><div class="opts">${q.options.map((o, oi) =>
          `<button class="opt ${cls(oi)}" data-act="qa" data-q="${qi}" data-o="${oi}" aria-pressed="${a === oi}" lang="en"><span class="ol">${'ABCD'[oi] || ''}</span>${esc(o)}</button>`).join('')}</div>`;
      } else {
        const fill = a != null ? `<span class="blank filled">${esc(q.options[a])}</span>` : '<span class="blank">&nbsp;</span>';
        inner = `<p class="qq gapq" lang="en">${esc(q.sentence).replace(/_{2,}/, fill)}</p><div class="chips">${q.options.map((o, oi) =>
          `<button class="opt chipopt ${cls(oi)}" data-act="qa" data-q="${qi}" data-o="${oi}" aria-pressed="${a === oi}" lang="en">${esc(o)}</button>`).join('')}</div>`;
      }
    } else {
      const ord = st.orders[qi];
      inner = `<p class="qq">${esc(q.q || 'Put the events in order.')}</p><ol class="ord">${ord.map((it, pos) => {
        const c = st.checked ? (it === pos ? 'right' : 'wrong') : '';
        return `<li class="${c}"><span class="onum tabnum">${pos + 1}</span><span class="otext" lang="en">${esc(q.items[it])}</span>
          <span class="omove"><button class="iconbtn" data-act="qmove" data-q="${qi}" data-p="${pos}" data-d="-1" aria-label="Выше" ${pos === 0 || st.checked ? 'disabled' : ''}>${I.up}</button>
          <button class="iconbtn" data-act="qmove" data-q="${qi}" data-p="${pos}" data-d="1" aria-label="Ниже" ${pos === ord.length - 1 || st.checked ? 'disabled' : ''}>${I.down}</button></span></li>`;
      }).join('')}</ol>`;
    }
    const kind = { mc: 'Выбор ответа', gap: 'Вставьте слово', order: 'Порядок событий' }[q.type];
    return `<div class="q"><p class="qn">${qi + 1} · ${kind}</p>${inner}</div>`;
  }).join('');
  const total = ex.quiz.length;
  const answered = ex.quiz.filter((q, i) => q.type === 'order' || st.answers[i] != null).length;
  let foot;
  if (st.checked) {
    const li = LEVELS.indexOf(L);
    const good = st.score / total >= 0.8;
    foot = `<div class="result ${good ? 'good' : ''}"><div><b class="score tabnum">${st.score} / ${total}</b>
      <span>${good ? (li < 4 ? `Отлично! Попробуйте эту историю на уровне ${LEVELS[li + 1]}.` : 'Отлично! Это высший уровень.') : 'Перечитайте текст и попробуйте ещё раз.'}</span></div>
      <div class="row"><button class="btn" data-act="qreset">Пройти заново</button>
      ${good && li < 4 ? `<button class="btn primary" data-act="lvl" data-l="${LEVELS[li + 1]}" data-tab="read">Читать на ${LEVELS[li + 1]} ${I.next}</button>` : ''}</div></div>`;
  } else {
    foot = `<div class="row"><button class="btn primary" data-act="qcheck" ${answered < total ? 'disabled' : ''}>Проверить ответы</button><span class="muted small tabnum">${answered} из ${total}</span></div>`;
  }
  const best = s.results?.[L];
  const head = best ? `<p class="small muted quizbest">Лучший результат на ${L}: <b class="tabnum">${best.score} / ${best.total}</b> · ${new Date(best.at).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}</p>` : '';
  return `<div class="quiz">${head}${items}${foot}</div>`;
}
function lcsDiff(target, typed) {
  const n = target.length, m = typed.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--)
    dp[i][j] = target[i] === typed[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const ops = []; let i = 0, j = 0;
  while (i < n && j < m) {
    if (target[i] === typed[j]) { ops.push(['eq', target[i]]); i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) { ops.push(['miss', target[i]]); i++; }
    else { ops.push(['ins', typed[j]]); j++; }
  }
  while (i < n) ops.push(['miss', target[i++]]);
  while (j < m) ops.push(['ins', typed[j++]]);
  return ops;
}
function renderDict(s, L) {
  if (!TTS.ok) return `<p class="note">Для диктанта нужна озвучка, а в этом браузере её нет.</p>`;
  const P = parseText(s.levels[L]); const k = s.id + L;
  const d = ui.dict[k] || (ui.dict[k] = { i: 0, val: '', res: null, show: false, done: {} });
  const sent = P.sents[d.i]; const target = wordsOf(sent);
  const typedN = wordsOf(d.val).length;
  let res = '';
  if (d.res) {
    const ok = d.res.filter(o => o[0] === 'eq').length;
    res = `<div class="dres"><p class="small muted">Совпало слов: <b class="tabnum">${ok} / ${target.length}</b></p>
      <p class="diff" lang="en">${d.res.map(([t, w]) => `<span class="${t}">${esc(w)}</span>`).join(' ')}</p>
      <p class="small muted legend"><span class="eq">верно</span> <span class="miss">пропущено</span> <span class="ins">лишнее</span></p></div>`;
  }
  const doneN = Object.keys(d.done).length;
  return `<div class="practice">
    <div class="phead"><h2>Диктант</h2><span class="small muted tabnum">Предложение ${d.i + 1} из ${P.sents.length} · выполнено ${doneN}</span></div>
    <p class="muted small">Прослушайте предложение и напишите его. Регистр и знаки препинания не учитываются.</p>
    <div class="row">
      <button class="btn primary" data-act="d-play">${I.spk} Прослушать</button>
      <button class="btn" data-act="d-slow">Медленно</button>
      ${rateSeg('rate')}
    </div>
    <label class="sr" for="dict-in">Ваш текст</label>
    <textarea id="dict-in" class="dictin" rows="3" lang="en" spellcheck="false" autocomplete="off" placeholder="Пишите, что слышите…">${esc(d.val)}</textarea>
    <div class="row"><span class="small muted tabnum">${typedN} / ${target.length} слов</span><span class="spacer"></span>
      <button class="btn ghost sm" data-act="d-show">${d.show ? 'Скрыть текст' : 'Показать текст'}</button>
      <button class="btn primary" data-act="d-check">Проверить</button></div>
    ${d.show ? `<p class="reveal" lang="en">${esc(sent)}</p>` : ''}
    ${res}
    <div class="row pnav"><button class="btn" data-act="d-nav" data-d="-1" ${d.i === 0 ? 'disabled' : ''}>${I.back} Назад</button>
      <button class="btn" data-act="d-nav" data-d="1" ${d.i >= P.sents.length - 1 ? 'disabled' : ''}>Дальше ${I.next}</button></div>
  </div>`;
}
function memHidden(n, i, pct) {
  if (pct >= 1) return new Set([...Array(n).keys()]);
  const cnt = Math.max(1, Math.ceil(n * pct));
  return new Set(shuffle([...Array(n).keys()], i * 7919 + Math.round(pct * 100)).slice(0, cnt));
}
function renderMem(s, L) {
  const P = parseText(s.levels[L]); const k = s.id + L;
  const m = ui.mem[k] || (ui.mem[k] = { i: 0, phase: 'study', pct: 0.5, vals: {}, checked: false });
  const sent = P.sents[m.i];
  let main;
  if (m.phase === 'study') {
    main = `<p class="memstudy" lang="en">${esc(sent)}</p>
      <div class="row">${TTS.ok ? `<button class="btn" data-act="say" data-text="${esc(sent)}">${I.spk} Прослушать</button>` : ''}
      <button class="btn primary" data-act="m-hide">Скрыть и вспомнить ${I.next}</button></div>`;
  } else {
    const toks = tokens(sent); const nW = toks.filter(t => t.w).length;
    const hid = memHidden(nW, m.i, m.pct); let wi = 0;
    const line = toks.map(t => {
      if (!t.w) return esc(t.t);
      const idx = wi++;
      if (!hid.has(idx)) return `<span>${esc(t.t)}</span>`;
      const v = m.vals[idx] || '';
      const cls = m.checked ? (norm(v.trim()) === norm(t.t) ? 'ok' : 'bad') : '';
      return `<input id="mem-${idx}" data-wi="${idx}" class="${cls}" value="${esc(v)}" style="width:${t.t.length + 1.6}ch" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Слово ${idx + 1}" ${m.checked && cls === 'ok' ? 'readonly' : ''}>`;
    }).join('');
    let score = '';
    if (m.checked) {
      let ok = 0; let j = 0; toks.forEach(t => { if (t.w) { if (hid.has(j) && norm((m.vals[j] || '').trim()) === norm(t.t)) ok++; j++; } });
      score = `<p class="small">Верно <b class="tabnum">${ok} / ${hid.size}</b>${ok < hid.size ? ` · <span class="muted" lang="en">${esc(sent)}</span>` : ''}</p>`;
    }
    main = `<div class="row"><span class="small muted">Подсказки:</span>
        <span class="seg" role="group" aria-label="Сколько слов скрыть">${[[0.5, 'Много'], [0.75, 'Мало'], [1, 'Без подсказок']].map(([p, l]) => `<button data-act="m-pct" data-p="${p}" aria-pressed="${m.pct === p}">${l}</button>`).join('')}</span></div>
      <p class="memline" lang="en">${line}</p>
      ${score}
      <div class="row"><button class="btn ghost sm" data-act="m-study">Посмотреть ещё раз</button><span class="spacer"></span>
        <button class="btn primary" data-act="m-check">Проверить</button></div>`;
  }
  return `<div class="practice">
    <div class="phead"><h2>Запоминание</h2><span class="small muted tabnum">Предложение ${m.i + 1} из ${P.sents.length}</span></div>
    <p class="muted small">Прочитайте предложение, затем восстановите его по памяти: часть слов будет скрыта.</p>
    ${main}
    <div class="row pnav"><button class="btn" data-act="m-nav" data-d="-1" ${m.i === 0 ? 'disabled' : ''}>${I.back} Назад</button>
      <button class="btn" data-act="m-nav" data-d="1" ${m.i >= P.sents.length - 1 ? 'disabled' : ''}>Дальше ${I.next}</button></div>
  </div>`;
}

function renderAdd() {
  const d = ui.draft; const g = ui.gen;
  const running = g?.running;
  const len = d.text.length;
  const blocked = !canClaude();
  const steps = `<div class="gsteps">${LEVELS.map(L => `<span class="gstep ${g?.steps?.includes(L) ? 'on' : ''}" style="${lvStyle(L)}">${L}</span>`).join('')}</div>`;
  return `<div class="addview">
    <button class="btn ghost sm backbtn" data-act="nav" data-to="library">${I.back} Библиотека</button>
    <p class="eyebrow">Новый текст</p>
    <h1>Превратите статью в пять уровней</h1>
    ${blocked ? `<p class="note">Чтобы создавать тексты, подключите API в настройках.</p>` : ''}
    <span class="seg big" role="group" aria-label="Источник">
      <button data-act="mode" data-m="paste" aria-pressed="${d.mode === 'paste'}">Свой текст</button>
      <button data-act="mode" data-m="topic" aria-pressed="${d.mode === 'topic'}">Статья по теме</button>
    </span>
    ${d.mode === 'paste'
      ? `<label class="lbl2" for="draft">Английский текст: новость, статья, глава</label>
         <textarea id="draft" lang="en" placeholder="Paste an English article here…" ${running ? 'disabled' : ''}>${esc(d.text)}</textarea>
         <p class="small muted tabnum" id="draft-len">${len.toLocaleString('ru-RU')} / 12 000 знаков${len > 12000 ? ', лишнее будет обрезано' : ''}</p>`
      : `<label class="lbl2" for="topic">О чём написать</label>
         <input id="topic" class="textin" placeholder="Например: почему коты мурлычут" value="${esc(d.topic)}" ${running ? 'disabled' : ''}>
         <p class="small muted">ИИ напишет познавательную статью и сделает пять версий.</p>`}
    <div class="row">
      <label class="small muted" for="cat-sel">Тема</label>
      <select id="cat-sel" ${running ? 'disabled' : ''}><option value="">Определить автоматически</option>${Object.entries(CATS).map(([k, v]) => `<option value="${k}" ${d.cat === k ? 'selected' : ''}>${v}</option>`).join('')}</select>
    </div>
    <div class="row">
      ${running
        ? `<button class="btn" data-act="gen-stop">${I.stop} Остановить</button>`
        : `<button class="btn primary big" data-act="gen" ${blocked ? 'disabled' : ''}>Создать 5 уровней</button>`}
    </div>
    ${g ? `<div class="genbox">${steps}
      <p class="small ${g.error ? 'err' : 'muted'}">${g.error ? esc(g.error) : running ? (g.chars ? `Пишу… ${g.chars.toLocaleString('ru-RU')} знаков` : 'Модель думает над текстом. Это займёт около минуты.') : ''}</p></div>` : ''}
  </div>`;
}
async function startGen() {
  const d = ui.draft;
  const src = d.mode === 'paste' ? d.text.trim().slice(0, 12000) : d.topic.trim();
  if (!src || (d.mode === 'paste' && countWords(src) < 20)) { toast(d.mode === 'paste' ? 'Вставьте текст хотя бы из 20 слов.' : 'Напишите тему.'); return; }
  const ctl = new AbortController();
  ui.gen = { running: true, chars: 0, steps: [], ctl };
  render();
  try {
    const raw = await sampleFn.json(genPrompt({ mode: d.mode, text: src, topic: src, cat: d.cat }), {
      signal: ctl.signal, cache: false,
      onText: ({ text }) => {
        const steps = LEVELS.filter(L => text.includes(`"${L}"`));
        const changed = steps.length !== ui.gen.steps.length;
        ui.gen.chars = text.length; ui.gen.steps = steps;
        if (ui.view === 'add') {
          if (changed) render();
          else { const p = document.querySelector('.genbox p'); if (p) p.textContent = `Пишу… ${text.length.toLocaleString('ru-RU')} знаков`; }
        }
      }
    });
    const levels = {};
    for (const L of LEVELS) { const t = raw?.levels?.[L]; if (typeof t !== 'string' || countWords(t) < 15) throw { code: 'invalid_json' }; levels[L] = t.trim(); }
    const id = 's' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    const story = {
      id, createdAt: Date.now(), source: d.mode, title: String(raw.title || 'Untitled').slice(0, 140),
      category: CATS[d.cat] ? d.cat : (CATS[raw.category] ? raw.category : 'curious'),
      summary: String(raw.summary || ''), levels, extras: {}, gloss: {}, results: {}
    };
    stories[id] = story; Store.putStory(story);
    ui.gen = null; ui.draft = { mode: d.mode, text: '', topic: '', cat: '' };
    ui.view = 'story'; ui.storyId = id; ui.tab = 'read';
    render(); scrollTo(0, 0);
  } catch (e) {
    ui.gen = { running: false, steps: [], error: claudeError(e) };
    render();
  }
}

/* ===== grammar topics for own sentences ===== */
// [id, level, English name, Russian name, pattern]
const TOPICS = [
  ['pres-simple', 'A1', 'Present Simple', 'Настоящее простое', 'I/you/we/they + V; he/she/it + V-s'],
  ['pres-cont', 'A1', 'Present Continuous', 'Настоящее длительное', 'am/is/are + V-ing'],
  ['past-simple', 'A1', 'Past Simple', 'Прошедшее простое', 'V-ed / 2-я форма; did + V в вопросах'],
  ['future-will', 'A2', 'Future Simple: will', 'Будущее с will', 'will + V'],
  ['going-to', 'A2', 'be going to', 'Намерения и прогнозы: going to', 'am/is/are going to + V'],
  ['pres-cont-future', 'A2', 'Present Continuous for arrangements', 'Present Continuous для договорённостей', 'am/is/are + V-ing + время в будущем'],
  ['past-cont', 'A2', 'Past Continuous', 'Прошедшее длительное', 'was/were + V-ing (when + Past Simple)'],
  ['pres-perfect', 'A2', 'Present Perfect', 'Настоящее совершенное', 'have/has + V3 (ever, never, already, yet, just)'],
  ['comparatives', 'A2', 'Comparatives', 'Сравнительная степень', 'adj-er / more + adj + than'],
  ['superlatives', 'A2', 'Superlatives', 'Превосходная степень', 'the + adj-est / the most + adj'],
  ['can-could', 'A2', 'can / could / be able to', 'Умение и возможность', 'can/could + V; be able to + V'],
  ['must-have-to', 'A2', 'must / have to / mustn’t', 'Обязанность и запрет', 'must / have to / don’t have to / mustn’t + V'],
  ['should-advice', 'A2', 'should / ought to', 'Совет', 'should / ought to + V'],
  ['quantifiers', 'A2', 'much / many / a lot of / a few / a little', 'Количество', 'much/many/a few/a little + noun'],
  ['too-enough', 'A2', 'too / enough', 'too и enough', 'too + adj; adj + enough; enough + noun'],
  ['zero-cond', 'A2', 'Zero Conditional', 'Условные предложения 0 типа', 'If + Present Simple, Present Simple'],
  ['first-cond', 'B1', 'First Conditional', 'Условные предложения 1 типа', 'If + Present Simple, will + V'],
  ['second-cond', 'B1', 'Second Conditional', 'Условные предложения 2 типа', 'If + Past Simple, would + V'],
  ['third-cond', 'B1', 'Third Conditional', 'Условные предложения 3 типа', 'If + Past Perfect, would have + V3'],
  ['unless', 'B1', 'unless / as long as / provided that', 'Условия: unless, as long as', 'unless / as long as / provided (that) + Present'],
  ['time-clauses', 'B1', 'Time clauses: when / as soon as / until', 'Придаточные времени о будущем', 'when/as soon as/until/before + Present, will + V'],
  ['pres-perf-cont', 'B1', 'Present Perfect Continuous', 'Настоящее совершенное длительное', 'have/has been + V-ing (for/since)'],
  ['past-perfect', 'B1', 'Past Perfect', 'Предпрошедшее время', 'had + V3 (before/after/by the time)'],
  ['used-to', 'B1', 'used to', 'Привычки в прошлом: used to', 'used to + V / didn’t use to + V'],
  ['be-used-to', 'B1', 'be / get used to', 'Привыкать: be/get used to', 'be/get used to + V-ing / noun'],
  ['passive-simple', 'B1', 'Passive: present and past', 'Пассивный залог (Present/Past)', 'am/is/are/was/were + V3 (by …)'],
  ['passive-perfect-modal', 'B2', 'Passive with perfect tenses and modals', 'Пассив с перфектом и модальными', 'has been / will be / can be / must be + V3'],
  ['causative', 'B1', 'have / get something done', 'Каузатив: have something done', 'have/get + object + V3'],
  ['reported-statements', 'B1', 'Reported speech: statements', 'Косвенная речь: утверждения', 'said (that) + сдвиг времени: is → was, will → would'],
  ['reported-questions', 'B1', 'Reported speech: questions', 'Косвенная речь: вопросы', 'asked if/whether / asked where + прямой порядок слов'],
  ['reported-commands', 'B1', 'Reported commands and requests', 'Косвенная речь: просьбы и приказы', 'told/asked + someone + (not) to + V'],
  ['indirect-questions', 'B1', 'Indirect questions', 'Вежливые косвенные вопросы', 'Do you know / Could you tell me + where/if + прямой порядок'],
  ['question-tags', 'B1', 'Question tags', 'Разделительные вопросы', '…, isn’t it? / …, don’t you? / …, did she?'],
  ['relative-defining', 'B1', 'Defining relative clauses', 'Определительные придаточные', 'noun + who/which/that + clause'],
  ['relative-nondefining', 'B2', 'Non-defining relative clauses', 'Неопределительные придаточные', 'noun, who/which + clause, …'],
  ['relative-whose-where', 'B1', 'whose / where / when', 'Придаточные с whose, where, when', 'noun + whose/where/when + clause'],
  ['gerund-verbs', 'B1', 'Verb + -ing', 'Глагол + герундий', 'enjoy/avoid/mind/finish + V-ing'],
  ['infinitive-verbs', 'B1', 'Verb + to-infinitive', 'Глагол + инфинитив', 'decide/hope/plan/refuse + to + V'],
  ['verb-object-inf', 'B1', 'Verb + object + to-infinitive', 'Хотеть, чтобы кто-то…', 'want/expect/ask/encourage + someone + to + V'],
  ['gerund-inf-meaning', 'B2', 'remember / stop / try + -ing or to', 'Герундий или инфинитив: разница в смысле', 'remember doing ≠ remember to do; stop/try …'],
  ['prep-gerund', 'B1', 'Preposition + -ing', 'Предлог + герундий', 'interested in / good at / before / without + V-ing'],
  ['purpose', 'B1', 'Purpose: to / in order to / so that', 'Цель: чтобы', 'to / in order to + V; so that + subject + can/will'],
  ['as-as', 'B1', 'as … as / not as … as', 'Сравнение as … as', '(not) as + adj/adv + as'],
  ['the-more', 'B2', 'the more …, the more …', 'Чем …, тем …', 'the + comparative …, the + comparative …'],
  ['so-such', 'B1', 'so / such … that', 'Так … что: so / such', 'so + adj / such (a) + adj + noun + that …'],
  ['both-either', 'B1', 'both / either / neither', 'Оба, любой, ни один', 'both … and / either … or / neither … nor'],
  ['contrast-although', 'B1', 'although / though / even though', 'Уступка: хотя', 'although + clause, main clause'],
  ['contrast-despite', 'B2', 'despite / in spite of', 'Несмотря на', 'despite / in spite of + noun / V-ing'],
  ['contrast-whereas', 'B2', 'whereas / while / however', 'Противопоставление', 'clause, whereas/while + clause; However, …'],
  ['reason', 'B1', 'because / because of / due to', 'Причина', 'because + clause; because of / due to + noun'],
  ['future-cont', 'B2', 'Future Continuous', 'Будущее длительное', 'will be + V-ing'],
  ['future-perfect', 'B2', 'Future Perfect', 'Будущее совершенное', 'will have + V3 (by …)'],
  ['would-habit', 'B2', 'would for past habits', 'would о привычках в прошлом', 'would + V (повторяющиеся действия в прошлом)'],
  ['deduction-present', 'B2', 'Deduction: must / might / can’t be', 'Предположения о настоящем', 'must / might / could / can’t + V'],
  ['deduction-past', 'B2', 'Deduction about the past', 'Предположения о прошлом', 'must / might / can’t + have + V3'],
  ['should-have', 'B2', 'should have done', 'Сожаление и критика: should have', 'should(n’t) have + V3'],
  ['neednt-have', 'B2', 'needn’t have / didn’t need to', 'Не нужно было', 'needn’t have + V3 / didn’t need to + V'],
  ['had-better', 'B2', 'had better', 'Лучше бы (настоятельный совет)', 'had better (not) + V'],
  ['be-supposed-to', 'B2', 'be supposed to', 'Предполагается, что…', 'am/is/are/was supposed to + V'],
  ['wish-present', 'B2', 'I wish / If only + Past Simple', 'Сожаление о настоящем', 'I wish / If only + Past Simple (were)'],
  ['wish-past', 'B2', 'I wish / If only + Past Perfect', 'Сожаление о прошлом', 'I wish / If only + had + V3'],
  ['wish-would', 'B2', 'I wish … would', 'Недовольство: wish … would', 'I wish + someone + would + V'],
  ['would-rather', 'B2', 'would rather / it’s time', 'Предпочтение: would rather, it’s time', 'would rather + V / + someone + Past; it’s (high) time + Past'],
  ['mixed-cond', 'C1', 'Mixed conditionals', 'Смешанные условные', 'If + Past Perfect, would + V / If + Past, would have + V3'],
  ['participle-clauses', 'B2', 'Participle clauses', 'Причастные обороты', 'V-ing … , / Having + V3, … / V3 …, main clause'],
  ['cleft', 'C1', 'Cleft sentences', 'Выделительные конструкции', 'It was … that … / What I need is …'],
  ['inversion', 'C1', 'Inversion after negative adverbs', 'Инверсия', 'Never / Rarely / Not only + auxiliary + subject + V'],
  ['emphatic-do', 'B2', 'Emphatic do', 'Усилительное do', 'do/does/did + V для усиления'],
  ['let-make-allow', 'B1', 'make / let / allow', 'Заставлять и разрешать', 'make/let + someone + V; allow + someone + to + V'],
  ['passive-reporting', 'C1', 'Passive reporting verbs', 'Пассив с глаголами мнения', 'It is said that … / He is believed to + V'],
  ['subjunctive', 'C1', 'Subjunctive after suggest / insist', 'Сослагательное после suggest, insist', 'suggest/insist/recommend that + someone + V'],
  ['future-in-past', 'B2', 'Future in the past', 'Будущее в прошедшем', 'was going to + V / would + V'],
  ['phrasal-verb', 'B1', 'Phrasal verbs', 'Фразовые глаголы', 'verb + particle (look after, give up, put off …)']
];
const TOPIC = Object.fromEntries(TOPICS.map(([id, level, en, ru, pattern]) => [id, { id, level, en, ru, pattern }]));
const enabledTopics = () => TOPICS.map(t => t[0]).filter(id => !(settings.topicsOff || []).includes(id));
const grammarOn = () => settings.grammarOn !== false && enabledTopics().length > 0;
function recentTopicIds(n = 12) { return allSentences().filter(x => x.topic).slice(0, n).map(x => x.topic); }
function topicPrompt(w, cands) {
  return `A Russian-speaking learner of English (CEFR ${ui.level}) will write one sentence with the word "${w.word}"${w.pos ? ` (${w.pos})` : ''}${w.def ? `, meaning: ${w.def}` : ''}, using a grammar construction.
Choose ONE topic from this list that combines naturally with this word:
${cands.map(id => `${id}: ${TOPIC[id].en} (${TOPIC[id].pattern})`).join('\n')}
Reply with ONLY JSON: {"id":"topic id from the list","tip_ru":"1-2 short sentences in Russian: how to build this construction","example":"one natural example sentence IN ENGLISH (never Russian) showing this construction, without the word ${w.word}"}
The tip is in Russian, the example is always in English. No markdown or backticks.`;
}
// pick a topic: 8 random candidates (skipping recently used ones), the fast model chooses the one that fits the word
async function pickTopic(w, holder, exclude = []) {
  if (!grammarOn()) { holder.topic = null; return; }
  const recent = new Set([...recentTopicIds(), ...exclude]);
  let pool = enabledTopics().filter(id => !recent.has(id)); if (pool.length < 4) pool = enabledTopics().filter(id => !exclude.includes(id));
  if (!pool.length) pool = enabledTopics();
  const cands = shuffle(pool).slice(0, 8);
  const token = (holder.topicToken = (holder.topicToken || 0) + 1);
  holder.topic = { id: cands[0], loading: true }; holder.topicOpen = false;
  render();
  let t = { id: cands[0], tip: '', example: '' };
  if (AI.ready()) {
    try {
      const r = await sampleFn.json(topicPrompt(w, cands), { modelTier: 'quick' });
      if (r && TOPIC[r.id] && cands.includes(r.id)) {
        const ex = String(r.example || '').replace(/[`*]/g, '').trim();
        t = { id: r.id, tip: String(r.tip_ru || '').replace(/[`*]/g, '').trim(), example: /[а-яё]/i.test(ex) ? '' : ex };
      }
    } catch { }
  }
  if (holder.topicToken !== token) return;
  holder.topic = t; render();
}
// collapsed by default: only the topic name; the rule opens on a button
function topicBoxHtml(holder, act, key) {
  const t = holder.topic; if (!t) return '';
  const d = TOPIC[t.id];
  if (t.loading) return `<div class="topic"><p class="small muted"><span class="spinner sm"></span> Подбираю грамматическую тему…</p></div>`;
  const open = !!holder.topicOpen;
  return `<div class="topic">
    <div class="trow"><span class="clabel">Грамматика · ${d.level}</span>${act ? `<button class="btn ghost sm" data-act="${act}">Другая тема</button>` : ''}</div>
    <p class="tname"><span lang="en">${esc(d.en)}</span></p>
    ${key ? `<button class="btn ghost sm trule" data-act="tp-rule" data-h="${key}" aria-expanded="${open}">${open ? 'Скрыть правило' : 'Показать правило'}</button>` : ''}
    ${open || !key ? `<div class="tbody">
      <p class="small muted">${esc(d.ru)}</p>
      <p class="tpat" lang="en">${esc(d.pattern)}</p>
      ${t.tip ? `<p class="small">${esc(t.tip)}</p>` : ''}
      ${t.example ? `<p class="small muted">Example: <i lang="en">${esc(t.example)}</i></p>` : ''}
      <p class="small muted">Не получается по теме — напишите любое предложение со словом, и я покажу, как построить его в этой конструкции.</p>
    </div>` : ''}
  </div>`;
}
function grammarCheckPart(w, topic) {
  if (!topic || !TOPIC[topic.id]) return '';
  const d = TOPIC[topic.id];
  return `
The learner was asked to use this grammar construction: "${d.en}" (${d.pattern}).
Also add to the JSON: "grammar_ok": true if the sentence correctly uses this construction, otherwise false; "grammar_note_ru": one short Russian sentence about how the construction is used, or why it is missing or wrong; "grammar_example": one natural sentence that uses BOTH "${w.word}" and this construction, as close as possible to the learner's idea. Judge "verdict" only by correctness and naturalness, not by whether the construction was used.`;
}
function grammarResultHtml(it) {
  const t = it.topic && TOPIC[it.topic]; const r = it.r || it; if (!t || r.grammar_ok == null) return '';
  return `<div class="pgram ${r.grammar_ok ? 'ok' : 'bad'}"><p><b>${r.grammar_ok ? '✓' : '✗'} ${esc(t.en)}</b> <span class="muted">· ${r.grammar_ok ? 'конструкция использована' : 'конструкция не использована'}</span></p>
    ${r.grammar_note_ru || r.grammar_note ? `<p class="small">${esc(r.grammar_note_ru || r.grammar_note)}</p>` : ''}
    ${!r.grammar_ok && (r.grammar_example) ? `<p class="clabel">Как построить по этой теме</p><p class="pnat" lang="en">${esc(r.grammar_example)}</p>` : ''}</div>`;
}
function renderTopicSettings() {
  const off = new Set(settings.topicsOff || []);
  const groups = ['A1', 'A2', 'B1', 'B2', 'C1'].map(L => [L, TOPICS.filter(t => t[1] === L)]).filter(g => g[1].length);
  return `<section class="sset">
    <h2>Грамматические темы</h2>
    <p class="small muted">Для каждого предложения модель выбирает из включённых тем ту, что подходит к слову, и старается не повторять недавние.</p>
    <label class="tgl"><input type="checkbox" id="g-on" ${settings.grammarOn !== false ? 'checked' : ''}> Задавать тему для предложений</label>
    <div class="row"><button class="btn sm" data-act="tp-all" data-v="1">Включить все</button><button class="btn sm" data-act="tp-all" data-v="0">Выключить все</button><span class="small muted">Включено ${enabledTopics().length} из ${TOPICS.length}</span></div>
    ${groups.map(([L, ts]) => `<details class="tgroup"><summary><b style="color:var(--${L})">${L}</b> <span class="muted small">${ts.filter(t => !off.has(t[0])).length} из ${ts.length}</span></summary>
      <div class="tlist">${ts.map(t => `<label class="tgl"><input type="checkbox" data-topic="${t[0]}" ${off.has(t[0]) ? '' : 'checked'}> <span lang="en">${esc(t[2])}</span> <span class="muted small">${esc(t[3])}</span></label>`).join('')}</div></details>`).join('')}
  </section>`;
}

document.addEventListener('change', e => {
  const t = e.target;
  if (t.id === 'g-on') { settings.grammarOn = t.checked; saveSettings(); }
  else if (t.dataset?.topic) {
    const off = new Set(settings.topicsOff || []); t.checked ? off.delete(t.dataset.topic) : off.add(t.dataset.topic);
    settings.topicsOff = [...off]; saveSettings();
  }
});

/* ===== word cards ===== */
function cardPrompt(word, { context, def, level } = {}) {
  return `Make a vocabulary flashcard for a Russian-speaking learner of English (CEFR ${level || ui.level}).
Word or phrase: "${word}"${context ? `\nIt was met in this sentence: "${context}" — use THIS meaning.` : ''}${def ? `\nMeaning: ${def}` : ''}
Reply with ONLY JSON:
{"word":"dictionary form","ipa":"/British IPA/","pos":"part of speech","def":"clear English definition of this meaning, max 18 words","examples":["three natural, varied example sentences at ${level || ui.level} level using the word in this meaning; wrap the word form inside each sentence in **double asterisks**"],"synonyms":["4-5 synonyms or close near-synonyms for this meaning"],"collocations":["5-6 frequent collocations or set phrases with the word, e.g. make a decision"]}`;
}
function addWordPrompt(q) {
  return `A Russian-speaking learner of English (CEFR ${ui.level}) wants to add "${q}" to her flashcards.
If the input is Russian, choose the most natural English equivalent. Fix obvious typos.
Reply with ONLY JSON:
{"word":"English dictionary form or fixed phrase","ipa":"/British IPA/","pos":"part of speech","senses":[{"label":"2-5 word English gloss of this meaning","def":"clear English definition, max 18 words","examples":["three natural example sentences at ${ui.level} level; wrap the word form in each in **double asterisks**"],"synonyms":["4-5 synonyms for this meaning"],"collocations":["5-6 frequent collocations"]}]}
Give 1-3 senses, most common first, only distinct and genuinely common meanings. If the input is not a real word or phrase, reply {"error":"short explanation in Russian"}.`;
}
const strList = (a, n) => (Array.isArray(a) ? a : []).map(x => String(x).trim()).filter(Boolean).slice(0, n);
function cleanCard(r) {
  const c = { def: String(r?.def || '').trim(), examples: strList(r?.examples, 3), synonyms: strList(r?.synonyms, 5), collocations: strList(r?.collocations, 6) };
  if (!c.def || c.examples.length < 2) throw { code: 'invalid_json' };
  return c;
}
const cardJobs = {};
function hasCard(w) { return !!(w?.examples?.length && w.def); }
function ensureCard(w) {
  if (!w || hasCard(w)) return Promise.resolve(w);
  if (!AI.ready()) return Promise.reject({ code: 'no_config' });
  if (cardJobs[w.id]) return cardJobs[w.id];
  const job = sampleFn.json(cardPrompt(w.word, { context: w.context, def: w.def, level: w.level }), { modelTier: 'quick' })
    .then(r => {
      Object.assign(w, cleanCard(r));
      if (r.ipa && !w.ipa) w.ipa = String(r.ipa); if (r.pos && !w.pos) w.pos = String(r.pos);
      Store.putWord(w); return w;
    })
    .finally(() => { delete cardJobs[w.id]; });
  cardJobs[w.id] = job; return job;
}
function saveWord(entry) {
  const id = wordId(entry.word);
  if (words[id] && !words[id].deleted) return words[id];
  const w = { id, state: 'new', added: Date.now(), ...entry };
  words[id] = w; Store.putWord(w); updateBadge();
  if (AI.ready()) ensureCard(w).catch(() => { });
  return w;
}
function markWord(sentence, word) {
  let h = esc(sentence);
  if (/\*\*[^*]+\*\*/.test(h)) return h.replace(/\*\*([^*]+)\*\*/g, '<b class="tw">$1</b>');
  const stem = esc(String(word).split(/\s+/)[0]).slice(0, Math.max(3, String(word).length - 2)).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return h.replace(new RegExp(`\\b(${stem}[\\w'’-]*)`, 'i'), '<b class="tw">$1</b>');
}
const plainSent = s => String(s).replace(/\*\*/g, '');
function cardFrontHtml(w) {
  if (!hasCard(w)) return `<div class="cfront"><p lang="en">${w.context ? markWord(w.context, w.word) : `<b class="tw">${esc(w.word)}</b>`}</p></div>`;
  return `<div class="cfront">${w.examples.map(s => `<p lang="en">${markWord(s, w.word)}</p>`).join('')}</div>`;
}
function cardBackHtml(w) {
  return `<div class="cback">
    <div class="pw"><b lang="en">${esc(w.word)}</b>${TTS.ok ? `<button class="iconbtn" data-act="say" data-text="${esc(w.word)}" aria-label="Произнести">${I.spk}</button>` : ''}</div>
    <p class="muted small">${esc(w.ipa || '')} ${w.pos ? `<span class="pos">${esc(w.pos)}</span>` : ''}</p>
    <p class="cdef" lang="en">${esc(w.def || '')}</p>
    ${w.synonyms?.length ? `<p class="clabel">Synonyms</p><div class="syn" lang="en">${w.synonyms.map(x => `<span>${esc(x)}</span>`).join('')}</div>` : ''}
    ${w.collocations?.length ? `<p class="clabel">Collocations</p><ul class="coll" lang="en">${w.collocations.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
  </div>`;
}

/* ===== today ===== */
function renderToday() {
  const due = dueWords(); const left = reviewsLeft(); const todo = Math.min(due.length, left);
  const queue = newQueue(); const nl = newLeft(); const nextNew = queue[0];
  const apiNote = AI.ready() ? '' : `<div class="note row"><span>Чтобы проверять предложения и заполнять карточки, подключите API.</span><button class="btn sm" data-act="nav" data-to="settings">Открыть настройки</button></div>`;
  const revCard = `<section class="tcard">
      <p class="eyebrow">Повторение</p>
      <p class="tbig tabnum">${todo}</p>
      <p class="muted small">${todo ? `${plural(todo, 'карточка', 'карточки', 'карточек')} на сегодня` : (due.length ? 'Лимит на сегодня выполнен' : 'На сегодня всё повторено')}${due.length > todo ? ` · ещё ${due.length - todo} ${plural(due.length - todo, 'ждёт', 'ждут', 'ждут')} до завтра` : ''}</p>
      <p class="muted small tabnum">Сегодня повторено: ${reviewedToday()} из ${settings.reviewsPerDay}</p>
      <button class="btn primary" data-act="rv-start" ${todo ? '' : 'disabled'}>Начать повторение</button>
    </section>`;
  let newBody;
  if (!queue.length) newBody = `<p class="muted small">Очередь пуста. Добавьте слово сами или сохраните его из текста.</p><button class="btn" data-act="nav" data-to="words">${I.plus} Добавить слово</button>`;
  else if (!nl) newBody = `<p class="muted small">Новые слова на сегодня закончились. В очереди ${queue.length} ${plural(queue.length, 'слово', 'слова', 'слов')}.</p>`;
  else newBody = `<p class="tword" lang="en">${esc(nextNew.word)}</p>
      <p class="muted small">${nextNew.state === 'practice' ? `Продолжить: написано ${nextNew.practice?.items?.length || 0} из ${PRACTICE_N}` : `${PRACTICE_N} своих предложения с проверкой`}</p>
      <button class="btn primary" data-act="pr-start" data-id="${nextNew.id}">${nextNew.state === 'practice' ? 'Продолжить' : 'Начать'}</button>
      ${queue.length > 1 ? `<p class="muted small">Дальше в очереди: ${queue.slice(1, 4).map(w => esc(w.word)).join(', ')}${queue.length > 4 ? '…' : ''}</p>` : ''}`;
  const newCard = `<section class="tcard">
      <p class="eyebrow">Новые слова · ${introducedToday()} из ${settings.newPerDay}</p>
      ${newBody}
    </section>`;
  return `<div class="todayview">
    <p class="eyebrow">${new Date().toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
    <h1>Сегодня</h1>
    ${apiNote}
    <div class="tgrid">${revCard}${newCard}</div>
    <div class="row small muted"><span id="sync-state">${syncStateHtml()}</span>${Sync.ready() ? `<button class="btn ghost sm" data-act="sync">Синхронизировать</button>` : ''}</div>
  </div>`;
}

/* ===== review session ===== */
function startReview() {
  const q = dueWords().slice(0, reviewsLeft()).map(w => w.id);
  if (!q.length) { toast('Сейчас повторять нечего.'); return; }
  ui.rev = { queue: q, flipped: false, done: 0, loading: false, err: '' };
  ui.view = 'review'; render(); scrollTo(0, 0); prefetchCards(); reviewTopic();
}
function prefetchCards() {
  if (!ui.rev || !AI.ready()) return;
  for (const id of ui.rev.queue.slice(0, 3)) { const w = words[id]; if (w && !hasCard(w)) ensureCard(w).then(() => { if (ui.view === 'review' && ui.rev?.queue[0] === id) render(); }).catch(() => { }); }
}
function renderReview() {
  const r = ui.rev; const w = r && words[r.queue[0]];
  if (!w) return `<div class="flash done"><p class="eyebrow">Готово</p><h2>Повторено: ${r?.done || 0}</h2><p class="muted">Следующие карточки появятся, когда подойдёт их срок.</p><div class="row center"><button class="btn primary" data-act="nav" data-to="today">На главную</button></div></div>`;
  const loading = !hasCard(w) && AI.ready() && cardJobs[w.id];
  const opts = r.flipped ? [1, 2, 3, 4].map(g => ({ g, n: FSRS.next(w.fsrs, g) })) : [];
  const names = { 1: 'Снова', 2: 'Трудно', 3: 'Хорошо', 4: 'Легко' };
  const hard = isHard(w); const wantSent = (hard && !r.sSkip) || r.sOpen;
  let sent = '';
  if (r.sRes) sent = `<div class="rvsent"><p class="clabel">Моё предложение</p><p class="ptext" lang="en">${esc(r.sRes.text)}</p>${resultHtml(r.sRes, w.word)}</div>`;
  else if (wantSent && !r.flipped) sent = `<div class="rvsent">
      ${hard ? `<p class="hardnote">Это слово пока плохо запоминается. Напишите с ним одно предложение, потом откройте ответ.</p>` : ''}
      ${topicBoxHtml(r, 'rv-topic', 'rev')}
      <label class="clabel" for="rv-in">Своё предложение со словом</label>
      <textarea id="rv-in" class="prin" rows="2" lang="en" spellcheck="false" autocapitalize="sentences" ${r.sChecking ? 'disabled' : ''}>${esc(r.sInput || '')}</textarea>
      ${r.sErr ? `<p class="small err">${esc(r.sErr)}</p>` : ''}
      <div class="row">${r.sChecking ? `<span class="small muted"><span class="spinner sm"></span> Проверяю…</span>` : ''}<span class="spacer"></span>
        <button class="btn ghost sm" data-act="rv-skip">${hard ? 'Пропустить' : 'Не писать'}</button>
        <button class="btn primary" data-act="rv-check" ${r.sChecking || !AI.ready() ? 'disabled' : ''}>Проверить</button></div>
    </div>`;
  const flipBtn = wantSent && !r.sRes ? '' : `<div class="row center">${!r.sOpen && !r.sRes && AI.ready() ? `<button class="btn" data-act="rv-open">${I.pen} Написать предложение</button>` : ''}<button class="btn primary big" id="rv-flip" data-act="rv-flip">Показать ответ</button></div><p class="small muted center keyhint">Пробел или Enter</p>`;
  return `<div class="review">
    <div class="row"><button class="btn ghost sm" data-act="rv-end">${I.back} Закончить</button><span class="spacer"></span><span class="small muted tabnum">Осталось ${r.queue.length} · повторено ${r.done}</span></div>
    <div class="flash card2">
      ${loading ? `<p class="muted small"><span class="spinner sm" aria-hidden="true"></span> Готовлю примеры…</p>` : ''}
      ${cardFrontHtml(w)}
      ${TTS.ok && hasCard(w) ? `<div class="row center"><button class="btn ghost sm" data-act="rv-say">${I.spk} Прослушать примеры</button></div>` : ''}
      ${sent}
      ${r.flipped ? `<div class="fback">${cardBackHtml(w)}</div>
        <div class="grades">${opts.map(o => `<button class="btn grade g${o.g}" data-act="rv-grade" data-g="${o.g}"><span>${names[o.g]}</span><small class="tabnum">${ivlLabel(o.n.days)}</small></button>`).join('')}</div>
        <p class="small muted center keyhint">Клавиши 1–4</p>`
      : flipBtn}
    </div></div>`;
}
// a word counts as hard if it was forgotten twice or the last answer was «Снова»/«Трудно»
function isHard(w) { return (w.fsrs?.lapses || 0) >= 2 || (w.lastGrade && w.lastGrade <= 2); }
async function checkReviewSentence() {
  const r = ui.rev; const w = words[r.queue[0]]; const text = (r.sInput || '').trim();
  if (!w || !text || r.sChecking) return;
  if (countWords(text) < 3) { r.sErr = 'Напишите полное предложение.'; render(); return; }
  r.sChecking = true; r.sErr = ''; render();
  try {
    const topic = r.topic && !r.topic.loading ? r.topic : null;
    const res = cleanCheck(await sampleFn.json(checkPrompt(w, text, topic), {}), text);
    if (ui.rev !== r || r.queue[0] !== w.id) return;
    r.sRes = { text, r: res, topic: topic?.id };
    w.mySentences = [...(w.mySentences || []), sentRecord(text, res, Date.now(), 'review', topic?.id)].slice(-40);
    Store.putWord(w);
  } catch (e) { r.sErr = claudeError(e); }
  r.sChecking = false; render();
  if (r.sRes) document.getElementById('rv-flip')?.focus(); else document.getElementById('rv-in')?.focus();
}
// a topic is chosen as soon as a sentence is expected on the current card
function reviewTopic() {
  const r = ui.rev; const w = r && words[r.queue[0]];
  if (!w || r.topic || r.sRes || r.flipped) return;
  if ((isHard(w) && !r.sSkip) || r.sOpen) pickTopic(w, r);
}
function gradeReview(g) {
  const r = ui.rev; const w = words[r.queue[0]]; if (!w) return;
  w.fsrs = FSRS.next(w.fsrs, g); w.lastReviewDay = dayKey(); w.lastGrade = g;
  r.queue.shift();
  if (g === 1) r.queue.push(w.id); else r.done++;
  Store.putWord(w);
  Object.assign(r, { flipped: false, sOpen: false, sSkip: false, sRes: null, sInput: '', sErr: '', topic: null });
  render(); prefetchCards(); updateBadge(); reviewTopic();
}

/* ===== practice: own sentences ===== */
const PRACTICE_N = 3;
function checkPrompt(w, text, topic) {
  return `You are an experienced, encouraging English teacher. A Russian-speaking learner (CEFR ${ui.level}) is practising the word "${w.word}"${w.pos ? ` (${w.pos})` : ''}${w.def ? `, meaning: ${w.def}` : ''}.
Learner's sentence: """${text}"""
Check grammar, spelling, word choice, collocations and whether it sounds natural to a native speaker. Check specifically whether "${w.word}" is used correctly and in this meaning. Do not invent errors: if the sentence is correct and natural, say so. Ignore a missing capital letter at the start and a missing final full stop.
Reply with ONLY JSON:
{"verdict":"correct|minor|wrong","word_ok":true,"word_note_ru":"one sentence in Russian about how the target word is used, or empty string if it is used well","corrected":"the sentence with the fewest changes needed to make it correct (identical to the learner's if correct)","natural":"how a native speaker would more naturally say it, or empty string if the corrected sentence already sounds natural","errors":[{"wrong":"fragment of the learner's sentence","right":"replacement","explain_ru":"short explanation in Russian"}],"comment_ru":"one short comment in Russian"}
"minor" means small slips (an article, a preposition, spelling, punctuation) that do not hide the meaning. "wrong" means grammar or word-use errors, or the target word is missing or misused.${grammarCheckPart(w, topic)}`;
}
function startPractice(id, extra) {
  const w = words[id]; if (!w) return;
  if (!extra && w.state === 'new') { w.state = 'practice'; w.introDay = dayKey(); w.practice = { items: [] }; Store.putWord(w); }
  ui.prac = { id, extra: !!extra, items: extra ? [] : null, input: '', checking: false, err: '', redo: false, showCard: true };
  ui.view = 'practice'; render(); scrollTo(0, 0);
  if (!hasCard(w) && AI.ready()) ensureCard(w).then(() => { if (ui.view === 'practice') render(); }).catch(() => { });
  if (pracItems().length < PRACTICE_N) pickTopic(w, ui.prac);
  setTimeout(() => document.getElementById('pr-in')?.focus(), 50);
}
const pracItems = () => { const p = ui.prac; const w = words[p.id]; return p.extra ? p.items : (w.practice?.items || (w.practice = { items: [] }).items); };
function tokenDiff(a, b) {
  const A = String(a).trim().split(/\s+/).filter(Boolean), B = String(b).trim().split(/\s+/).filter(Boolean);
  const k = x => x.toLowerCase().replace(/[^\p{L}\p{N}']/gu, '');
  const n = A.length, m = B.length; const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) dp[i][j] = k(A[i]) === k(B[j]) ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const out = []; let i = 0, j = 0;
  while (i < n && j < m) {
    if (k(A[i]) === k(B[j])) { out.push(A[i] === B[j] ? esc(B[j]) : `<ins>${esc(B[j])}</ins>`); i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) out.push(`<del>${esc(A[i++])}</del>`);
    else out.push(`<ins>${esc(B[j++])}</ins>`);
  }
  while (i < n) out.push(`<del>${esc(A[i++])}</del>`);
  while (j < m) out.push(`<ins>${esc(B[j++])}</ins>`);
  return out.join(' ');
}
function resultHtml(it, wordText) {
  const r = it.r; if (!r) return '';
  const v = { correct: ['ok', 'Верно'], minor: ['mid', 'Почти верно'], wrong: ['bad', 'Есть ошибки'] }[r.verdict] || ['mid', 'Проверено'];
  const changed = r.corrected && r.corrected.trim() !== it.text.trim();
  return `<div class="pres ${v[0]}">
    <p class="pverdict"><span class="vbadge ${v[0]}">${v[1]}</span>${r.comment_ru ? ` <span class="muted">${esc(r.comment_ru)}</span>` : ''}</p>
    ${grammarResultHtml(it)}
    ${changed ? `<p class="clabel">Исправление</p><p class="pfix" lang="en">${tokenDiff(it.text, r.corrected)}</p>` : ''}
    ${r.errors?.length ? `<ul class="perr">${r.errors.map(e => `<li><span lang="en"><del>${esc(e.wrong)}</del> → <ins>${esc(e.right)}</ins></span> <span class="muted">${esc(e.explain_ru)}</span></li>`).join('')}</ul>` : ''}
    ${!r.word_ok || r.word_note_ru ? `<p class="pword ${r.word_ok ? '' : 'badtxt'}"><b>${esc(wordText || '')}:</b> ${esc(r.word_note_ru || 'слово употреблено неверно')}</p>` : ''}
    ${r.natural && r.natural.trim() !== (r.corrected || it.text).trim() ? `<p class="clabel">Как сказал бы носитель</p><p class="pnat" lang="en">${esc(r.natural)}</p>` : ''}
  </div>`;
}
function renderPractice() {
  const p = ui.prac; const w = words[p?.id];
  if (!w) return `<p class="note">Слово не найдено.</p>`;
  const items = pracItems(); const n = items.length; const last = items[n - 1];
  const showingResult = !!(last && last.r && p.justChecked && !p.redo);
  const dots = Array.from({ length: PRACTICE_N }, (_, i) => { const it = items[i]; const c = it?.r ? ({ correct: 'ok', minor: 'mid', wrong: 'bad' }[it.r.verdict] || 'mid') : (i === n ? 'cur' : ''); return `<i class="${c}" title="${i + 1}"></i>`; }).join('');
  const info = `<div class="pinfo">
      <div class="pw"><b lang="en">${esc(w.word)}</b>${TTS.ok ? `<button class="iconbtn" data-act="say" data-text="${esc(w.word)}" aria-label="Произнести">${I.spk}</button>` : ''}<span class="spacer"></span><button class="btn ghost sm" data-act="pr-card">${p.showCard ? 'Скрыть карточку' : 'Показать карточку'}</button></div>
      <p class="muted small">${esc(w.ipa || '')} ${w.pos ? `<span class="pos">${esc(w.pos)}</span>` : ''}</p>
      ${w.def ? `<p class="cdef" lang="en">${esc(w.def)}</p>` : (cardJobs[w.id] ? `<p class="muted small"><span class="spinner sm"></span> Готовлю карточку…</p>` : '')}
      ${p.showCard && hasCard(w) ? `<div class="pcard">${cardFrontHtml(w)}${w.collocations?.length ? `<p class="clabel">Collocations</p><ul class="coll" lang="en">${w.collocations.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}${w.synonyms?.length ? `<p class="clabel">Synonyms</p><div class="syn" lang="en">${w.synonyms.map(x => `<span>${esc(x)}</span>`).join('')}</div>` : ''}</div>` : ''}
    </div>`;
  const history = items.slice(0, showingResult ? n - 1 : n).map((it, i) => `<details class="phist"><summary><span class="vdot ${({ correct: 'ok', minor: 'mid', wrong: 'bad' }[it.r?.verdict] || 'mid')}"></span><span class="tabnum muted">${i + 1}.</span> <span lang="en">${esc(it.text)}</span></summary>${resultHtml(it, w.word)}</details>`).reverse().join('');
  let main;
  if (n >= PRACTICE_N && !p.redo && !showingResult) {
    const ok = items.filter(it => it.r?.verdict === 'correct').length;
    main = `<div class="pdone"><p class="eyebrow">Готово</p><h2>${PRACTICE_N} предложения с «${esc(w.word)}»</h2><p class="muted">Верно сразу: ${ok} из ${n}. ${p.extra ? '' : 'Слово переходит в повторение карточками.'}</p>
      <div class="row center"><button class="btn primary" data-act="pr-finish">${p.extra ? 'Готово' : 'Завершить'}</button></div></div>`;
  } else if (showingResult) {
    main = `<div class="pcur"><p class="clabel">Предложение ${n}</p><p class="ptext" lang="en">${esc(last.text)}</p>${resultHtml(last, w.word)}
      <div class="row">${last.r.verdict !== 'correct' ? `<button class="btn" data-act="pr-redo">Исправить и проверить снова</button>` : ''}<span class="spacer"></span>
      <button class="btn primary" id="pr-next" data-act="pr-next">${n >= PRACTICE_N ? 'К итогам' : 'Следующее предложение'} ${I.next}</button></div></div>`;
  } else {
    const redoTopic = p.redo && last?.topic ? { id: last.topic } : null;
    main = `<div class="pcur">
      ${p.redo ? (redoTopic ? topicBoxHtml({ topic: redoTopic, topicOpen: p.topicOpen }, '', 'prac') : '') : topicBoxHtml(p, 'pr-topic', 'prac')}
      <label class="clabel" for="pr-in">${p.redo ? `Исправьте предложение ${n}` : `Предложение ${n + 1} из ${PRACTICE_N}`}</label>
      <textarea id="pr-in" class="prin" rows="2" lang="en" spellcheck="false" autocapitalize="sentences" placeholder="Write a sentence with “${esc(w.word)}”…" ${p.checking ? 'disabled' : ''}>${esc(p.input)}</textarea>
      ${p.err ? `<p class="small err">${esc(p.err)}</p>` : ''}
      <div class="row">${p.checking ? `<span class="small muted"><span class="spinner sm"></span> Проверяю…</span>` : `<span class="small muted keyhint">Enter — проверить, Shift+Enter — новая строка</span>`}<span class="spacer"></span>
        ${p.redo ? `<button class="btn ghost" data-act="pr-cancelredo">Отмена</button>` : ''}
        <button class="btn primary" data-act="pr-check" ${p.checking || !AI.ready() ? 'disabled' : ''}>Проверить</button></div>
      ${!AI.ready() ? `<p class="small err">Для проверки подключите API в настройках.</p>` : ''}
    </div>`;
  }
  return `<div class="practice2">
    <div class="row"><button class="btn ghost sm" data-act="pr-leave">${I.back} ${p.extra ? 'К словам' : 'На главную'}</button><span class="spacer"></span><span class="pdots" aria-label="Прогресс">${dots}</span><span class="small muted tabnum">${Math.min(n, PRACTICE_N)}/${PRACTICE_N}</span></div>
    ${info}${main}
    ${history ? `<div class="phistory"><p class="clabel">Написанные предложения</p>${history}</div>` : ''}
  </div>`;
}
function cleanCheck(r0, text) {
  return {
    verdict: ['correct', 'minor', 'wrong'].includes(r0?.verdict) ? r0.verdict : 'minor', word_ok: r0?.word_ok !== false,
    word_note_ru: String(r0?.word_note_ru || ''), corrected: String(r0?.corrected || text), natural: String(r0?.natural || ''),
    errors: (Array.isArray(r0?.errors) ? r0.errors : []).filter(e => e && (e.wrong || e.right)).map(e => ({ wrong: String(e.wrong || ''), right: String(e.right || ''), explain_ru: String(e.explain_ru || '') })).slice(0, 8),
    comment_ru: String(r0?.comment_ru || ''),
    grammar_ok: typeof r0?.grammar_ok === 'boolean' ? r0.grammar_ok : null, grammar_note_ru: String(r0?.grammar_note_ru || ''), grammar_example: String(r0?.grammar_example || '')
  };
}
async function checkSentence() {
  const p = ui.prac; const w = words[p.id]; const text = p.input.trim();
  if (!text || p.checking) return;
  if (countWords(text) < 3) { p.err = 'Напишите полное предложение.'; render(); return; }
  p.checking = true; p.err = ''; render();
  try {
    const items = pracItems();
    const topic = p.redo ? (items[items.length - 1]?.topic ? { id: items[items.length - 1].topic } : null) : p.topic;
    const r = cleanCheck(await sampleFn.json(checkPrompt(w, text, topic?.loading ? null : topic), {}), text);
    const it = { text, r, at: Date.now(), topic: topic && !topic.loading ? topic.id : undefined };
    if (p.redo) items[items.length - 1] = it; else items.push(it);
    p.input = ''; p.redo = false; p.justChecked = true;
    if (!p.extra) Store.putWord(w);
  } catch (e) { p.err = claudeError(e); }
  p.checking = false; render();
  if (p.justChecked) document.getElementById('pr-next')?.focus(); else document.getElementById('pr-in')?.focus();
}
function finishPractice() {
  const p = ui.prac; const w = words[p.id];
  const items = pracItems();
  w.mySentences = [...(w.mySentences || []), ...items.map(it => sentRecord(it.text, it.r, it.at, p.extra ? 'extra' : 'new', it.topic))].slice(-40);
  if (!p.extra) { w.state = 'review'; w.fsrs = FSRS.next(null, 3); delete w.practice; }
  Store.putWord(w); ui.prac = null; ui.view = p.extra ? 'words' : 'today'; render(); updateBadge();
  toast(p.extra ? 'Предложения сохранены' : `«${w.word}» добавлено в повторение`);
}

/* ===== words list & adding words ===== */
function wordStatus(w) {
  if (w.state === 'new') return ['q', 'в очереди'];
  if (w.state === 'practice') return ['p', `предложения ${w.practice?.items?.length || 0}/${PRACTICE_N}`];
  const d = Math.round((dayStart(w.fsrs?.due || 0) - dayStart()) / DAY);
  return ['r', d <= 0 ? 'повторить сегодня' : `через ${ivlLabel(d)}`];
}
// compact copy of a checked sentence, kept in the word's history
function sentRecord(text, r, at, kind, topic) {
  return { text, corrected: r?.corrected || '', verdict: r?.verdict || '', at: at || Date.now(), kind,
    ...(topic ? { topic, grammar_ok: r?.grammar_ok ?? null, grammar_note: r?.grammar_note_ru || '', grammar_example: r?.grammar_example || '' } : {}),
    errors: (r?.errors || []).slice(0, 6), natural: r?.natural || '', note: r && (!r.word_ok || r.word_note_ru) ? (r.word_note_ru || 'слово употреблено неверно') : '' };
}
function wordsTabs() {
  return `<span class="seg big" role="tablist" aria-label="Раздел">
    <button data-act="w-tab" data-t="words" aria-pressed="${ui.wtab !== 'history'}">Слова</button>
    <button data-act="w-tab" data-t="history" aria-pressed="${ui.wtab === 'history'}">Мои предложения</button></span>`;
}
function allSentences() {
  const out = [];
  for (const w of liveWords()) {
    for (const x of w.mySentences || []) out.push({ ...x, word: w.word, wid: w.id });
    for (const it of w.practice?.items || []) out.push({ ...sentRecord(it.text, it.r, it.at, 'new', it.topic), word: w.word, wid: w.id });
  }
  return out.sort((a, b) => (b.at || 0) - (a.at || 0));
}
function dayLabel(t) {
  const k = dayKey(t); if (k === dayKey()) return 'Сегодня'; if (k === dayKey(Date.now() - DAY)) return 'Вчера';
  return new Date(t - DAY_SHIFT).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', weekday: 'short' });
}
function renderHistory() {
  const all = allSentences(); const bad = ui.hfilter === 'bad';
  const list = bad ? all.filter(x => x.verdict && x.verdict !== 'correct') : all;
  const vc = v => ({ correct: 'ok', minor: 'mid', wrong: 'bad' }[v] || 'mid');
  const vt = v => ({ correct: 'Верно', minor: 'Почти верно', wrong: 'Есть ошибки' }[v] || 'Проверено');
  let lastDay = ''; let html = '';
  for (const x of list) {
    const d = dayLabel(x.at); if (d !== lastDay) { html += `<p class="hday">${esc(d)}</p>`; lastDay = d; }
    const changed = x.corrected && x.corrected.trim() !== x.text.trim();
    const more = x.errors?.length || x.natural || x.note || (x.topic && x.grammar_ok != null);
    html += `<details class="hrow ${vc(x.verdict)}"${more ? '' : ' data-empty'}>
      <summary><span class="vdot ${vc(x.verdict)}" title="${vt(x.verdict)}"></span>
        <span class="hbody"><span class="hword">${esc(x.word)}${x.topic && TOPIC[x.topic] ? ` <span class="htopic ${x.grammar_ok === false ? 'bad' : x.grammar_ok ? 'ok' : ''}">${esc(TOPIC[x.topic].en)}</span>` : ''}</span><span class="htext" lang="en">${esc(x.text)}</span>
        ${changed ? `<span class="hfix" lang="en">${tokenDiff(x.text, x.corrected)}</span>` : ''}</span>
        <span class="htime tabnum">${new Date(x.at).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}</span></summary>
      ${more ? `<div class="hmore">
        ${grammarResultHtml(x)}
        ${x.errors?.length ? `<ul class="perr">${x.errors.map(e => `<li><span lang="en"><del>${esc(e.wrong)}</del> → <ins>${esc(e.right)}</ins></span> <span class="muted">${esc(e.explain_ru)}</span></li>`).join('')}</ul>` : ''}
        ${x.note ? `<p class="pword"><b>${esc(x.word)}:</b> ${esc(x.note)}</p>` : ''}
        ${x.natural && x.natural.trim() !== (x.corrected || x.text).trim() ? `<p class="clabel">Как сказал бы носитель</p><p class="pnat" lang="en">${esc(x.natural)}</p>` : ''}
      </div>` : ''}
    </details>`;
  }
  const nBad = all.filter(x => x.verdict && x.verdict !== 'correct').length;
  return `<div class="wordsview">
    <p class="eyebrow">Личный словарь</p>
    <h1>Мои предложения</h1>
    ${wordsTabs()}
    <p class="lede">${all.length ? `${all.length} ${plural(all.length, 'предложение', 'предложения', 'предложений')} · с ошибками ${nBad}` : 'Здесь появятся предложения, которые вы напишете для новых слов и при повторении.'}</p>
    ${all.length ? `<div class="filters" role="group" aria-label="Фильтр"><button class="chip" data-act="h-filter" data-f="all" aria-pressed="${!bad}">Все</button><button class="chip" data-act="h-filter" data-f="bad" aria-pressed="${bad}">С ошибками</button></div>` : ''}
    <div class="hlist">${html || (all.length ? '<p class="muted">Предложений с ошибками нет.</p>' : '')}</div>
  </div>`;
}
function renderWords() {
  if (ui.wtab === 'history') return renderHistory();
  const list = liveWords().sort((a, b) => (b.added || 0) - (a.added || 0));
  return `<div class="wordsview">
    <p class="eyebrow">Личный словарь</p>
    <h1>Мои слова</h1>
    ${wordsTabs()}
    <p class="lede">${list.length ? `${list.length} ${plural(list.length, 'слово', 'слова', 'слов')} · в очереди новых: ${newQueue().length}` : 'Добавьте слово ниже или сохраните его из текста, нажав на него.'}</p>
    ${renderAddWord()}
    <div class="wlist">${list.map(w => {
      const [cls, st] = wordStatus(w); const open = ui.openWord === w.id;
      return `<div class="wrow2${ui.justAdded === w.id ? ' fresh' : ''}${open ? ' open' : ''}">
        <button class="wmain" data-act="w-open" data-id="${w.id}" aria-expanded="${open}">
          <span class="ww"><b lang="en">${esc(w.word)}</b> <span class="muted small">${esc(w.ipa || '')}</span></span>
          <span class="wdef small muted" lang="en">${esc(w.def || w.context || '')}</span>
          <span class="wst ${cls}">${st}</span>
        </button>
        <span class="wmeta">
          ${TTS.ok ? `<button class="iconbtn" data-act="say" data-text="${esc(w.word)}" aria-label="Произнести">${I.spk}</button>` : ''}
          <button class="iconbtn" data-act="pr-start" data-id="${w.id}" data-extra="${w.state === 'review' ? 1 : ''}" title="Написать предложения" aria-label="Написать предложения">${I.pen}</button>
          <button class="iconbtn ${ui.confirmDel === w.id ? 'danger' : ''}" data-act="wdel" data-id="${w.id}" aria-label="Удалить слово">${ui.confirmDel === w.id ? 'Удалить?' : I.trash}</button>
        </span>
        ${open ? `<div class="wcard2">${hasCard(w) ? `<div class="cgrid"><div>${cardFrontHtml(w)}</div><div>${cardBackHtml(w)}</div></div>` : (cardJobs[w.id] ? `<p class="small muted"><span class="spinner sm"></span> Готовлю карточку…</p>` : `<p class="small muted">Карточка ещё не готова.</p>${AI.ready() ? `<button class="btn sm" data-act="w-card" data-id="${w.id}">Подготовить карточку</button>` : ''}`)}
          ${w.mySentences?.length ? `<p class="clabel">Мои предложения</p><ul class="mys" lang="en">${w.mySentences.slice(-10).map(s => `<li class="${s.verdict}">${esc(s.corrected || s.text)}</li>`).join('')}</ul>` : ''}</div>` : ''}
      </div>`;
    }).join('')}</div></div>`;
}
function renderAddWord() {
  const a = ui.addw;
  if (!AI.ready()) return `<p class="note">Чтобы добавлять слова с автозаполнением карточки, подключите API в настройках.</p>`;
  let body = '';
  if (a.loading) body = `<p class="small muted"><span class="spinner sm" aria-hidden="true"></span> Заполняю карточку…</p>`;
  else if (a.err) body = `<p class="small err">${esc(a.err)}</p>`;
  else if (a.res) {
    const r = a.res; const s = r.senses[a.sense] || r.senses[0];
    const prev = { word: r.word, ipa: r.ipa, pos: r.pos, ...s };
    const exists = words[wordId(r.word)] && !words[wordId(r.word)].deleted;
    body = `<div class="wcard">
      ${r.senses.length > 1 ? `<p class="small muted">Значение:</p><div class="chips" role="group" aria-label="Значение">${r.senses.map((x, i) => `<button type="button" class="chip" data-act="aw-sense" data-i="${i}" aria-pressed="${i === a.sense}" lang="en">${esc(x.label || x.def)}</button>`).join('')}</div>` : ''}
      <div class="cgrid"><div>${cardFrontHtml(prev)}</div><div>${cardBackHtml(prev)}</div></div>
      <div class="row">${exists ? `<span class="small muted">Это слово уже есть в словаре.</span>` : `<button type="button" class="btn primary" data-act="aw-save">${I.plus} Сохранить в словарь</button>`}
        <button type="button" class="btn ghost" data-act="aw-cancel">Отмена</button></div>
    </div>`;
  }
  return `<section class="addword">
    <form id="addw-form" class="row nowrap">
      <label class="sr" for="addw-in">Новое слово</label>
      <input id="addw-in" class="textin" placeholder="Слово или фраза: на английском или по-русски" value="${esc(a.q)}" autocomplete="off" autocapitalize="off" spellcheck="false" ${a.loading ? 'disabled' : ''}>
      <button class="btn primary" type="submit" ${a.loading ? 'disabled' : ''}>Заполнить</button>
    </form>${body}</section>`;
}
async function startAddWord() {
  const a = ui.addw; const q = a.q.trim();
  if (!q || a.loading) return;
  a.ctl?.abort(); a.ctl = new AbortController();
  Object.assign(a, { loading: true, err: '', res: null, sense: 0 });
  render();
  try {
    const r = await sampleFn.json(addWordPrompt(q), { modelTier: 'quick', signal: a.ctl.signal });
    if (r?.error) throw { msg: String(r.error) };
    const senses = (Array.isArray(r?.senses) ? r.senses : []).map(s => { try { return { label: String(s.label || ''), ...cleanCard(s) }; } catch { return null; } }).filter(Boolean).slice(0, 3);
    if (!r?.word || !senses.length) throw { code: 'invalid_json' };
    a.res = { word: String(r.word).trim(), ipa: String(r.ipa || ''), pos: String(r.pos || ''), senses };
  } catch (e) {
    if (e?.code === 'cancelled') { a.loading = false; return; }
    a.err = claudeError(e);
  }
  a.loading = false;
  if (ui.view === 'words') render();
}

/* ===== settings ===== */
function renderSettings() {
  const v = k => esc(LS.get(k, ''));
  const voices = TTS.voices();
  const c = ui.cmp;
  return `<div class="settings">
    <p class="eyebrow">Настройки</p>
    <h1>Настройки</h1>
    <section class="sset">
      <h2>API для проверки и карточек</h2>
      <p class="small muted">Любой сервис, совместимый с OpenAI. Ключ хранится только на этом устройстве.</p>
      <label for="s-base">Адрес API</label><input id="s-base" class="textin sm" data-ls="stupeni.api.base" value="${esc(AI.base)}" autocomplete="off" spellcheck="false">
      <label for="s-key">Ключ API</label><input id="s-key" class="textin sm" type="password" data-ls="stupeni.api.key" value="${v('stupeni.api.key')}" autocomplete="off" spellcheck="false" placeholder="ek-…">
      <div class="row"><button class="btn sm" data-act="s-models">${ui.models === 'loading' ? 'Загружаю…' : 'Загрузить список моделей'}</button>${Array.isArray(ui.models) ? `<span class="small muted">${ui.models.length} моделей</span>` : ''}</div>
      <datalist id="models">${(Array.isArray(ui.models) ? ui.models : []).map(m => `<option value="${esc(m)}">`).join('')}</datalist>
      <label for="s-main">Основная модель: проверка предложений, тексты по уровням</label><input id="s-main" class="textin sm" list="models" data-ls="stupeni.api.main" value="${v('stupeni.api.main')}" autocomplete="off" spellcheck="false" placeholder="начните вводить название">
      <label for="s-fast">Быстрая модель: карточки, переводы слов</label><input id="s-fast" class="textin sm" list="models" data-ls="stupeni.api.fast" value="${v('stupeni.api.fast')}" autocomplete="off" spellcheck="false" placeholder="если пусто — основная">
      <div class="row"><button class="btn sm" data-act="s-test">Проверить подключение</button><span class="small" id="s-test-out">${esc(ui.testOut || '')}</span></div>
    </section>
    <section class="sset">
      <h2>Сравнить модели на проверке предложения</h2>
      <p class="small muted">Напишите предложение с ошибками и сравните, как его проверят разные модели.</p>
      <label for="c-word">Слово</label><input id="c-word" class="textin sm" value="${esc(c.word)}" autocomplete="off">
      <label for="c-sent">Предложение</label><input id="c-sent" class="textin sm" value="${esc(c.sent)}" autocomplete="off" spellcheck="false">
      <label for="c-models">Модели через запятую</label><input id="c-models" class="textin sm" list="models" value="${esc(c.models)}" autocomplete="off" spellcheck="false">
      <div class="row"><button class="btn sm" data-act="c-run" ${c.running ? 'disabled' : ''}>${c.running ? 'Проверяю…' : 'Сравнить'}</button></div>
      ${c.res.length ? `<div class="cmp">${c.res.map(x => `<div class="cmpcol"><p class="clabel" lang="en">${esc(x.model)} <span class="muted tabnum">${x.ms ? (x.ms / 1000).toFixed(1) + ' с' : ''}</span></p>${x.err ? `<p class="small err">${esc(x.err)}</p>` : x.r ? resultHtmlFor(c.sent, x.r, c.word) : '<p class="small muted"><span class="spinner sm"></span></p>'}</div>`).join('')}</div>` : ''}
    </section>
    <section class="sset">
      <h2>Нагрузка в день</h2>
      <div class="row"><label for="s-new">Новых слов</label><input id="s-new" class="numin" type="number" min="0" max="20" value="${settings.newPerDay}"><label for="s-rev">Повторений</label><input id="s-rev" class="numin" type="number" min="0" max="300" value="${settings.reviewsPerDay}"></div>
      <p class="small muted">Каждое новое слово — это 3 своих предложения. При повторении трудных слов нужно написать одно предложение, для остальных — по желанию. Повторения сверх лимита переносятся на следующий день. День начинается в 4:00.</p>
    </section>
    ${renderTopicSettings()}
    <section class="sset">
      <h2>Озвучка</h2>
      ${TTS.ok && voices.length ? `<div class="row">${voiceSelect()}${rateSeg('rate')}<button class="btn sm" data-act="say" data-text="This is how your sentences will sound.">${I.spk} Проверить</button></div>`
      : `<p class="small err">В системе нет английского голоса. Установите синтезатор речи с английским языком и выберите его в настройках устройства, затем перезапустите браузер.</p>`}
    </section>
    <section class="sset">
      <h2>Синхронизация через GitHub</h2>
      <p class="small muted">Данные хранятся в одном файле в вашем закрытом репозитории. Ключ доступа хранится только на этом устройстве.</p>
      <label for="g-repo">Репозиторий (владелец/название)</label><input id="g-repo" class="textin sm" data-ls="stupeni.gh.repo" value="${v('stupeni.gh.repo')}" placeholder="username/stupeni-data" autocomplete="off" spellcheck="false">
      <label for="g-token">Ключ доступа (fine-grained token)</label><input id="g-token" class="textin sm" type="password" data-ls="stupeni.gh.token" value="${v('stupeni.gh.token')}" placeholder="github_pat_…" autocomplete="off" spellcheck="false">
      <label for="g-path">Файл в репозитории</label><input id="g-path" class="textin sm" data-ls="stupeni.gh.path" value="${esc(Sync.path)}" autocomplete="off" spellcheck="false">
      <div class="row"><button class="btn sm" data-act="sync">Синхронизировать сейчас</button><span class="small" id="sync-state">${syncStateHtml()}</span></div>
    </section>
    <section class="sset">
      <h2>Данные</h2>
      <div class="row"><button class="btn sm" data-act="exp">Сохранить копию в файл</button><label class="btn sm" for="imp-file">Загрузить из файла</label><input id="imp-file" type="file" accept="application/json,.json" hidden></div>
      <p class="small muted">Загрузка из файла добавляет слова и истории, ничего не удаляя. Так переносятся данные из старой версии «Ступеней».</p>
    </section>
  </div>`;
}
function resultHtmlFor(text, r, word) { return resultHtml({ text, r }, word); }
async function runCompare() {
  const c = ui.cmp; const models = c.models.split(',').map(s => s.trim()).filter(Boolean).slice(0, 4);
  if (!c.word.trim() || !c.sent.trim() || !models.length) { toast('Заполните слово, предложение и модели.'); return; }
  if (!AI.key) { toast('Сначала укажите ключ API.'); return; }
  c.running = true; c.res = models.map(m => ({ model: m })); render();
  const w = { word: c.word.trim() };
  await Promise.all(c.res.map(async x => {
    const t0 = performance.now();
    try {
      const text = await fetchModel(x.model, checkPrompt(w, c.sent.trim()));
      x.r = parseJSON(text); x.r.errors = Array.isArray(x.r.errors) ? x.r.errors : [];
    } catch (e) { x.err = claudeError(e); }
    x.ms = performance.now() - t0; if (ui.view === 'settings') render();
  }));
  c.running = false; if (ui.view === 'settings') render();
}
async function fetchModel(model, prompt) {
  let res;
  try {
    res = await fetch(AI.base + '/chat/completions', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + AI.key }, body: JSON.stringify({ model, messages: [{ role: 'system', content: 'You reply with a single valid JSON value and nothing else.' }, { role: 'user', content: prompt }] }) });
  } catch { throw { code: 'network' }; }
  if (!res.ok) { let m = ''; try { m = (await res.json())?.error?.message || ''; } catch { } throw { code: 'http', status: res.status, message: m }; }
  const j = await res.json(); return String(j?.choices?.[0]?.message?.content || '').replace(/<think>[\s\S]*?<\/think>/g, '');
}

/* ===== word-related actions ===== */
function wordsAct(name, a) {
  switch (name) {
    case 'rv-start': startReview(); return true;
    case 'rv-flip': if (ui.rev) { ui.rev.flipped = true; render(); } return true;
    case 'rv-open': ui.rev.sOpen = true; render(); reviewTopic(); document.getElementById('rv-in')?.focus(); return true;
    case 'rv-topic': { const w = words[ui.rev.queue[0]]; const cur = ui.rev.topic?.id; ui.rev.topic = null; pickTopic(w, ui.rev, cur ? [cur] : []); return true; }
    case 'pr-topic': { const w = words[ui.prac.id]; const cur = ui.prac.topic?.id; pickTopic(w, ui.prac, cur ? [cur] : []); return true; }
    case 'tp-rule': { const h = a.dataset.h === 'rev' ? ui.rev : ui.prac; if (h) { h.topicOpen = !h.topicOpen; render(); } return true; }
    case 'tp-all': settings.topicsOff = a.dataset.v === '1' ? [] : TOPICS.map(t => t[0]); saveSettings(); render(); return true;
    case 'rv-skip': ui.rev.sOpen = false; ui.rev.sSkip = true; render(); return true;
    case 'rv-check': checkReviewSentence(); return true;
    case 'rv-grade': gradeReview(+a.dataset.g); return true;
    case 'rv-end': ui.rev = null; ui.view = 'today'; render(); return true;
    case 'rv-say': { const w = words[ui.rev?.queue[0]]; if (w?.examples) { TTS.stop(); w.examples.forEach(s => TTS.speak(plainSent(s), { rate: TTS.rate })); } return true; }
    case 'pr-start': startPractice(a.dataset.id, !!a.dataset.extra); return true;
    case 'pr-check': checkSentence(); return true;
    case 'pr-next': { ui.prac.justChecked = false; render(); document.getElementById('pr-in')?.focus(); if (pracItems().length < PRACTICE_N) pickTopic(words[ui.prac.id], ui.prac); return true; }
    case 'pr-redo': { const items = pracItems(); ui.prac.redo = true; ui.prac.justChecked = false; ui.prac.input = items[items.length - 1].text; render(); const t = document.getElementById('pr-in'); if (t) { t.focus(); t.setSelectionRange(t.value.length, t.value.length); } return true; }
    case 'pr-cancelredo': ui.prac.redo = false; ui.prac.input = ''; ui.prac.justChecked = true; render(); return true;
    case 'pr-card': ui.prac.showCard = !ui.prac.showCard; render(); return true;
    case 'pr-finish': finishPractice(); return true;
    case 'pr-leave': { const ex = ui.prac?.extra; ui.prac = null; ui.view = ex ? 'words' : 'today'; render(); return true; }
    case 'w-open': ui.openWord = ui.openWord === a.dataset.id ? null : a.dataset.id; render();
      if (ui.openWord) { const w = words[ui.openWord]; if (w && !hasCard(w) && AI.ready()) ensureCard(w).then(render).catch(() => { }); } return true;
    case 'w-card': { const w = words[a.dataset.id]; ensureCard(w).then(render).catch(e => toast(claudeError(e))); render(); return true; }
    case 'wdel': {
      const id = a.dataset.id;
      if (ui.confirmDel !== id) { ui.confirmDel = id; render(); return true; }
      ui.confirmDel = null; Store.delWord(id); render(); updateBadge(); return true;
    }
    case 'aw-sense': ui.addw.sense = +a.dataset.i; render(); return true;
    case 'aw-cancel': ui.addw = { q: '', loading: false, err: '', res: null, sense: 0 }; render(); return true;
    case 'aw-save': {
      const aw = ui.addw; const r = aw.res; if (!r) return true; const sn = r.senses[aw.sense] || r.senses[0];
      const w = saveWord({ word: r.word, ipa: r.ipa, pos: r.pos, def: sn.def, examples: sn.examples, synonyms: sn.synonyms, collocations: sn.collocations, context: plainSent(sn.examples[0] || ''), level: ui.level, manual: true });
      ui.justAdded = w.id; ui.addw = { q: '', loading: false, err: '', res: null, sense: 0 };
      render(); document.getElementById('addw-in')?.focus(); toast('Слово «' + r.word + '» добавлено в очередь'); return true;
    }
    case 'sync': Sync.run().then(ok => { if (ok) toast('Синхронизировано'); else if (Sync.err) toast(Sync.err); else if (!Sync.ready()) toast('Укажите репозиторий и ключ в настройках.'); }); return true;
    case 's-models': ui.models = 'loading'; render(); AI.models().then(m => { ui.models = m; render(); }).catch(e => { ui.models = null; toast(claudeError(e)); render(); }); return true;
    case 's-test': {
      ui.testOut = 'Проверяю…'; render();
      Promise.all([AI.chat('Reply with the single word: OK').then(t => 'основная: ' + t.slice(0, 20)).catch(e => 'основная: ' + claudeError(e)),
      AI.chat('Reply with the single word: OK', { tier: 'quick' }).then(t => 'быстрая: ' + t.slice(0, 20)).catch(e => 'быстрая: ' + claudeError(e))])
        .then(r => { ui.testOut = r.join(' · '); render(); });
      return true;
    }
    case 'c-run': runCompare(); return true;
    case 'w-tab': ui.wtab = a.dataset.t; render(); return true;
    case 'h-filter': ui.hfilter = a.dataset.f; render(); return true;
    case 'exp': exportData(); return true;
  }
  return false;
}

/* ===== word popover ===== */
const pop = document.getElementById('pop');
let popToken = 0, popCtl = null, popData = null;
function hidePop() {
  if (!pop.hidden) { pop.hidden = true; popCtl?.abort(); popData = null; }
  document.querySelectorAll('.w.active').forEach(n => n.classList.remove('active'));
}
function placePop(el) {
  const narrow = innerWidth < 640;
  pop.classList.toggle('sheet', narrow);
  if (narrow) { pop.style.left = ''; pop.style.top = ''; return; }
  const r = el.getBoundingClientRect(); const w = pop.offsetWidth; const h = pop.offsetHeight;
  let left = r.left + scrollX + r.width / 2 - w / 2;
  left = Math.max(scrollX + 12, Math.min(left, scrollX + document.documentElement.clientWidth - w - 12));
  let top = r.bottom + scrollY + 8;
  if (r.bottom + h + 16 > innerHeight && r.top > h + 16) top = r.top + scrollY - h - 8;
  pop.style.left = left + 'px'; pop.style.top = top + 'px';
}
function showPop(el, html) { pop.innerHTML = html; pop.hidden = false; placePop(el); }
function glossHtml(g, surface, saved) {
  const head = g.phrase && norm(g.phrase) !== norm(g.lemma || surface) ? g.phrase : (g.lemma || surface);
  return `<div class="pw"><b lang="en">${esc(head)}</b>${TTS.ok ? `<button class="iconbtn" data-act="pop-say" aria-label="Произнести">${I.spk}</button>` : ''}</div>
    <p class="pmeta muted small">${esc(g.ipa || '')} ${g.pos ? `<span class="pos">${esc(g.pos)}</span>` : ''}</p>
    <p class="pru">${esc(g.ru || '')}</p>
    ${g.def ? `<p class="pdef small muted" lang="en">${esc(g.def)}</p>` : ''}
    ${g.note_ru ? `<p class="pnote small">${esc(g.note_ru)}</p>` : ''}
    <div class="psent small" id="pop-sent" hidden></div>
    <div class="row pact">
      <button class="btn sm ${saved ? '' : 'primary'}" data-act="pop-save" ${saved ? 'disabled' : ''}>${saved ? I.check + ' В словаре' : I.plus + ' В словарь'}</button>
      ${canClaude() ? `<button class="btn sm" data-act="pop-sent">Перевод предложения</button>` : ''}
    </div>`;
}
async function openGloss(el) {
  const s = cur(); if (!s) return;
  const L = ui.level; const si = +el.dataset.si; const P = parseText(s.levels[L]);
  const sentence = P.sents[si]; const surface = el.textContent;
  const same = !pop.hidden && popData && popData.el === el;
  hidePop(); if (same) return;
  el.classList.add('active');
  const token = ++popToken;
  popData = { el, sentence, si, L, surface, g: null };
  const key = `${L}|${si}|${norm(surface)}`;
  let g = s.gloss?.[key];
  if (!g && el.dataset.kv != null) {
    const v = s.extras?.[L]?.vocab?.[+el.dataset.kv];
    if (v) g = { lemma: v.word, pos: v.pos, ipa: v.ipa, ru: v.ru, def: v.def, phrase: '', note_ru: '' };
  }
  if (!g) {
    if (!canClaude()) { showPop(el, `<div class="pw"><b lang="en">${esc(surface)}</b>${TTS.ok ? `<button class="iconbtn" data-act="pop-say" aria-label="Произнести">${I.spk}</button>` : ''}</div><p class="small muted">Чтобы переводить слова, подключите API в настройках.</p>`); popData.g = { lemma: surface }; return; }
    showPop(el, `<div class="pw"><b lang="en">${esc(surface)}</b></div><p class="small muted"><span class="spinner sm" aria-hidden="true"></span> Перевожу в контексте…</p>`);
    popCtl = new AbortController();
    try {
      const r = await sampleFn.json(glossPrompt(L, surface, sentence), { modelTier: 'quick', signal: popCtl.signal, cache: { gcTime: DAY } });
      if (!r || typeof r.ru !== 'string') throw { code: 'invalid_json' };
      g = { lemma: String(r.lemma || surface), pos: String(r.pos || ''), ipa: String(r.ipa || ''), ru: r.ru, def: String(r.def || ''), phrase: String(r.phrase || ''), note_ru: String(r.note_ru || '') };
      s.gloss = s.gloss || {}; s.gloss[key] = g; saveStorySoon(s);
    } catch (e) {
      if (token !== popToken || e?.code === 'cancelled') return;
      showPop(el, `<div class="pw"><b lang="en">${esc(surface)}</b></div><p class="small err">${esc(claudeError(e))}</p>`); return;
    }
  }
  if (token !== popToken) return;
  popData.g = g;
  const head = g.phrase || g.lemma || surface;
  showPop(el, glossHtml(g, surface, !!words[wordId(head)]));
}
async function popSentence() {
  const d = popData; if (!d) return; const s = cur();
  const box = document.getElementById('pop-sent'); if (!box) return;
  const key = `${d.L}|${d.si}|__sent`;
  const cache = s ? (s.gloss = s.gloss || {}) : {};
  box.hidden = false;
  if (cache[key]) { box.textContent = cache[key]; placePop(d.el); return; }
  box.innerHTML = '<span class="spinner sm" aria-hidden="true"></span> Перевожу…'; placePop(d.el);
  try {
    const { text } = await sampleFn(`Translate this English sentence into natural Russian. Reply with only the translation.\n\n${d.sentence}`, { modelTier: 'quick', cache: { gcTime: DAY } });
    cache[key] = text.trim(); if (s) saveStorySoon(s);
    if (popData === d) { box.textContent = text.trim(); placePop(d.el); }
  } catch (e) { if (popData === d) box.textContent = claudeError(e); }
}
/* ===== actions ===== */
function act(name, a) {
  const s = cur(); const L = ui.level; const k = s ? s.id + L : '';
  switch (name) {
    case 'nav':
      stopPlayer(); TTS.stop(); ui.view = a.dataset.to; ui.confirmDel = null; ui.rev = null; ui.prac = null; render(); scrollTo(0, 0); break;
    case 'open':
      stopPlayer(true); ui.view = 'story'; ui.storyId = a.dataset.id; ui.tab = 'read'; ui.confirmDel = null; render(); scrollTo(0, 0); break;
    case 'pref':
      ui.level = a.dataset.l; LS.set('stupeni.level', ui.level); render(); break;
    case 'lvl':
      stopPlayer(true); ui.level = a.dataset.l; LS.set('stupeni.level', ui.level);
      if (a.dataset.tab) ui.tab = a.dataset.tab;
      render(); if (a.dataset.tab) scrollTo(0, 0);
      if ((ui.tab === 'vocab' || ui.tab === 'quiz') && s) startExtras(s, ui.level);
      break;
    case 'cat': ui.cat = a.dataset.c; render(); break;
    case 'tab':
      stopPlayer(); ui.tab = a.dataset.t; render();
      if ((ui.tab === 'vocab' || ui.tab === 'quiz') && s) startExtras(s, L);
      break;
    case 'del': {
      const id = a.dataset.id;
      if (ui.confirmDel !== id) { ui.confirmDel = id; render(); break; }
      ui.confirmDel = null;
      const st = getStory(id);
      if (st) { const tomb = { id, deleted: true, createdAt: st.createdAt }; stories[id] = tomb; Store.putStory(tomb); }
      render(); toast('История удалена'); break;
    }
    case 'play': togglePlay(); break;
    case 'rate': {
      TTS.rate = +a.dataset.r; LS.set('stupeni.rate', TTS.rate);
      a.parentElement.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', b === a));
      if (player.playing) { player.playing = false; togglePlay(); }
      break;
    }
    case 'say': TTS.say(a.dataset.text); break;
    case 'ex-gen': if (s) { ui.extras[k] = null; startExtras(s, L); } break;
    case 'ex-stop': ui.extras[k]?.ctl?.abort(); break;
    case 'kv-save': case 'kv-all': {
      const vs = s.extras[L].vocab; const P = parseText(s.levels[L]);
      const add = v => saveWord({ word: v.word, ru: v.ru, def: v.def, ipa: v.ipa, pos: v.pos, context: P.sents.find(x => norm(x).includes(norm(v.match))) || '', storyId: s.id, storyTitle: s.title, level: L });
      if (name === 'kv-all') vs.forEach(add); else add(vs[+a.dataset.i]);
      render(); break;
    }
    case 'qa': {
      const st = ui.quiz[k]; if (st.checked) break;
      st.answers[+a.dataset.q] = +a.dataset.o; render(); break;
    }
    case 'qmove': {
      const st = ui.quiz[k]; const ord = st.orders[+a.dataset.q]; const p = +a.dataset.p; const q = p + (+a.dataset.d);
      if (q < 0 || q >= ord.length) break;
      [ord[p], ord[q]] = [ord[q], ord[p]]; render(); break;
    }
    case 'qcheck': {
      const st = ui.quiz[k]; const quiz = s.extras[L].quiz; let score = 0;
      quiz.forEach((q, i) => {
        if (q.type === 'order') { if (st.orders[i].every((v, j) => v === j)) score++; }
        else if (st.answers[i] === q.answer) score++;
      });
      st.checked = true; st.score = score;
      s.results = s.results || {};
      const prev = s.results[L];
      if (!prev || score >= prev.score) s.results[L] = { score, total: quiz.length, at: Date.now() };
      s.quizLast = s.quizLast || {};
      s.quizLast[L] = { answers: { ...st.answers }, orders: clone(st.orders), score, at: Date.now() };
      clearTimeout(saveTimers[s.id]); s.updatedAt = Date.now(); stories[s.id] = s;
      Store.putStory(s).then(() => toast('Результат сохранён'));
      render(); break;
    }
    case 'qreset': ui.quiz[k] = newQuizState(s.extras[L].quiz); render(); break;
    case 'd-play': case 'd-slow': {
      const d = ui.dict[k]; const P = parseText(s.levels[L]);
      TTS.say(P.sents[d.i], name === 'd-slow' ? 0.65 : TTS.rate);
      document.getElementById('dict-in')?.focus(); break;
    }
    case 'd-show': ui.dict[k].show = !ui.dict[k].show; render(); break;
    case 'd-check': dictCheck(); break;
    case 'd-nav': {
      const d = ui.dict[k]; d.i += +a.dataset.d; d.val = ''; d.res = null; d.show = false; TTS.stop(); render(); break;
    }
    case 'm-hide': ui.mem[k].phase = 'recall'; ui.mem[k].vals = {}; ui.mem[k].checked = false; render(); focusMem(); break;
    case 'm-study': ui.mem[k].phase = 'study'; render(); break;
    case 'm-pct': ui.mem[k].pct = +a.dataset.p; ui.mem[k].vals = {}; ui.mem[k].checked = false; render(); focusMem(); break;
    case 'm-check': ui.mem[k].checked = true; render(); break;
    case 'm-nav': { const m = ui.mem[k]; m.i += +a.dataset.d; m.phase = 'study'; m.vals = {}; m.checked = false; render(); break; }
    case 'mode': ui.draft.mode = a.dataset.m; render(); break;
    case 'gen': startGen(); break;
    case 'gen-stop': ui.gen?.ctl?.abort(); break;
    case 'pop-say': if (popData) TTS.say(popData.g?.phrase || popData.surface); break;
    case 'pop-save': {
      const d = popData; if (!d?.g) break; const g = d.g;
      saveWord({ word: g.phrase || g.lemma || d.surface, ru: g.ru, def: g.def, ipa: g.ipa, pos: g.pos, context: d.sentence, storyId: s?.id, storyTitle: s?.title, level: d.L });
      a.innerHTML = I.check + ' В словаре'; a.disabled = true; a.classList.remove('primary'); break;
    }
    case 'pop-sent': popSentence(); a.disabled = true; break;
    default: wordsAct(name, a);
  }
}
function dictCheck() {
  const s = cur(); const k = s.id + ui.level; const d = ui.dict[k];
  const P = parseText(s.levels[ui.level]);
  d.res = lcsDiff(wordsOf(P.sents[d.i]), wordsOf(d.val));
  if (d.res.every(o => o[0] === 'eq')) d.done[d.i] = true;
  render();
}
function focusMem() { const f = document.querySelector('.memline input'); if (f) f.focus(); }

document.addEventListener('click', e => {
  const w = e.target.closest('.reader .w');
  if (w) { openGloss(w); return; }
  const a = e.target.closest('[data-act]');
  if (!a) { if (!e.target.closest('#pop')) hidePop(); return; }
  if (a.disabled) return;
  if (!a.closest('#pop') && !['say', 'rate'].includes(a.dataset.act)) hidePop();
  act(a.dataset.act, a);
});
document.addEventListener('input', e => {
  const t = e.target; const s = cur(); const k = s ? s.id + ui.level : '';
  if (t.id === 'draft') {
    ui.draft.text = t.value;
    const n = document.getElementById('draft-len');
    if (n) n.textContent = `${t.value.length.toLocaleString('ru-RU')} / 12 000 знаков${t.value.length > 12000 ? ', лишнее будет обрезано' : ''}`;
  } else if (t.id === 'topic') ui.draft.topic = t.value;
  else if (t.id === 'addw-in') ui.addw.q = t.value;
  else if (t.id === 'pr-in' && ui.prac) ui.prac.input = t.value;
  else if (t.id === 'rv-in' && ui.rev) ui.rev.sInput = t.value;
  else if (t.dataset?.ls) LS.set(t.dataset.ls, t.value.trim());
  else if (t.id === 'c-word') ui.cmp.word = t.value;
  else if (t.id === 'c-sent') ui.cmp.sent = t.value;
  else if (t.id === 'c-models') ui.cmp.models = t.value;
  else if (t.id === 'dict-in' && ui.dict[k]) ui.dict[k].val = t.value;
  else if (t.closest?.('.memline') && ui.mem[k]) ui.mem[k].vals[+t.dataset.wi] = t.value;
});
document.addEventListener('change', e => {
  const t = e.target;
  if (t.id === 'cat-sel') ui.draft.cat = t.value;
  else if (t.id === 's-new' || t.id === 's-rev') { const n = Math.max(0, Math.min(t.id === 's-new' ? 20 : 300, Math.round(+t.value || 0))); settings[t.id === 's-new' ? 'newPerDay' : 'reviewsPerDay'] = n; t.value = n; saveSettings(); updateBadge(); }
  else if (t.id === 'imp-file' && t.files?.[0]) importData(t.files[0]).then(r => { toast(`Загружено: слов ${r.nW}, текстов ${r.nS}`); render(); }).catch(() => toast('Не удалось прочитать файл.'));
  else if (t.dataset?.ls === 'stupeni.api.base' && !t.value.trim()) { LS.set('stupeni.api.base', 'https://api.electronhub.ai/v1'); t.value = AI.base; }
  else if (t.id === 'voice-sel') { TTS.voiceName = t.value; LS.set('stupeni.voice', t.value); if (player.playing) { player.playing = false; togglePlay(); } }
});
document.addEventListener('keydown', e => {
  const t = e.target;
  if (e.key === 'Escape') { hidePop(); return; }
  if (ui.view === 'review' && ui.rev && !['INPUT', 'TEXTAREA', 'SELECT'].includes(t.tagName)) {
    if (!ui.rev.flipped && (e.key === ' ' || e.key === 'Enter') && document.getElementById('rv-flip')) { e.preventDefault(); act('rv-flip', t); return; }
    if (ui.rev.flipped && /^[1-4]$/.test(e.key)) { e.preventDefault(); act('rv-grade', { dataset: { g: e.key } }); return; }
  }
  if (t.id === 'pr-in' && e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); checkSentence(); return; }
  if (t.id === 'rv-in' && e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); checkReviewSentence(); return; }
  if (e.key === 'Enter' && !e.shiftKey && t.id === 'dict-in') { e.preventDefault(); dictCheck(); return; }
  if (e.key === 'Enter' && t.closest?.('.memline')) {
    e.preventDefault();
    const ins = [...document.querySelectorAll('.memline input')]; const i = ins.indexOf(t);
    if (i < ins.length - 1) ins[i + 1].focus(); else act('m-check', t);
  }
});
document.addEventListener('submit', e => {
  if (e.target.id === 'addw-form') { e.preventDefault(); startAddWord(); }
});
addEventListener('resize', () => { if (!pop.hidden && popData?.el?.isConnected) placePop(popData.el); });

/* ===== boot ===== */
render();
(async () => {
  await Store.init(); await loadAll(); render();
  if (Sync.ready()) Sync.run();
  if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => { });
})();
