## 🧪 Laboratorio 09: DOM como API de Objetos

### Proyecto: ✨ MiniBlog Live – Editor visual con galería de imágenes

---

### 🎯 Objetivos de Aprendizaje

* Manipular el DOM como un sistema de objetos mediante JavaScript.
* Aplicar métodos como `querySelector`, `querySelectorAll` y `.appendChild()` para generar interfaces dinámicas.
* Utilizar estructuras de datos (arrays de objetos) para construir componentes visuales.
* Estilizar elementos generados dinámicamente con clases CSS y manipulación de propiedades del DOM.

---

### 🔑 Conceptos Clave

* **DOM como Árbol de Objetos:** Cada etiqueta HTML es un nodo que puede crearse, modificarse o eliminarse desde JS.
* **Selección dinámica de nodos:** Uso eficiente de `querySelectorAll()` y manipulación de múltiples nodos.
* **Creación dinámica de elementos:** `createElement`, `appendChild`, `.classList.add()` para construir interfaces desde cero.
* **Estilos aplicados desde JS:** Aplicación de clases y estilos directamente en los nodos del DOM.

---

### ⚙️ Setup Inicial

📁 **Repositorio:**

1. Crea un repositorio llamado `miniblog-live`.
2. Clónalo localmente y trabaja en la rama `main`.

📁 **Estructura mínima:**

```
miniblog-live/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
└── README.md
```

💡 **Recomendación:** Usa [TailwindCSS](https://tailwindcss.com/) para lograr estilos elegantes con rapidez.

📄 **Contenido base de HTML:**
Incluye una estructura con `header`, `main` (para la galería) y `footer`.

---

### 📋 Historias de Usuario

---

#### **HU1: Barra de herramientas con botón “Cargar Galería”**

**“Como usuario, quiero ver un botón fijo que me permita cargar la galería de imágenes en cualquier momento, desde cualquier dispositivo.”**

✅ Criterios de aceptación:

* Barra de herramientas fija (arriba en desktop, abajo en móvil).
* Botón visible llamado “Cargar Galería”.
* Editor (futuro) y galería visibles a la vez.
* Responsive en todo momento.

🕒 **Checkpoint 1 (30 min):**

* HTML con botón funcional.
* Estructura clara con `#editor` y `#galeria`.

---

#### **HU2: Galería dinámica en formato Card**

**“Como usuario, quiero ver una galería visual con imágenes en tarjetas elegantes, generadas automáticamente desde un arreglo de datos.”**

✅ Criterios de aceptación:

* Mínimo 3 imágenes precargadas desde un arreglo JS.
* Cada imagen debe mostrarse en una tarjeta (`card`) que incluya:

  * Imagen centrada.
  * Título visible.
  * (Opcional) botón "Ver más" o similar.
* Las tarjetas se crean dinámicamente usando el DOM (`createElement`, `appendChild`, etc.).
* El contenedor de la galería (`#galeria`) se actualiza cada vez que se hace clic en el botón.

📦 Ejemplo de arreglo:

```js
const galeria = [
  { titulo: "Montaña", url: "img/montaña.jpg" },
  { titulo: "Ciudad", url: "img/ciudad.jpg" },
  { titulo: "Selva", url: "img/selva.jpg" }
];
```

🕒 **Checkpoint 2 (60 min):**

* Cards generadas dinámicamente.
* Galería visible y bien distribuida.
* Las imágenes no están “hardcodeadas” en el HTML.

---

#### **HU3: Estilo dinámico con botón “Contrastar”**

**“Como usuario, quiero aplicar un estilo especial (contraste de color y tamaño) a las tarjetas con solo presionar un botón.”**

✅ Criterios de aceptación:

* Agregar un botón "Contrastar Tarjetas".
* Al hacer clic, todas las tarjetas deben cambiar su estilo visual (ej. fondo oscuro, texto blanco, tamaño mayor).
* Al volver a hacer clic, las tarjetas deben volver a su estilo original.
* Usar `querySelectorAll()` para seleccionar todas las tarjetas.
* Manipular clases o propiedades `.style` para lograr el efecto.

🕒 **Checkpoint 3 (90 min):**

* Botón “Contrastar” funciona como toggle.
* Cambios se aplican de inmediato.
* Todo debe hacerse con JavaScript, sin recargar la página.

---

### 🌟 Logros Adicionales (Opcionales)

* 🥇 **Logro 1:** Agregar botón para subir una nueva imagen desde un formulario.
* 🥈 **Logro 2:** Incluir contador dinámico de tarjetas (ej: “Mostrando 3 tarjetas”).
* 🥉 **Logro 3:** Filtrar tarjetas por palabra clave usando un campo de búsqueda.

---

### 📝 Instrucciones de Entrega

1. **Publica tu proyecto en GitHub Pages.**
2. Asegúrate de que el botón y galería funcionen al entrar al sitio.
3. Entrega:

   * URL del repositorio (`https://github.com/tuusuario/miniblog-live`)
   * URL de la demo en GitHub Pages (`https://tuusuario.github.io/miniblog-live`)

---

> 💡 **Consejo del profe:** Este laboratorio es perfecto para consolidar la creación de interfaces dinámicas. No copies y pegues el HTML: **constrúyelo con JavaScript.** Verlo tomar forma en tiempo real es el verdadero poder del DOM.

---
