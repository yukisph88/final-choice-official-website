// Domestic helper (maid) pages. No prices, warranty terms or processing times are stated here because
// they are not yet confirmed for the combined site (see CONFIRMATIONS.md). No candidate details are published.
import type { PageSet, Block } from './types';
import { SRC, SRC_BM } from './types';

const hero = { src: 'images/training/training-table-800.webp', src2: 'images/training/training-table-1280.webp', alt: 'Final Choice domestic helper trainees in branded aprons presenting dishes at a training table in the Kuala Lumpur office', w: 1280, h: 960 };

const steps8 = [
  { t: 'Consultation', d: 'Tell us about your household, the main duties and your preferences.' },
  { t: 'Candidate matching', d: 'We shortlist helpers whose skills and experience fit your needs.' },
  { t: 'Biodata review', d: 'You review the shortlisted biodata and ask questions.' },
  { t: 'Interview', d: 'You interview your preferred candidate, usually online.' },
  { t: 'Documentation', d: 'We help you prepare the employer documents and contract.' },
  { t: 'Application and approval', d: 'We submit through the relevant process and follow it up. Approval is decided by the authorities.' },
  { t: 'Arrival and orientation', d: 'Arrival, medical screening and handover arrangements, with an orientation for your helper.' },
  { t: 'Follow-up support', d: 'Assistance after placement, including permit and contract renewal and support under your agreement terms.' },
];
const steps8bm = [
  { t: 'Perundingan', d: 'Ceritakan tentang isi rumah anda, tugas utama dan pilihan anda.' },
  { t: 'Pemadanan calon', d: 'Kami menyenarai pendek pembantu yang kemahiran dan pengalamannya sesuai dengan keperluan anda.' },
  { t: 'Semakan biodata', d: 'Anda menyemak biodata yang disenarai pendek dan bertanya soalan.' },
  { t: 'Temu duga', d: 'Anda menemu duga calon pilihan anda, biasanya secara dalam talian.' },
  { t: 'Dokumentasi', d: 'Kami membantu anda menyediakan dokumen majikan dan kontrak.' },
  { t: 'Permohonan dan kelulusan', d: 'Kami menghantar melalui proses berkaitan dan menyusulinya. Kelulusan diputuskan oleh pihak berkuasa.' },
  { t: 'Ketibaan dan orientasi', d: 'Pengaturan ketibaan, pemeriksaan perubatan dan penyerahan, bersama orientasi untuk pembantu anda.' },
  { t: 'Sokongan susulan', d: 'Bantuan selepas penempatan, termasuk pembaharuan permit dan kontrak serta sokongan mengikut terma perjanjian anda.' },
];

const biodataNote: Block = {
  h2: 'About privacy',
  paras: ['A helper’s personal details, photograph and biodata are shared only where the candidate has agreed and for a genuine hiring enquiry. We do not publish passport numbers, and we ask employers not to send ID or passport copies in an open chat message.'],
};

export const maidPages: PageSet = {
  // ---------------------------------------------------------------------------------------------
  maid: {
    en: {
      title: 'Maid Services & Maid Agency Malaysia | Final Choice',
      description: 'Licensed agency (JTKSM 483) in Kuala Lumpur helping Malaysian families hire Indonesian and Filipino domestic helpers: biodata, interviews, documents and renewals.',
      h1: 'Maid Services in Malaysia: Hire Indonesian and Filipino Domestic Helpers',
      eyebrow: 'For Families & Households',
      lead: 'Final Choice helps Malaysian families find a suitable Indonesian or Filipino domestic helper and guides you through every step: biodata, interview, documents, arrival and after-placement support.',
      image: hero,
      wa: 'Hello Final Choice, I would like to enquire about hiring a domestic helper.',
      blocks: [
        { h2: 'Maid services', cards: [
          { icon: 'users', t: 'Indonesian maid placement', d: 'Indonesian domestic helpers matched to your household.', to: 'maidIndonesian' },
          { icon: 'globe', t: 'Filipino maid placement', d: 'Filipino domestic helpers matched to your household.', to: 'maidFilipino' },
          { icon: 'file', t: 'Maid biodata enquiry', d: 'Request biodata for helpers who suit your needs.', to: 'maidBiodata' },
          { icon: 'baby', t: 'Childcare support', d: 'Helpers with experience caring for babies and children.', to: 'maidChildcare' },
          { icon: 'elderly', t: 'Elderly care support', d: 'Helpers experienced in caring for seniors.', to: 'maidElderly' },
          { icon: 'cooking', t: 'Housekeeping and cooking', d: 'Daily household duties, including cooking, subject to the helper’s confirmed skills.' },
          { icon: 'refresh', t: 'Permit and contract renewal', d: 'Reminders and paperwork for renewals.', to: 'maidRenewal' },
          { icon: 'handshake', t: 'After-placement assistance', d: 'Support after your helper starts, and replacement support subject to your agreement terms.' },
        ] },
        { h2: 'How hiring a domestic helper works', id: 'process', tint: true, steps: steps8, note: 'Steps and timing vary with each application and current requirements. We explain what applies to you at the consultation.' },
        { h2: 'Choosing between Indonesian and Filipino helpers', paras: ['Both nationalities are placed through different procedures and have different typical strengths, such as language, cooking style and religious background. The right choice is the helper whose skills and experience match your household, regardless of nationality. We can discuss both with you before you decide.'], note: 'These are general tendencies, not rules. Each helper is an individual; the biodata and the interview tell you more than nationality does.' },
        { h2: 'Looking after the helper too', paras: ['A good placement works for both sides. We encourage clear expectations about duties, rest days and communication from the start, and we provide orientation for helpers before handover.'] },
        { h2: 'Employer requirements', paras: ['Employers generally need to meet eligibility and documentation requirements set by the authorities. We explain the current ones at the consultation, so you know what to prepare.'], sources: [SRC.imi, SRC.fomema, SRC.perkeso] },
        biodataNote,
      ],
      faq: [
        { q: 'How do I hire a domestic helper in Malaysia?', a: 'Start with a consultation about your household. We then share suitable biodata, you interview your preferred candidate, and we guide you through the employer documents, the application and the helper’s arrival and medical screening. We explain the current steps and eligibility checks that apply to you.' },
        { q: 'Can I see biodata before I decide?', a: 'Yes. Ask us for available biodata that fits your needs. We share biodata only with genuine employer enquiries and only for candidates who have agreed.' },
        { q: 'Do you provide replacement if the helper does not work out?', a: 'Replacement support is available subject to the terms of your agreement. Ask your consultant for the terms that apply to you before you sign.' },
        { q: 'Is Final Choice a licensed agency?', a: 'Yes. Agensi Pekerjaan Final Choice Sdn Bhd (201201028954 / 1013441-H) holds private employment agency licence JTKSM 483 (Category C).' },
      ],
      related: ['maidIndonesian', 'maidFilipino', 'maidBiodata', 'maidProcess', 'fw'],
      form: true,
    },
    bm: {
      title: 'Perkhidmatan Pembantu Rumah Malaysia | Indonesia & Filipina',
      description: 'Agensi berlesen (JTKSM 483) di Kuala Lumpur: pembantu rumah Indonesia dan Filipina, biodata, temu duga, dokumen dan pembaharuan.',
      h1: 'Perkhidmatan Pembantu Rumah di Malaysia: Indonesia dan Filipina',
      eyebrow: 'Untuk keluarga dan isi rumah',
      lead: 'Final Choice membantu keluarga Malaysia mencari pembantu rumah Indonesia atau Filipina yang sesuai dan membimbing anda pada setiap langkah: biodata, temu duga, dokumen, ketibaan dan sokongan selepas penempatan.',
      image: hero,
      wa: 'Helo Final Choice, saya ingin bertanya tentang mengambil pembantu rumah.',
      blocks: [
        { h2: 'Perkhidmatan pembantu rumah', cards: [
          { icon: 'users', t: 'Penempatan pembantu rumah Indonesia', d: 'Pembantu rumah Indonesia dipadankan dengan isi rumah anda.', to: 'maidIndonesian' },
          { icon: 'globe', t: 'Penempatan pembantu rumah Filipina', d: 'Pembantu rumah Filipina dipadankan dengan isi rumah anda.', to: 'maidFilipino' },
          { icon: 'file', t: 'Pertanyaan biodata', d: 'Minta biodata pembantu yang sesuai dengan keperluan anda.', to: 'maidBiodata' },
          { icon: 'baby', t: 'Sokongan jaga anak', d: 'Pembantu berpengalaman menjaga bayi dan kanak-kanak.' },
          { icon: 'elderly', t: 'Sokongan jaga warga emas', d: 'Pembantu berpengalaman menjaga warga emas.' },
          { icon: 'cooking', t: 'Kerja rumah dan memasak', d: 'Tugas harian rumah termasuk memasak, tertakluk kepada kemahiran pembantu yang disahkan.' },
          { icon: 'refresh', t: 'Pembaharuan permit dan kontrak', d: 'Peringatan dan urusan dokumen untuk pembaharuan.' },
          { icon: 'handshake', t: 'Bantuan selepas penempatan', d: 'Sokongan selepas pembantu mula bekerja, dan sokongan penggantian tertakluk kepada terma perjanjian anda.' },
        ] },
        { h2: 'Bagaimana pengambilan pembantu rumah berfungsi', id: 'process', tint: true, steps: steps8bm, note: 'Langkah dan masa berbeza mengikut setiap permohonan dan keperluan semasa. Kami menerangkan apa yang terpakai kepada anda semasa perundingan.' },
        { h2: 'Memilih antara pembantu Indonesia dan Filipina', paras: ['Kedua-dua kewarganegaraan ditempatkan melalui prosedur berbeza dan mempunyai kekuatan lazim yang berbeza, seperti bahasa, gaya memasak dan latar belakang agama. Pilihan yang betul ialah pembantu yang kemahiran dan pengalamannya sepadan dengan isi rumah anda, tanpa mengira kewarganegaraan.'], note: 'Ini kecenderungan umum, bukan peraturan. Setiap pembantu ialah individu; biodata dan temu duga memberitahu lebih banyak daripada kewarganegaraan.' },
        { h2: 'Keperluan majikan', paras: ['Majikan lazimnya perlu memenuhi syarat kelayakan dan dokumentasi yang ditetapkan pihak berkuasa. Kami menerangkan keperluan semasa semasa perundingan supaya anda tahu apa yang perlu disediakan.'], sources: [SRC_BM.imi, SRC_BM.fomema, SRC_BM.perkeso] },
        { h2: 'Tentang privasi', paras: ['Butiran peribadi, gambar dan biodata pembantu hanya dikongsi apabila calon telah bersetuju dan untuk pertanyaan pengambilan yang sebenar. Kami tidak menerbitkan nombor pasport, dan kami meminta majikan tidak menghantar salinan kad pengenalan atau pasport dalam mesej sembang terbuka.'] },
      ],
      faq: [
        { q: 'Bagaimana mengambil pembantu rumah di Malaysia?', a: 'Mulakan dengan perundingan tentang isi rumah anda. Kami kemudian berkongsi biodata yang sesuai, anda menemu duga calon pilihan anda, dan kami membimbing anda melalui dokumen majikan, permohonan serta ketibaan dan pemeriksaan perubatan pembantu. Kami menerangkan langkah dan semakan kelayakan semasa yang terpakai kepada anda.' },
        { q: 'Bolehkah saya melihat biodata sebelum membuat keputusan?', a: 'Boleh. Minta biodata yang ada dan sesuai dengan keperluan anda. Kami berkongsi biodata hanya dengan pertanyaan majikan yang sebenar dan hanya untuk calon yang telah bersetuju.' },
        { q: 'Adakah anda menyediakan penggantian jika pembantu tidak sesuai?', a: 'Sokongan penggantian tersedia tertakluk kepada terma perjanjian anda. Tanya perunding anda tentang terma yang terpakai sebelum anda menandatangani.' },
      ],
      related: ['maidIndonesian', 'maidFilipino', 'maidBiodata', 'maidProcess'],
      form: true,
    },
  },

  // ---------------------------------------------------------------------------------------------
  maidIndonesian: {
    en: {
      title: 'Indonesian Maid Malaysia | Hire Indonesian Helper | Final Choice',
      description: 'Hire an Indonesian domestic helper in Malaysia through Final Choice: matching, biodata, interview, documents and after-placement support from a licensed agency.',
      h1: 'Indonesian Maid in Malaysia: Hire an Indonesian Domestic Helper',
      eyebrow: 'Domestic helper placement',
      lead: 'Many Malaysian families choose Indonesian helpers for shared language and cultural familiarity. Final Choice matches your household with a suitable candidate and guides you through the Indonesian placement process.',
      wa: 'Hello Final Choice, I would like to enquire about an Indonesian domestic helper.',
      blocks: [
        { h2: 'What to consider when choosing an Indonesian helper', bullets: ['Language: many Indonesian helpers can communicate easily in Malay', 'Experience: caring for children, elderly parents or both', 'Cooking and household skills, as confirmed in the biodata and interview', 'Religion and dietary practices that matter to your household', 'Whether the helper has worked overseas before'], note: 'Skills listed in a biodata are the candidate’s declared skills. The interview is where you confirm what she can actually do for your household.' },
        { h2: 'How the process works', steps: steps8, note: 'Indonesian placements follow procedures agreed between Malaysia and Indonesia. Your consultant explains the current steps and eligibility checks that apply to your application.' },
        { h2: 'Biodata and privacy', paras: ['Ask us for available Indonesian biodata that matches your needs. Biodata is shared only with genuine employer enquiries and only for candidates who have agreed to it.'] },
        { h2: 'Official sources', sources: [SRC.imi, SRC.fomema, SRC.perkeso] },
      ],
      faq: [
        { q: 'How do I hire an Indonesian maid in Malaysia?', a: 'Tell our consultant about your household, review suitable biodata, interview your preferred candidate, then we guide you through the employer documents, the application and the helper’s arrival, medical screening and handover.' },
        { q: 'Can I choose my helper?', a: 'Yes. You review shortlisted biodata and interview your preferred candidate before deciding.' },
        { q: 'Can you guarantee how long the process takes?', a: 'No. Timing depends on approvals, documents and arrival arrangements. We explain the expected steps for your case.' },
      ],
      related: ['maidFilipino', 'maidBiodata', 'maidProcess', 'maid'],
      form: true,
    },
    bm: {
      title: 'Pembantu Rumah Indonesia Malaysia | Final Choice',
      description: 'Ambil pembantu rumah Indonesia di Malaysia melalui Final Choice: pemadanan, biodata, temu duga, dokumen dan sokongan selepas penempatan daripada agensi berlesen.',
      h1: 'Pembantu Rumah Indonesia di Malaysia: Ambil Pembantu Rumah Indonesia',
      eyebrow: 'Penempatan pembantu rumah',
      lead: 'Ramai keluarga Malaysia memilih pembantu Indonesia kerana bahasa dan budaya yang hampir. Final Choice memadankan isi rumah anda dengan calon yang sesuai dan membimbing anda melalui proses penempatan Indonesia.',
      wa: 'Helo Final Choice, saya ingin bertanya tentang pembantu rumah Indonesia.',
      blocks: [
        { h2: 'Perkara untuk difikirkan semasa memilih pembantu Indonesia', bullets: ['Bahasa: ramai pembantu Indonesia boleh berkomunikasi dengan mudah dalam bahasa Melayu', 'Pengalaman: menjaga kanak-kanak, ibu bapa warga emas atau kedua-duanya', 'Kemahiran memasak dan kerja rumah, seperti yang disahkan dalam biodata dan temu duga', 'Agama dan amalan pemakanan yang penting kepada isi rumah anda', 'Sama ada pembantu pernah bekerja di luar negara'], note: 'Kemahiran dalam biodata ialah kemahiran yang diisytiharkan calon. Temu duga ialah tempat anda mengesahkan apa yang boleh dilakukannya untuk isi rumah anda.' },
        { h2: 'Bagaimana prosesnya', steps: steps8bm, note: 'Penempatan Indonesia mengikut prosedur yang dipersetujui antara Malaysia dan Indonesia. Perunding anda menerangkan langkah dan semakan kelayakan semasa yang terpakai.' },
        { h2: 'Sumber rasmi', sources: [SRC_BM.imi, SRC_BM.fomema, SRC_BM.perkeso] },
      ],
      faq: [
        { q: 'Bagaimana mengambil pembantu rumah Indonesia di Malaysia?', a: 'Beritahu perunding kami tentang isi rumah anda, semak biodata yang sesuai, temu duga calon pilihan anda, kemudian kami membimbing anda melalui dokumen majikan, permohonan serta ketibaan, pemeriksaan perubatan dan penyerahan pembantu.' },
        { q: 'Bolehkah saya memilih pembantu saya?', a: 'Boleh. Anda menyemak biodata yang disenarai pendek dan menemu duga calon pilihan anda sebelum membuat keputusan.' },
      ],
      related: ['maidFilipino', 'maidBiodata', 'maid'],
      form: true,
    },
  },

  maidFilipino: {
    en: {
      title: 'Filipino Maid Malaysia | Hire Filipino Helper | Final Choice',
      description: 'Hire a Filipino domestic helper in Malaysia through Final Choice: matching, biodata, interview, documents and after-placement support from a licensed agency.',
      h1: 'Filipino Maid in Malaysia: Hire a Filipino Domestic Helper',
      eyebrow: 'Domestic helper placement',
      lead: 'Families who want a helper comfortable communicating in English often consider Filipino candidates. Final Choice matches your household with a suitable helper and guides you through the Filipino placement process.',
      wa: 'Hello Final Choice, I would like to enquire about a Filipino domestic helper.',
      blocks: [
        { h2: 'What to consider when choosing a Filipino helper', bullets: ['Language: most Filipino helpers speak English, which suits households that use English at home', 'Experience with children, elderly care or both', 'Cooking and household skills, as confirmed in the biodata and interview', 'Previous overseas work experience', 'Terms of the employment contract, which are reviewed under the Philippine side’s requirements'], note: 'Biodata lists declared skills. Use the interview to confirm them for your household.' },
        { h2: 'How the process works', steps: steps8, note: 'Filipino placements involve contract and documentation requirements on the Philippine side as well as in Malaysia. Your consultant explains the current requirements that apply to your application.' },
        { h2: 'Biodata and privacy', paras: ['Ask us for available Filipino biodata that matches your needs. Biodata is shared only with genuine employer enquiries and only for candidates who have agreed to it.'] },
        { h2: 'Official sources', sources: [SRC.imi, SRC.fomema, SRC.perkeso] },
      ],
      faq: [
        { q: 'How do I hire a Filipino maid in Malaysia?', a: 'Tell our consultant about your household, review suitable biodata, interview your preferred candidate, then we guide you through the contract, employer documents, application and the helper’s arrival, medical screening and handover.' },
        { q: 'Do Filipino helpers speak English?', a: 'Most do, though ability varies. Use the interview to check how comfortably the candidate communicates with your family.' },
      ],
      related: ['maidIndonesian', 'maidBiodata', 'maidProcess', 'maid'],
      form: true,
    },
    bm: {
      title: 'Pembantu Rumah Filipina Malaysia | Final Choice',
      description: 'Ambil pembantu rumah Filipina di Malaysia melalui Final Choice: pemadanan, biodata, temu duga, dokumen dan sokongan selepas penempatan daripada agensi berlesen.',
      h1: 'Pembantu Rumah Filipina di Malaysia: Ambil Pembantu Rumah Filipina',
      eyebrow: 'Penempatan pembantu rumah',
      lead: 'Keluarga yang mahukan pembantu yang selesa berkomunikasi dalam bahasa Inggeris sering mempertimbangkan calon Filipina. Final Choice memadankan isi rumah anda dengan pembantu yang sesuai dan membimbing anda melalui proses penempatan Filipina.',
      wa: 'Helo Final Choice, saya ingin bertanya tentang pembantu rumah Filipina.',
      blocks: [
        { h2: 'Perkara untuk difikirkan semasa memilih pembantu Filipina', bullets: ['Bahasa: kebanyakan pembantu Filipina bertutur bahasa Inggeris, sesuai untuk isi rumah yang menggunakan bahasa Inggeris', 'Pengalaman menjaga anak, warga emas atau kedua-duanya', 'Kemahiran memasak dan kerja rumah, seperti yang disahkan dalam biodata dan temu duga', 'Pengalaman bekerja di luar negara sebelum ini'], note: 'Biodata menyenaraikan kemahiran yang diisytiharkan. Gunakan temu duga untuk mengesahkannya bagi isi rumah anda.' },
        { h2: 'Bagaimana prosesnya', steps: steps8bm, note: 'Penempatan Filipina melibatkan keperluan kontrak dan dokumentasi di pihak Filipina serta di Malaysia. Perunding anda menerangkan keperluan semasa yang terpakai.' },
        { h2: 'Sumber rasmi', sources: [SRC_BM.imi, SRC_BM.fomema, SRC_BM.perkeso] },
      ],
      faq: [
        { q: 'Bagaimana mengambil pembantu rumah Filipina di Malaysia?', a: 'Beritahu perunding kami tentang isi rumah anda, semak biodata yang sesuai, temu duga calon pilihan anda, kemudian kami membimbing anda melalui kontrak, dokumen majikan, permohonan serta ketibaan, pemeriksaan perubatan dan penyerahan pembantu.' },
      ],
      related: ['maidIndonesian', 'maidBiodata', 'maid'],
      form: true,
    },
  },

  // ---------------------------------------------------------------------------------------------
  maidBiodata: {
    en: {
      title: 'Maid Biodata Malaysia | Request Helper Biodata | Final Choice',
      description: 'Request Indonesian or Filipino maid biodata in Malaysia. Final Choice shares biodata with genuine employer enquiries and protects candidate privacy.',
      h1: 'Maid Biodata: Request Available Domestic Helper Profiles',
      eyebrow: 'Domestic helper biodata',
      lead: 'A biodata sheet summarises a helper’s background, languages, experience and skills. Tell us what your household needs and we will share suitable biodata.',
      wa: 'Hello Final Choice, I would like to request available maid biodata. My household needs: ',
      blocks: [
        { h2: 'See existing biodata', paras: ['Our maid biodata directory is maintained on our existing maid website: use the View Maid Biodata button above to browse the profiles currently published there. Or tell us what you need and we will send a short list that fits.'], },
        { h2: 'What a biodata sheet usually shows', bullets: ['Age, nationality and marital status', 'Languages spoken', 'Work experience and the countries worked in', 'Declared skills such as childcare, elderly care, cooking and housekeeping', 'Our interview assessment notes'], note: 'Biodata lists declared skills. Confirm what matters most at the interview.' },
        { h2: 'How to request', steps: [
          { t: 'Tell us your needs', d: 'Who needs care, the main duties, nationality preference and any religious or dietary needs.' },
          { t: 'We shortlist', d: 'We share suitable biodata with you.' },
          { t: 'You review and ask questions', d: 'Ask us anything about a candidate before you decide.' },
          { t: 'Interview', d: 'Interview your preferred candidate.' },
        ] },
        biodataNote,
      ],
      faq: [
        { q: 'Is there a fee to view biodata?', a: 'Please ask your consultant about any applicable terms before you proceed.' },
        { q: 'Can I get biodata sent by WhatsApp?', a: 'Yes, once we have spoken with you about your needs. We share biodata only with genuine employer enquiries.' },
      ],
      related: ['maidIndonesian', 'maidFilipino', 'maidProcess', 'maid'],
      form: true,
    },
    bm: {
      title: 'Biodata Pembantu Rumah Malaysia | Final Choice',
      description: 'Minta biodata pembantu rumah Indonesia atau Filipina di Malaysia. Final Choice berkongsi biodata dengan pertanyaan majikan yang sebenar dan melindungi privasi calon.',
      h1: 'Biodata Pembantu Rumah: Minta Profil Pembantu Yang Ada',
      eyebrow: 'Biodata pembantu rumah',
      lead: 'Helaian biodata meringkaskan latar belakang, bahasa, pengalaman dan kemahiran pembantu. Beritahu kami keperluan isi rumah anda dan kami akan berkongsi biodata yang sesuai.',
      wa: 'Helo Final Choice, saya ingin meminta biodata pembantu rumah yang ada. Keperluan isi rumah saya: ',
      blocks: [
        { h2: 'Lihat biodata sedia ada', paras: ['Direktori biodata pembantu rumah kami disenggara di laman web agensi pembantu rumah kami yang sedia ada. Buka untuk melihat profil yang diterbitkan di sana.'] },
        { h2: 'Apa yang biasanya ditunjukkan dalam biodata', bullets: ['Umur, kewarganegaraan dan status perkahwinan', 'Bahasa yang dituturkan', 'Pengalaman kerja dan negara tempat bekerja', 'Kemahiran yang diisytiharkan seperti jaga anak, jaga warga emas, memasak dan kerja rumah', 'Nota penilaian temu duga kami'], note: 'Biodata menyenaraikan kemahiran yang diisytiharkan. Sahkan perkara paling penting semasa temu duga.' },
        { h2: 'Tentang privasi', paras: ['Butiran peribadi, gambar dan biodata pembantu hanya dikongsi apabila calon telah bersetuju dan untuk pertanyaan pengambilan yang sebenar. Kami tidak menerbitkan nombor pasport.'] },
      ],
      faq: [
        { q: 'Bolehkah biodata dihantar melalui WhatsApp?', a: 'Boleh, setelah kami berbincang dengan anda tentang keperluan anda. Kami berkongsi biodata hanya dengan pertanyaan majikan yang sebenar.' },
      ],
      related: ['maidIndonesian', 'maidFilipino', 'maid'],
      form: true,
    },
  },

  // ---------------------------------------------------------------------------------------------
  maidProcess: {
    en: {
      title: 'Maid Hiring Process Malaysia | Step by Step | Final Choice',
      description: 'The step-by-step process of hiring a domestic helper in Malaysia, from consultation and biodata to interview, documents, arrival and after-placement support.',
      h1: 'The Maid Hiring Process in Malaysia, Step by Step',
      eyebrow: 'How it works',
      lead: 'Hiring a domestic helper involves choosing the right person and completing the paperwork correctly. Here is how the process generally works with Final Choice.',
      wa: 'Hello Final Choice, I would like to start the process of hiring a domestic helper.',
      blocks: [
        { h2: 'Eight steps from first enquiry to follow-up', steps: steps8, note: 'Steps and timing vary and are subject to current requirements. Approval is decided by the relevant authorities and cannot be guaranteed.' },
        { h2: 'What employers should prepare', paras: ['Requirements are set by the authorities and can change, so we confirm the current list for you. Typically employers should expect to provide:'], bullets: ['Employer identification details', 'Information about the household and the helper’s intended duties', 'Documents showing the employer meets the eligibility requirements', 'Signature on the employment contract and application forms'], note: 'This is a general guide only. Do not send ID copies in an open chat message; we will tell you how to share them safely.' },
        { h2: 'After the helper arrives', paras: ['Arrival, medical screening and handover are arranged as part of the placement. Helpers receive an orientation, and we remain available for questions during the early weeks, and for permit and contract renewal later.'] },
        { h2: 'Official sources', sources: [SRC.imi, SRC.fomema, SRC.perkeso] },
      ],
      faq: [
        { q: 'How long does the whole process take?', a: 'There is no fixed timeline. It depends on candidate availability, approvals, documents and arrival arrangements. We explain the expected steps for your case.' },
        { q: 'What if I change my mind after the interview?', a: 'Please ask your consultant about the terms that apply before you sign any agreement.' },
      ],
      related: ['maidIndonesian', 'maidFilipino', 'maidBiodata', 'maid'],
      form: true,
    },
    bm: {
      title: 'Proses Mengambil Pembantu Rumah Malaysia | Final Choice',
      description: 'Proses langkah demi langkah mengambil pembantu rumah di Malaysia, daripada perundingan dan biodata hingga temu duga, dokumen, ketibaan dan sokongan selepas penempatan.',
      h1: 'Proses Mengambil Pembantu Rumah di Malaysia, Langkah Demi Langkah',
      eyebrow: 'Bagaimana ia berfungsi',
      lead: 'Mengambil pembantu rumah melibatkan memilih orang yang tepat dan melengkapkan dokumen dengan betul. Beginilah proses ini lazimnya berjalan bersama Final Choice.',
      wa: 'Helo Final Choice, saya ingin memulakan proses mengambil pembantu rumah.',
      blocks: [
        { h2: 'Lapan langkah daripada pertanyaan pertama hingga susulan', steps: steps8bm, note: 'Langkah dan masa berbeza dan tertakluk kepada keperluan semasa. Kelulusan diputuskan oleh pihak berkuasa yang berkaitan dan tidak boleh dijamin.' },
        { h2: 'Apa yang perlu disediakan majikan', paras: ['Keperluan ditetapkan pihak berkuasa dan boleh berubah, jadi kami mengesahkan senarai semasa untuk anda. Lazimnya majikan perlu menyediakan:'], bullets: ['Butiran pengenalan majikan', 'Maklumat tentang isi rumah dan tugas yang dirancang untuk pembantu', 'Dokumen yang menunjukkan majikan memenuhi syarat kelayakan', 'Tandatangan pada kontrak pekerjaan dan borang permohonan'], note: 'Ini panduan umum sahaja. Jangan hantar salinan kad pengenalan dalam mesej sembang terbuka.' },
        { h2: 'Sumber rasmi', sources: [SRC_BM.imi, SRC_BM.fomema, SRC_BM.perkeso] },
      ],
      faq: [
        { q: 'Berapa lama keseluruhan proses?', a: 'Tiada tempoh tetap. Ia bergantung kepada ketersediaan calon, kelulusan, dokumen dan pengaturan ketibaan. Kami menerangkan langkah dijangka untuk kes anda.' },
      ],
      related: ['maidIndonesian', 'maidFilipino', 'maid'],
      form: true,
    },
  },

  // ---------------------------------------------------------------------------------------------
  maidRenewal: {
    en: {
      title: 'Maid Permit Renewal Malaysia | Final Choice',
      description: 'Maid permit and contract renewal in Malaysia: why to plan early, what is usually involved and how Final Choice helps employers renew a domestic helper’s permit.',
      h1: 'Maid Permit and Contract Renewal in Malaysia',
      eyebrow: 'Maid services',
      lead: 'A domestic helper’s work permit and employment contract eventually need renewing. Final Choice helps employers plan ahead and prepare the paperwork so there is no gap.',
      wa: 'Hello Final Choice, I would like help renewing my domestic helper’s permit.',
      blocks: [
        { h2: 'Plan ahead', paras: ['Renewal usually involves more than one step and more than one party, for example a medical examination, insurance and employer or helper documents. Because each step depends on another, starting early keeps a short delay from becoming a lapse.', 'Tell us when your helper’s permit expires and we will advise on timing for your case.'] },
        { h2: 'How we help', bullets: ['Remind you of upcoming renewal dates', 'Explain what is currently required for your helper’s nationality', 'Prepare and check renewal documents', 'Coordinate the steps and follow up, where applicable', 'Help with contract extension paperwork'], note: 'Requirements change and approval is decided by the relevant authorities. We confirm the current process with you for each renewal.' },
        { h2: 'Official sources', sources: [SRC.imi, SRC.fomema, SRC.perkeso] },
      ],
      faq: [
        { q: 'Can you renew the permit of a helper I did not hire through you?', a: 'In many cases yes, subject to documents available and current requirements. Send us the details.' },
        { q: 'Can I renew the contract and keep the same helper?', a: 'That is the purpose of renewal, subject to eligibility, the helper’s agreement and current requirements.' },
      ],
      related: ['maidProcess', 'maid'],
      form: true,
    },
  },

  maidChildcare: {
    en: {
      title: 'Maid for Childcare Malaysia | Nanny Helper | Final Choice',
      description: 'Find a domestic helper with childcare experience in Malaysia: what to look for, questions to ask at interview and how Final Choice matches helpers to families.',
      h1: 'Domestic Helper for Childcare in Malaysia',
      eyebrow: 'Childcare support',
      lead: 'A helper who looks after children becomes part of your family routine. Final Choice helps you shortlist candidates with relevant childcare experience and prepare the right questions for the interview.',
      wa: 'Hello Final Choice, I am looking for a domestic helper to help with childcare.',
      blocks: [
        { h2: 'What to look for', bullets: ['Experience with the age group you have, such as newborn, toddler or school age', 'Comfort with feeding, bathing and bedtime routines', 'Patience, and how she handles a crying or unwell child', 'Language she can use with your children', 'Willingness to follow your household’s rules on screen time, food and discipline'], note: 'A helper’s childcare experience is declared in her biodata. The interview is where you test it.' },
        { h2: 'Questions to ask at interview', bullets: ['What ages of children have you looked after?', 'What would you do if a child has a fever at night?', 'How do you handle a child who refuses to eat?', 'What do you do when a child cries and will not stop?', 'Are you comfortable with a baby, if I have one?'] },
        { h2: 'Set clear expectations early', paras: ['Be specific about duties, working hours and rest days. If you also need housekeeping, say so; a helper hired mainly for childcare is not the same as one hired for general housework. Clear expectations at the start prevent most misunderstandings later.'], sources: [SRC.imi] },
      ],
      faq: [
        { q: 'Can a helper do childcare and housekeeping?', a: 'Many do both, but workload matters. Tell us your full list of duties so we can match a helper whose experience fits.' },
      ],
      related: ['maidElderly', 'maidBiodata', 'maidIndonesian', 'maidFilipino', 'maid'],
      form: true,
    },
  },

  maidElderly: {
    en: {
      title: 'Maid for Elderly Care Malaysia | Caregiver Helper | Final Choice',
      description: 'Find a domestic helper with elderly care experience in Malaysia: what to ask, what a helper can and cannot do, and how Final Choice matches helpers to your family.',
      h1: 'Domestic Helper for Elderly Care in Malaysia',
      eyebrow: 'Elderly care support',
      lead: 'Caring for an elderly parent at home takes patience and practical skill. Final Choice helps you shortlist helpers with relevant experience and be clear about what the role involves.',
      wa: 'Hello Final Choice, I am looking for a domestic helper to help care for an elderly family member.',
      blocks: [
        { h2: 'What elderly care by a domestic helper usually covers', bullets: ['Help with daily routines such as meals, bathing and moving around the home', 'Reminding the person to take medicine, as you direct', 'Companionship and keeping an eye on safety', 'Light housekeeping and cooking suited to the person’s diet'], note: 'A domestic helper is not a trained nurse. If your family member needs skilled nursing care, such as wound care or tube feeding, speak to a healthcare professional about the right arrangement.' },
        { h2: 'Questions to ask at interview', bullets: ['Have you looked after an elderly person before, and what did you help with?', 'Are you comfortable helping with bathing and toileting?', 'How would you respond if the person fell?', 'Can you cook softer or special-diet meals?', 'How do you handle a person who is confused or upset?'] },
        { h2: 'Plan for physical demands', paras: ['If the person needs lifting or transfers, tell us up front and discuss it at the interview. The physical demands of the role should be realistic for the helper you choose.'], sources: [SRC.imi] },
      ],
      faq: [
        { q: 'Can a domestic helper give medication?', a: 'She can remind or help as you direct, but decisions about medication should come from a doctor or you as the family. Discuss clearly at the interview what is expected.' },
      ],
      related: ['maidChildcare', 'maidBiodata', 'maidIndonesian', 'maidFilipino', 'maid'],
      form: true,
    },
  },
};
