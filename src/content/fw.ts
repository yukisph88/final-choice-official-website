// Foreign worker pages. Wording follows the approved foreign-worker website: always "where applicable",
// "subject to current requirements", no guaranteed approvals or timelines. Source countries verified by
// Final Choice staff: Myanmar, Nepal and Bangladesh only.
import type { PageSet, Block, QA } from './types';
import { SRC, SRC_BM } from './types';

const img = { src: 'images/hero-foreign-workers-800.webp', src2: 'images/hero-foreign-workers-1200.webp', alt: 'Smiling workers in safety helmets and high-visibility vests at an outdoor worksite', w: 1200, h: 900 };
const sectorImg = (name: string, alt: string) => ({ src: `images/sector-${name}-photo-640.webp`, src2: `images/sector-${name}-photo-1280.webp`, alt, w: 1280, h: 640 });

const steps6 = [
  { t: 'Tell us your requirements', d: 'Your sector, business activity, job position, number of workers and location.' },
  { t: 'Requirement and document check', d: 'We review your situation against current requirements and list the documents likely to be needed.' },
  { t: 'Document preparation', d: 'We help you prepare, organise and check documents and forms before anything is submitted.' },
  { t: 'Employer application', d: 'Submission through the relevant process, such as Section 60K and FWCMS or FWe Approval, where applicable.' },
  { t: 'Approval and subsequent processing', d: 'If approved, we coordinate next steps such as levy and immigration processing, where applicable.' },
  { t: 'Worker arrangement', d: 'We coordinate recruitment and arrival-related arrangements, based on the approvals obtained.' },
];
const steps6bm = [
  { t: 'Beritahu keperluan anda', d: 'Sektor, aktiviti perniagaan, jawatan, bilangan pekerja dan lokasi anda.' },
  { t: 'Semakan keperluan dan dokumen', d: 'Kami menyemak keadaan anda berdasarkan keperluan semasa dan menyenaraikan dokumen yang mungkin diperlukan.' },
  { t: 'Penyediaan dokumen', d: 'Kami membantu anda menyediakan, menyusun dan menyemak dokumen serta borang sebelum sebarang penghantaran.' },
  { t: 'Permohonan majikan', d: 'Penghantaran melalui proses yang berkaitan, seperti Seksyen 60K dan FWCMS atau Kelulusan FWe, jika berkenaan.' },
  { t: 'Kelulusan dan pemprosesan seterusnya', d: 'Jika diluluskan, kami menyelaras langkah seterusnya seperti levi dan pemprosesan imigresen, jika berkenaan.' },
  { t: 'Pengaturan pekerja', d: 'Kami menyelaras pengambilan dan pengaturan kedatangan, berdasarkan kelulusan yang diperoleh.' },
];

const timing: Block = {
  h2: 'How long does it take?',
  paras: ['There is no single fixed timeline. It depends on employer eligibility, your sector, how complete your documents are, current application requirements, government processing and any additional requests. We explain the expected steps for your case and keep you updated, but we do not promise approval dates.'],
};

const docsFaq: QA = { q: 'Can you check documents I have already prepared?', a: 'Yes. Send us what you have and we will tell you what is missing, inconsistent or out of date before it is submitted. Please do not send ID or passport copies in a first chat message; our consultant will tell you how to share documents safely.' };

export const fwPages: PageSet = {
  // ---------------------------------------------------------------------------------------------
  fw: {
    en: {
      title: 'Foreign Worker Recruitment Malaysia | Final Choice',
      description: 'Licensed agency (JTKSM 483) helping Malaysian employers with foreign worker recruitment, quota applications, Section 60K, FWCMS / FWe Approval and documents.',
      h1: 'Foreign Worker Recruitment and Application Services in Malaysia',
      eyebrow: 'For employers and HR teams',
      lead: 'Final Choice helps Malaysian employers recruit foreign workers and manage the application process: eligibility and document checks, quota applications, Section 60K, FWCMS / FWe Approval and follow-up, so your team knows what is needed at each stage.',
      image: img,
      wa: 'Hello Final Choice, I would like to check the requirements for foreign workers for my company.',
      blocks: [
        { h2: 'Foreign worker services for Malaysian employers', paras: ['Support from your first enquiry through recruitment, applications, documentation and follow-up. All services are subject to employer eligibility and current requirements.'], cards: [
          { icon: 'users', t: 'Foreign worker recruitment', d: 'Sourcing and coordinating workers from Myanmar, Nepal and Bangladesh for approved job positions in your sector.', to: 'fwQuota' },
          { icon: 'clipboard', t: 'Quota and application assistance', d: 'Preparing and following up your foreign worker quota application, subject to eligibility.', to: 'fwQuota' },
          { icon: 'shield', t: 'Section 60K application', d: 'Preparing the Labour Department application generally required before employing a foreign worker.', to: 'fw60k' },
          { icon: 'globe', t: 'FWCMS and FWe Approval', d: 'Information and supporting documents for the online employer application.', to: 'fwcms' },
          { icon: 'refresh', t: 'Permit renewal', d: 'Keeping track of permit expiry and preparing renewal documents, where applicable.', to: 'fwRenewal' },
          { icon: 'file', t: 'Documentation and checking', d: 'Your documents checked and organised so the application is complete and consistent.', to: 'fwDocs' },
        ] },
        { h2: 'Sectors we assist', id: 'sectors', tint: true, paras: ['Each sector has its own requirements and supporting documents. Choose yours to see what is usually involved.'], cards: [
          { icon: 'factory', t: 'Manufacturing', d: 'Factories and manufacturing companies needing production workers.', to: 'fwManufacturing' },
          { icon: 'hammer', t: 'Construction', d: 'Contractors and construction companies, including construction-related registrations where applicable.', to: 'fwConstruction' },
          { icon: 'store', t: 'Services', d: 'Eligible service-sector sub-sectors, including cleaning services, subject to sector rules.', to: 'fwServices' },
          { icon: 'tree', t: 'Plantation', d: 'Estates and plantation operators needing field workers.', to: 'fwPlantation' },
          { icon: 'leaf', t: 'Agriculture', d: 'Farms and agricultural businesses, subject to current sector eligibility.', to: 'fwAgriculture' },
        ] },
        { h2: 'Our foreign worker application process', id: 'process', steps: steps6, note: 'Steps vary by sector and application type and are subject to current requirements. Approval decisions are made by the relevant Malaysian authorities. Final Choice assists with preparation, submission and coordination.' },
        { h2: 'Source countries', paras: ['We currently support foreign worker recruitment from Myanmar, Nepal and Bangladesh, for eligible sectors and approved job positions. Availability and recruitment requirements are subject to current Malaysian government policies and source-country regulations.'] },
        { h2: 'Why employers work with Final Choice', tint: true, cards: [
          { icon: 'chat', t: 'Plain-language guidance', d: 'Each stage explained, including what is expected of your company.' },
          { icon: 'file', t: 'Documents checked first', d: 'Your documents checked and organised before they are submitted.' },
          { icon: 'handshake', t: 'One place for coordination', d: 'Applications, approvals and worker arrangements coordinated together.' },
          { icon: 'clock', t: 'Follow-up', d: 'Progress monitored, with prompt notice when action is needed from you.' },
        ] },
        timing,
        { h2: 'Worker accommodation and compliance guidance', paras: ['We provide guidance and documentation support on foreign worker accommodation requirements, including Akta 446-related requirements where applicable. Requirements depend on your sector, worker numbers and current regulations; certificates and approvals are issued by the relevant authorities.'] },
      ],
      faq: [
        { q: 'How do I apply for foreign workers in Malaysia?', a: 'Generally, employers first confirm eligibility for their sector, prepare company documents and complete the required employer applications, which may include Section 60K and FWCMS or FWe Approval-related steps, before worker recruitment and immigration processing. The exact steps depend on current government requirements, and Final Choice can guide you through each stage.' },
        { q: 'Can my company apply for foreign workers?', a: 'It depends on your sector, business activity, company documents and current Malaysian government policies. Send us your company details and we will help you check which requirements may apply.' },
        { q: 'Which source countries do you recruit from?', a: 'We currently support recruitment from Myanmar, Nepal and Bangladesh, subject to current Malaysian government policies, source-country regulations and employer eligibility.' },
        { q: 'Is Final Choice a licensed employment agency?', a: 'Yes. Agensi Pekerjaan Final Choice Sdn Bhd (201201028954 / 1013441-H) holds private employment agency licence JTKSM 483 (Category C). You are welcome to verify our licence with the Labour Department (JTKSM).' },
        { q: 'Can you assist if I have already started an application?', a: 'Yes. Tell us which stage you are at and share what has been submitted. We will review it and advise on the next steps, where applicable.' },
      ],
      related: ['fwQuota', 'fw60k', 'fwcms', 'fwDocs', 'maid'],
      form: true,
    },
    bm: {
      title: 'Pengambilan Pekerja Asing Malaysia | Final Choice',
      description: 'Agensi berlesen (JTKSM 483) membantu majikan Malaysia dalam pengambilan pekerja asing, permohonan kuota, Seksyen 60K, FWCMS / Kelulusan FWe dan dokumen.',
      h1: 'Perkhidmatan Pengambilan dan Permohonan Pekerja Asing di Malaysia',
      eyebrow: 'Untuk majikan dan pasukan HR',
      lead: 'Final Choice membantu majikan Malaysia mengambil pekerja asing dan menguruskan proses permohonan: semakan kelayakan dan dokumen, permohonan kuota, Seksyen 60K, FWCMS / Kelulusan FWe dan susulan, supaya pasukan anda tahu apa yang diperlukan pada setiap peringkat.',
      image: img,
      wa: 'Helo Final Choice, saya ingin menyemak keperluan pekerja asing untuk syarikat saya.',
      blocks: [
        { h2: 'Perkhidmatan pekerja asing untuk majikan Malaysia', paras: ['Sokongan daripada pertanyaan pertama hingga pengambilan, permohonan, dokumentasi dan susulan. Semua perkhidmatan tertakluk kepada kelayakan majikan dan keperluan semasa.'], cards: [
          { icon: 'users', t: 'Pengambilan pekerja asing', d: 'Mencari dan menyelaras pekerja dari Myanmar, Nepal dan Bangladesh untuk jawatan yang diluluskan dalam sektor anda.', to: 'fwQuota' },
          { icon: 'clipboard', t: 'Bantuan kuota dan permohonan', d: 'Menyediakan dan menyusuli permohonan kuota pekerja asing, tertakluk kepada kelayakan.', to: 'fwQuota' },
          { icon: 'shield', t: 'Permohonan Seksyen 60K', d: 'Menyediakan permohonan Jabatan Tenaga Kerja yang lazimnya diperlukan sebelum mengambil pekerja asing.', to: 'fw60k' },
          { icon: 'globe', t: 'FWCMS dan Kelulusan FWe', d: 'Maklumat dan dokumen sokongan untuk permohonan majikan dalam talian.', to: 'fwcms' },
          { icon: 'refresh', t: 'Pembaharuan permit', d: 'Memantau tarikh tamat permit dan menyediakan dokumen pembaharuan, jika berkenaan.' },
          { icon: 'file', t: 'Dokumentasi dan semakan', d: 'Dokumen anda disemak dan disusun supaya permohonan lengkap dan konsisten.' },
        ] },
        { h2: 'Sektor yang kami bantu', id: 'sectors', tint: true, paras: ['Setiap sektor mempunyai keperluan dan dokumen sokongan tersendiri. Pembuatan, pembinaan, perkhidmatan, perladangan dan pertanian.'], bullets: ['Pembuatan: kilang dan syarikat pembuatan yang memerlukan pekerja pengeluaran.', 'Pembinaan: kontraktor dan syarikat pembinaan, termasuk pendaftaran berkaitan pembinaan jika berkenaan.', 'Perkhidmatan: subsektor perkhidmatan yang layak, termasuk perkhidmatan pembersihan, tertakluk kepada peraturan sektor.', 'Perladangan: estet dan pengusaha ladang yang memerlukan pekerja ladang.', 'Pertanian: ladang dan perniagaan pertanian, tertakluk kepada kelayakan sektor semasa.'] },
        { h2: 'Proses permohonan pekerja asing kami', id: 'process', steps: steps6bm, note: 'Langkah berbeza mengikut sektor dan jenis permohonan serta tertakluk kepada keperluan semasa. Keputusan kelulusan dibuat oleh pihak berkuasa Malaysia yang berkaitan. Final Choice membantu penyediaan, penghantaran dan penyelarasan.' },
        { h2: 'Negara sumber', paras: ['Kami kini menyokong pengambilan pekerja asing dari Myanmar, Nepal dan Bangladesh, untuk sektor yang layak dan jawatan yang diluluskan. Ketersediaan dan keperluan pengambilan tertakluk kepada dasar kerajaan Malaysia semasa dan peraturan negara sumber.'] },
        { h2: 'Berapa lama prosesnya?', tint: true, paras: ['Tiada tempoh tetap. Ia bergantung kepada kelayakan majikan, sektor anda, kelengkapan dokumen, keperluan permohonan semasa, pemprosesan kerajaan dan sebarang permintaan tambahan. Kami menerangkan langkah yang dijangka untuk kes anda dan sentiasa memaklumkan perkembangan, tetapi kami tidak menjanjikan tarikh kelulusan.'] },
        { h2: 'Panduan penginapan pekerja dan pematuhan', paras: ['Kami memberi panduan dan sokongan dokumentasi mengenai keperluan penginapan pekerja asing, termasuk keperluan berkaitan Akta 446 jika berkenaan. Keperluan bergantung kepada sektor, bilangan pekerja dan peraturan semasa; sijil dan kelulusan dikeluarkan oleh pihak berkuasa yang berkaitan.'] },
      ],
      faq: [
        { q: 'Bagaimana memohon pekerja asing di Malaysia?', a: 'Lazimnya, majikan mengesahkan kelayakan sektor, menyediakan dokumen syarikat dan melengkapkan permohonan majikan yang diperlukan, yang mungkin merangkumi langkah berkaitan Seksyen 60K dan FWCMS atau Kelulusan FWe, sebelum pengambilan pekerja dan pemprosesan imigresen. Langkah tepat bergantung kepada keperluan kerajaan semasa; Final Choice boleh membimbing anda pada setiap peringkat.' },
        { q: 'Adakah syarikat saya layak memohon pekerja asing?', a: 'Ia bergantung kepada sektor, aktiviti perniagaan, dokumen syarikat dan dasar kerajaan Malaysia semasa. Hantar butiran syarikat anda dan kami akan membantu menyemak keperluan yang mungkin terpakai.' },
        { q: 'Daripada negara mana anda mengambil pekerja?', a: 'Kami kini menyokong pengambilan dari Myanmar, Nepal dan Bangladesh, tertakluk kepada dasar kerajaan Malaysia semasa, peraturan negara sumber dan kelayakan majikan.' },
        { q: 'Adakah Final Choice agensi pekerjaan berlesen?', a: 'Ya. Agensi Pekerjaan Final Choice Sdn Bhd (201201028954 / 1013441-H) memegang lesen agensi pekerjaan swasta JTKSM 483 (Kategori C). Anda dialu-alukan mengesahkan lesen kami dengan Jabatan Tenaga Kerja (JTKSM).' },
      ],
      related: ['fwQuota', 'fw60k', 'fwcms', 'maid'],
      form: true,
    },
  },

  // ---------------------------------------------------------------------------------------------
  fwQuota: {
    en: {
      title: 'Foreign Worker Quota Application Malaysia | Final Choice',
      description: 'How foreign worker quota applications work for Malaysian employers: eligibility, common documents and how Final Choice prepares and follows up your application.',
      h1: 'Foreign Worker Quota Application in Malaysia',
      eyebrow: 'Foreign worker services',
      lead: 'A quota application asks the authorities to approve how many foreign workers your company may employ. Final Choice helps you check eligibility, prepare the documents and follow the application up.',
      wa: 'Hello Final Choice, I would like help with a foreign worker quota application.',
      blocks: [
        { h2: 'What a quota application involves', paras: ['Before a company can bring in foreign workers, it generally needs approval for the number and type of workers it may employ. The approving agency and the exact steps depend on your sector and on the policy in force when you apply, so we confirm the current process with you first instead of assuming last year’s procedure still applies.', 'In practice the work is mostly preparation: showing that your business is genuine and active, that you have the correct licences for your sector, and that your request for workers is consistent with your operations.'] },
        { h2: 'Who may be eligible', paras: ['Eligibility depends on your sector, business activity, company documents and the foreign worker policy at the time. Some sectors and sub-sectors are open, some are restricted, and positions can differ between them. Send us your company details and we will tell you honestly whether an application looks feasible before you spend time on paperwork.'] },
        { h2: 'Documents commonly requested', bullets: ['Company registration details (for example SSM records)', 'Business licences from the local authority or sector regulator', 'Financial or tax documents', 'Premise documents such as tenancy or ownership records', 'Records of current local and foreign employees', 'Sector-specific licences or registrations', 'Accommodation-related documents, where applicable', 'Application forms and declarations'], note: 'This is a general list. Requirements vary by sector and application type, so ask us for a checklist for your company.' },
        { h2: 'How Final Choice helps', steps: [
          { t: 'Eligibility consultation', d: 'We review your sector, activity and company profile.' },
          { t: 'Document check', d: 'We list what you have, what is missing and what needs updating.' },
          { t: 'Preparation and submission', d: 'We help prepare the application and submit it through the relevant process, where applicable.' },
          { t: 'Follow-up', d: 'We track the application and tell you when more information is requested.' },
        ], note: 'Approval decisions are made by the relevant authorities. We cannot guarantee approval or a processing time.' },
        { h2: 'Official sources', sources: [SRC.jtksm, SRC.imi, SRC.mohr] },
      ],
      faq: [
        { q: 'Can you guarantee my quota will be approved?', a: 'No. Quota decisions are made by the relevant authorities. We help you prepare a complete and consistent application and follow it up.' },
        { q: 'How long does a quota application take?', a: 'There is no fixed timeline. It depends on eligibility, sector, document completeness, government processing and any additional requests.' },
        docsFaq,
      ],
      related: ['fw60k', 'fwcms', 'fwDocs', 'fw'],
      form: true,
    },
    bm: {
      title: 'Permohonan Kuota Pekerja Asing Malaysia | Final Choice',
      description: 'Cara permohonan kuota pekerja asing berfungsi untuk majikan Malaysia: kelayakan, dokumen lazim dan bagaimana Final Choice menyediakan serta menyusuli permohonan anda.',
      h1: 'Permohonan Kuota Pekerja Asing di Malaysia',
      eyebrow: 'Perkhidmatan pekerja asing',
      lead: 'Permohonan kuota meminta pihak berkuasa meluluskan bilangan pekerja asing yang boleh diambil oleh syarikat anda. Final Choice membantu anda menyemak kelayakan, menyediakan dokumen dan menyusuli permohonan.',
      wa: 'Helo Final Choice, saya memerlukan bantuan permohonan kuota pekerja asing.',
      blocks: [
        { h2: 'Apa yang terlibat dalam permohonan kuota', paras: ['Sebelum syarikat boleh membawa masuk pekerja asing, lazimnya ia memerlukan kelulusan bagi bilangan dan jenis pekerja yang boleh diambil. Agensi yang meluluskan dan langkah tepat bergantung kepada sektor anda dan dasar yang berkuat kuasa semasa anda memohon, jadi kami mengesahkan proses semasa dengan anda terlebih dahulu.', 'Dalam amalan, kerja utama ialah penyediaan: menunjukkan perniagaan anda sebenar dan aktif, anda mempunyai lesen yang betul bagi sektor anda, dan permintaan pekerja anda selaras dengan operasi anda.'] },
        { h2: 'Siapa yang mungkin layak', paras: ['Kelayakan bergantung kepada sektor, aktiviti perniagaan, dokumen syarikat dan dasar pekerja asing pada masa itu. Sesetengah sektor dan subsektor dibuka, sesetengahnya dihadkan. Hantar butiran syarikat anda dan kami akan memberitahu secara jujur sama ada permohonan nampak boleh dilaksanakan sebelum anda menyediakan dokumen.'] },
        { h2: 'Dokumen yang lazim diminta', bullets: ['Butiran pendaftaran syarikat (contohnya rekod SSM)', 'Lesen perniagaan daripada pihak berkuasa tempatan atau pengawal selia sektor', 'Dokumen kewangan atau cukai', 'Dokumen premis seperti rekod sewaan atau pemilikan', 'Rekod pekerja tempatan dan asing semasa', 'Lesen atau pendaftaran khusus sektor', 'Dokumen berkaitan penginapan, jika berkenaan', 'Borang permohonan dan perakuan'], note: 'Ini senarai umum. Keperluan berbeza mengikut sektor dan jenis permohonan, jadi minta senarai semak untuk syarikat anda.' },
        { h2: 'Bagaimana Final Choice membantu', steps: [
          { t: 'Perundingan kelayakan', d: 'Kami menyemak sektor, aktiviti dan profil syarikat anda.' },
          { t: 'Semakan dokumen', d: 'Kami menyenaraikan apa yang ada, apa yang kurang dan apa yang perlu dikemas kini.' },
          { t: 'Penyediaan dan penghantaran', d: 'Kami membantu menyediakan permohonan dan menghantarnya melalui proses berkaitan, jika berkenaan.' },
          { t: 'Susulan', d: 'Kami menjejak permohonan dan memaklumkan apabila maklumat tambahan diminta.' },
        ], note: 'Keputusan kelulusan dibuat oleh pihak berkuasa yang berkaitan. Kami tidak boleh menjamin kelulusan atau tempoh pemprosesan.' },
        { h2: 'Sumber rasmi', sources: [SRC_BM.jtksm, SRC_BM.imi, SRC_BM.mohr] },
      ],
      faq: [
        { q: 'Bolehkah anda menjamin kuota saya diluluskan?', a: 'Tidak. Keputusan kuota dibuat oleh pihak berkuasa yang berkaitan. Kami membantu anda menyediakan permohonan yang lengkap dan konsisten serta menyusulinya.' },
        { q: 'Berapa lama permohonan kuota mengambil masa?', a: 'Tiada tempoh tetap. Ia bergantung kepada kelayakan, sektor, kelengkapan dokumen, pemprosesan kerajaan dan sebarang permintaan tambahan.' },
      ],
      related: ['fw60k', 'fwcms', 'fw'],
      form: true,
    },
  },

  // ---------------------------------------------------------------------------------------------
  fw60k: {
    en: {
      title: 'Section 60K Application Malaysia | Final Choice',
      description: 'What Section 60K of the Employment Act 1955 means for employers hiring foreign workers in Malaysia, and how Final Choice prepares the application.',
      h1: 'Section 60K Application in Malaysia',
      eyebrow: 'Foreign worker services',
      lead: 'Section 60K of the Employment Act 1955 generally requires employers to obtain approval from the Labour Department before employing a foreign worker. We help you prepare that application and its supporting documents, where applicable.',
      wa: 'Hello Final Choice, I would like help with a Section 60K application.',
      blocks: [
        { h2: 'What Section 60K is', paras: ['Under the Employment Act 1955, an employer who wants to employ a foreign employee must generally obtain approval from the Labour Department first. Employers and agents refer to this approval as the “Section 60K application”.', 'The department and the online process involved can change as policies and systems are updated. Always check the Labour Department’s own pages for the current rules; we do the same with you at the start of every case.'] },
        { h2: 'Where it fits in the overall process', paras: ['Section 60K is one stage among several. Depending on your sector, an employer may also deal with a quota or approval application, FWCMS or FWe Approval steps, and immigration processing for the workers. Which comes first, and which apply, depends on your case and on current requirements, which is why we map the full sequence for your company before preparing documents.'] },
        { h2: 'How Final Choice helps', bullets: ['Checks whether Section 60K applies to your situation', 'Lists the documents likely to be needed for your sector', 'Prepares and organises the application and supporting documents', 'Submits through the relevant process, where applicable', 'Follows up and tells you when the Labour Department asks for more'], note: 'Final Choice assists with preparation and submission. Approval is decided by the Labour Department and cannot be guaranteed.' },
        { h2: 'Official sources', sources: [SRC.jtksm, SRC.mohr] },
      ],
      faq: [
        { q: 'Does every employer need a Section 60K approval?', a: 'It generally applies to employers who wish to employ foreign workers, but details depend on your sector and the rules in force. Ask us, and we will confirm against current requirements.' },
        { q: 'Is Section 60K the same as FWCMS?', a: 'No. Section 60K is a Labour Department approval under the Employment Act 1955, while FWCMS is an online system used for certain foreign worker applications. Both may be part of the same overall process.' },
        { q: 'Can you guarantee Section 60K approval?', a: 'No. We cannot guarantee approval or timing. We help you prepare a complete application.' },
      ],
      related: ['fwQuota', 'fwcms', 'fwDocs', 'fw'],
      form: true,
    },
    bm: {
      title: 'Permohonan Seksyen 60K Malaysia | Final Choice',
      description: 'Maksud Seksyen 60K Akta Kerja 1955 bagi majikan yang mengambil pekerja asing di Malaysia, dan cara Final Choice menyediakan permohonan.',
      h1: 'Permohonan Seksyen 60K di Malaysia',
      eyebrow: 'Perkhidmatan pekerja asing',
      lead: 'Seksyen 60K Akta Kerja 1955 lazimnya memerlukan majikan mendapatkan kelulusan Jabatan Tenaga Kerja sebelum mengambil pekerja asing. Kami membantu menyediakan permohonan itu dan dokumen sokongannya, jika berkenaan.',
      wa: 'Helo Final Choice, saya memerlukan bantuan permohonan Seksyen 60K.',
      blocks: [
        { h2: 'Apakah Seksyen 60K', paras: ['Di bawah Akta Kerja 1955, majikan yang ingin mengambil pekerja asing lazimnya mesti mendapat kelulusan Jabatan Tenaga Kerja terlebih dahulu. Majikan dan ejen menyebut kelulusan ini sebagai “permohonan Seksyen 60K”.', 'Jabatan dan proses dalam talian yang terlibat boleh berubah apabila dasar dan sistem dikemas kini. Sentiasa semak laman rasmi Jabatan Tenaga Kerja untuk peraturan semasa; kami juga berbuat demikian bersama anda pada permulaan setiap kes.'] },
        { h2: 'Kedudukannya dalam keseluruhan proses', paras: ['Seksyen 60K ialah satu peringkat antara beberapa peringkat. Bergantung kepada sektor, majikan mungkin turut berurusan dengan permohonan kuota atau kelulusan, langkah FWCMS atau Kelulusan FWe, dan pemprosesan imigresen untuk pekerja. Mana yang dahulu dan mana yang terpakai bergantung kepada kes anda dan keperluan semasa.'] },
        { h2: 'Bagaimana Final Choice membantu', bullets: ['Menyemak sama ada Seksyen 60K terpakai kepada keadaan anda', 'Menyenaraikan dokumen yang mungkin diperlukan untuk sektor anda', 'Menyediakan dan menyusun permohonan serta dokumen sokongan', 'Menghantar melalui proses berkaitan, jika berkenaan', 'Menyusuli dan memaklumkan apabila Jabatan Tenaga Kerja meminta maklumat tambahan'], note: 'Final Choice membantu penyediaan dan penghantaran. Kelulusan diputuskan oleh Jabatan Tenaga Kerja dan tidak boleh dijamin.' },
        { h2: 'Sumber rasmi', sources: [SRC_BM.jtksm, SRC_BM.mohr] },
      ],
      faq: [
        { q: 'Adakah semua majikan memerlukan kelulusan Seksyen 60K?', a: 'Ia lazimnya terpakai kepada majikan yang ingin mengambil pekerja asing, tetapi butirannya bergantung kepada sektor dan peraturan yang berkuat kuasa. Tanya kami, dan kami akan mengesahkan berdasarkan keperluan semasa.' },
        { q: 'Adakah Seksyen 60K sama dengan FWCMS?', a: 'Tidak. Seksyen 60K ialah kelulusan Jabatan Tenaga Kerja di bawah Akta Kerja 1955, manakala FWCMS ialah sistem dalam talian untuk permohonan pekerja asing tertentu. Kedua-duanya mungkin sebahagian daripada proses keseluruhan yang sama.' },
      ],
      related: ['fwQuota', 'fwcms', 'fw'],
      form: true,
    },
  },

  // ---------------------------------------------------------------------------------------------
  fwcms: {
    en: {
      title: 'FWCMS and FWe Approval Malaysia | Final Choice',
      description: 'What FWCMS and FWe Approval mean for foreign worker applications in Malaysia, and how Final Choice helps employers prepare the information and documents.',
      h1: 'FWCMS Application and FWe Approval in Malaysia',
      eyebrow: 'Foreign worker services',
      lead: 'FWCMS (Foreign Workers Centralized Management System) is an online system used for certain foreign worker applications in Malaysia. FWe Approval is an employer approval stage within the current process. We help you prepare for both.',
      wa: 'Hello Final Choice, I would like help with FWCMS / FWe Approval for my company.',
      blocks: [
        { h2: 'Understanding the terms', paras: ['FWCMS is the online platform employers and their appointed agents use to submit and track certain foreign worker applications. FWe Approval is an employer approval stage within the current application process.', 'Systems, stage names and requirements are updated by the government from time to time, so we check the current process with you before preparing your documents, and we send you to the official portals for anything you must do yourself.'] },
        { h2: 'How Final Choice helps', bullets: ['Explains which FWCMS or FWe Approval steps apply to your company', 'Prepares the company and job-position information needed for the submission', 'Checks supporting documents for completeness and consistency', 'Submits through the relevant process, where applicable, and tracks the status', 'Tells you promptly if more information or action is needed from you'], note: 'Approval is decided by the relevant authorities. We cannot guarantee approval or a processing time.' },
        { h2: 'Before you start', paras: ['Employers who prepare these submissions with complete documents from the beginning usually avoid avoidable back-and-forth. Gather your company registration records, business licences, premise documents and current employee records, then send us what you have; we will tell you what is missing.'] },
        { h2: 'Official sources', sources: [SRC.imi, SRC.jtksm, SRC.mohr] },
      ],
      faq: [
        { q: 'What is FWCMS?', a: 'FWCMS (Foreign Workers Centralized Management System) is an online system used for certain foreign worker-related applications and processing in Malaysia.' },
        { q: 'What is FWe Approval?', a: 'FWe Approval is an employer approval stage within the current foreign worker application process. Because procedures can change, we check the current process with you before preparing documents.' },
        { q: 'Do I need an agent to use FWCMS?', a: 'Whether you apply yourself or through an appointed agent depends on the process in force. Final Choice can explain your options.' },
      ],
      related: ['fw60k', 'fwQuota', 'fwDocs', 'fw'],
      form: true,
    },
    bm: {
      title: 'FWCMS dan Kelulusan FWe Malaysia | Final Choice',
      description: 'Maksud FWCMS dan Kelulusan FWe bagi permohonan pekerja asing di Malaysia, dan cara Final Choice membantu majikan menyediakan maklumat dan dokumen.',
      h1: 'Permohonan FWCMS dan Kelulusan FWe di Malaysia',
      eyebrow: 'Perkhidmatan pekerja asing',
      lead: 'FWCMS (Foreign Workers Centralized Management System) ialah sistem dalam talian untuk permohonan pekerja asing tertentu di Malaysia. Kelulusan FWe ialah peringkat kelulusan majikan dalam proses semasa. Kami membantu anda bersedia untuk kedua-duanya.',
      wa: 'Helo Final Choice, saya memerlukan bantuan FWCMS / Kelulusan FWe untuk syarikat saya.',
      blocks: [
        { h2: 'Memahami istilah', paras: ['FWCMS ialah platform dalam talian yang digunakan majikan dan ejen yang dilantik untuk menghantar dan menjejak permohonan pekerja asing tertentu. Kelulusan FWe ialah peringkat kelulusan majikan dalam proses permohonan semasa.', 'Sistem, nama peringkat dan keperluan dikemas kini oleh kerajaan dari semasa ke semasa, jadi kami menyemak proses semasa bersama anda sebelum menyediakan dokumen.'] },
        { h2: 'Bagaimana Final Choice membantu', bullets: ['Menerangkan langkah FWCMS atau Kelulusan FWe yang terpakai kepada syarikat anda', 'Menyediakan maklumat syarikat dan jawatan yang diperlukan untuk penghantaran', 'Menyemak dokumen sokongan untuk kelengkapan dan ketekalan', 'Menghantar melalui proses berkaitan, jika berkenaan, dan menjejak status', 'Memaklumkan dengan segera jika maklumat atau tindakan tambahan diperlukan daripada anda'], note: 'Kelulusan diputuskan oleh pihak berkuasa yang berkaitan. Kami tidak boleh menjamin kelulusan atau tempoh pemprosesan.' },
        { h2: 'Sumber rasmi', sources: [SRC_BM.imi, SRC_BM.jtksm, SRC_BM.mohr] },
      ],
      faq: [
        { q: 'Apakah FWCMS?', a: 'FWCMS (Foreign Workers Centralized Management System) ialah sistem dalam talian yang digunakan untuk permohonan dan pemprosesan berkaitan pekerja asing tertentu di Malaysia.' },
        { q: 'Apakah Kelulusan FWe?', a: 'Kelulusan FWe ialah peringkat kelulusan majikan dalam proses permohonan pekerja asing semasa. Oleh sebab prosedur boleh berubah, kami menyemak proses semasa bersama anda sebelum menyediakan dokumen.' },
      ],
      related: ['fw60k', 'fwQuota', 'fw'],
      form: true,
    },
  },

  // ---------------------------------------------------------------------------------------------
  fwRenewal: {
    en: {
      title: 'Foreign Worker Permit Renewal Malaysia | Final Choice',
      description: 'Foreign worker permit renewal in Malaysia: why to plan early, what documents are usually involved and how Final Choice helps employers stay on top of expiry dates.',
      h1: 'Foreign Worker Permit Renewal in Malaysia',
      eyebrow: 'Foreign worker services',
      lead: 'A worker whose permit lapses cannot lawfully keep working. Planning renewals early keeps your workforce compliant, and Final Choice helps employers track expiry dates and prepare renewal documents, where applicable.',
      wa: 'Hello Final Choice, I would like help renewing foreign worker permits.',
      blocks: [
        { h2: 'Why renewal needs planning', paras: ['Renewal usually involves several linked steps rather than one form. Depending on the worker and the sector, these may include a medical examination, insurance and levy matters, updated employer or worker documents, and an immigration submission. Each depends on the others, so a delay at one step can push the permit past its expiry date.', 'We recommend collecting your list of permit expiry dates and reviewing it well ahead of time. Send us the list and we will help you see which workers are coming due.'] },
        { h2: 'What we can help with', bullets: ['Keeping a clear schedule of permit expiry dates for your workers', 'Preparing and checking renewal documents', 'Coordinating the steps with the relevant systems and authorities, where applicable', 'Following up and telling you when something is needed from you', 'Guidance on change of employer and related documentation, where applicable'], note: 'Requirements change. We confirm the current renewal process with you for each case. Approval is decided by the relevant authorities.' },
        { h2: 'Official sources', sources: [SRC.imi, SRC.fomema, SRC.perkeso] },
      ],
      faq: [
        { q: 'When should I start the renewal?', a: 'As early as the current rules allow and well before expiry. Tell us the expiry date and we will advise on timing for your case.' },
        { q: 'Can you handle renewals for workers you did not recruit?', a: 'In many cases yes, subject to the documents available and current requirements. Send us the details and we will review.' },
      ],
      related: ['fwDocs', 'fwcms', 'fw'],
      form: true,
    },
  },

  // ---------------------------------------------------------------------------------------------
  fwDocs: {
    en: {
      title: 'Foreign Worker Documentation Malaysia | Final Choice',
      description: 'Common documents employers prepare for foreign worker applications in Malaysia, and how Final Choice checks and organises them before submission.',
      h1: 'Foreign Worker Documentation Support in Malaysia',
      eyebrow: 'Foreign worker services',
      lead: 'Incomplete or inconsistent documents are one of the most common reasons applications stall. We check and organise your documents before submission so your team is not left guessing.',
      wa: 'Hello Final Choice, please send me a document checklist for foreign worker applications.',
      blocks: [
        { h2: 'Common documents employers prepare', paras: ['The exact list depends on your sector and the application type. These are typical examples:'], bullets: ['Company registration documents (for example SSM details)', 'Business licences from the local authority or relevant regulator', 'Financial or tax documents', 'Premise documents such as tenancy or ownership records', 'Records of current local and foreign employees', 'Employment contracts for the positions being applied for', 'Recent payslips or payroll records, where requested', 'Sector-specific licences or registrations', 'Accommodation-related documents, where applicable', 'Supporting forms and declarations'] },
        { h2: 'How we check them', steps: [
          { t: 'Collect', d: 'You send what you currently have.' },
          { t: 'Review', d: 'We check names, dates, addresses and figures match across documents.' },
          { t: 'Report', d: 'We list what is missing, expired or needs correction.' },
          { t: 'Organise', d: 'We arrange the final set in the order the application needs.' },
        ], note: 'Please do not send ID or passport copies in an open WhatsApp message. Our consultant will tell you how to share documents safely. We keep your documents confidential and use them only for your application.' },
        { h2: 'Related guidance', paras: ['Accommodation: we give guidance and documentation support on worker accommodation, including Akta 446-related requirements where applicable. Certificates and approvals are issued by the relevant authorities.'], sources: [SRC.jtksm, SRC.mohr] },
      ],
      faq: [
        { q: 'Do all employers need the same documents?', a: 'No. Requirements vary by sector, business type and application. We give you a checklist specific to your company.' },
        docsFaq,
      ],
      related: ['fwQuota', 'fw60k', 'fwcms', 'fw'],
      form: true,
    },
  },

  // ---------------------------------------------------------------------------------------------
  fwManufacturing: {
    en: {
      title: 'Foreign Workers for Manufacturing Malaysia | Final Choice',
      description: 'Foreign worker recruitment for Malaysian factories and manufacturers: sector eligibility, common documents and how Final Choice supports the application.',
      h1: 'Foreign Workers for Manufacturing Companies in Malaysia',
      eyebrow: 'Sector: manufacturing',
      lead: 'Factories and manufacturing companies often need reliable production workers. Final Choice helps manufacturers check eligibility, prepare documents and follow their foreign worker applications through.',
      image: sectorImg('manufacturing', 'Production line workers in a Malaysian factory setting'),
      wa: 'Hello Final Choice, we are a manufacturer and would like to enquire about foreign workers.',
      blocks: [
        { h2: 'What manufacturers should prepare', bullets: ['Company registration and business licence', 'Manufacturing licence or sector approval, where your activity requires one', 'Premise documents and details of the factory', 'Financial or tax records', 'Records of current local and foreign workers', 'Details of the positions, and the number of workers you need', 'Worker accommodation arrangements, where applicable'], note: 'The authorities decide which manufacturing sub-sectors and positions are eligible, and this can change. We confirm current requirements before you commit to anything.' },
        { h2: 'How we help', paras: ['We review your activity and documents, tell you what is likely to be needed, prepare the employer applications, including Section 60K and FWCMS or FWe Approval steps where applicable, and follow up. Workers can be recruited from Myanmar, Nepal and Bangladesh, subject to current policy and your eligibility.'] },
        { h2: 'Plan for compliance as well as hiring', paras: ['Accommodation, permit renewal and record-keeping matter as much as the first approval. We can guide you on accommodation requirements, including Akta 446-related requirements where applicable, and keep a renewal schedule so permits do not lapse.'], sources: [SRC.jtksm, SRC.mohr] },
      ],
      faq: [
        { q: 'Which manufacturing positions can foreign workers fill?', a: 'It depends on your sub-sector and current policy. Send us your activity and the position and we will check against the current requirements.' },
        { q: 'How many workers can my factory apply for?', a: 'The number approved is decided by the authorities and depends on your operations and eligibility. We will explain how your request is assessed.' },
      ],
      related: ['fwQuota', 'fw60k', 'fwcms', 'fw'],
      form: true,
    },
  },

  fwConstruction: {
    en: {
      title: 'Foreign Workers for Construction Malaysia | Final Choice',
      description: 'Foreign worker recruitment for Malaysian contractors and construction companies: eligibility, registrations, documents and how Final Choice helps.',
      h1: 'Foreign Workers for Construction Companies in Malaysia',
      eyebrow: 'Sector: construction',
      lead: 'Contractors and construction companies usually need to satisfy sector-specific registration requirements in addition to the general employer applications. Final Choice helps you see what applies and prepare the documents.',
      image: sectorImg('construction', 'Construction workers on a building site wearing safety equipment'),
      wa: 'Hello Final Choice, we are a construction company and would like to enquire about foreign workers.',
      blocks: [
        { h2: 'What construction employers should prepare', bullets: ['Company registration documents', 'Contractor and construction-related registrations, where applicable', 'Details of current projects and sites', 'Financial or tax records', 'Records of current local and foreign workers', 'Worker accommodation arrangements, including site or off-site housing, where applicable', 'Details of the positions and number of workers needed'], note: 'Which registrations and approvals apply to your company depends on your business and current regulations. We help you find out before you start the application.' },
        { h2: 'How we help', paras: ['We review your registrations and documents, tell you what is missing, prepare the employer applications, including Section 60K and FWCMS or FWe Approval steps where applicable, and follow up. Recruitment is from Myanmar, Nepal and Bangladesh, subject to current policy and your eligibility.'] },
        { h2: 'Accommodation and compliance', paras: ['Construction employers often house workers on or near sites. We give guidance and documentation support on accommodation requirements, including Akta 446-related requirements where applicable.'], sources: [SRC.jtksm, SRC.mohr] },
      ],
      faq: [
        { q: 'Do construction companies need extra registrations?', a: 'Often there are sector-specific registrations in addition to the general employer documents. The exact list depends on your business, so we confirm it with you first.' },
        { q: 'Can you help if we already have workers but need to renew permits?', a: 'Yes, in many cases. Send us the permit expiry dates and document details and we will review them.' },
      ],
      related: ['fwQuota', 'fw60k', 'fwRenewal', 'fw'],
      form: true,
    },
  },

  fwServices: {
    en: {
      title: 'Foreign Workers for Services Sector Malaysia | Final Choice',
      description: 'Foreign worker recruitment for eligible service-sector employers in Malaysia, including cleaning services: eligibility, documents and Final Choice support.',
      h1: 'Foreign Workers for the Services Sector in Malaysia',
      eyebrow: 'Sector: services',
      lead: 'The services sector covers many different businesses, and only certain sub-sectors and positions are open to foreign workers. Final Choice helps you check whether yours qualifies and prepare the application.',
      image: sectorImg('services', 'Service staff working in a commercial building'),
      wa: 'Hello Final Choice, we are in the services sector and would like to enquire about foreign workers.',
      blocks: [
        { h2: 'Eligibility is sub-sector specific', paras: ['Unlike manufacturing or plantation, the services sector is a broad category. Eligible sub-sectors, such as cleaning services, and permitted positions are set by current policy, and they are reviewed from time to time. We will not tell you an application is straightforward until we have checked your sub-sector against the current rules.'] },
        { h2: 'What service-sector employers should prepare', bullets: ['Company registration and business licences', 'Details of the services provided and the sites you operate at', 'Premise documents', 'Financial or tax records', 'Records of current local and foreign workers', 'Details of positions and number of workers needed', 'Accommodation arrangements, where applicable'] },
        { h2: 'How we help', paras: ['We assess eligibility first, then prepare the employer applications, including Section 60K and FWCMS or FWe Approval steps where applicable, and follow up. Recruitment is from Myanmar, Nepal and Bangladesh, subject to current policy and your eligibility.'], sources: [SRC.jtksm, SRC.mohr] },
      ],
      faq: [
        { q: 'Can a restaurant, retail shop or office hire foreign workers?', a: 'Eligibility depends on the sub-sector and current policy, and many service businesses are restricted. Tell us your business and we will check honestly.' },
      ],
      related: ['fwQuota', 'fw60k', 'fwcms', 'fw'],
      form: true,
    },
  },

  fwPlantation: {
    en: {
      title: 'Foreign Workers for Plantation Malaysia | Final Choice',
      description: 'Foreign worker recruitment for Malaysian estates and plantation operators: eligibility, documents and how Final Choice supports your application.',
      h1: 'Foreign Workers for Plantation Employers in Malaysia',
      eyebrow: 'Sector: plantation',
      lead: 'Estates and plantation operators need field workers throughout the year. Final Choice helps plantation employers prepare their applications and documents, subject to current sector requirements.',
      image: sectorImg('plantation', 'Plantation workers in a Malaysian estate'),
      wa: 'Hello Final Choice, we operate a plantation and would like to enquire about foreign workers.',
      blocks: [
        { h2: 'What plantation employers should prepare', bullets: ['Company registration documents', 'Land and estate documents, and plantation-related licences or registrations, where applicable', 'Details of the crop, area and work required', 'Financial or tax records', 'Records of current local and foreign workers', 'Worker accommodation arrangements, which matter particularly for estates', 'Details of positions and number of workers needed'], note: 'Sector-specific agencies may be involved in plantation applications. We confirm the current process with you before you start.' },
        { h2: 'How we help', paras: ['We review your documents, tell you what is missing, prepare the employer applications, including Section 60K and FWCMS or FWe Approval steps where applicable, and follow up. Recruitment is from Myanmar, Nepal and Bangladesh, subject to current policy and your eligibility.'], sources: [SRC.jtksm, SRC.mohr] },
      ],
      faq: [
        { q: 'Do plantation employers have to provide housing?', a: 'Worker accommodation requirements, including Akta 446-related requirements, may apply. We can give guidance on what is relevant to your estate.' },
      ],
      related: ['fwQuota', 'fw60k', 'fwAgriculture', 'fw'],
      form: true,
    },
  },

  fwAgriculture: {
    en: {
      title: 'Foreign Workers for Agriculture Malaysia | Final Choice',
      description: 'Foreign worker recruitment for Malaysian farms and agricultural businesses: sector eligibility, documents and how Final Choice supports your application.',
      h1: 'Foreign Workers for Farms and Agriculture in Malaysia',
      eyebrow: 'Sector: agriculture',
      lead: 'Farms and agricultural businesses can apply for foreign workers where they meet current sector eligibility. Final Choice helps you check whether you qualify and prepare the right documents.',
      image: sectorImg('agriculture', 'Agricultural workers on a farm in Malaysia'),
      wa: 'Hello Final Choice, we run a farm and would like to enquire about foreign workers.',
      blocks: [
        { h2: 'What agricultural employers should prepare', bullets: ['Company or business registration documents', 'Farm, land or premise documents', 'Agriculture-related licences or registrations, where applicable', 'Details of the farm activity and work required', 'Financial or tax records', 'Records of current local and foreign workers', 'Worker accommodation arrangements, where applicable', 'Details of positions and number of workers needed'], note: 'Agriculture sub-sectors and eligible positions are set by current policy, and the relevant sector agency may be involved. We confirm this before you commit.' },
        { h2: 'How we help', paras: ['We review your documents, tell you what is missing, prepare the employer applications, including Section 60K and FWCMS or FWe Approval steps where applicable, and follow up. Recruitment is from Myanmar, Nepal and Bangladesh, subject to current policy and your eligibility.'], sources: [SRC.jtksm, SRC.mohr] },
      ],
      faq: [
        { q: 'Can a small family farm apply?', a: 'Eligibility depends on your business registration, activity and current policy. Send us your details and we will tell you honestly what is likely to apply.' },
      ],
      related: ['fwQuota', 'fw60k', 'fwPlantation', 'fw'],
      form: true,
    },
  },
};
