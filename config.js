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
  fund: { raised: 231.64, goal: 287430, car: 'Porsche 911 GT3 RS' },

  // Donations (page sorts them into a leaderboard by amount). Real ones from Revolut 12. 11. (70,28 EUR) + the joke base. Max 12 shown.
  donations: [
    { who: 'Lev M.', amount: 15, note: 'Za eno vožnjo ko bo.' },
    { who: 'Žan Luka P.', amount: 10, note: 'Za komplet dišavnih smrekc.' },
    { who: 'Uroš K.', amount: 6.70, note: 'Upam da dosežeš kvoto.' },
    { who: 'Izak J.', amount: 20, note: '' },
    { who: 'Martin Č.', amount: 6.70, note: '' },
    { who: 'Ana K.', amount: 5, note: '' },
    { who: 'Lovro T.', amount: 0.69, note: '' },
    { who: 'Urban K.', amount: 3.67, note: 'Rabm met še za svoj porsche.' },
    { who: 'Tanya S.', amount: 5, note: '' },
    { who: 'Matej Š.', amount: 0.67, note: 'Mau pa po mau.' },
    { who: 'Minej M.', amount: 36.24, note: '' },
    { who: 'Matic S.', amount: 6.70, note: '' },
    { who: 'Filip Č.', amount: 5, note: '' },
    { who: 'Nace K.', amount: 3, note: 'Porshe.' },
    { who: 'Julija S.', amount: 10, note: 'Vse najboljše!!!' },
    { who: 'Anonimno', amount: 3, note: 'Za ventilčke.' },
    { who: 'Aljaž I.', amount: 15, note: '' },
    { who: 'Jerneja Š.', amount: 10, note: '' },
    { who: 'Nejc K.', amount: 10.02, note: '' },
    { who: 'Ema R.', amount: 15, note: '' },
    { who: 'Rok S.', amount: 20, note: '' },
    { who: 'Junona S.', amount: 23.56, note: 'Dala sem vse, kar sem imela.' },
    { who: 'Stepan', amount: 0.69, note: 'Drobiž iz žepa.' },
    { who: 'Banka', amount: 0, note: 'Kredit zavrnjen.' },
    { who: 'Mama', amount: 0, note: 'Najprej izpiti.' }
  ],

  // "Novice" section. Newest first. Empty list hides it.
  updates: [
    { date: '12. 11.', text: 'Fundraiser je odprt. Avto zaenkrat še stoji v Stuttgartu.' }
  ]
};
