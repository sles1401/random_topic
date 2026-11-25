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

const CHALLENGE_KEYWORDS = [
  "Kopi", "Jembatan", "Cermin", "Kompas", "Payung", "Jam Tangan",
  "Sepatu", "Lampu Merah", "Kunci", "Pelangi", "Buku Catatan", "Tangga",
  "Pintu", "Awan", "Gema", "Peta", "Baterai", "Bintang"
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
  SOUND: "speakwheel_sound_v1"
};

// State aplikasi
let activeTopics = [];
let historyItems = [];
let soundEnabled = true;
let currentAngle = 0; // radian
let isSpinning = false;
let lastWinnerIndex = -1;

// Timer state
let timerDuration = 90;
let timerRemaining = 90;
let timerInterval = null;

// Audio Context (Web Audio API)
let audioCtx = null;

// Elemen DOM
const wheelCanvas = document.getElementById("wheelCanvas");
const ctx = wheelCanvas.getContext("2d");
const confettiCanvas = document.getElementById("confettiCanvas");
const confettiCtx = confettiCanvas.getContext("2d");

const wheelPointer = document.getElementById("wheelPointer");
const centerSpinBtn = document.getElementById("centerSpinBtn");
const spinBtn = document.getElementById("spinBtn");
const randomizeWheelBtn = document.getElementById("randomizeWheelBtn");
const categorySelect = document.getElementById("categorySelect");
const wheelSizeSelect = document.getElementById("wheelSizeSelect");
const addTopicForm = document.getElementById("addTopicForm");
const newTopicInput = document.getElementById("newTopicInput");
const topicList = document.getElementById("topicList");
const topicCountBadge = document.getElementById("topicCountBadge");
const shuffleListBtn = document.getElementById("shuffleListBtn");
const clearListBtn = document.getElementById("clearListBtn");
const removeAfterSpinToggle = document.getElementById("removeAfterSpinToggle");
const keywordChallengeToggle = document.getElementById("keywordChallengeToggle");

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
const modalPromptHint = document.getElementById("modalPromptHint");
const prepNotesInput = document.getElementById("prepNotesInput");
const removeWinnerBtn = document.getElementById("removeWinnerBtn");
const spinAgainBtn = document.getElementById("spinAgainBtn");

const timerDisplay = document.getElementById("timerDisplay");
const timerStartBtn = document.getElementById("timerStartBtn");
const timerResetBtn = document.getElementById("timerResetBtn");
const timerProgressBar = document.getElementById("timerProgressBar");
const durationPills = document.querySelectorAll(".pill");

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

function truncateLabel(text, maxLen = 24) {
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen - 1).trimEnd() + "…";
}

function saveState() {
  localStorage.setItem(STORAGE_KEYS.TOPICS, JSON.stringify(activeTopics));
  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(historyItems));
  localStorage.setItem(STORAGE_KEYS.SOUND, JSON.stringify(soundEnabled));
}

function loadRandomTopicsFromBank() {
  const cat = categorySelect.value;
  const count = parseInt(wheelSizeSelect.value, 10) || 8;
  const pool = cat === "all"
    ? TOPIC_BANK
    : TOPIC_BANK.filter((item) => item.category === cat);

  activeTopics = shuffleArray(pool).slice(0, Math.min(count, pool.length));
  saveState();
  renderAll();
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

  activeTopics.forEach((topic, i) => {
    const startAngle = currentAngle + i * sliceAngle;
    const endAngle = startAngle + sliceAngle;

    // Segmen
    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.arc(center, center, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = SEGMENT_COLORS[i % SEGMENT_COLORS.length];
    ctx.fill();

    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "rgba(15, 23, 42, 0.7)";
    ctx.stroke();

    // Teks topik di dalam segmen
    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(startAngle + sliceAngle / 2);

    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#ffffff";
    ctx.shadowColor = "rgba(0, 0, 0, 0.45)";
    ctx.shadowBlur = 4;

    const fontSize = activeTopics.length >= 10 ? 13 : 15;
    ctx.font = `700 ${fontSize}px 'Plus Jakarta Sans', sans-serif`;
    ctx.fillText(truncateLabel(topic.text, activeTopics.length >= 10 ? 20 : 25), radius - 22, 0);
    ctx.restore();
  });
}

// ---------- Render UI ----------
function renderTopicList() {
  topicList.innerHTML = "";
  topicCountBadge.textContent = `${activeTopics.length} topik`;

  if (activeTopics.length === 0) {
    const empty = document.createElement("li");
    empty.className = "topic-item";
    empty.innerHTML = `<span style="color: var(--text-muted)">Belum ada topik. Klik "Acak Topik Baru" atau tambah manual.</span>`;
    topicList.appendChild(empty);
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
        activeTopics.splice(idx, 1);
        saveState();
        renderAll();
      });

      li.appendChild(left);
      li.appendChild(delBtn);
      topicList.appendChild(li);
    });
  }

  const canSpin = activeTopics.length >= 2 && !isSpinning;
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
function getWinnerIndex(angle, count) {
  const sliceAngle = (Math.PI * 2) / count;
  // Pointer ada di posisi atas = -Math.PI / 2 (atau 270 derajat)
  const pointerAngle = -Math.PI / 2;
  let relativeAngle = (pointerAngle - angle) % (Math.PI * 2);
  if (relativeAngle < 0) relativeAngle += Math.PI * 2;
  return Math.floor(relativeAngle / sliceAngle) % count;
}

function spinWheel() {
  if (isSpinning || activeTopics.length < 2) return;

  isSpinning = true;
  spinBtn.disabled = true;
  centerSpinBtn.disabled = true;

  const startAngle = currentAngle;
  // 5 sampai 8 putaran penuh + sudut acak
  const extraSpins = (5 + Math.random() * 3) * Math.PI * 2;
  const randomOffset = Math.random() * Math.PI * 2;
  const totalDelta = extraSpins + randomOffset;
  const duration = 4300; // ms
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

  // Simpan ke riwayat
  const nowStr = new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
  historyItems.unshift({
    text: winner.text,
    category: winner.category || "Kustom",
    time: nowStr
  });
  if (historyItems.length > 30) historyItems.pop();

  if (removeAfterSpinToggle.checked) {
    activeTopics.splice(winnerIdx, 1);
    lastWinnerIndex = -1;
    removeWinnerBtn.style.display = "none";
  } else {
    removeWinnerBtn.style.display = "inline-flex";
  }

  saveState();
  renderAll();
  openResultModal(winner);
}

// ---------- Modal & Timer ----------
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

  prepNotesInput.value = "";
  resetTimer();
  resultModal.classList.remove("hidden");
}

function closeResultModal() {
  stopTimer();
  resultModal.classList.add("hidden");
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function updateTimerUI() {
  timerDisplay.textContent = formatTime(timerRemaining);
  const pct = (timerRemaining / timerDuration) * 100;
  timerProgressBar.style.width = `${pct}%`;

  timerDisplay.classList.remove("warning", "done");
  if (timerRemaining === 0) {
    timerDisplay.classList.add("done");
  } else if (timerRemaining <= 15) {
    timerDisplay.classList.add("warning");
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
  timerRemaining = timerDuration;
  updateTimerUI();
}

function toggleTimer() {
  if (timerInterval) {
    stopTimer();
    return;
  }

  if (timerRemaining <= 0) {
    timerRemaining = timerDuration;
  }

  timerStartBtn.textContent = "⏸ Jeda";
  timerInterval = setInterval(() => {
    timerRemaining -= 1;
    updateTimerUI();

    if (timerRemaining <= 0) {
      stopTimer();
      playTimerDoneSound();
    }
  }, 1000);
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
      p.vy += 0.35; // gravity
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

addTopicForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isSpinning) return;
  const val = newTopicInput.value.trim();
  if (!val) return;

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

clearListBtn.addEventListener("click", () => {
  if (isSpinning) return;
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
  if (activeTopics.length >= 2) {
    spinWheel();
  }
});

removeWinnerBtn.addEventListener("click", () => {
  if (lastWinnerIndex >= 0 && lastWinnerIndex < activeTopics.length) {
    activeTopics.splice(lastWinnerIndex, 1);
    lastWinnerIndex = -1;
    saveState();
    renderAll();
  }
  closeResultModal();
});

durationPills.forEach((pill) => {
  pill.addEventListener("click", () => {
    durationPills.forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");
    timerDuration = parseInt(pill.dataset.seconds, 10);
    resetTimer();
  });
});

timerStartBtn.addEventListener("click", toggleTimer);
timerResetBtn.addEventListener("click", resetTimer);

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

// ---------- Init ----------
function init() {
  try {
    const savedSound = localStorage.getItem(STORAGE_KEYS.SOUND);
    if (savedSound !== null) soundEnabled = JSON.parse(savedSound);

    const savedHistory = localStorage.getItem(STORAGE_KEYS.HISTORY);
    if (savedHistory) historyItems = JSON.parse(savedHistory);

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
  updateTimerUI();
}

init();
