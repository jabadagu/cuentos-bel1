/**
 * CUENTO INTERACTIVO: "Garu y el globo que lo llevó al cielo"
 * Autora: Catherin Fiorella Asunción Adriánzen
 */

// ==========================================================================
// DATOS DE LAS 10 PÁGINAS DEL LIBRO (CON LÁMINAS 2 A 11 OPTIMIZADAS)
// ==========================================================================
const BOOK_PAGES = [
  {
    pageNumber: 1,
    laminaNumber: 2,
    badge: "Prólogo Poético",
    image: "assets/illustrations/lamina-2.webp",
    audio: "assets/audio/page-2.mp3",
    narrationText: "Cuando el viento canta bajito y el cielo bosteza de azul, hay cuentos que flotan despacito como globos rumbo a la luz.",
    textHtml: `
      <div style="display: flex; align-items: center; justify-content: center; height: 100%;">
        <p style="font-style: italic; font-size: 1.45rem; color: #0277bd; text-align: center; padding: 20px 10px; line-height: 1.9;">
          “CUANDO EL VIENTO CANTA BAJITO<br>
          Y EL CIELO BOSTEZA DE AZUL,<br>
          HAY CUENTOS QUE FLOTAN DESPACITO<br>
          COMO GLOBOS RUMBO A LA LUZ.”
        </p>
      </div>
    `
  },
  {
    pageNumber: 2,
    laminaNumber: 3,
    badge: "Garu, Mamá Lulú y Tipi",
    image: "assets/illustrations/lamina-3.webp",
    audio: "assets/audio/page-3.mp3",
    narrationText: "Había una vez un niño llamado Garu, que vivía con su mamá Lulú y su mascota, un perrito travieso llamado Tipi. Garu era un niño alegre y curioso. Le encantaba jugar en el jardín, correr con Tipi y ayudar a su mamá Lulú a regar las rosas.",
    textHtml: `
      <p>Había una vez un niño llamado <strong>Garu</strong>, que vivía con su mamá <strong>Lulú</strong> y su mascota, un perrito travieso llamado <strong>Tipi</strong>.</p>
      <p>Garu era un niño alegre y curioso. Le encantaba jugar en el jardín, correr con Tipi y ayudar a su mamá Lulú a regar las rosas.</p>
    `
  },
  {
    pageNumber: 3,
    laminaNumber: 4,
    badge: "El Día del Picnic",
    image: "assets/illustrations/lamina-4.webp",
    audio: "assets/audio/page-4.mp3",
    narrationText: "Una mañana, Garu se despertó y sintió algo muy especial. ¡Estaba lleno de felicidad! —¡Es hoy, es hoy, hoy es el día del picnic, Tipi! —gritó Garu saltando en la cama. Mamá Lulú preparó una canasta con jugo, galletas y frutas. —¡Vamos al parque, hijo! —dijo ella sonriendo. Tipi movía la cola muy rápido. ¡También estaba feliz!",
    textHtml: `
      <p>Una mañana, Garu se despertó y sintió algo muy especial. ¡Estaba lleno de <span class="emotion-highlight felicidad">FELICIDAD</span>!</p>
      <p>—¡Es hoy, es hoy, hoy es el día del picnic, Tipi! —gritó Garu saltando en la cama.</p>
      <p>Mamá Lulú preparó una canasta con jugo, galletas y frutas.<br>
      —¡Vamos al parque hijo! —dijo ella sonriendo.</p>
      <p>Tipi movía la cola muy rápido. ¡También estaba feliz! 🐶🧺</p>
    `
  },
  {
    pageNumber: 4,
    laminaNumber: 5,
    badge: "El Misterioso Globo Rojo",
    image: "assets/illustrations/lamina-5.webp",
    audio: "assets/audio/page-5.mp3",
    narrationText: "En el parque Garu y Tipi corrieron, rieron y jugaron a la pelota. Todo era perfecto... Cuando de pronto, Garu vio algo brillante atrapado entre las rosas. —¿Qué es eso? —preguntó curioso. Era un globo brillante, de color rojo, con una cuerda amarilla colgando.",
    textHtml: `
      <p>En el parque Garu y Tipi corrieron, rieron y jugaron a la pelota. Todo era perfecto...</p>
      <p>Cuando de pronto, Garu vio algo brillante atrapado entre las rosas.<br>
      —¿Qué es eso? —preguntó curioso.</p>
      <p>Era un <strong>globo brillante, de color rojo</strong>, con una cuerda amarilla colgando. 🎈✨</p>
    `
  },
  {
    pageNumber: 5,
    laminaNumber: 6,
    badge: "¡Garu Comienza a Volar!",
    image: "assets/illustrations/lamina-6.webp",
    audio: "assets/audio/page-6.mp3",
    narrationText: "Tenía una nota que decía: «Súbete y pide un deseo». —¡Tipi, mira esto! ¡Es un globo mágico! —Garu agarró la cuerda y dijo en voz alta—: ¡Deseo volar al cielo y ver las nubes de cerca! De pronto el globo lo levantó suavemente… ¡Y Garu comenzó a volar! —¡Wooooow! ¡Estoy volando, Tipi! ¡Esto es increíble! —gritó con felicidad. Tipi ladraba desde abajo, corriendo detrás de él.",
    textHtml: `
      <p>Tenía una nota que decía: <em>“Súbete y pide un deseo”</em>.</p>
      <p>—¡Tipi, mira esto! ¡Es un globo mágico!<br>
      Garu agarró la cuerda y dijo en voz alta:<br>
      —¡Deseo volar al cielo y ver las nubes de cerca!</p>
      <p>De pronto el globo lo levantó suavemente… <strong>¡Y Garu comenzó a volar!</strong></p>
      <p>—¡Wooooow! ¡Estoy volando Tipi! ¡Esto es increíble! —gritó con <span class="emotion-highlight felicidad">FELICIDAD</span>.<br>
      Tipi ladraba desde abajo, corriendo atrás de él.</p>
    `
  },
  {
    pageNumber: 6,
    laminaNumber: 7,
    badge: "Muy Alto en las Nubes",
    image: "assets/illustrations/lamina-7.webp",
    audio: "assets/audio/page-7.mp3",
    narrationText: "Garu voló por encima de las rosas, techos y montañas. Las nubes parecían algodón de azúcar, vio aves que cantaban y bailaban melodías mágicas y un sol que le guiñaba un ojo. Pero cuando miró hacia abajo... no podía ver su casa, ni a Tipi, ni a mamá Lulú. —¡Oh, no! Estoy muy alto —dijo Garu, y se le encogió el corazón—. ¡No quiero estar solo! —susurró. Sintió tristeza, y lágrimas bajaron por sus mejillas.",
    textHtml: `
      <p>Garu voló por encima de las rosas, techos y montañas. Las nubes parecían algodón de azúcar, vio aves que cantaban y bailaban melodías mágicas y un sol que le guiñaba un ojo. ☀️☁️</p>
      <p>Pero cuando miró hacia abajo... No podía ver su casa, ni a Tipi ni a mamá Lulú.</p>
      <p>—OH NO. Estoy muy alto —dijo GARU y se le encogió el corazón.<br>
      —¡No quiero estar solo!… —susurró.</p>
      <p>Sintió <span class="emotion-highlight tristeza">TRISTEZA</span>, y lágrimas bajaron por sus mejillas. 😢💧</p>
    `
  },
  {
    pageNumber: 7,
    laminaNumber: 8,
    badge: "La Sabia Nube Gatito",
    image: "assets/illustrations/lamina-8.webp",
    audio: "assets/audio/page-8.mp3",
    narrationText: "De repente el globo dejó de subir. Comenzó a flotar sin rumbo. —¡Quiero bajar! ¡Quiero volver con mamá! —gritó Garu. Pero el globo no bajaba. —¿Por qué no me escuchas? ¡Mmmmm, globo malo! —gritó Garu muy enojado. Entonces escuchó una voz suave: —Si quieres volver, primero debes calmar tu corazón —dijo una nube con cara de gatito. Garu respiró hondo. Pensó en su mamá Lulú, en Tipi y sonrió un poquito. —¡Está bien! —dijo Garu—, ya estoy tranquilo, solo quiero volver a casa. El globo bajó poco a poco y voló hacia el jardín.",
    textHtml: `
      <p>De repente el globo dejó de subir. Comenzó a flotar sin rumbo.<br>
      —¡Quiero bajar!, ¡Quiero volver con mamá! —gritó Garu.</p>
      <p>Pero el globo no bajaba.<br>
      —¿Por qué no me escuchas? Mmmmm ¡globo malo! —gritó Garu muy <span class="emotion-highlight enojo">ENOJADO</span>. 😡</p>
      <p>Entonces escuchó una voz suave:<br>
      —<em>Si quieres volver, primero debes <span class="emotion-highlight calma">calmar tu corazón</span></em>. —Dijo una <strong>nube con cara de gatito</strong>. 🐱☁️</p>
      <p>Garu respiró hondo. Pensó en su mamá Lulú, en Tipi y sonrió un poquito.<br>
      —¡Está bien! Ya estoy tranquilo, solo quiero volver a casa.</p>
      <p>El globo bajó poco a poco y voló hacia el jardín. ✨</p>
    `
  },
  {
    pageNumber: 8,
    laminaNumber: 9,
    badge: "El Abrazo de Mamá",
    image: "assets/illustrations/lamina-9.webp",
    audio: "assets/audio/page-9.mp3",
    narrationText: "Mamá Lulú lo esperaba con los brazos abiertos y Tipi saltaba lleno de felicidad. —¡Fue increíble, mamá! Me sentí triste, enojado y ahora estoy feliz otra vez —dijo Garu. —Así es, hijo, en las aventuras se viven emociones —respondió Lulú con una sonrisa.",
    textHtml: `
      <p>Mamá Lulú lo esperaba con los brazos abiertos y Tipi saltaba lleno de <span class="emotion-highlight felicidad">FELICIDAD</span>. 🐕❤️</p>
      <p>—¡Fue increíble mamá! Me sentí <span class="emotion-highlight tristeza">TRISTE</span>, <span class="emotion-highlight enojo">ENOJADO</span> y ahora estoy <span class="emotion-highlight felicidad">FELIZ</span> otra vez —dijo Garu.</p>
      <p>—Así es hijo, en las aventuras se viven emociones —respondió Lulú con una sonrisa cálida. 🌸🤗</p>
    `
  },
  {
    pageNumber: 9,
    laminaNumber: 10,
    badge: "Despedida Mágica",
    image: "assets/illustrations/lamina-10.webp",
    audio: "assets/audio/page-10.mp3",
    narrationText: "«Y si al mirar hacia arriba ves un globo que se va, quizá Garu te saluda desde una nube más allá». Fin.",
    textHtml: `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
        <p style="font-style: italic; font-size: 1.45rem; color: #0277bd; text-align: center; padding: 15px 0; line-height: 1.8;">
          “Y SI AL MIRAR HACIA ARRIBA VES<br>
          UN GLOBO QUE SE VA,<br>
          QUIZÁ GARU TE SALUDA<br>
          DESDE UNA NUBE MÁS ALLÁ.”
        </p>
        <h3 style="font-size: 2.4rem; text-align: center; color: #ff334b; font-family: var(--font-child); margin-top: 15px;">
          FIN 🎈✨
        </h3>
      </div>
    `
  },
  {
    pageNumber: 10,
    laminaNumber: 11,
    badge: "Reflexión y Créditos",
    image: "assets/illustrations/lamina-11.webp",
    audio: "assets/audio/page-11.mp3",
    narrationText: "¡Hola, amiguito! Esperamos que hayas disfrutado este viaje con Garu. Recuerda que todas las emociones son válidas: la felicidad, la tristeza y el enojo. Y cuando sientas que el globo de tus emociones sube muy alto, respira hondo como la nube gatito para volver a la calma. Cuento creado con mucho cariño por Catherin Fiorella Asunción Adriánzen.",
    textHtml: `
      <div style="background: #fff8e1; border: 2px solid #ffe082; padding: 16px; border-radius: 16px; margin-bottom: 12px;">
        <h4 style="color: #f57f17; font-size: 1.25rem; margin-bottom: 6px;">🌈 ¿Qué aprendimos hoy con Garu?</h4>
        <p style="font-size: 1.05rem; line-height: 1.6; margin: 0;">
          En la vida sentimos muchas emociones: <strong>Felicidad</strong>, <strong>Tristeza</strong> y <strong>Enojo</strong>. Todas son importantes, pero cuando te sientas abrumado, ¡respira profundo como la <strong>nube gatito</strong> y encontrarás tu <strong>Calma</strong>!
        </p>
      </div>
      <div style="background: #e8f5e9; border: 2px solid #c8e6c9; padding: 14px; border-radius: 14px; text-align: center;">
        <p style="margin: 0; font-size: 1.1rem; color: #2e7d32; font-weight: 700;">
          🎉 Cuento original creado por:<br>
          <span style="color: #c2185b; font-size: 1.25rem;">Catherin Fiorella Asunción Adriánzen</span>
        </p>
      </div>
    `
  }
];

// ==========================================================================
// CLASE PRINCIPAL DE LA APLICACIÓN
// ==========================================================================
class StoryBookApp {
  constructor() {
    this.currentPageIndex = 0; // 0 a 9 (páginas 1 a 10)
    this.isPlaying = false;
    this.playbackRate = 1.0;
    this.isAutoAdvance = true;
    this.audioContext = null;

    this.initElements();
    this.initEventListeners();
    this.renderPageBubbles();
  }

  initElements() {
    // Pantallas principales
    this.coverScreen = document.getElementById('cover-screen');
    this.bookScreen = document.getElementById('book-screen');

    // Botones de la portada
    this.btnStartListen = document.getElementById('btn-start-listen');
    this.btnStartRead = document.getElementById('btn-start-read');
    this.coverImageWrapper = document.getElementById('cover-image-wrapper');

    // Elementos del libro
    this.btnBackToCover = document.getElementById('btn-back-to-cover');
    this.btnFullscreen = document.getElementById('btn-fullscreen');
    
    // Página izquierda (Ilustración)
    this.bookSceneImg = document.getElementById('book-scene-img');
    this.leftPageIndicator = document.getElementById('left-page-indicator');
    this.illustrationFrame = document.getElementById('illustration-frame');

    // Página derecha (Texto y Audio)
    this.sceneBadge = document.getElementById('scene-badge');
    this.storyTextContainer = document.getElementById('story-text-container');
    this.rightPageIndicator = document.getElementById('right-page-indicator');

    // Reproductor de Audio
    this.audioElement = document.getElementById('story-audio-element');
    this.btnAudioToggle = document.getElementById('btn-audio-toggle');
    this.audioIcon = document.getElementById('audio-icon');
    this.audioLabel = document.getElementById('audio-label');
    this.audioTrackTitle = document.getElementById('audio-track-title');
    this.audioTimer = document.getElementById('audio-timer');
    this.audioScrubberTrack = document.getElementById('audio-scrubber-track');
    this.audioScrubberFill = document.getElementById('audio-scrubber-fill');
    this.audioStatusTag = document.getElementById('audio-status-tag');
    this.audioStatusText = document.getElementById('audio-status-text');
    this.waveBars = document.getElementById('wave-bars');
    this.chkAutoAdvance = document.getElementById('chk-auto-advance');

    // Navegación del libro
    this.btnPrevPage = document.getElementById('btn-prev-page');
    this.btnNextPage = document.getElementById('btn-next-page');
    this.pageSelectorBubbles = document.getElementById('page-selector-bubbles');
  }

  initEventListeners() {
    // 1. Botón "Escuchar" de la portada: Abre el libro y reproduce el audio automáticamente
    this.btnStartListen.addEventListener('click', () => {
      this.playSynthSound('start');
      this.isAutoAdvance = true;
      this.chkAutoAdvance.checked = true;
      this.openBook(0, true);
    });

    // 2. Botón "Leer" de la portada: Abre el libro con el audio pausado
    this.btnStartRead.addEventListener('click', () => {
      this.playSynthSound('page');
      this.openBook(0, false);
    });

    // Tocar portada para efecto sonoro
    this.coverImageWrapper.addEventListener('click', (e) => {
      this.spawnSparkles(e.clientX, e.clientY);
      this.playSynthSound('balloon');
    });

    // 3. Volver a la portada
    this.btnBackToCover.addEventListener('click', () => {
      this.pauseAudio();
      this.showCover();
    });

    // 4. Navegación entre páginas
    this.btnPrevPage.addEventListener('click', () => this.prevPage());
    this.btnNextPage.addEventListener('click', () => this.nextPage());

    // 5. Botón de reproducción de audio de la página
    this.btnAudioToggle.addEventListener('click', () => this.toggleAudio());

    // 6. Eventos del elemento de audio HTML5
    this.audioElement.addEventListener('play', () => this.onAudioPlay());
    this.audioElement.addEventListener('pause', () => this.onAudioPause());
    this.audioElement.addEventListener('ended', () => this.onAudioEnded());
    this.audioElement.addEventListener('timeupdate', () => this.onAudioTimeUpdate());
    this.audioElement.addEventListener('loadedmetadata', () => this.updateTimerDisplay());
    this.audioElement.addEventListener('error', (e) => this.onAudioError(e));

    // 7. Scrubber interactivo para adelantar/retroceder en la pista de audio
    this.audioScrubberTrack.addEventListener('click', (e) => {
      if (!this.audioElement.duration) return;
      const rect = this.audioScrubberTrack.getBoundingClientRect();
      const clickPos = (e.clientX - rect.left) / rect.width;
      this.audioElement.currentTime = clickPos * this.audioElement.duration;
    });

    // 8. Selector de velocidad de voz
    document.querySelectorAll('.speed-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.speed-pill').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.playbackRate = parseFloat(e.target.dataset.speed) || 1.0;
        this.audioElement.playbackRate = this.playbackRate;
      });
    });

    // 9. Checkbox auto-avance
    this.chkAutoAdvance.addEventListener('change', (e) => {
      this.isAutoAdvance = e.target.checked;
    });

    // 10. Tocar ilustración para magia interactiva
    this.illustrationFrame.addEventListener('click', (e) => {
      this.spawnSparkles(e.clientX, e.clientY);
      this.playSynthSound('sparkle');
    });

    // 11. Pantalla completa
    this.btnFullscreen.addEventListener('click', () => this.toggleFullscreen());

    // 12. Atajos de teclado
    window.addEventListener('keydown', (e) => {
      if (!this.bookScreen.classList.contains('active')) return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        this.nextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        this.prevPage();
      } else if (e.key === ' ') {
        e.preventDefault();
        this.toggleAudio();
      }
    });

    // 13. Gestos táctiles Swipe en móvil
    let touchStartX = 0;
    const openBookElem = document.getElementById('open-book');
    openBookElem.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    openBookElem.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 60) {
        if (diff > 0) this.nextPage();
        else this.prevPage();
      }
    }, { passive: true });
  }

  // ========================================================================
  // CONTROL DE VISTAS (PORTADA VS LIBRO ABIERTO)
  // ========================================================================
  openBook(pageIndex = 0, autoPlayAudio = false) {
    this.coverScreen.classList.remove('active');
    this.bookScreen.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    this.currentPageIndex = pageIndex;
    this.renderCurrentPage(autoPlayAudio);
  }

  showCover() {
    this.bookScreen.classList.remove('active');
    this.coverScreen.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ========================================================================
  // RENDERIZADO DEL LIBRO Y PÁGINAS
  // ========================================================================
  renderPageBubbles() {
    this.pageSelectorBubbles.innerHTML = '';
    BOOK_PAGES.forEach((item, idx) => {
      const bubble = document.createElement('button');
      bubble.className = `page-bubble ${idx === this.currentPageIndex ? 'active' : ''}`;
      bubble.textContent = item.pageNumber;
      bubble.title = `Ir a página ${item.pageNumber}: ${item.badge}`;
      bubble.setAttribute('aria-label', `Ir a página ${item.pageNumber}`);
      bubble.addEventListener('click', () => {
        this.goToPage(idx, this.isPlaying);
      });
      this.pageSelectorBubbles.appendChild(bubble);
    });
  }

  renderCurrentPage(autoPlay = false) {
    const data = BOOK_PAGES[this.currentPageIndex];
    if (!data) return;

    // 1. Actualizar Página Izquierda (Ilustración)
    this.bookSceneImg.style.opacity = '0';
    setTimeout(() => {
      this.bookSceneImg.src = data.image;
      this.bookSceneImg.alt = `Ilustración Lámina ${data.laminaNumber} - ${data.badge}`;
      this.bookSceneImg.style.opacity = '1';
    }, 120);

    this.leftPageIndicator.textContent = `Lámina ${data.laminaNumber}`;

    // 2. Actualizar Página Derecha (Texto)
    this.sceneBadge.textContent = `Página ${data.pageNumber} — ${data.badge}`;
    this.storyTextContainer.innerHTML = data.textHtml;
    this.rightPageIndicator.textContent = `Página ${data.pageNumber} de ${BOOK_PAGES.length}`;

    // 3. Actualizar Navegación
    this.btnPrevPage.disabled = this.currentPageIndex === 0;
    this.btnNextPage.disabled = this.currentPageIndex === BOOK_PAGES.length - 1;

    // Actualizar burbuja activa
    document.querySelectorAll('.page-bubble').forEach((b, idx) => {
      b.classList.toggle('active', idx === this.currentPageIndex);
    });

    // 4. Cargar el Audio de esta página
    this.audioElement.pause();
    this.audioElement.src = data.audio;
    this.audioElement.playbackRate = this.playbackRate;
    this.audioTrackTitle.textContent = `Página ${data.pageNumber}: ${data.badge}`;
    this.audioScrubberFill.style.width = '0%';
    this.audioTimer.textContent = '0:00 / 0:00';
    this.updateAudioUI(false, "Listo para escuchar");

    // 5. Si autoPlay es true, iniciar reproducción
    if (autoPlay) {
      setTimeout(() => {
        this.playAudio();
      }, 350);
    }
  }

  goToPage(index, continueAudio = false) {
    if (index >= 0 && index < BOOK_PAGES.length) {
      this.playSynthSound('page');
      this.currentPageIndex = index;
      this.renderCurrentPage(continueAudio);
    }
  }

  prevPage() {
    if (this.currentPageIndex > 0) {
      this.goToPage(this.currentPageIndex - 1, this.isPlaying);
    }
  }

  nextPage() {
    if (this.currentPageIndex < BOOK_PAGES.length - 1) {
      this.goToPage(this.currentPageIndex + 1, this.isPlaying);
    }
  }

  // ========================================================================
  // REPRODUCTOR DE AUDIO
  // ========================================================================
  toggleAudio() {
    if (this.isPlaying) {
      this.pauseAudio();
    } else {
      this.playAudio();
    }
  }

  playAudio() {
    const data = BOOK_PAGES[this.currentPageIndex];
    if (!data) return;

    if (!this.audioElement.src || !this.audioElement.src.includes(data.audio)) {
      this.audioElement.src = data.audio;
    }
    this.audioElement.playbackRate = this.playbackRate;

    const promise = this.audioElement.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          this.isPlaying = true;
          this.updateAudioUI(true, "Escuchando narración...");
        })
        .catch(err => {
          console.warn("Audio HTML5 bloqueado, usando voz nativa:", err);
          this.speakFallback(data.narrationText);
        });
    }
  }

  pauseAudio() {
    this.audioElement.pause();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.isPlaying = false;
    this.updateAudioUI(false, "Audio pausado");
  }

  onAudioPlay() {
    this.isPlaying = true;
    this.updateAudioUI(true, "Escuchando narración...");
  }

  onAudioPause() {
    this.isPlaying = false;
    this.updateAudioUI(false, "Audio pausado");
  }

  onAudioEnded() {
    this.isPlaying = false;
    this.updateAudioUI(false, "Narración finalizada");

    // Si está habilitado pasar página automáticamente
    if (this.isAutoAdvance) {
      if (this.currentPageIndex < BOOK_PAGES.length - 1) {
        setTimeout(() => {
          this.nextPage();
        }, 1200);
      } else {
        this.playSynthSound('fanfare');
      }
    }
  }

  onAudioTimeUpdate() {
    if (!this.audioElement.duration) return;
    const progress = (this.audioElement.currentTime / this.audioElement.duration) * 100;
    this.audioScrubberFill.style.width = `${progress}%`;
    this.updateTimerDisplay();
  }

  updateTimerDisplay() {
    const cur = this.formatTime(this.audioElement.currentTime || 0);
    const dur = this.formatTime(this.audioElement.duration || 0);
    this.audioTimer.textContent = `${cur} / ${dur}`;
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  onAudioError(e) {
    console.warn("Fallo al reproducir archivo de audio:", e);
    const data = BOOK_PAGES[this.currentPageIndex];
    if (data && this.isPlaying) {
      this.speakFallback(data.narrationText);
    }
  }

  // Fallback con la voz nativa de SpeechSynthesis
  speakFallback(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = this.playbackRate;

    const voices = window.speechSynthesis.getVoices();
    const esVoice = voices.find(v => v.lang.startsWith('es'));
    if (esVoice) utterance.voice = esVoice;

    utterance.onstart = () => {
      this.isPlaying = true;
      this.updateAudioUI(true, "Escuchando voz del dispositivo...");
    };

    utterance.onend = () => {
      this.onAudioEnded();
    };

    utterance.onerror = () => {
      this.isPlaying = false;
      this.updateAudioUI(false, "Error en narración");
    };

    window.speechSynthesis.speak(utterance);
  }

  updateAudioUI(playing, message) {
    this.isPlaying = playing;
    this.audioStatusText.textContent = message;

    if (playing) {
      this.btnAudioToggle.classList.add('playing');
      this.audioIcon.textContent = '⏸';
      this.audioLabel.textContent = 'Pausar';
      this.waveBars.classList.add('active');
    } else {
      this.btnAudioToggle.classList.remove('playing');
      this.audioIcon.textContent = '🔊';
      this.audioLabel.textContent = 'Escuchar';
      this.waveBars.classList.remove('active');
    }
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  // ========================================================================
  // EFECTOS DE SONIDO LÚDICOS (WEB AUDIO API)
  // ========================================================================
  getAudioContext() {
    if (!this.audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.audioContext = new AudioCtx();
    }
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
    return this.audioContext;
  }

  playSynthSound(type) {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    if (type === 'start' || type === 'balloon' || type === 'sparkle') {
      // Campanitas de arpa ascendente
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.12, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.55);
      });
    } else if (type === 'page') {
      // Suave pase de página
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(50, now + 0.1);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.1);
    } else if (type === 'fanfare') {
      // Fanfarria victoriosa
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.14);
        gain.gain.setValueAtTime(0.18, now + i * 0.14);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.14 + 0.7);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.14);
        osc.stop(now + i * 0.14 + 0.75);
      });
    }
  }

  // Partículas y destellos mágicos
  spawnSparkles(x, y) {
    const container = document.getElementById('sparkles-container');
    const emojis = ['🎈', '✨', '⭐', '💖', '🐶', '🐱'];
    for (let i = 0; i < 6; i++) {
      const p = document.createElement('span');
      p.className = 'sparkle-particle';
      p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      p.style.left = `${x}px`;
      p.style.top = `${y}px`;
      const tx = (Math.random() - 0.5) * 130 + 'px';
      const ty = (Math.random() - 0.5) * 130 + 'px';
      p.style.setProperty('--tx', tx);
      p.style.setProperty('--ty', ty);
      container.appendChild(p);
      setTimeout(() => p.remove(), 800);
    }
  }
}

// Inicializar la aplicación
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new StoryBookApp();
});
