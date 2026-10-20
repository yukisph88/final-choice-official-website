// Company pages: about, contact, privacy. Facts are limited to what the existing Final Choice websites state.
// No achievements, client counts, years in business or testimonials are claimed.
import type { PageSet } from './types';
import { SRC, SRC_BM } from './types';

export const mainPages: PageSet = {
  about: {
    en: {
      title: 'About Final Choice | Licensed Employment Agency Kuala Lumpur',
      description: 'About Agensi Pekerjaan Final Choice Sdn Bhd, a licensed private employment agency (JTKSM 483) in Taman Mutiara Barat, Kuala Lumpur serving employers and households.',
      h1: 'About Agensi Pekerjaan Final Choice Sdn Bhd',
      eyebrow: 'About us',
      lead: 'Final Choice is a licensed private employment agency with its office in Taman Mutiara Barat, Kuala Lumpur. We help companies with foreign worker recruitment and applications, and help families hire Indonesian and Filipino domestic helpers.',
      wa: 'Hello Final Choice, I would like to speak to a consultant.',
      blocks: [
        { h2: 'Two services, one agency', paras: ['Our foreign worker team supports employers such as factories, contractors, plantations, farms and service businesses with recruitment, eligibility checks, employer applications and documentation. Our domestic helper team supports households with candidate matching, biodata review, interviews, documentation, arrival and after-placement support.', 'Both teams work to the same standard: explain the process in plain language, be clear about what we cannot promise, and keep you informed.'], cards: [
          { icon: 'building', t: 'For employers', d: 'Foreign worker recruitment and application services.', to: 'fw' },
          { icon: 'home', t: 'For households', d: 'Indonesian and Filipino domestic helper placement.', to: 'maid' },
        ] },
        { h2: 'How we work', tint: true, bullets: ['Requirements first: we explain what may apply to you before documents are prepared.', 'Clear checklists: you receive a document checklist for your situation.', 'Honest expectations: we do not promise approvals or fixed timelines, because decisions rest with the authorities.', 'Direct contact: you deal with our team directly by WhatsApp, phone or email.', 'Privacy: candidate and employer information is kept confidential and used only for the application.'] },
        { h2: 'Licence and registration', paras: ['Agensi Pekerjaan Final Choice Sdn Bhd is registered with SSM under company number 201201028954 (1013441-H) and holds private employment agency licence JTKSM 483 (Category C). Employers are welcome to verify our licence with the Labour Department (JTKSM).'], sources: [SRC.jtksm] },
        { h2: 'Service area', paras: ['Our office is in Kuala Lumpur and we serve employers and households in Kuala Lumpur and Selangor.'] },
      ],
      related: ['fw', 'maid', 'contact', 'faq'],
    },
    bm: {
      title: 'Tentang Final Choice | Agensi Pekerjaan Berlesen Kuala Lumpur',
      description: 'Tentang Agensi Pekerjaan Final Choice Sdn Bhd, agensi pekerjaan swasta berlesen (JTKSM 483) di Taman Mutiara Barat, Kuala Lumpur yang melayani majikan dan isi rumah.',
      h1: 'Tentang Agensi Pekerjaan Final Choice Sdn Bhd',
      eyebrow: 'Tentang kami',
      lead: 'Final Choice ialah agensi pekerjaan swasta berlesen yang mempunyai pejabat di Taman Mutiara Barat, Kuala Lumpur. Kami membantu syarikat dalam pengambilan dan permohonan pekerja asing, dan membantu keluarga mengambil pembantu rumah Indonesia dan Filipina.',
      wa: 'Helo Final Choice, saya ingin bercakap dengan perunding.',
      blocks: [
        { h2: 'Dua perkhidmatan, satu agensi', paras: ['Pasukan pekerja asing kami menyokong majikan seperti kilang, kontraktor, ladang, ladang pertanian dan perniagaan perkhidmatan dengan pengambilan, semakan kelayakan, permohonan majikan dan dokumentasi. Pasukan pembantu rumah kami menyokong isi rumah dengan pemadanan calon, semakan biodata, temu duga, dokumentasi, ketibaan dan sokongan selepas penempatan.'], cards: [
          { icon: 'building', t: 'Untuk majikan', d: 'Perkhidmatan pengambilan dan permohonan pekerja asing.', to: 'fw' },
          { icon: 'home', t: 'Untuk isi rumah', d: 'Penempatan pembantu rumah Indonesia dan Filipina.', to: 'maid' },
        ] },
        { h2: 'Cara kami bekerja', tint: true, bullets: ['Keperluan dahulu: kami menerangkan apa yang mungkin terpakai kepada anda sebelum dokumen disediakan.', 'Senarai semak jelas: anda menerima senarai semak dokumen untuk keadaan anda.', 'Jangkaan jujur: kami tidak menjanjikan kelulusan atau tempoh tetap, kerana keputusan terletak pada pihak berkuasa.', 'Hubungan terus: anda berurusan terus dengan pasukan kami melalui WhatsApp, telefon atau e-mel.'] },
        { h2: 'Lesen dan pendaftaran', paras: ['Agensi Pekerjaan Final Choice Sdn Bhd berdaftar dengan SSM dengan nombor syarikat 201201028954 (1013441-H) dan memegang lesen agensi pekerjaan swasta JTKSM 483 (Kategori C). Majikan dialu-alukan mengesahkan lesen kami dengan Jabatan Tenaga Kerja (JTKSM).'], sources: [SRC_BM.jtksm] },
        { h2: 'Kawasan perkhidmatan', paras: ['Pejabat kami di Kuala Lumpur dan kami melayani majikan serta isi rumah di Kuala Lumpur dan Selangor.'] },
      ],
      related: ['fw', 'maid', 'contact', 'faq'],
    },
  },

  contact: {
    en: {
      title: 'Contact Final Choice | Kuala Lumpur Employment Agency',
      description: 'Contact Final Choice in Taman Mutiara Barat, Kuala Lumpur: WhatsApp, phone, email, office address and opening hours for foreign worker and domestic helper enquiries.',
      h1: 'Contact Final Choice',
      eyebrow: 'Get in touch',
      lead: 'Choose the line that fits your enquiry. Our consultant will reply during office hours.',
      wa: 'Hello Final Choice, I would like to enquire about your services.',
      blocks: [],
      related: ['fw', 'maid', 'faq'],
      form: true,
    },
    bm: {
      title: 'Hubungi Final Choice | Agensi Pekerjaan Kuala Lumpur',
      description: 'Hubungi Final Choice di Taman Mutiara Barat, Kuala Lumpur: WhatsApp, telefon, e-mel, alamat pejabat dan waktu operasi untuk pertanyaan pekerja asing dan pembantu rumah.',
      h1: 'Hubungi Final Choice',
      eyebrow: 'Hubungi kami',
      lead: 'Pilih saluran yang sesuai dengan pertanyaan anda. Perunding kami akan membalas dalam waktu pejabat.',
      wa: 'Helo Final Choice, saya ingin bertanya tentang perkhidmatan anda.',
      blocks: [],
      related: ['fw', 'maid', 'faq'],
      form: true,
    },
  },

  faq: {
    en: {
      title: 'FAQ | Foreign Workers and Maid Services Malaysia | Final Choice',
      description: 'Answers to common questions about foreign worker applications, Section 60K, FWCMS, quotas and hiring Indonesian or Filipino domestic helpers in Malaysia.',
      h1: 'Frequently Asked Questions',
      eyebrow: 'FAQ',
      lead: 'Short answers to the questions Malaysian employers and families ask us most. Requirements can change, so your consultant will confirm the current position for your case.',
      wa: 'Hello Final Choice, I have a question.',
      blocks: [],
      related: ['fw', 'maid', 'contact'],
    },
    bm: {
      title: 'Soalan Lazim | Pekerja Asing & Pembantu Rumah | Final Choice',
      description: 'Jawapan kepada soalan lazim tentang permohonan pekerja asing, Seksyen 60K, FWCMS, kuota dan pengambilan pembantu rumah Indonesia atau Filipina di Malaysia.',
      h1: 'Soalan Lazim',
      eyebrow: 'Soalan lazim',
      lead: 'Jawapan ringkas kepada soalan yang paling kerap ditanya oleh majikan dan keluarga Malaysia. Keperluan boleh berubah, jadi perunding anda akan mengesahkan kedudukan semasa untuk kes anda.',
      wa: 'Helo Final Choice, saya ada soalan.',
      blocks: [],
      related: ['fw', 'maid', 'contact'],
    },
  },

  privacy: {
    en: {
      title: 'Privacy Policy | Final Choice',
      description: 'How Agensi Pekerjaan Final Choice Sdn Bhd collects, uses and protects personal information from enquiries, in line with Malaysia’s Personal Data Protection Act 2010.',
      h1: 'Privacy Policy',
      eyebrow: 'Legal',
      lead: 'DRAFT pending management approval. This explains what personal information we collect through this website and how we use it.',
      wa: 'Hello Final Choice, I have a question about my personal data.',
      blocks: [
        { h2: 'Who we are', paras: ['Agensi Pekerjaan Final Choice Sdn Bhd (201201028954 / 1013441-H), No. 58, Jalan Mutiara Barat 6, Taman Mutiara Barat, 56000 Kuala Lumpur. Email: apfinalchoice@gmail.com.'] },
        { h2: 'What we collect', paras: ['When you submit an enquiry, we collect only what you type: your name, contact number, optionally your email, company name or household details, and your message. If you continue on WhatsApp, WhatsApp’s own terms and privacy policy apply to that conversation.'], note: 'Please do not include ID card or passport numbers in an enquiry.' },
        { h2: 'Why we use it', bullets: ['To reply to your enquiry and explain our services', 'To prepare an application or documents you ask us to prepare', 'To meet legal and regulatory obligations that apply to a licensed agency'], paras: ['We process your information with your consent, which you give by ticking the consent box on our forms.'] },
        { h2: 'Who we share it with', paras: ['We do not sell your information. We share it only with the authorities, systems and parties involved in an application that you ask us to make, and with service providers who help us run our enquiry system, where one is enabled. Candidate information (for domestic helpers) is shared only with employers where the candidate has agreed.'] },
        { h2: 'How long we keep it', paras: ['[CONFIRM retention period with management.] We keep enquiry information only for as long as needed for the purpose above or as the law requires.'] },
        { h2: 'Your rights', paras: ['Under Malaysia’s Personal Data Protection Act 2010 you may ask to access or correct your personal data, or withdraw your consent. Email apfinalchoice@gmail.com.'] },
        { h2: 'Cookies and analytics', paras: ['This website does not use advertising cookies. If analytics are added later, we will ask for your consent and update this policy first.'] },
        { h2: 'Changes', paras: ['We will update this page if our practices change. Last approved: [DATE OF APPROVAL].'] },
      ],
      related: ['contact', 'about'],
    },
    bm: {
      title: 'Dasar Privasi | Final Choice',
      description: 'Bagaimana Final Choice mengumpul, menggunakan dan melindungi maklumat peribadi daripada pertanyaan, selaras dengan Akta Perlindungan Data Peribadi 2010.',
      h1: 'Dasar Privasi',
      eyebrow: 'Undang-undang',
      lead: 'DRAF menunggu kelulusan pengurusan. Halaman ini menerangkan maklumat peribadi yang kami kumpul melalui laman web ini dan cara kami menggunakannya.',
      wa: 'Helo Final Choice, saya ada soalan tentang data peribadi saya.',
      blocks: [
        { h2: 'Siapa kami', paras: ['Agensi Pekerjaan Final Choice Sdn Bhd (201201028954 / 1013441-H), No. 58, Jalan Mutiara Barat 6, Taman Mutiara Barat, 56000 Kuala Lumpur. E-mel: apfinalchoice@gmail.com.'] },
        { h2: 'Apa yang kami kumpul', paras: ['Apabila anda menghantar pertanyaan, kami hanya mengumpul apa yang anda taip: nama, nombor telefon, e-mel (pilihan), nama syarikat atau butiran isi rumah, dan mesej anda. Jika anda meneruskan di WhatsApp, terma dan dasar privasi WhatsApp terpakai untuk perbualan itu.'], note: 'Sila jangan sertakan nombor kad pengenalan atau pasport dalam pertanyaan.' },
        { h2: 'Mengapa kami menggunakannya', bullets: ['Untuk membalas pertanyaan anda dan menerangkan perkhidmatan kami', 'Untuk menyediakan permohonan atau dokumen yang anda minta kami sediakan', 'Untuk memenuhi kewajipan undang-undang dan peraturan bagi agensi berlesen'], paras: ['Kami memproses maklumat anda dengan persetujuan anda, yang anda berikan dengan menanda kotak persetujuan pada borang kami.'] },
        { h2: 'Hak anda', paras: ['Di bawah Akta Perlindungan Data Peribadi 2010 Malaysia anda boleh meminta akses atau pembetulan data peribadi anda, atau menarik balik persetujuan anda. E-mel apfinalchoice@gmail.com.'] },
        { h2: 'Kuki dan analitik', paras: ['Laman web ini tidak menggunakan kuki pengiklanan. Jika analitik ditambah kemudian, kami akan meminta persetujuan anda dan mengemas kini dasar ini dahulu.'] },
      ],
      related: ['contact', 'about'],
    },
  },
};
