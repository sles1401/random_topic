// Bank topik acak untuk latihan Public Speaking / Impromptu Speaking
const TOPIC_BANK = [
  // Opini & Gaya Hidup
  { text: "Kenapa tidur siang seharusnya jadi budaya kerja?", category: "Opini & Gaya Hidup" },
  { text: "Media sosial membuat kita lebih dekat atau justru lebih kesepian?", category: "Opini & Gaya Hidup" },
  { text: "Lebih baik punya sedikit teman dekat atau banyak kenalan?", category: "Opini & Gaya Hidup" },
  { text: "Apakah uang bisa membeli kebahagiaan? Jelaskan versimu.", category: "Opini & Gaya Hidup" },
  { text: "Satu kebiasaan kecil yang berdampak besar pada hidupmu.", category: "Opini & Gaya Hidup" },
  { text: "Kenapa banyak orang takut berkata 'tidak'?", category: "Opini & Gaya Hidup" },
  { text: "Pentingnya liburan tanpa membuka HP sama sekali.", category: "Opini & Gaya Hidup" },
  { text: "Makanan tradisional yang wajib mendunia menurutmu.", category: "Opini & Gaya Hidup" },
  { text: "Apakah sarapan benar-benar waktu makan terpenting?", category: "Opini & Gaya Hidup" },
  { text: "Belajar dari kegagalan vs belajar dari kesuksesan.", category: "Opini & Gaya Hidup" },

  // Pengalaman Pribadi
  { text: "Momen paling memalukan yang kini justru bikin kamu tertawa.", category: "Pengalaman Pribadi" },
  { text: "Nasihat terbaik yang pernah kamu terima dari seseorang.", category: "Pengalaman Pribadi" },
  { text: "Kapan terakhir kali kamu keluar dari zona nyaman?", category: "Pengalaman Pribadi" },
  { text: "Satu keterampilan baru yang ingin kamu kuasai tahun ini.", category: "Pengalaman Pribadi" },
  { text: "Guru atau mentor yang paling mengubah cara berpikirmu.", category: "Pengalaman Pribadi" },
  { text: "Keputusan spontan terbaik yang pernah kamu ambil.", category: "Pengalaman Pribadi" },
  { text: "Hal sederhana yang selalu berhasil memperbaiki mood-mu.", category: "Pengalaman Pribadi" },
  { text: "Ceritakan buku, film, atau lagu yang paling membekas.", category: "Pengalaman Pribadi" },
  { text: "Kesalahan masa lalu yang ternyata membawa berkah.", category: "Pengalaman Pribadi" },
  { text: "Jika bisa mengirim pesan ke dirimu 5 tahun lalu, apa isinya?", category: "Pengalaman Pribadi" },

  // Imajinasi
  { text: "Jika kamu bisa menguasai 1 bahasa dalam semalam, bahasa apa?", category: "Imajinasi" },
  { text: "Bagaimana jadinya dunia jika semua orang tidak bisa berbohong?", category: "Imajinasi" },
  { text: "Kamu diberi waktu 1 menit bicara di depan seluruh dunia, apa pesanmu?", category: "Imajinasi" },
  { text: "Jika bisa makan malam dengan tokoh sejarah, siapa yang kamu pilih?", category: "Imajinasi" },
  { text: "Jika kamu punya kekuatan super menghentikan waktu, apa yang kamu lakukan?", category: "Imajinasi" },
  { text: "Bayangkan kamu jadi walikota selama 1 hari. Apa aturan pertamamu?", category: "Imajinasi" },
  { text: "Jika hidupmu adalah sebuah film, apa judul dan genrenya?", category: "Imajinasi" },
  { text: "Kamu terdampar di pulau kosong dan hanya boleh bawa 3 benda.", category: "Imajinasi" },
  { text: "Jika hewan bisa berbicara, hewan apa yang paling cerewet?", category: "Imajinasi" },
  { text: "Jika kamu bisa menghapus satu penemuan manusia, apa itu?", category: "Imajinasi" },

  // Teknologi & Masa Depan
  { text: "Apakah AI akan menggantikan kreativitas manusia?", category: "Teknologi & Masa Depan" },
  { text: "Kehidupan kita 20 tahun lagi: lebih mudah atau lebih rumit?", category: "Teknologi & Masa Depan" },
  { text: "Haruskah anak SD dibekali smartphone sendiri?", category: "Teknologi & Masa Depan" },
  { text: "Dampak positif dan negatif kerja jarak jauh (remote work).", category: "Teknologi & Masa Depan" },
  { text: "Apakah privasi masih ada di era digital saat ini?", category: "Teknologi & Masa Depan" },
  { text: "Mana yang lebih penting di masa depan: gelar atau portofolio?", category: "Teknologi & Masa Depan" },
  { text: "Jika robot bisa melakukan semua pekerjaan, apa peran manusia?", category: "Teknologi & Masa Depan" },
  { text: "Aplikasi apa yang paling sulit kamu tinggalkan dan kenapa?", category: "Teknologi & Masa Depan" },
  { text: "Apakah berita di media sosial bisa dipercaya?", category: "Teknologi & Masa Depan" },
  { text: "Teknologi ramah lingkungan apa yang paling dibutuhkan kotamu?", category: "Teknologi & Masa Depan" },

  // Dilema & Perspektif
  { text: "Jujur tapi menyakitkan vs bohong demi kebaikan?", category: "Dilema & Perspektif" },
  { text: "Gaji besar di pekerjaan membosankan vs gaji cukup di pekerjaan impian?", category: "Dilema & Perspektif" },
  { text: "Bakat alami vs kerja keras: mana yang lebih menentukan?", category: "Dilema & Perspektif" },
  { text: "Menjadi ikan besar di kolam kecil atau ikan kecil di lautan luas?", category: "Dilema & Perspektif" },
  { text: "Lebih penting proses atau hasil akhir?", category: "Dilema & Perspektif" },
  { text: "Apakah memaafkan berarti harus melupakan?", category: "Dilema & Perspektif" },
  { text: "Tinggal di kota besar yang sibuk vs desa yang tenang?", category: "Dilema & Perspektif" },
  { text: "Kritis itu baik, tapi kapan kritis berubah jadi mengeluh?", category: "Dilema & Perspektif" },
  { text: "Lebih baik menyesal karena mencoba atau menyesal karena tidak mencoba?", category: "Dilema & Perspektif" },
  { text: "Apakah kesuksesan bisa diukur dengan standar yang sama untuk semua orang?", category: "Dilema & Perspektif" },

  // Karier & Produktivitas
  { text: "Cara terbaik mengatasi rasa gugup sebelum tampil di depan umum.", category: "Karier & Produktivitas" },
  { text: "Kenapa komunikasi lebih penting daripada sekadar pintar?", category: "Karier & Produktivitas" },
  { text: "Pemimpin yang baik: ditakuti atau disukai?", category: "Karier & Produktivitas" },
  { text: "Cara menghadapi kritik pedas tanpa langsung down.", category: "Karier & Produktivitas" },
  { text: "Apakah multitasking itu mitos atau keterampilan nyata?", category: "Karier & Produktivitas" },
  { text: "Mengapa mendengarkan lebih sulit daripada berbicara?", category: "Karier & Produktivitas" },
  { text: "Satu hal yang membuat sebuah presentasi terasa membosankan.", category: "Karier & Produktivitas" },
  { text: "Tips menjaga fokus di tengah banyaknya notifikasi.", category: "Karier & Produktivitas" },
  { text: "Kerja tim vs kerja sendiri: mana yang lebih efektif bagimu?", category: "Karier & Produktivitas" },
  { text: "Bagaimana cara membangun kepercayaan diri dalam 30 detik pertama?", category: "Karier & Produktivitas" },

  // Romance & Hubungan
  { text: "Apakah jatuh cinta pada pandangan pertama itu nyata atau hanya ilusi?", category: "Romance & Hubungan" },
  { text: "Love language mana yang paling penting dalam sebuah hubungan dan kenapa?", category: "Romance & Hubungan" },
  { text: "LDR (hubungan jarak jauh): bisa berhasil atau cuma buang waktu?", category: "Romance & Hubungan" },
  { text: "Satu 'green flag' yang menurutmu wajib ada pada pasangan.", category: "Romance & Hubungan" },
  { text: "Bisakah mantan pacar tetap menjadi teman baik?", category: "Romance & Hubungan" },
  { text: "Lebih penting kecocokan humor atau kesamaan visi hidup?", category: "Romance & Hubungan" },
  { text: "Ide kencan pertama (first date) terbaik yang tidak klise.", category: "Romance & Hubungan" },
  { text: "Kapan waktu yang tepat untuk mengungkapkan perasaan lebih dulu?", category: "Romance & Hubungan" },
  { text: "Kenapa komunikasi sering gagal saat pasangan sedang bertengkar?", category: "Romance & Hubungan" },
  { text: "Apakah orang yang tepat datang di waktu yang salah itu benar ada?", category: "Romance & Hubungan" },
  { text: "Tindakan romantis sederhana yang jauh lebih bermakna dari hadiah mahal.", category: "Romance & Hubungan" },
  { text: "Haruskah pasangan tahu semua password media sosial satu sama lain?", category: "Romance & Hubungan" },
];

const PRESETS = {
  interview: [
    { text: "Ceritakan tentang dirimu dalam 60 detik.", category: "Interview Kerja" },
    { text: "Apa kelemahan terbesarmu dan bagaimana mengatasinya?", category: "Interview Kerja" },
    { text: "Mengapa kami harus memilih kamu dibanding kandidat lain?", category: "Interview Kerja" },
    { text: "Ceritakan konflik tim tersulit yang pernah kamu selesaikan.", category: "Interview Kerja" },
    { text: "Kegagalan terbesar yang pernah kamu alami dan pelajarannya.", category: "Interview Kerja" },
    { text: "Di mana kamu melihat dirimu 3 tahun dari sekarang?", category: "Interview Kerja" },
    { text: "Bagaimana caramu bekerja di bawah tekanan tenggat ketat?", category: "Interview Kerja" },
    { text: "Prestasi apa yang paling membuatmu bangga sejauh ini?", category: "Interview Kerja" }
  ],
  debate: [
    { text: "WFO lebih baik daripada WFH untuk perkembangan karier.", category: "Debat Ringan" },
    { text: "Kuliah online sama efektifnya dengan kuliah tatap muka.", category: "Debat Ringan" },
    { text: "AI sebaiknya dibatasi penggunaannya di industri kreatif.", category: "Debat Ringan" },
    { text: "Kualitas lebih penting daripada kecepatan dalam bekerja.", category: "Debat Ringan" },
    { text: "Liburan spontan lebih seru daripada liburan terencana.", category: "Debat Ringan" },
    { text: "Memulai bisnis sendiri lebih baik daripada jadi karyawan.", category: "Debat Ringan" },
    { text: "Uang tunai sebaiknya digantikan sepenuhnya oleh pembayaran digital.", category: "Debat Ringan" },
    { text: "Membaca buku fisik lebih baik daripada membaca e-book.", category: "Debat Ringan" }
  ],
  icebreak: [
    { text: "Makanan aneh apa yang ternyata kamu suka?", category: "Ice Breaking" },
    { text: "Kalau hidupmu punya lagu tema, lagu apa yang diputar?", category: "Ice Breaking" },
    { text: "Hal paling receh yang selalu bikin kamu tertawa.", category: "Ice Breaking" },
    { text: "Jika besok langsung diberi tiket gratis ke mana saja, pilih ke mana?", category: "Ice Breaking" },
    { text: "Satu bakat terpendam atau unik yang jarang orang tahu.", category: "Ice Breaking" },
    { text: "Tim bubur diaduk vs tidak diaduk — pertahankan argumenmu!", category: "Ice Breaking" },
    { text: "Siapa karakter fiksi yang paling mirip dengan kepribadianmu?", category: "Ice Breaking" },
    { text: "Kebiasaan pagi hari yang wajib dilakukan sebelum beraktivitas.", category: "Ice Breaking" }
  ]
};

const CHALLENGE_KEYWORDS = [
  "Kopi", "Jembatan", "Cermin", "Kompas", "Payung", "Jam Tangan",
  "Sepatu", "Lampu Merah", "Kunci", "Pelangi", "Buku Catatan", "Tangga",
  "Pintu", "Awan", "Gema", "Peta", "Baterai", "Bintang"
];

const SPEAKING_RULES = [
  "Dilarang memakai filler words ('eee', 'anu', 'kayak', 'gitu') selama bicara.",
  "Gunakan gaya penyampaian seperti pembicara TED Talk yang tenang dan meyakinkan.",
  "Wajib menyisipkan 1 contoh cerita nyata atau pengalaman pribadi.",
  "Tutup jawabanmu dengan 1 pertanyaan reflektif untuk audiens.",
  "Gunakan 1 analogi atau perumpamaan sederhana agar mudah dibayangkan.",
  "Tidak boleh melihat catatan sama sekali saat timer bicara dimulai.",
  "Awali 5 detik pertama dengan pernyataan yang mengejutkan atau pertanyaan pancingan.",
  "Bicara dengan tempo lebih lambat dan beri jeda 1 detik di setiap poin penting.",
  "Sertakan unsur humor ringan atau kalimat yang bikin pendengar tersenyum.",
  "Bayangkan kamu sedang menjelaskan topik ini kepada anak usia 10 tahun.",
  "Gunakan bahasa tubuh/ekspresi wajah yang antusias selama berbicara.",
  "Akhiri dengan ajakan bertindak (call-to-action) yang jelas dalam 1 kalimat."
];

const FRAMEWORKS = [
  {
    name: "PREP",
    hint: "Awali dengan pendapatmu (Point), jelaskan alasannya (Reason), beri 1 contoh nyata (Example), lalu tutup dengan kesimpulan (Point)."
  },
  {
    name: "Past – Present – Future",
    hint: "Ceritakan kondisi dulu (Past), situasi sekarang (Present), dan harapan atau prediksimu ke depan (Future)."
  },
  {
    name: "Problem – Solution – Benefit",
    hint: "Sebutkan masalah utamanya (Problem), tawarkan solusi (Solution), dan jelaskan manfaatnya bagi pendengar (Benefit)."
  },
  {
    name: "Storytelling (STAR)",
    hint: "Gunakan cerita singkat: Situasi awal, Tantangan yang dihadapi, Aksi yang diambil, dan Hasil/pelajarannya."
  }
];

const SEGMENT_COLORS = [
  "#6366f1", "#ec4899", "#10b981", "#f59e0b",
  "#06b6d4", "#8b5cf6", "#f43f5e", "#14b8a6",
  "#3b82f6", "#eab308", "#a855f7", "#22c55e"
];

const STORAGE_KEYS = {
  TOPICS: "speakwheel_topics_v1",
  HISTORY: "speakwheel_history_v1",
  SOUND: "speakwheel_sound_v1",
  EXCLUDED: "speakwheel_excluded_v1"
};

// State aplikasi
let activeTopics = [];
let excludedTopicTexts = new Set();
let historyItems = [];
let soundEnabled = true;
let currentAngle = 0; // radian
let isSpinning = false;
let lastWinnerIndex = -1;

// Timer 2 tahap state
let prepDuration = 15;
let speakDuration = 90;
let timerPhase = "idle"; // "idle" | "prep" | "speak" | "done"
let timerRemaining = 15;
let timerInterval = null;

// Audio Recorder state
let mediaRecorder = null;
let audioChunks = [];
let audioObjectUrl = null;
let isRecording = false;

// Audio Context (Web Audio API)
let audioCtx = null;

// Elemen DOM
const wheelCanvas = document.getElementById("wheelCanvas");
const ctx = wheelCanvas.getContext("2d");
const wheelTooltip = document.getElementById("wheelTooltip");
const confettiCanvas = document.getElementById("confettiCanvas");
const confettiCtx = confettiCanvas.getContext("2d");

const wheelPointer = document.getElementById("wheelPointer");
const centerSpinBtn = document.getElementById("centerSpinBtn");
const spinBtn = document.getElementById("spinBtn");
const randomizeWheelBtn = document.getElementById("randomizeWheelBtn");
const categorySelect = document.getElementById("categorySelect");
const wheelSizeSelect = document.getElementById("wheelSizeSelect");
const presetChips = document.querySelectorAll(".preset-chip");
const addTopicForm = document.getElementById("addTopicForm");
const newTopicInput = document.getElementById("newTopicInput");
const topicList = document.getElementById("topicList");
const topicCountBadge = document.getElementById("topicCountBadge");
const shuffleListBtn = document.getElementById("shuffleListBtn");
const generateFreshBtn = document.getElementById("generateFreshBtn");
const openImportBtn = document.getElementById("openImportBtn");
const restoreBankBtn = document.getElementById("restoreBankBtn");
const clearListBtn = document.getElementById("clearListBtn");

const importModal = document.getElementById("importModal");
const closeImportBtn = document.getElementById("closeImportBtn");
const closeImportFooterBtn = document.getElementById("closeImportFooterBtn");
const copyAiPromptBtn = document.getElementById("copyAiPromptBtn");
const copyPromptStatus = document.getElementById("copyPromptStatus");
const bulkTopicsInput = document.getElementById("bulkTopicsInput");
const bulkImportBtn = document.getElementById("bulkImportBtn");
const removeAfterSpinToggle = document.getElementById("removeAfterSpinToggle");
const keywordChallengeToggle = document.getElementById("keywordChallengeToggle");
const ruleChallengeToggle = document.getElementById("ruleChallengeToggle");

const rulesBtn = document.getElementById("rulesBtn");
const rulesModal = document.getElementById("rulesModal");
const closeRulesBtn = document.getElementById("closeRulesBtn");
const closeRulesFooterBtn = document.getElementById("closeRulesFooterBtn");

const soundToggleBtn = document.getElementById("soundToggleBtn");
const soundIcon = document.getElementById("soundIcon");
const soundLabel = document.getElementById("soundLabel");

const historyBtn = document.getElementById("historyBtn");
const historyCount = document.getElementById("historyCount");
const historyModal = document.getElementById("historyModal");
const historyList = document.getElementById("historyList");
const closeHistoryBtn = document.getElementById("closeHistoryBtn");
const closeHistoryFooterBtn = document.getElementById("closeHistoryFooterBtn");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

// Modal Hasil & Timer
const resultModal = document.getElementById("resultModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalCategoryBadge = document.getElementById("modalCategoryBadge");
const modalFrameworkBadge = document.getElementById("modalFrameworkBadge");
const modalTopicTitle = document.getElementById("modalTopicTitle");
const keywordBox = document.getElementById("keywordBox");
const modalKeyword = document.getElementById("modalKeyword");
const ruleBox = document.getElementById("ruleBox");
const modalRule = document.getElementById("modalRule");
const modalPromptHint = document.getElementById("modalPromptHint");
const prepNotesInput = document.getElementById("prepNotesInput");
const removeWinnerBtn = document.getElementById("removeWinnerBtn");
const spinAgainBtn = document.getElementById("spinAgainBtn");

const timerPhaseBadge = document.getElementById("timerPhaseBadge");
const timerDisplay = document.getElementById("timerDisplay");
const timerStartBtn = document.getElementById("timerStartBtn");
const timerResetBtn = document.getElementById("timerResetBtn");
const timerProgressBar = document.getElementById("timerProgressBar");
const durationPills = document.querySelectorAll(".pill");
const prepPills = document.querySelectorAll(".prep-pill");

const recordBtn = document.getElementById("recordBtn");
const recorderStatus = document.getElementById("recorderStatus");
const audioPlaybackWrap = document.getElementById("audioPlaybackWrap");
const audioPlayback = document.getElementById("audioPlayback");
const downloadAudioLink = document.getElementById("downloadAudioLink");
const evalChecks = document.querySelectorAll(".eval-check");

// ---------- Audio Helper ----------
function ensureAudioCtx() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

function playTickSound() {
  if (!soundEnabled) return;
  ensureAudioCtx();
  if (!audioCtx) return;

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(680, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(220, audioCtx.currentTime + 0.035);

  gain.gain.setValueAtTime(0.14, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.035);

  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.04);
}

function playWinSound() {
  if (!soundEnabled) return;
  ensureAudioCtx();
  if (!audioCtx) return;

  const notes = [523.25, 659.25, 783.99, 1046.5];
  notes.forEach((freq, idx) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const startTime = audioCtx.currentTime + idx * 0.08;

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0.15, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(startTime);
    osc.stop(startTime + 0.36);
  });
}

function playPhaseCueSound() {
  if (!soundEnabled) return;
  ensureAudioCtx();
  if (!audioCtx) return;

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(740, audioCtx.currentTime);
  osc.frequency.setValueAtTime(987.77, audioCtx.currentTime + 0.12);

  gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.32);

  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.34);
}

function playTimerDoneSound() {
  if (!soundEnabled) return;
  ensureAudioCtx();
  if (!audioCtx) return;

  [880, 880].forEach((freq, idx) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const startTime = audioCtx.currentTime + idx * 0.22;

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, startTime);
    gain.gain.setValueAtTime(0.18, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.18);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(startTime);
    osc.stop(startTime + 0.2);
  });
}

// ---------- Utility ----------
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function wrapSegmentLines(text, maxWidth, font) {
  ctx.save();
  ctx.font = font;
  const words = text.split(/\s+/);
  const lines = [];
  let currentLine = "";

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    if (ctx.measureText(testLine).width <= maxWidth) {
      currentLine = testLine;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
      if (lines.length === 1) {
        // Baris kedua: potong rapi dengan elipsis jika masih kepanjangan
        let remaining = [word, ...words.slice(words.indexOf(word) + 1)].join(" ");
        while (ctx.measureText(remaining + "…").width > maxWidth && remaining.length > 3) {
          remaining = remaining.slice(0, -1).trimEnd();
        }
        lines.push(remaining.length < text.length ? remaining + "…" : remaining);
        ctx.restore();
        return lines;
      }
    }
  }
  if (currentLine) lines.push(currentLine);
  ctx.restore();
  return lines.slice(0, 2);
}

function saveState() {
  localStorage.setItem(STORAGE_KEYS.TOPICS, JSON.stringify(activeTopics));
  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(historyItems));
  localStorage.setItem(STORAGE_KEYS.SOUND, JSON.stringify(soundEnabled));
  localStorage.setItem(STORAGE_KEYS.EXCLUDED, JSON.stringify([...excludedTopicTexts]));
}

function loadRandomTopicsFromBank() {
  const cat = categorySelect.value;
  const count = parseInt(wheelSizeSelect.value, 10) || 8;
  const basePool = cat === "all"
    ? TOPIC_BANK
    : TOPIC_BANK.filter((item) => item.category === cat);
  const pool = basePool.filter((item) => !excludedTopicTexts.has(item.text));

  activeTopics = shuffleArray(pool).slice(0, Math.min(count, pool.length));
  saveState();
  renderAll();
}

const PROCEDURAL_PARTS = {
  "Opini & Gaya Hidup": [
    ["Kenapa", "sebaiknya", "lebih sering dilakukan di akhir pekan?"],
    ["Apakah", "benar-benar membuat hidup", "lebih berkualitas?"],
    ["Satu alasan kenapa banyak orang sulit meninggalkan kebiasaan", "di era sekarang."]
  ],
  "Opini & Gaya Hidup_subjects": [
    "jalan pagi tanpa HP", "memasak makanan sendiri", "membatasi belanja impulsif",
    "tidur cukup 8 jam", "menulis jurnal harian", "nongkrong di kafe", "olahraga rutin"
  ],
  "Pengalaman Pribadi": [
    ["Ceritakan momen ketika kamu belajar hal berharga dari", "secara tidak terduga."],
    ["Bagaimana reaksimu saat pertama kali menghadapi", "dalam hidupmu?"],
    ["Apa perubahan terbesar yang kamu rasakan setelah melewati", "?"]
  ],
  "Pengalaman Pribadi_subjects": [
    "kegagalan kecil", "pujian dari orang asing", "tantangan baru di tempat kerja/kuliah",
    "perjalanan sendirian", "perbedaan pendapat dengan teman dekat", "kesalahan komunikasi"
  ],
  "Imajinasi": [
    ["Jika kamu bisa membuat satu aturan baru tentang", "untuk seluruh dunia, apa isinya?"],
    ["Bayangkan besok pagi semua orang tiba-tiba lupa cara", ", apa yang terjadi?"],
    ["Jika kamu diberi kesempatan mengulang satu hari tentang", ", hari apa yang kamu pilih?"]
  ],
  "Imajinasi_subjects": [
    "menggunakan internet", "mengatur waktu tidur", "berkomunikasi tanpa kata-kata",
    "liburan gratis", "memilih pekerjaan", "bertemu versi masa depan dirimu"
  ],
  "Teknologi & Masa Depan": [
    ["Menurutmu, bagaimana peran", "dalam 10 tahun ke depan?"],
    ["Lebih banyak manfaat atau risiko dari", "bagi generasi muda?"],
    ["Skill apa yang paling dibutuhkan manusia agar tidak kalah dari", "?"]
  ],
  "Teknologi & Masa Depan_subjects": [
    "asisten AI di kehidupan sehari-hari", "pembelajaran serba online", "otomasi pekerjaan",
    "media sosial berbasis video pendek", "teknologi rumah pintar", "identitas digital"
  ],
  "Dilema & Perspektif": [
    ["Dalam situasi sulit, mana yang lebih kamu pilih:", "?"],
    ["Setujukah kamu bahwa", "sering kali lebih penting daripada sekadar hasil?"],
    ["Kapan sebaiknya kita mempertahankan prinsip vs kompromi soal", "?"]
  ],
  "Dilema & Perspektif_subjects": [
    "jujur apa adanya atau menjaga perasaan orang lain", "kecepatan atau ketelitian",
    "stabilitas finansial atau mengejar passion", "bekerja keras diam-diam atau berani tampil",
    "kesetiaan pada rencana atau fleksibilitas"
  ],
  "Karier & Produktivitas": [
    ["Strategi paling efektif versi kamu untuk mengatasi", "saat deadline mepet."],
    ["Mengapa kemampuan", "sering menjadi pembeda utama di dunia kerja?"],
    ["Kesalahan umum apa yang sering terjadi saat seseorang mencoba", "?"]
  ],
  "Karier & Produktivitas_subjects": [
    "rasa malas di pagi hari", "mendengarkan secara aktif", "memberikan feedback yang membangun",
    "mengatur prioritas tugas", "berbicara di rapat penting", "menjaga work-life balance"
  ],
  "Romance & Hubungan": [
    ["Menurutmu, seberapa penting", "untuk menjaga hubungan tetap sehat?"],
    ["Apa tanda paling jelas bahwa seseorang tulus dalam hal", "?"],
    ["Bagaimana cara terbaik menyikapi perbedaan soal", "dengan pasangan?"]
  ],
  "Romance & Hubungan_subjects": [
    "komunikasi terbuka setiap hari", "memberi ruang pribadi (me time)",
    "menunjukkan apresiasi kecil", "mengatasi rasa cemburu", "perencanaan masa depan bersama",
    "saling mendukung karier dan hobi"
  ]
};

function generateFreshTopics(category, count) {
  const categories = category === "all"
    ? Object.keys(PROCEDURAL_PARTS).filter((k) => !k.endsWith("_subjects"))
    : [category];

  const existingSet = new Set([
    ...TOPIC_BANK.map((t) => t.text),
    ...activeTopics.map((t) => t.text),
    ...excludedTopicTexts
  ]);

  const candidates = [];
  for (const cat of categories) {
    const templates = PROCEDURAL_PARTS[cat] || [];
    const subjects = PROCEDURAL_PARTS[`${cat}_subjects`] || [];
    for (const tpl of templates) {
      for (const subj of subjects) {
        const text = tpl.length === 3
          ? `${tpl[0]} ${subj} ${tpl[1]} ${tpl[2]}`.replace(/\s+\?/g, "?")
          : `${tpl[0]} ${subj}${tpl[1].startsWith("?") || tpl[1].startsWith(",") ? "" : " "}${tpl[1]}`;
        if (!existingSet.has(text)) {
          candidates.push({ text, category: cat });
        }
      }
    }
  }

  return shuffleArray(candidates).slice(0, count);
}

// ---------- Drawing Wheel ----------
function drawWheel() {
  const size = wheelCanvas.width;
  const center = size / 2;
  const radius = center - 10;

  ctx.clearRect(0, 0, size, size);

  if (activeTopics.length === 0) {
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#1e293b";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#334155";
    ctx.stroke();

    ctx.fillStyle = "#94a3b8";
    ctx.font = "600 18px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Tambahkan atau Acak Topik", center, center);
    return;
  }

  const sliceAngle = (Math.PI * 2) / activeTopics.length;
  const fontSize = activeTopics.length >= 10 ? 12 : 14;
  const font = `700 ${fontSize}px 'Plus Jakarta Sans', sans-serif`;
  const maxTextWidth = radius - 78;

  activeTopics.forEach((topic, i) => {
    const startAngle = currentAngle + i * sliceAngle;
    const endAngle = startAngle + sliceAngle;

    // Segmen
    ctx.beginPath();
    if (activeTopics.length === 1) {
      ctx.arc(center, center, radius, 0, Math.PI * 2);
    } else {
      ctx.moveTo(center, center);
      ctx.arc(center, center, radius, startAngle, endAngle);
      ctx.closePath();
    }
    ctx.fillStyle = SEGMENT_COLORS[i % SEGMENT_COLORS.length];
    ctx.fill();

    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "rgba(15, 23, 42, 0.7)";
    ctx.stroke();

    // Teks topik 1-2 baris di dalam segmen
    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(startAngle + sliceAngle / 2);

    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#ffffff";
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    ctx.shadowBlur = 4;
    ctx.font = font;

    const lines = wrapSegmentLines(topic.text, maxTextWidth, font);
    const lineHeight = fontSize + 3;
    const startY = lines.length === 2 ? -lineHeight / 2 : 0;

    lines.forEach((line, lineIdx) => {
      ctx.fillText(line, radius - 20, startY + lineIdx * lineHeight);
    });

    ctx.restore();
  });
}

// ---------- Render UI ----------
function renderTopicList() {
  topicList.innerHTML = "";
  topicCountBadge.textContent = `${activeTopics.length} topik`;

  if (activeTopics.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty-topic-box";
    empty.innerHTML = `
      <span>Topik di roda kosong${excludedTopicTexts.size > 0 ? " (atau topik di kategori ini sudah habis)" : ""}.</span>
      <div class="empty-topic-actions">
        <button type="button" class="btn btn-sm btn-secondary" id="inlineFreshBtn">✨ Buat Rekomendasi Baru</button>
        <button type="button" class="btn btn-sm btn-ghost" id="inlineImportBtn">📥 Import / Prompt AI</button>
      </div>
    `;
    topicList.appendChild(empty);
    empty.querySelector("#inlineFreshBtn").addEventListener("click", handleGenerateFresh);
    empty.querySelector("#inlineImportBtn").addEventListener("click", openImportModal);
  } else {
    activeTopics.forEach((topic, idx) => {
      const li = document.createElement("li");
      li.className = "topic-item";

      const left = document.createElement("div");
      left.className = "topic-item-left";

      const dot = document.createElement("span");
      dot.className = "color-dot";
      dot.style.backgroundColor = SEGMENT_COLORS[idx % SEGMENT_COLORS.length];

      const textWrap = document.createElement("div");
      textWrap.style.minWidth = "0";

      const title = document.createElement("span");
      title.className = "topic-item-text";
      title.textContent = topic.text;
      title.title = topic.text;

      const cat = document.createElement("span");
      cat.className = "topic-item-cat";
      cat.textContent = topic.category || "Kustom";

      textWrap.appendChild(title);
      textWrap.appendChild(cat);
      left.appendChild(dot);
      left.appendChild(textWrap);

      const delBtn = document.createElement("button");
      delBtn.className = "icon-btn";
      delBtn.type = "button";
      delBtn.title = "Hapus topik";
      delBtn.textContent = "✕";
      delBtn.addEventListener("click", () => {
        if (isSpinning) return;
        const [removed] = activeTopics.splice(idx, 1);
        if (removed) excludedTopicTexts.add(removed.text);
        saveState();
        renderAll();
      });

      li.appendChild(left);
      li.appendChild(delBtn);
      topicList.appendChild(li);
    });
  }

  if (excludedTopicTexts.size > 0) {
    restoreBankBtn.classList.remove("hidden");
  } else {
    restoreBankBtn.classList.add("hidden");
  }

  const canSpin = activeTopics.length >= 1 && !isSpinning;
  spinBtn.disabled = !canSpin;
  centerSpinBtn.disabled = !canSpin;
}

function renderHistory() {
  historyCount.textContent = historyItems.length;
  historyList.innerHTML = "";

  if (historyItems.length === 0) {
    const empty = document.createElement("li");
    empty.className = "history-item";
    empty.textContent = "Belum ada topik yang terpilih.";
    historyList.appendChild(empty);
    return;
  }

  historyItems.forEach((item) => {
    const li = document.createElement("li");
    li.className = "history-item";
    li.innerHTML = `
      <strong>${escapeHtml(item.text)}</strong>
      <small>${escapeHtml(item.category)} • ${escapeHtml(item.time)}</small>
    `;
    historyList.appendChild(li);
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function updateSoundButton() {
  soundIcon.textContent = soundEnabled ? "🔊" : "🔇";
  soundLabel.textContent = soundEnabled ? "Suara Aktif" : "Suara Mati";
}

function renderAll() {
  drawWheel();
  renderTopicList();
  renderHistory();
  updateSoundButton();
}

// ---------- Spin Logic ----------
function getSegmentIndexAtAngle(targetAngle, wheelAngle, count) {
  const sliceAngle = (Math.PI * 2) / count;
  let relativeAngle = (targetAngle - wheelAngle) % (Math.PI * 2);
  if (relativeAngle < 0) relativeAngle += Math.PI * 2;
  return Math.floor(relativeAngle / sliceAngle) % count;
}

function getWinnerIndex(angle, count) {
  return getSegmentIndexAtAngle(-Math.PI / 2, angle, count);
}

function spinWheel() {
  if (isSpinning || activeTopics.length < 1) return;

  wheelTooltip.classList.add("hidden");
  isSpinning = true;
  spinBtn.disabled = true;
  centerSpinBtn.disabled = true;

  const startAngle = currentAngle;
  const extraSpins = (5 + Math.random() * 3) * Math.PI * 2;
  const randomOffset = Math.random() * Math.PI * 2;
  const totalDelta = extraSpins + randomOffset;
  const duration = 4300;
  const startTime = performance.now();

  let lastTickSegment = getWinnerIndex(currentAngle, activeTopics.length);

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animate(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);

    currentAngle = startAngle + totalDelta * eased;
    drawWheel();

    const currentSegment = getWinnerIndex(currentAngle, activeTopics.length);
    if (currentSegment !== lastTickSegment) {
      lastTickSegment = currentSegment;
      playTickSound();
      wheelPointer.classList.add("tick");
      setTimeout(() => wheelPointer.classList.remove("tick"), 65);
    }

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      isSpinning = false;
      currentAngle = currentAngle % (Math.PI * 2);
      const winnerIdx = getWinnerIndex(currentAngle, activeTopics.length);
      lastWinnerIndex = winnerIdx;
      const winner = activeTopics[winnerIdx];

      renderTopicList();
      onSpinComplete(winner, winnerIdx);
    }
  }

  requestAnimationFrame(animate);
}

function onSpinComplete(winner, winnerIdx) {
  playWinSound();
  launchConfetti();

  const nowStr = new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
  historyItems.unshift({
    text: winner.text,
    category: winner.category || "Kustom",
    time: nowStr
  });
  if (historyItems.length > 30) historyItems.pop();

  if (removeAfterSpinToggle.checked) {
    const [removed] = activeTopics.splice(winnerIdx, 1);
    if (removed) excludedTopicTexts.add(removed.text);
    lastWinnerIndex = -1;
    removeWinnerBtn.style.display = "none";
  } else {
    removeWinnerBtn.style.display = "inline-flex";
  }

  saveState();
  renderAll();
  openResultModal(winner);
}

// ---------- Modal & Timer 2 Tahap ----------
function openResultModal(topic) {
  modalCategoryBadge.textContent = topic.category || "Kustom";
  modalTopicTitle.textContent = topic.text;

  const fw = FRAMEWORKS[Math.floor(Math.random() * FRAMEWORKS.length)];
  modalFrameworkBadge.textContent = `Pola: ${fw.name}`;
  modalPromptHint.textContent = fw.hint;

  if (keywordChallengeToggle.checked) {
    const kw = CHALLENGE_KEYWORDS[Math.floor(Math.random() * CHALLENGE_KEYWORDS.length)];
    modalKeyword.textContent = kw;
    keywordBox.classList.remove("hidden");
  } else {
    keywordBox.classList.add("hidden");
  }

  if (ruleChallengeToggle.checked) {
    const rule = SPEAKING_RULES[Math.floor(Math.random() * SPEAKING_RULES.length)];
    modalRule.textContent = rule;
    ruleBox.classList.remove("hidden");
  } else {
    ruleBox.classList.add("hidden");
  }

  prepNotesInput.value = "";
  evalChecks.forEach((chk) => { chk.checked = false; });
  resetRecorderUI();
  resetTimer();
  resultModal.classList.remove("hidden");
}

function closeResultModal() {
  stopTimer();
  stopRecordingIfActive();
  resultModal.classList.add("hidden");
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function updateTimerUI() {
  timerDisplay.textContent = formatTime(timerRemaining);

  const totalForPhase =
    timerPhase === "prep" || (timerPhase === "idle" && prepDuration > 0)
      ? prepDuration
      : speakDuration;

  const pct = totalForPhase > 0 ? (timerRemaining / totalForPhase) * 100 : 0;
  timerProgressBar.style.width = `${Math.max(0, Math.min(100, pct))}%`;

  timerDisplay.classList.remove("prep", "warning", "done");
  timerPhaseBadge.classList.remove("prep", "speak", "done");

  if (timerPhase === "idle") {
    timerPhaseBadge.textContent = prepDuration > 0
      ? `Siap • Persiapan ${prepDuration} dtk lalu Bicara`
      : "Siap • Langsung mulai bicara";
  } else if (timerPhase === "prep") {
    timerDisplay.classList.add("prep");
    timerPhaseBadge.classList.add("prep");
    timerPhaseBadge.textContent = "⏳ Persiapan — susun poin singkatmu";
  } else if (timerPhase === "speak") {
    timerPhaseBadge.classList.add("speak");
    timerPhaseBadge.textContent = "🎙️ Waktu Bicara — sampaikan dengan percaya diri!";
    if (timerRemaining <= 15) {
      timerDisplay.classList.add("warning");
    }
  } else if (timerPhase === "done") {
    timerDisplay.classList.add("done");
    timerPhaseBadge.classList.add("done");
    timerPhaseBadge.textContent = "🏁 Waktu Habis! Cek hasil evaluasimu di bawah";
  }
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  timerStartBtn.textContent = "▶ Mulai";
}

function resetTimer() {
  stopTimer();
  timerPhase = "idle";
  timerRemaining = prepDuration > 0 ? prepDuration : speakDuration;
  updateTimerUI();
}

function toggleTimer() {
  if (timerInterval) {
    stopTimer();
    return;
  }

  if (timerPhase === "idle" || timerPhase === "done") {
    if (prepDuration > 0) {
      timerPhase = "prep";
      timerRemaining = prepDuration;
    } else {
      timerPhase = "speak";
      timerRemaining = speakDuration;
    }
  }

  updateTimerUI();
  timerStartBtn.textContent = "⏸ Jeda";

  timerInterval = setInterval(() => {
    timerRemaining -= 1;

    if (timerRemaining <= 0) {
      if (timerPhase === "prep") {
        timerPhase = "speak";
        timerRemaining = speakDuration;
        playPhaseCueSound();
        updateTimerUI();
        return;
      }

      timerRemaining = 0;
      timerPhase = "done";
      stopTimer();
      playTimerDoneSound();
    }

    updateTimerUI();
  }, 1000);
}

// ---------- Voice Recorder (Lokal via MediaRecorder) ----------
function resetRecorderUI() {
  stopRecordingIfActive();
  if (audioObjectUrl) {
    URL.revokeObjectURL(audioObjectUrl);
    audioObjectUrl = null;
  }
  audioPlayback.src = "";
  audioPlaybackWrap.classList.add("hidden");
  recorderStatus.textContent = "Dengarkan ulang untuk cek intonasi & filler words";
  recordBtn.textContent = "🎙️ Rekam";
  recordBtn.classList.remove("btn-recording");
}

function stopRecordingIfActive() {
  if (mediaRecorder && isRecording) {
    mediaRecorder.stop();
  }
}

async function toggleRecording() {
  if (isRecording) {
    stopRecordingIfActive();
    return;
  }

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    recorderStatus.textContent = "Browser ini tidak mendukung perekaman suara.";
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioChunks = [];
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) audioChunks.push(e.data);
    };

    mediaRecorder.onstop = () => {
      isRecording = false;
      stream.getTracks().forEach((track) => track.stop());

      const blob = new Blob(audioChunks, { type: mediaRecorder.mimeType || "audio/webm" });
      if (audioObjectUrl) URL.revokeObjectURL(audioObjectUrl);
      audioObjectUrl = URL.createObjectURL(blob);

      audioPlayback.src = audioObjectUrl;
      downloadAudioLink.href = audioObjectUrl;
      audioPlaybackWrap.classList.remove("hidden");
      recorderStatus.textContent = "Rekaman siap diputar!";
      recordBtn.textContent = "🎙️ Rekam Ulang";
      recordBtn.classList.remove("btn-recording");
    };

    mediaRecorder.start();
    isRecording = true;
    audioPlaybackWrap.classList.add("hidden");
    recorderStatus.textContent = "● Sedang merekam suara...";
    recordBtn.textContent = "⏹ Stop";
    recordBtn.classList.add("btn-recording");
  } catch {
    recorderStatus.textContent = "Izin mikrofon ditolak atau tidak tersedia.";
  }
}

// ---------- Confetti ----------
function launchConfetti() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const pieces = Array.from({ length: 75 }, () => ({
    x: window.innerWidth / 2 + (Math.random() - 0.5) * 160,
    y: window.innerHeight / 2 - 40,
    vx: (Math.random() - 0.5) * 14,
    vy: -Math.random() * 12 - 4,
    size: 6 + Math.random() * 6,
    color: SEGMENT_COLORS[Math.floor(Math.random() * SEGMENT_COLORS.length)],
    rotation: Math.random() * Math.PI * 2,
    vRot: (Math.random() - 0.5) * 0.25,
    alpha: 1
  }));

  function step() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    let alive = false;

    pieces.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35;
      p.rotation += p.vRot;
      p.alpha -= 0.012;

      if (p.alpha > 0 && p.y < confettiCanvas.height + 20) {
        alive = true;
        confettiCtx.save();
        confettiCtx.globalAlpha = Math.max(p.alpha, 0);
        confettiCtx.translate(p.x, p.y);
        confettiCtx.rotate(p.rotation);
        confettiCtx.fillStyle = p.color;
        confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        confettiCtx.restore();
      }
    });

    if (alive) {
      requestAnimationFrame(step);
    } else {
      confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }

  requestAnimationFrame(step);
}

// ---------- Hover Tooltip pada Wheel ----------
wheelCanvas.addEventListener("mousemove", (e) => {
  if (isSpinning || activeTopics.length === 0) {
    wheelTooltip.classList.add("hidden");
    return;
  }

  const rect = wheelCanvas.getBoundingClientRect();
  const x = (e.clientX - rect.left) * (wheelCanvas.width / rect.width) - wheelCanvas.width / 2;
  const y = (e.clientY - rect.top) * (wheelCanvas.height / rect.height) - wheelCanvas.height / 2;
  const dist = Math.hypot(x, y);
  const radius = wheelCanvas.width / 2 - 10;

  if (dist > radius || dist < 44) {
    wheelTooltip.classList.add("hidden");
    return;
  }

  const pointerAngle = Math.atan2(y, x);
  const idx = getSegmentIndexAtAngle(pointerAngle, currentAngle, activeTopics.length);
  const topic = activeTopics[idx];
  if (topic) {
    wheelTooltip.textContent = `${topic.text} (${topic.category || "Kustom"})`;
    wheelTooltip.classList.remove("hidden");
  }
});

wheelCanvas.addEventListener("mouseleave", () => {
  wheelTooltip.classList.add("hidden");
});

// ---------- Event Listeners ----------
spinBtn.addEventListener("click", spinWheel);
centerSpinBtn.addEventListener("click", spinWheel);
randomizeWheelBtn.addEventListener("click", () => {
  if (!isSpinning) loadRandomTopicsFromBank();
});

categorySelect.addEventListener("change", () => {
  if (!isSpinning) loadRandomTopicsFromBank();
});

wheelSizeSelect.addEventListener("change", () => {
  if (!isSpinning) loadRandomTopicsFromBank();
});

presetChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    if (isSpinning) return;
    const key = chip.dataset.preset;
    if (!PRESETS[key]) return;
    activeTopics = [...PRESETS[key]];
    saveState();
    renderAll();
  });
});

addTopicForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isSpinning) return;
  const val = newTopicInput.value.trim();
  if (!val) return;

  excludedTopicTexts.delete(val);
  activeTopics.push({ text: val, category: "Kustom" });
  newTopicInput.value = "";
  saveState();
  renderAll();
});

shuffleListBtn.addEventListener("click", () => {
  if (isSpinning || activeTopics.length < 2) return;
  activeTopics = shuffleArray(activeTopics);
  saveState();
  renderAll();
});

function handleGenerateFresh() {
  if (isSpinning) return;
  const cat = categorySelect.value;
  const count = parseInt(wheelSizeSelect.value, 10) || 8;
  const fresh = generateFreshTopics(cat, count);
  if (fresh.length === 0) {
    alert("Semua variasi rekomendasi otomatis sudah terpakai. Klik 'Pulihkan' atau gunakan 'Import / Prompt AI' untuk topik baru!");
    return;
  }
  activeTopics = fresh;
  saveState();
  renderAll();
}

function openImportModal() {
  copyPromptStatus.textContent = "";
  importModal.classList.remove("hidden");
}

generateFreshBtn.addEventListener("click", handleGenerateFresh);
openImportBtn.addEventListener("click", openImportModal);
closeImportBtn.addEventListener("click", () => importModal.classList.add("hidden"));
closeImportFooterBtn.addEventListener("click", () => importModal.classList.add("hidden"));
importModal.addEventListener("click", (e) => {
  if (e.target === importModal) importModal.classList.add("hidden");
});

copyAiPromptBtn.addEventListener("click", async () => {
  const catLabel = categorySelect.value === "all" ? "berbagai kategori menarik" : `kategori "${categorySelect.value}"`;
  const promptText = `Buatkan 10 topik latihan public speaking (impromptu speaking) dalam bahasa Indonesia untuk ${catLabel}.\nAturan:\n- Buat topik yang segar, singkat (1 kalimat/pertanyaan), dan memancing opini atau cerita.\n- Tulis 1 topik per baris tanpa penjelasan tambahan.`;
  try {
    await navigator.clipboard.writeText(promptText);
    copyPromptStatus.textContent = "✅ Prompt berhasil disalin!";
  } catch {
    copyPromptStatus.textContent = "Gagal menyalin otomatis, silakan salin manual.";
  }
});

bulkImportBtn.addEventListener("click", () => {
  if (isSpinning) return;
  const lines = bulkTopicsInput.value
    .split(/\r?\n/)
    .map((line) => line.replace(/^\s*(?:\d+[.)]|[-*•])\s*/, "").trim())
    .filter((line) => line.length > 0);

  if (lines.length === 0) return;

  const cat = categorySelect.value === "all" ? "Import AI" : categorySelect.value;
  lines.forEach((text) => {
    excludedTopicTexts.delete(text);
    if (!activeTopics.some((t) => t.text === text)) {
      activeTopics.push({ text, category: cat });
    }
  });

  bulkTopicsInput.value = "";
  saveState();
  renderAll();
  importModal.classList.add("hidden");
});

restoreBankBtn.addEventListener("click", () => {
  if (isSpinning) return;
  excludedTopicTexts.clear();
  loadRandomTopicsFromBank();
});

clearListBtn.addEventListener("click", () => {
  if (isSpinning) return;
  activeTopics.forEach((t) => excludedTopicTexts.add(t.text));
  activeTopics = [];
  saveState();
  renderAll();
});

soundToggleBtn.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  saveState();
  updateSoundButton();
});

closeModalBtn.addEventListener("click", closeResultModal);
resultModal.addEventListener("click", (e) => {
  if (e.target === resultModal) closeResultModal();
});

spinAgainBtn.addEventListener("click", () => {
  closeResultModal();
  if (activeTopics.length >= 1) {
    spinWheel();
  }
});

removeWinnerBtn.addEventListener("click", () => {
  if (lastWinnerIndex >= 0 && lastWinnerIndex < activeTopics.length) {
    const [removed] = activeTopics.splice(lastWinnerIndex, 1);
    if (removed) excludedTopicTexts.add(removed.text);
    lastWinnerIndex = -1;
    saveState();
    renderAll();
  }
  closeResultModal();
});

prepPills.forEach((pill) => {
  pill.addEventListener("click", () => {
    prepPills.forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");
    prepDuration = parseInt(pill.dataset.prep, 10);
    resetTimer();
  });
});

durationPills.forEach((pill) => {
  pill.addEventListener("click", () => {
    durationPills.forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");
    speakDuration = parseInt(pill.dataset.seconds, 10);
    resetTimer();
  });
});

timerStartBtn.addEventListener("click", toggleTimer);
timerResetBtn.addEventListener("click", resetTimer);
recordBtn.addEventListener("click", toggleRecording);

rulesBtn.addEventListener("click", () => rulesModal.classList.remove("hidden"));
closeRulesBtn.addEventListener("click", () => rulesModal.classList.add("hidden"));
closeRulesFooterBtn.addEventListener("click", () => rulesModal.classList.add("hidden"));
rulesModal.addEventListener("click", (e) => {
  if (e.target === rulesModal) rulesModal.classList.add("hidden");
});

historyBtn.addEventListener("click", () => historyModal.classList.remove("hidden"));
closeHistoryBtn.addEventListener("click", () => historyModal.classList.add("hidden"));
closeHistoryFooterBtn.addEventListener("click", () => historyModal.classList.add("hidden"));
historyModal.addEventListener("click", (e) => {
  if (e.target === historyModal) historyModal.classList.add("hidden");
});
clearHistoryBtn.addEventListener("click", () => {
  historyItems = [];
  saveState();
  renderHistory();
});

// Keyboard Shortcuts
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!resultModal.classList.contains("hidden")) closeResultModal();
    if (!historyModal.classList.contains("hidden")) historyModal.classList.add("hidden");
    if (!rulesModal.classList.contains("hidden")) rulesModal.classList.add("hidden");
    if (!importModal.classList.contains("hidden")) importModal.classList.add("hidden");
    return;
  }

  if (e.code === "Space") {
    const tag = document.activeElement?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || tag === "BUTTON") return;
    if (
      !resultModal.classList.contains("hidden") ||
      !historyModal.classList.contains("hidden") ||
      !rulesModal.classList.contains("hidden") ||
      !importModal.classList.contains("hidden")
    ) return;

    e.preventDefault();
    spinWheel();
  }
});

// ---------- Init ----------
function init() {
  try {
    const savedSound = localStorage.getItem(STORAGE_KEYS.SOUND);
    if (savedSound !== null) soundEnabled = JSON.parse(savedSound);

    const savedHistory = localStorage.getItem(STORAGE_KEYS.HISTORY);
    if (savedHistory) historyItems = JSON.parse(savedHistory);

    const savedExcluded = localStorage.getItem(STORAGE_KEYS.EXCLUDED);
    if (savedExcluded) {
      const parsedEx = JSON.parse(savedExcluded);
      if (Array.isArray(parsedEx)) excludedTopicTexts = new Set(parsedEx);
    }

    const savedTopics = localStorage.getItem(STORAGE_KEYS.TOPICS);
    if (savedTopics) {
      const parsed = JSON.parse(savedTopics);
      if (Array.isArray(parsed) && parsed.length > 0) {
        activeTopics = parsed;
      }
    }
  } catch {
    // Abaikan jika localStorage rusak
  }

  if (activeTopics.length === 0) {
    loadRandomTopicsFromBank();
  } else {
    renderAll();
  }
  resetTimer();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}

init();
