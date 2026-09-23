# 🎈 «Garu y el globo que lo llevó al cielo»
### Cuento Infantil Digital e Interactivo

**Autora:** Catherin Fiorella Asunción Adriánzen  
**Despliegue en vivo:** [https://jabadagu.github.io/cuentos-bel1/](https://jabadagu.github.io/cuentos-bel1/)  
**Tecnologías:** HTML5 Semántico, CSS3 Moderno, JavaScript (ES6+), Web Audio API, WebP, GitHub Pages.

---

## 📖 Sobre la Historia

**«Garu y el globo que lo llevó al cielo»** es una obra literaria infantil enfocada en el desarrollo de la inteligencia socioemocional en niños y niñas. A través de la aventura de Garu, su perrito Tipi y un globo rojo brillante, los pequeños aprenden a reconocer, aceptar y gestionar cuatro grandes emociones:
- 💛 **Felicidad:** El entusiasmo por el picnic familiar y el despegue hacia el cielo.
- 💙 **Tristeza:** El miedo y la soledad al verse lejos de su hogar y de sus seres queridos.
- ❤️ **Enojo:** La frustración cuando el globo no respondía a sus deseos.
- 💚 **Calma:** La respiración consciente y la serenidad que le enseña la sabia nube con cara de gatito para regresar sano y salvo a los brazos de mamá Lulú.

---

## 🛠️ ¿Cómo se Construyó este Proyecto? (Detalle Técnico y Arquitectura)

La aplicación fue desarrollada siguiendo las mejores prácticas de ingeniería web frontend y diseño centrado en el usuario infantil, con el objetivo de ofrecer una experiencia rápida, inmersiva y accesible desde cualquier celular, tablet o computadora.

### 1. Arquitectura "Vanilla" de Alto Rendimiento (Zero Dependencies)
- Se evitó el uso de frameworks pesados (como React o Angular) para garantizar una carga ultrarrápida (en menos de 1 segundo) en redes móviles 3G/4G.
- Estructura pura con **HTML5 semántico**, **CSS3 modular** y **JavaScript vanilla** orientado a componentes ligeros.

### 2. Formato de Libro Abierto Digital (*Two-Page Spread*)
- **Página Izquierda:** Dedicada enteramente a la **ilustración de la lámina**, enmarcada con efectos sutiles de papel y profundidad 3D.
- **Página Derecha:** Alberga el texto narrativo con tipografía infantil clara y legible ([Fredoka](https://fonts.google.com/specimen/Fredoka) y [Nunito](https://fonts.google.com/specimen/Nunito)), con las emociones destacadas en colores pedagógicos (*FELICIDAD*, *TRISTEZA*, *ENOJADO*, *CALMA*).
- **Directamente debajo del texto:** Se integra el reproductor de audio exclusivo de esa página.
- **Diseño Responsivo:** En pantallas grandes (laptops y tablets horizontales), se despliega como un libro abierto real con su lomo central; en smartphones verticales, los paneles se adaptan fluidamente en una vista apilada intuitiva.

### 3. Pipeline de Optimización de Imágenes (Reducción del 95% en Peso)
- Las láminas originales en alta resolución sumaban más de **31 MB** en formato JPEG, lo cual provocaba lentitud y alto consumo de datos móviles.
- Se implementó un proceso de optimización mediante **Python (Pillow)** para convertir cada lámina a formato **WebP progresivo** con compresión perceptual al 82% y resolución de **1200x1200px**:
  - **Lámina 1 (Portada):** de 2.98 MB a **131 KB**
  - **Láminas 2 a 11:** de ~3 MB cada una a un rango entre **89 KB y 220 KB**
  - **Peso total del libro:** De 31 MB se redujo a tan solo **~1.8 MB** en total, permitiendo una apertura instantánea.

### 4. Sistema de Narración en Audio y Accesibilidad
- **Narración con Voz Cálida:** Cada una de las 10 escenas cuenta con su propia pista de audio MP3 narrada con entonación afectuosa y cadencia adecuada para niños (`es-PE-CamilaNeural`).
- **Controles por Página:** Botón grande de reproducir/pausar, contador de tiempo interactivo, barra de desplazamiento (*scrubber*) y selector de velocidad (1.0x normal y 0.85x pausada para primeros lectores).
- **Modo Léeme el Cuento (Avance Automático):** Al terminar la narración de una página, el libro pasa automáticamente a la siguiente y continúa reproduciendo.
- **Respaldo Inteligente (*Fallback*):** Si el navegador bloquea la carga de archivos multimedia externos, se activa automáticamente la voz nativa del dispositivo mediante la **Web Speech API** (`window.speechSynthesis`).

### 5. Efectos de Sonido Lúdicos con Web Audio API
- Para evitar la descarga de múltiples archivos MP3 de efectos de sonido, se construyó un **sintetizador de audio nativo con Web Audio API**:
  - Sonido de campanitas mágicas de arpa al tocar el globo o la ilustración.
  - Sonido suave de pase de página (*white noise filter*).
  - Fanfarria melódica al terminar el cuento.
- Efectos visuales de destellos y emojis flotantes (🎈, ✨, ⭐, 💖, 🐶, 🐱) al interactuar con las imágenes.

### 6. Flujo de Entrada con Portada Exclusiva
- Al ingresar al sitio web, el usuario visualiza únicamente la portada del cuento (**Lámina 1**) con dos opciones de inicio:
  - **🎧 Escuchar:** Abre la historia y reproduce automáticamente la narración guiada.
  - **📖 Leer:** Abre el libro en modo lectura silenciosa con el audio pausado.

---

## 📂 Estructura del Repositorio

```
cuentos-bel1/
├── index.html                   # Interfaz principal (Portada y Libro Abierto)
├── style.css                    # Estilos visuales, encuadernación de libro y animaciones
├── app.js                       # Controlador del cuento, audio y efectos sonoros
├── README.md                    # Documentación del proyecto
├── .gitignore                   # Exclusiones de Git
└── assets/
    ├── audio/                   # Pistas de narración en audio MP3
    │   ├── page-1.mp3           # Audio de portada
    │   ├── page-2.mp3 ... page-11.mp3 # Audios por lámina
    │   └── cuento-completo.mp3  # Narración continua
    └── illustrations/           # Láminas originales optimizadas en WebP
        ├── lamina-1.webp        # Portada (131 KB)
        ├── lamina-2.webp ... lamina-11.webp # Páginas 1 a 10 (89-220 KB)
```

---

## 🚀 Ejecución Local

Para probar o continuar editando el proyecto en tu computadora:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/jabadagu/cuentos-bel1.git
   cd cuentos-bel1
   ```

2. Abre directamente `index.html` en cualquier navegador web, o inicia un servidor local rápido:
   ```bash
   # Con Python
   py -m http.server 8080
   
   # O con Node.js
   npx serve .
   ```

3. Abre en tu navegador: `http://localhost:8080`

---

## 🌐 Despliegue en Producción

El proyecto se encuentra desplegado de forma continua y gratuita a través de **GitHub Pages**:
- **URL Pública:** [https://jabadagu.github.io/cuentos-bel1/](https://jabadagu.github.io/cuentos-bel1/)
- Las actualizaciones enviadas a la rama `main` se publican automáticamente.

---

*Cuento creado con amor por **Catherin Fiorella Asunción Adriánzen**.*
