# Bitalogics

Sitio web corporativo de **Bitalogics**, un estudio de desarrollo de software con sede en Chihuahua, México. El sitio sirve como carta de presentación del estudio: comunica propuesta de valor, muestra el portafolio de proyectos y permite a los visitantes iniciar contacto directamente desde la página.

---

# Objetivo

Convertir visitantes en clientes potenciales para Bitalogics. El sitio está diseñado para negocios de cualquier tamaño que necesitan software a la medida — sitios web, sistemas internos, automatización de procesos o consultoría técnica — y que buscan un equipo que explique las cosas en términos simples, sin tecnicismos.

---

# Tecnologías

| Categoría | Tecnología | Versión |
|-----------|-----------|---------|
| Framework | Next.js (App Router) | 16.2.12 |
| UI Library | React | 19.2.4 |
| Lenguaje | TypeScript | ^5 |
| Estilos | Tailwind CSS v4 + CSS Variables | ^4 |
| Email | EmailJS (`@emailjs/browser`) | 4.4.1 |
| Imágenes remotas | Cloudinary | — |
| Fuentes | Google Fonts (next/font) | — |
| Gestor de paquetes | pnpm | 11.x |
| Linter | ESLint + eslint-config-next | 16.2.12 |
| Deploy | Netlify + @netlify/plugin-nextjs | — |

---

# Variables de entorno

El proyecto requiere las siguientes variables en `.env.local` para el envío de correos vía EmailJS:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

> Estas variables deben tener el prefijo `NEXT_PUBLIC_` ya que EmailJS se ejecuta en el cliente (browser).

---

# Identidad Visual

## Paleta de colores

| Token | Hex | Uso |
|-------|-----|-----|
| `ink` | `#16283F` | Color de texto principal, fondos de botones primarios |
| `deep` | `#0E1B2E` | Fondo oscuro de sección "Nosotros", footer de emails |
| `blue` | `#2E86C1` | Acento principal, badges, focus ring, links |
| `blue-dark` | `#1B5A85` | Hover de links de navegación, etiquetas de texto sobre azul |
| `gold` | `#C98A3E` | Numeración de servicios, etiquetas "Proyecto de estudio" |
| `paper` | `#F4F6F9` | Fondo general de la página, texto sobre fondos oscuros |
| `paper-warm` | `#EFF2F6` | Fondo de la sección Servicios |
| `line` | `rgba(22,40,63,0.12)` | Bordes de cards, divisores, inputs |
| `text-soft` | `rgba(22,40,63,0.62)` | Texto secundario, subtítulos, placeholders |

## Tipografía

| Fuente | Variable CSS | Tailwind | Uso |
|--------|-------------|----------|-----|
| **Fraunces** | `--font-fraunces` | `font-serif` | Títulos H1–H2, nombre del fundador, logotipo en páginas legales |
| **JetBrains Mono** | `--font-jetbrains` | `font-mono` | Eyebrows (etiquetas de sección), numeración, badges, CTA secundario en Nav |
| **Inter** | `--font-inter` | `font-sans` | Cuerpo de texto, párrafos, labels de formulario, inputs |

## Iconografía

No se utiliza ninguna librería de iconos. Las únicas representaciones visuales son:
- Logotipo (`/logo.png`) en la Navbar.
- Foto del fundador (`/jose-headshot.jpg`) en la sección "Nosotros".
- Imágenes de proyectos (locales en `/public` o remotas vía Cloudinary).

## Espaciado

Sistema basado en múltiplos de 4 px vía clases de Tailwind:

| Concepto | Valor |
|----------|-------|
| Padding de secciones vertical | `80px` (`py-[80px]`) |
| Padding horizontal de secciones | `32px` (`px-8`) |
| Ancho máximo del contenido | `1080px` (`max-w-[1080px]`) |
| Breakpoint único (mobile → desktop) | `720px` (`md:`) |
| Gap entre cards de proyectos | `24px` |
| Gap entre items de stats en Hero | `16px` |

---

# Componentes

| Componente | Descripción | Estados | Reutilizable |
|------------|-------------|---------|--------------|
| `Nav` | Barra de navegación sticky con logo, links de ancla y CTA. Glassmorphism (`backdrop-blur`). | — | No (hardcoded a rutas del sitio) |
| `Hero` | Sección principal con headline, subtítulo monoespaciado, dos CTAs y tres stats de propuesta de valor. Incluye elemento visual decorativo "hero-seam". | — | No |
| `Services` | Grid 2×2 de tarjetas de servicios con animación de entrada y hover. | Hover (elevación + sombra + borde azul) | No |
| `Portfolio` | Grid de tarjetas de proyectos. Acepta prop `featuredOnly` para mostrar solo destacados o todos. | Hover (elevación + sombra + borde azul) | Sí (`featuredOnly` prop) |
| `About` | Sección "Nosotros" con fondo oscuro, dos párrafos en grid y foto + datos del fundador. | — | No |
| `Contact` | Sección CTA final. Botón que abre `ContactModal`. | — | No |
| `ContactModal` | Modal de contacto con formulario de 4 campos. Envío a EmailJS. | Idle / Loading / Success / Error | Sí |
| `Footer` | Pie de página con copyright, ubicación y links a páginas legales. Dos filas. | — | Sí |
| `CookieBanner` | Banner fijo en la parte inferior para aceptación de cookies. Persiste la aceptación en `localStorage`. | Visible / Oculto | Sí |
| `FounderPhoto` | Avatar circular con la foto del fundador. | — | Sí |

---

# Páginas

## `/` — Inicio

**Objetivo:** Presentar Bitalogics y convertir al visitante en lead.

**Componentes:** `Nav`, `Hero`, `Services`, `Portfolio` (solo destacados), `About`, `Contact`, `Footer`, `CookieBanner`

**Funcionalidad:**
- Animaciones de entrada por scroll (`useScrollReveal`) en todas las secciones excepto el Hero.
- El portafolio en home muestra solo los proyectos marcados como `destacado: true`.
- El botón "Escríbenos" abre `ContactModal` (envío de correo vía EmailJS).

**Datos mostrados:** Todos los datos provienen de `src/lib/content.ts` y `src/lib/projects.ts`.

---

## `/portafolio` — Portafolio completo

**Objetivo:** Mostrar todos los proyectos del estudio.

**Componentes:** `Nav`, `Portfolio` (todos los proyectos), `Contact`, `Footer`

**Funcionalidad:**
- Muestra todos los proyectos (reales y de estudio) sin filtro.
- Link "← Volver al inicio" en la parte superior.

**Datos mostrados:** Todos los proyectos de `src/lib/projects.ts`.

---

## `/legal/terminos` — Términos y condiciones

**Objetivo:** Documentar los términos legales de uso del sitio.

**Componentes:** `LegalLayout` (header + footer de navegación legal)

---

## `/legal/privacidad` — Política de privacidad

**Objetivo:** Describir cómo se recopila y usa la información personal.

**Componentes:** `LegalLayout`

---

## `/legal/cookies` — Política de cookies

**Objetivo:** Explicar el uso de cookies y cómo gestionarlas.

**Componentes:** `LegalLayout`

---

# Flujo de navegación

```
Inicio (/)
  ├── #servicios     (anchor scroll)
  ├── #portafolio    (anchor scroll)
  │     └── /portafolio  (ver todos)
  ├── #nosotros      (anchor scroll)
  └── #contacto      (anchor scroll)
        └── [ContactModal]  (formulario de contacto)

Footer (todas las páginas)
  ├── /legal/terminos
  ├── /legal/privacidad
  └── /legal/cookies
```

La navegación principal usa **anchor links** dentro del `home`. El único nivel de profundidad real es `/portafolio` y las rutas legales.

---

# Funcionalidades

- **Scroll reveal:** Las secciones se animan con `fade + translateY` al entrar en el viewport, usando `IntersectionObserver` nativo (via `useScrollReveal`).
- **Staggered animation:** Las tarjetas de servicios y proyectos aparecen con delay incremental de 80 ms por item.
- **Formulario de contacto modal:** Validación de formato de email, longitud mínima de mensaje, estados de loading/éxito/error, cierre con `Escape` o click fuera.
- **EmailJS:** Envío de correo de confirmación automático al visitante usando plantilla personalizada con branding de Bitalogics.
- **Cookie banner:** Persiste la aceptación del usuario en `localStorage` (clave `bl_cookies_accepted`).
- **Portafolio filtrado:** El componente `Portfolio` acepta `featuredOnly` para mostrar solo proyectos destacados (home) o todos (/portafolio).
- **Imágenes remotas (Cloudinary):** Configurado en `next.config.ts` para permitir imágenes desde `res.cloudinary.com`.
- **Glassmorphism en Nav:** `bg-paper/92 backdrop-blur-[6px]` con `sticky top-0`.

---

# Estructura del contenido

Todo el copy del sitio está centralizado en **`src/lib/content.ts`** y los proyectos en **`src/lib/projects.ts`**, separando el contenido de la presentación.

| Sección | Clave en `content.ts` |
|---------|----------------------|
| Navegación | `nav` |
| Hero | `hero` |
| Servicios | `services` |
| Portafolio (labels) | `portfolio` |
| Nosotros | `about` |
| Contacto | `contact` |
| Footer | `footer` |

### Estructura de un proyecto (`Project`)

```ts
interface Project {
  id: string;
  title: string;
  description: string;
  tag: "real" | "concept";   // Proyecto de cliente o de estudio
  destacado: boolean;        // Aparece en home
  image?: string;            // URL local o Cloudinary
}
```

---

# Diseño

El estilo visual del sitio puede describirse como:

- **Editorial / Studio.** Combinación de tipografía serif (Fraunces) con monoespaciado (JetBrains Mono), característica de estudios de diseño de alta gama.
- **Dark + Light.** La mayoría del sitio usa fondo claro (`paper`), con la sección "Nosotros" en fondo oscuro (`deep`) como contraste dramático.
- **Minimalista con detalle.** Sin sombras pesadas ni decoraciones excesivas. Los bordes son sutiles (`rgba(22,40,63,0.12)`), los radios son mínimos (`2px`, `4px`).
- **Microanimaciones:** Hover en cards (elevación `translateY(-4px)` + sombra suave), transiciones en links de nav (underline animado), active state (`translateY(1px)`) en botones.
- **Sin iconos de librería.** Todos los elementos visuales son estructurales o fotográficos.

---

# Responsive

El sitio tiene **un solo breakpoint** definido explícitamente:

| Breakpoint | Valor |
|------------|-------|
| `md` | `720px` |

| Sección | Mobile | Desktop (`md:`) |
|---------|--------|-----------------|
| Hero | Grid 1 columna, seam decorativo oculto | Grid 2 columnas, seam visible |
| Services | 1 columna | Grid 2×2 |
| Portfolio | 1 columna | Grid 3 columnas |
| About | 1 columna | Grid 2 columnas |
| Nav links | Ocultos (`hidden md:flex`) | Visibles |
| Cookie banner | Flex wrap (stack vertical) | Flex horizontal |

> ⚠️ El menú de navegación en mobile no tiene hamburguesa — los links se ocultan y solo queda el CTA "Iniciar proyecto".

---

# Accesibilidad

### Buenas prácticas implementadas

- `role="dialog"` y `aria-modal="true"` en `ContactModal` y `CookieBanner`.
- `aria-label` en el botón de cierre del modal (✕).
- Cierre del modal con tecla `Escape`.
- `document.body.style.overflow = "hidden"` mientras el modal está abierto (evita scroll del fondo).
- Focus automático en el primer input al abrir el modal.
- Atributos `alt` en todas las imágenes (`Image` de Next.js).
- `lang="es"` en el elemento `<html>`.
- Jerarquía semántica de headings: `<h1>` único por página, `<h2>` por sección.
- Uso de elementos semánticos: `<nav>`, `<header>`, `<section>`, `<footer>`, `<article>`, `<main>`.

### Posibles mejoras

- Añadir hamburger menu accesible para mobile (actualmente los links de nav desaparecen).
- Implementar `focus-visible` ring consistente en todos los elementos interactivos.
- Añadir `aria-live="polite"` al área de mensajes de error/éxito del formulario.
- Verificar contraste de `text-soft` (`rgba(22,40,63,0.62)`) sobre `paper` — puede quedar por debajo del ratio WCAG AA en algunos contextos.

---

# Arquitectura

```
bitalogics/
├── compliance/                  # Documentos legales en Markdown (fuente de verdad editorial)
│   ├── terminosycondiciones.md
│   ├── politicadeprivacidad.md
│   └── politicadecookies.md
├── public/                      # Assets estáticos (imágenes, favicon, logo)
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── layout.tsx           # Root layout (fuentes, CookieBanner global)
│   │   ├── page.tsx             # Página home (/)
│   │   ├── globals.css          # Variables CSS + utilidades globales
│   │   ├── portafolio/
│   │   │   └── page.tsx         # Página de portafolio completo
│   │   └── legal/
│   │       ├── layout.tsx       # Layout compartido de páginas legales
│   │       ├── terminos/page.tsx
│   │       ├── privacidad/page.tsx
│   │       └── cookies/page.tsx
│   ├── components/              # Componentes de UI
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── About.tsx
│   │   ├── FounderPhoto.tsx
│   │   ├── Contact.tsx
│   │   ├── ContactModal.tsx
│   │   ├── Footer.tsx
│   │   └── CookieBanner.tsx
│   ├── hooks/
│   │   └── useScrollReveal.ts   # IntersectionObserver hook
│   └── lib/
│       ├── content.ts           # Todo el copy del sitio
│       └── projects.ts          # Datos del portafolio
├── .env.local                   # Variables de entorno (no se commitea)
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

**Patrón de datos:** Todo el contenido editable (copy, proyectos) vive en `src/lib/`. Los componentes solo leen de esas fuentes — no tienen strings hardcoded. Esto facilita actualizaciones sin tocar JSX.

---

# Convenciones

### Botones

| Variante | Clases base |
|----------|------------|
| Primario (relleno) | `bg-ink text-paper px-[24px] py-[13px] text-sm font-medium rounded-[2px] hover:bg-deep active:translate-y-[1px]` |
| Secundario (borde) | `border border-ink text-ink px-[24px] py-[13px] text-sm font-medium rounded-[2px] hover:bg-ink hover:text-paper active:translate-y-[1px]` |
| Outline mono (Nav/Portfolio) | `font-mono text-[13px] border border-ink px-4 py-2 rounded-[2px] hover:bg-deep hover:text-paper active:translate-y-[1px]` |

### Inputs y formularios

- Label encima del campo, `font-inter`, `font-weight: 500`, `font-size: 13px`.
- Borde `1px solid var(--color-line)`, `border-radius: 2px`.
- Focus ring: `2px solid var(--color-blue)` con `outline-offset: 2px`.
- Aplicado vía `onFocus`/`onBlur` inline (no Tailwind) para compatibilidad con el sistema de CSS variables.

### Cards de servicios y proyectos

- Borde `1px solid var(--color-line)`.
- `border-radius: 2px`.
- Hover: `translateY(-4px)` + `border-blue` + `box-shadow: 0 8px 24px rgba(22,40,63,0.08)`.
- Animación staggered de entrada (delay `index × 80ms`).

### Eyebrows (etiquetas de sección)

Clase `.eyebrow` definida en `globals.css`:
- `font-family: JetBrains Mono`
- `font-size: 12.5px`
- `letter-spacing: 0.06em`
- `text-transform: uppercase`
- `color: var(--color-blue-dark)`

---

# Instalación y desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/johernandezvaz/bitalogics.git
cd bitalogics

# Instalar dependencias
pnpm install

# Crear variables de entorno
cp .env.local.example .env.local
# Editar .env.local con los valores de EmailJS

# Iniciar servidor de desarrollo
pnpm dev
```

El servidor corre en [http://localhost:3000](http://localhost:3000).

---

# Mejoras sugeridas

### UX / Navegación

- **Menú mobile:** Implementar un hamburger menu accesible. Actualmente los links de navegación desaparecen completamente en móvil.
- **Indicador de sección activa:** Resaltar el link de nav que corresponde a la sección visible en scroll.
- **Página de proyecto individual:** Actualmente las cards del portafolio no tienen link a detalle. Añadir `/portafolio/[id]` con descripción extendida, tecnologías y screenshots.

### Formulario de contacto

- **Persistencia de datos:** Si el usuario cierra el modal accidentalmente, los datos del formulario se pierden. Un `sessionStorage` temporal mejoraría la experiencia.
- **Honeypot anti-spam:** Añadir campo oculto para detectar bots antes de llamar a EmailJS.

### Rendimiento

- **Lazy loading del modal:** `ContactModal` se incluye en el bundle inicial aunque no se usa hasta interacción. Usar `next/dynamic` con `{ ssr: false }`.
- **Optimización de imágenes locales:** Las imágenes de proyectos en `/public` no tienen dimensiones explícitas — definir `width`/`height` o usar `fill` con `sizes` adecuado.

### Accesibilidad

- Ver sección [Accesibilidad → Posibles mejoras](#accesibilidad).

### Mantenibilidad

- **Extraer `LegalStyles`:** La función `LegalStyles` con el bloque `<style>` se repite en las tres páginas legales. Moverla a un componente compartido `src/components/LegalArticle.tsx`.
- **Tipos de `content.ts`:** Añadir tipos TypeScript explícitos para `siteContent` para obtener autocompletado y detección de errores en los componentes que lo consumen.

---

# Pendiente por documentar

- **Configuración de EmailJS:** Nombre del servicio, estructura exacta de la plantilla activa y configuración del campo "To Email" en el dashboard.
- **Política de deploy en Netlify:** Variables de entorno que deben configurarse en el panel de Netlify (actualmente solo `NEXT_PUBLIC_EMAILJS_SERVICE`, `NEXT_PUBLIC_EMAILJS_TEMPLATE` y `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` están definidas en Netlify, con nombres distintos a los del `.env.local` actualizado).
- **Dominio en producción:** La URL `bitalogics.com` aparece en los documentos legales pero no se ha verificado el dominio configurado en Netlify.
- **Assets en `/public`:** No hay inventario documentado de los archivos de imagen en la carpeta `public/` ni guías sobre cómo agregar nuevos proyectos con imágenes locales.
- **Google Analytics / herramienta de análisis:** La política de cookies menciona posible uso de herramientas de análisis, pero no hay ninguna integrada actualmente en el código.
