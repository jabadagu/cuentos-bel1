# 🎈 Cuento Infantil Digital: "Garu y el globo que lo llevó al cielo"

**Autoras:** Catherin Fiorella Asunción Adriánzen & BSC  
**Tecnologías:** HTML5, CSS3, JavaScript Vanilla, Web Audio API, Edge-TTS, QR Engine.

---

## 🌟 Descripción del Proyecto

Esta es una experiencia web interactiva, educativa y adaptada para niños y familias. Permite disfrutar del cuento completo tanto en formato de **libro digital ilustrado paso a paso** como en **lectura continua**, acompañado de narración con voz cálida en español, efectos de sonido lúdicos, minijuego de educación emocional y un **código QR listo para escanear desde cualquier teléfono móvil**.

---

## 📱 ¿Cómo funciona el Código QR?

El código QR es el puente principal para que cualquier niño, padre o docente abra el cuento directamente en su celular o tablet.

1. **En la Web (`index.html`):**
   - Haz clic en el botón superior **«📱 Código QR»**.
   - Se abrirá una ventana emergente donde puedes ver el código QR, copiar el enlace directo o descargar la imagen del QR en PNG para usarla en cartulinas, afiches o libros impresos.
   
2. **Ficha Oficial Imprimible (`qr.html`):**
   - Diseñada especialmente para imprimir en formato A4 o Carta.
   - Contiene el título del cuento, los nombres de las autoras (**Catherin Fiorella Asunción Adriánzen & BSC**), la portada ilustrada, el código QR nítido y 3 sencillos pasos para escanear con la cámara.
   - Cuenta con un botón para imprimir directamente (`Ctrl + P`) o guardar como PDF.

3. **Personalización del Enlace del QR:**
   - Tanto en el modal como en la ficha `qr.html`, puedes cambiar la dirección web por tu enlace final (por ejemplo: `https://mi-usuario.github.io/cuento-garu/`) y el código QR se actualizará automáticamente.

---

## 🎧 Narración en Audio y Recursos Multimedia

- **Narración en Audio:** Cada una de las páginas cuenta con su propio archivo de audio MP3 (`assets/audio/page-1.mp3` a `page-11.mp3`), además de la narración continua ininterrumpida de todo el cuento (`assets/audio/cuento-completo.mp3`).
- **Voz:** Síntesis neural en español de alta calidad (`es-PE-CamilaNeural`), con tono afectuoso y pausado para niños pequeños.
- **Respaldo inteligente:** Si el navegador no permite cargar archivos multimedia o está sin conexión, el sistema activa automáticamente la voz del dispositivo mediante la Web Speech API.
- **Efectos de sonido interactivos:** Campanitas de arpa al tocar el globo rojo, sonido de pase de página y tonos relajantes armónicos (432 Hz).

---

## 🌈 El Rincón de las Emociones de Garu

En la pestaña **«🌈 Emociones»**, los niños encontrarán un módulo de educación socioemocional basado en la historia:
- **💛 Felicidad:** La emoción del picnic y flotar en el cielo.
- **💙 Tristeza:** Cuando Garu se sintió lejos de su mamá y su perrito.
- **❤️ Enojo:** Cuando las cosas no salían como esperaba y el globo no bajaba.
- **💚 Calma:** La respiración consciente guiada por la **nube con cara de gatito**.
- **🐱 Ejercicio de Respiración:** Una animación visual interactiva que se infla y desinfla para que el niño inhale hondo, sostenga el aire y exhale lentamente.

---

## 🚀 ¿Cómo Abrir y Probar el Proyecto Localmente?

Puedes abrir la web de dos formas:

### Opción 1: Con un servidor local ligero (Recomendado)
Abre una terminal en esta carpeta y ejecuta:
```bash
npx serve .
```
o con Python:
```bash
py -m http.server 3000
```
Luego abre en tu navegador:
```
http://localhost:3000
```

### Opción 2: Abrir directamente en el navegador
Haz doble clic sobre el archivo `index.html` para abrirlo en Chrome, Edge, Safari o Firefox.

---

## 🌐 ¿Cómo Publicarlo Gratis en Internet para que Todos lo Abran con el QR?

Para que cualquier persona pueda escanear el QR desde la calle o su casa con datos móviles:

1. **GitHub Pages (Gratis y Permanente):**
   - Sube esta carpeta a un repositorio en GitHub.
   - Ve a `Settings > Pages > Branch: main / root > Save`.
   - Copia la URL pública generada (ej: `https://tu-usuario.github.io/cuentos-bel1/`).
   - Abre `qr.html`, pega esa URL en la casilla y dale a «Actualizar». ¡Tu código QR quedará listo para imprimir con el enlace de internet!

2. **Netlify Drop (En 10 segundos sin programar):**
   - Ingresa a [app.netlify.com/drop](https://app.netlify.com/drop).
   - Arrastra la carpeta `cuentos-bel1`.
   - Te dará una dirección web al instante (ej: `https://cuento-garu.netlify.app`).

---

## 📁 Estructura de Archivos

```
cuentos-bel1/
├── index.html                   # Experiencia interactiva principal
├── style.css                    # Estilos visuales infantiles y animaciones
├── app.js                       # Lógica de navegación, audio y emociones
├── qr.html                      # Ficha oficial y póster imprimible con código QR
├── README.md                    # Documentación y guía de uso
├── CUENTO-GARU-1.pdf            # PDF original del cuento
├── assets/
│   ├── cover.jpg                # Portada ilustrada en alta resolución
│   ├── nube-gatito.jpg          # Ilustración de la nube gatito de la calma
│   ├── js/
│   │   └── qrcode.min.js        # Librería generadora de QR local
│   ├── pages/                   # Páginas originales extraídas en alta resolución (1 a 11)
│   │   ├── page-1.png ... page-11.png
│   └── audio/                   # Narraciones en audio MP3
│       ├── page-1.mp3 ... page-11.mp3
│       └── cuento-completo.mp3  # Narración ininterrumpida
└── scripts/
    ├── extract_pages.py         # Script de extracción de páginas
    └── generate_narration.py    # Script de generación de audios
```
