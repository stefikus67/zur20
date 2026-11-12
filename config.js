// The only file Stepan edits after deploy. No guest data here: this repo is public.
window.RSVP_CONFIG = {
  // Paste the Apps Script web app URL (ends in /exec). See DEPLOY.md step 3.
  apiUrl: 'https://script.google.com/macros/s/AKfycbz2TOvJUcwsdMF-5l74-3FbUiaE0NxQcdSfcrpp61koJvk3F0wJC4a2CYkJPYNAzcup/exec',

  // Hero slot. No file = the red 20 with the spray-painted NEED MONEY FOR PORSCHE.
  // A cut-out PNG stands in front of the 20 and replaces the paint; a JPG fills the stage.
  // heroImage: Stepan cut out, transparent PNG, portrait, at least 1400 px tall, under ~800 KB;
  //   he stands on the red-lit stage, bottom edge of the PNG = bottom of the stage.
  // heroPhoto: used only if there is no hero.png: a normal photo that fills the stage
  //   (portrait 4:5, at least 1200x1500 px, face + sign in the upper middle).
  heroImage: '',   // set to 'assets/hero.png' once the file is in site/assets/
  heroPhoto: '',   // set to 'assets/hero.jpg' once the file is in site/assets/
  heroVideo: '',   // short mp4, plays muted on loop; heroImage is used as its poster

  // Gift line: joke frame, cash only, never an amount.
  giftTitle: 'Kako prispevaš',
  giftText: 'Zbiram za Porsche. Sprejemam samo gotovino.',

  // Dress code row. Empty string hides the row.
  dressCode: 'Black & Red. Črna je obvezna, rdeča je za tiste, ki si upajo.',

  // "Vseeno prispevam" button, shown only after "Ne morem". Paste your revolut.me link.
  // Stays hidden until it starts with https://revolut.me/
  revolutUrl: 'https://revolut.me/stepan_privalov',

  // The joke progress bar. Bump "raised" for the "fundraiser update" DM.
  fund: { raised: 8.69, goal: 287430, car: 'Porsche 911 GT3 RS' },

  // Joke donations list (amount 0 is fine). Max 8 shown.
  donations: [
    { who: 'Filip Čede', amount: 5, note: 'Hvala!' },
    { who: 'Anonimno', amount: 3, note: 'Za ventilčke.' },
    { who: 'Stepan', amount: 0.69, note: 'Drobiž iz žepa.' },
    { who: 'Banka', amount: 0, note: 'Kredit zavrnjen.' },
    { who: 'Mama', amount: 0, note: 'Najprej izpiti.' }
  ],

  // "Novice" section. Newest first. Empty list hides it.
  updates: [
    { date: '12. 11.', text: 'Fundraiser je odprt. Avto zaenkrat še stoji v Stuttgartu.' }
  ]
};
