# Proyecto de ejemplo: Front End con Bootstrap local (SENA)

## Estructura de carpetas

```
proyecto-sena/
├── index.html                 ← la página (estructura)
├── css/
│   └── estilos.css            ← nuestros estilos
├── js/
│   ├── app.js                 ← nuestro JavaScript
│   └── qrcode.js              ← librería local para generar el código QR
├── img/                       ← imágenes del proyecto
└── bootstrap/                 ← Bootstrap 5.3.8 descargado
    ├── css/bootstrap.min.css
    └── js/bootstrap.bundle.min.js
```

## Cómo abrirlo
Haz doble clic en `index.html` (no necesita internet ni servidor).
Para editar se recomienda Visual Studio Code con la extensión **Live Server**.

## Orden de los archivos en index.html
1. `bootstrap.min.css` → primero
2. `estilos.css` → después, para poder personalizar Bootstrap
3. `bootstrap.bundle.min.js` → al final del body
4. `app.js` → después de Bootstrap

## Ejercicios sugeridos
1. Cambia los colores en `:root` de `estilos.css`.
2. Agrega una cuarta tarjeta al grid.
3. Haz que el contador no baje de 0.
4. Agrega un campo de correo al formulario.
5. Pon una imagen en la carpeta `img/` y muéstrala con la clase `img-fluid`.

## Código QR y GitHub Pages
1. Sube el proyecto a un repositorio en GitHub.
2. En el repositorio: **Settings → Pages → Deploy from a branch → main / (root)** (si `index.html` está en la raíz).
3. Abre la URL publicada (`https://tu-usuario.github.io/tu-repositorio/`): la sección del código QR (al final de la página) apunta a esa URL.
4. La dirección del QR está en `URL_GITHUB` dentro de `js/app.js`; cámbiala si tu repositorio tiene otro nombre.
