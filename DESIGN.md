# DESIGN.md — Sistema de diseño de Bitalogics

> Inspirado en la disciplina de Tesla: el sitio desaparece y lo que ofrecemos ocupa todo el espacio.
> Colores, logo y mascota: Bitalogics.

Este documento es la referencia para cualquier persona o agente que diseñe o programe pantallas de bitalogics.com. Si algo no está aquí, la respuesta por defecto es **quitar, no agregar**.

---

## 1. Tema visual y atmósfera

Bitalogics es un **laboratorio de soluciones electrónicas a la medida**, y el sitio es su sala de exhibición. Cada pantalla muestra **una idea** —un servicio o un dispositivo que construimos— y la interfaz pone solo la estructura mínima para entenderlo y actuar.

En Tesla, el producto es un coche y la fotografía carga toda la emoción. En Bitalogics, el producto es **lo que el cliente recibe**:

- **Sistemas embebidos**, mostrados como el sistema terminado y funcionando (el equipo instalado, su carcasa y la alerta que llega al celular), nunca como la tarjeta electrónica sola.
- **Proyectos del laboratorio** sin fotos reales, ilustrados con una escena de Andy que explica qué hace el sistema (ver §5 y §6).
- **Servicios**, presentados por lo que resuelven, no por los componentes que usan.

No hay bordes decorativos, degradados, patrones, texturas ni sombras. El azul marino, el azul y el dorado de la marca se usan con la misma disciplina con la que Tesla usa su único azul: **cada color tiene un trabajo y no hace otro**.

**Características clave**
- Secciones de pantalla completa (`min-height: 100svh`) con un solo mensaje por pantalla.
- Cero decoración de interfaz: ni sombras, ni degradados, ni bordes en tarjetas.
- Un solo color de acción por superficie: `blue.dark` sobre fondos claros y `gold` sobre fondos oscuros.
- Una sola familia tipográfica, Inter, en dos pesos: 400 y 500.
- La imagen del producto hace el trabajo emocional; la interfaz solo acompaña.
- Navegación transparente sobre el hero, que pasa a blanco esmerilado al hacer scroll.
- Todas las transiciones duran 0.33 s y solo cambian color u opacidad.
- Barra persistente de WhatsApp con Andy, el equivalente a la barra "Ask a Question" de Tesla.

---

## 2. Paleta y roles

Los nombres coinciden con los tokens de `src/app/globals.css` (`@theme`) y `tailwind.config.ts`.

### Superficies
| Token | Hex | Rol |
|---|---|---|
| `white` | `#FFFFFF` | Lienzo principal, navegación al hacer scroll y paneles. Es el fondo dominante. |
| `paper` | `#F4F6F9` | Superficie alterna para separar secciones; un cambio apenas perceptible. |
| `paper-warm` | `#EFF2F6` | Fondo detrás de imágenes de producto (marcos de celular, dispositivos). |
| `deep` | `#0E1B2E` | Secciones oscuras de producto, en especial embebidos, y el pie de página. Equivale al *Carbon Dark* de Tesla. |
| `frost` | `rgba(255,255,255,0.80)` | Navegación esmerilada al hacer scroll, con `backdrop-filter: blur(12px)`. |

### Texto
| Token | Hex | Rol | Contraste |
|---|---|---|---|
| `ink` | `#16283F` | Títulos, nombre de producto, navegación y wordmark | 14.9:1 en `white` · 13.8:1 en `paper` |
| `body` | `#3B4A5C` | Párrafos y descripciones (el *Graphite* de Tesla) | 9.1:1 en `white` · 8.4:1 en `paper` |
| `soft` | `#546273` | Texto terciario, enlaces secundarios, notas y pies | 6.2:1 en `white` · 5.8:1 en `paper` |
| `placeholder` | `#6B7685` | Placeholder en campos de formulario | 4.6:1 en `white` |
| `soft-on-dark` | `#A9B4C4` | Texto secundario sobre `deep` | 8.2:1 |
| `paper` sobre `deep` | `#F4F6F9` | Títulos y texto principal sobre `deep` | 16.0:1 |

> **Reemplaza a `text-soft` (`rgba(22,40,63,0.62)`).** Sobre `paper` da 4.26:1 y **no pasa AA** para texto normal. Usa `soft` en su lugar.

### Acción (el "único azul" de Tesla)
| Superficie | Botón primario | Contraste del texto | Hover |
|---|---|---|---|
| Clara (`white`, `paper`) | Fondo `blue.dark` `#1B5A85`, texto `white` | 7.4:1 | Fondo `ink` |
| Oscura (`deep`) | Fondo `gold` `#C98A3E`, texto `deep` | 5.9:1 | Fondo `#B87A30` |

- **Una superficie, un color de acción.** Nunca aparecen un botón azul y uno dorado en la misma pantalla.
- `blue.dark` también es el color de los enlaces dentro del texto.

### Marca (no son colores de acción)
| Token | Hex | Rol | Restricción |
|---|---|---|---|
| `blue` | `#2E86C1` | El cuerpo de Andy, íconos de 24 px o más y el producto ilustrado | 4.0:1 sobre `white`: **nunca para texto menor a 24 px, ni como fondo con texto blanco** |
| `gold` | `#C98A3E` | **La señal**: el LED de Andy, el nodo del logo y el botón primario sobre `deep` | 2.9:1 sobre `white`: **nunca para texto sobre fondo claro**; como relleno pequeño, siempre con contorno `ink` |

**La regla del dorado.** El dorado es el nodo que se enciende. Sobre fondo claro aparece como máximo **una vez por pantalla**, y solo como punto de señal (el nodo del logo, el LED de Andy o un indicador de estado). Si el dorado se vuelve decorativo, pierde su significado.

### Líneas
| Token | Valor | Uso |
|---|---|---|
| `line` | `rgba(22,40,63,0.12)` | Divisores entre filas y separación del pie de página. **Nunca alrededor de tarjetas.** |
| `input-border` | `#8A94A3` | Borde de campos de formulario (3.1:1, cumple el contraste de componentes) |

### Sin degradados
No hay degradados en ninguna parte. La profundidad viene de la imagen de producto, del espacio en blanco y del contraste entre las secciones `white` y `deep`.

---

## 3. Tipografía

### Familia
- **Inter** (variable, `next/font/google`), con `font-optical-sizing: auto` para que el navegador ajuste los tamaños grandes en modo display. El reparto *Display/Text* de Tesla lo resuelve el eje óptico de la misma familia.
- **Se retiran** Fraunces (serif) y JetBrains Mono de la interfaz.

### Jerarquía
| Rol | Tamaño | Peso | Interlineado | Notas |
|---|---|---|---|---|
| Título de producto (hero) | 40 px (32 px en móvil) | 500 | 1.2 | Máximo absoluto del sitio. `ink`, o `paper` sobre `deep` |
| Línea de valor | 20 px (18 px en móvil) | 400 | 1.4 | Una sola línea bajo el título, en `body` |
| Línea de especificaciones | 16 px | 500 | 1.4 | Ej.: *ESP32 · Sensores de presencia · Automatización*, separados por `·` |
| Nombre en tarjeta | 18 px | 500 | 1.3 | Proyectos y servicios en grids |
| Cuerpo | 16 px | 400 | 1.6 | Párrafos. **16 px mínimo**, porque nuestro lector usa celular |
| Navegación | 14 px | 500 | 1.2 | Etiquetas del menú |
| Botón | 15 px | 500 | 1.2 | Texto de los botones |
| Nota y pie | 14 px | 400 | 1.5 | En `soft` |

### Principios
- **Solo dos pesos: 400 y 500.** Nada de 600, 700 ni 300.
- **Interletraje normal en todos los tamaños.** Sin tracking negativo ni positivo.
- **Sin transformaciones de texto.** Nada de mayúsculas forzadas, eyebrows en versalitas ni cursivas decorativas. Se retira la clase `.eyebrow`.
- **Nunca más de 40 px.** La contención es la señal de seguridad.
- El wordmark se escribe **`bitalogics`** en minúsculas, Inter 500, color `ink`.

---

## 4. Componentes

### Botones
Rectángulos con radio de **4 px**: precisos y técnicos, sin forma de píldora.

**Primario**
- Fondo: `blue.dark` sobre superficies claras y `gold` sobre `deep`. Texto `white` o `deep`, respectivamente.
- 15 px, peso 500, altura mínima **48 px**, ancho mínimo 200 px en escritorio y 100% en móvil.
- Borde: `3px solid transparent`, reservado para el estado de foco.
- Foco: `box-shadow: 0 0 0 3px` del color `blue` (sobre claro) o `paper` (sobre oscuro).
- Transición: `background-color .33s, color .33s, border-color .33s, box-shadow .25s`.
- Uso: la acción principal de la pantalla, casi siempre "Cotizar por WhatsApp".

**Secundario**
- Fondo `white` (sobre `paper`) o `paper` (sobre `white`), texto `ink`, mismas medidas y transición.
- Sobre `deep`: fondo `rgba(244,246,249,0.08)`, texto `paper`.
- Uso: "Ver ejemplos", "Conocer más".

**Botón de navegación**
- Fondo transparente, texto `ink`, 14 px, peso 500, radio 4 px, padding `8px 16px`, altura mínima 40 px.
- Hover y activo: fondo `rgba(22,40,63,0.06)`.

**Enlace de texto**
- `soft`, peso 400. En hover pasa a `ink` y se subraya (`text-underline-offset: 4px`).
- Dentro de párrafos: `blue.dark`, siempre subrayado.

**Máximo dos botones por pantalla.** Si hay un tercero, sobra uno.

### Tarjetas y contenedores
**Tarjeta de producto** (servicios y ofertas en grid)
- Sin fondo propio, sin borde y sin sombra: hereda la superficie.
- Contenido: imagen del producto sobre `paper-warm` (radio 12 px), nombre (18/500), una línea en `body` y uno o dos enlaces de texto.
- Sin animación en la tarjeta: la interacción vive en los enlaces.

**Tarjeta de proyecto** (portafolio)
- Captura real a sangre, relación **3:2**, radio 12 px y `overflow: hidden`.
- Etiqueta del proyecto debajo de la imagen, nunca encima. Así no dependemos de que la imagen sea oscura para que se lea.
- Etiqueta de tipo, como "Proyecto de cliente" o "Proyecto de estudio", en 14 px `soft`. Es obligatoria: **nunca presentamos un ejercicio propio como trabajo de cliente.**

Se retiran la clase `.glass-reflection` y cualquier brillo o reflejo sobre las miniaturas.

### Formularios
- Fondo `white`, borde `1px solid input-border`, radio 4 px, altura mínima 48 px.
- Texto de 16 px en `ink` (evita el zoom automático en iOS) y placeholder en `placeholder`.
- Etiqueta visible siempre arriba del campo (14/500 `ink`). El placeholder no sustituye a la etiqueta.
- Foco: borde `blue.dark` más `box-shadow: 0 0 0 3px rgba(46,134,193,0.25)`.
- Error: texto 14 px `#B42318` debajo del campo y borde del mismo color. Es el único color semántico del sistema y solo aparece en formularios.

### Navegación
- **Escritorio:** logo "b" con el wordmark a la izquierda, un máximo de cuatro etiquetas al centro y el botón primario a la derecha.
- **Sobre el hero:** fondo transparente, sin borde ni sombra.
- **Al hacer scroll:** fondo `frost` con `backdrop-filter`. La transición dura 0.33 s y no hay línea divisoria.
- **Sticky**, sin animación de entrada.
- **Móvil (<720 px):** botón de menú (ícono con `aria-label`) que abre un panel blanco a pantalla completa con las etiquetas en 18/500.

### Barra persistente de WhatsApp
Es el equivalente a la barra "Ask a Question" de Tesla y el único elemento fijo en pantalla.
- Anclada abajo y centrada, con ancho máximo de 560 px y margen de 16 px. Fondo `white`, borde `line` y radio 12 px. Es la **única** excepción a "sin bordes", porque flota sobre contenido.
- Contenido: Andy a 32 px, el texto "¿Tienes un proyecto? Escríbenos" (15/500 `ink`) y un botón primario compacto "WhatsApp" de 40 px.
- Aparece después del hero y se oculta cuando la sección de contacto está visible.
- Añade un `padding-bottom` en el `body` igual a la altura de la barra, para que nunca tape contenido.
- Se puede cerrar, con un botón de 44 × 44 px y `aria-label="Cerrar"`.

### Banner de cookies
- Panel `white` anclado abajo, mismo estilo que la barra de WhatsApp. Mientras está visible, sustituye a la barra.
- Dos botones como máximo: "Aceptar" (primario) y "Configurar" (enlace de texto).

---

## 5. Logo y mascota

### El logo "b"
- Archivos fuente: `public/brand/bitalogics-b.svg` (claro) y `public/brand/bitalogics-b-inverso.svg` (oscuro).
- **Construcción:** la panza de la "b" es una compuerta AND. Las dos entradas a la izquierda y la salida a la derecha terminan en el **nodo dorado**. Todos los trazos tienen el mismo grosor, con puntas redondas.
- **Colores:** trazo `ink` sobre fondos claros y `paper` sobre `deep`. El nodo siempre es `gold` con anillo del color del trazo.
- **Versión de una tinta** (grabado, sellos, fax): todo en `ink`, nodo incluido.
- **Área de protección:** el doble del grosor del trazo alrededor del símbolo.
- **Tamaño mínimo:** 20 px de alto en pantalla y 8 mm en impresión.
- **Favicon e ícono de app:** solo la "b". Nunca Andy.
- **Combinación horizontal:** símbolo más `bitalogics` en Inter 500 `ink`. El wordmark mide el 60% de la altura del símbolo y va alineado al centro óptico de la panza.
- **No se permite:** rotarlo, agregarle sombras o degradados, cambiar el color del nodo, separar el nodo del trazo, ni ponerlo sobre fotos sin una superficie sólida detrás.

### Andy
- Archivo fuente: `public/brand/andy-base.svg`.
- **Construcción:** el símbolo de compuerta AND de pie (rectángulo con cúpula y cuerpo tan ancho como alto), dos terminales como patas, antena de salida con nodo dorado, un ojo LED dorado con brillo arriba a la derecha y una sonrisa pequeña. No tiene brazos.
- **Andy no es el producto.** Tesla no pone mascotas en el hero, y nosotros tampoco. Andy acompaña; no protagoniza.
- **Dónde sí aparece:** la barra de WhatsApp, la sección de contacto, la página 404, estados vacíos, confirmaciones de formulario ("¡Recibido!"), redes sociales y **las ilustraciones de los proyectos del laboratorio** mientras no haya fotos reales del sistema.
- **Dónde no:** el hero, las tarjetas de servicio ni como fondo o patrón.
- **Escenas del laboratorio:** archivos `public/brand/andy-*.svg` (hoy `andy-silla.svg` y `andy-presencia.svg`). Andy conserva su geometría exacta de `andy-base.svg` (solo se desplaza); el entorno se dibuja con el mismo trazo `ink` de puntas redondas, sin relleno salvo `blue` en objetos del producto, `white` en piezas pequeñas y `gold` solo para la luz encendida o el nodo que se activa. Las señales (mirada, voz, detección) son trazos `blue` punteados. Fondo transparente, sobre `paper-warm`, con relación 3:2.
- **Sobre `deep`** se usa `public/brand/andy-inverso.svg` (trazo `paper`), nunca la versión base, cuyo contorno `ink` desaparece en el fondo oscuro.
- **Una aparición por pantalla** como máximo.
- **Expresiones:** se comunican solo con el ojo, la antena y la inclinación del cuerpo. El nodo encendido (con rayitos dorados) significa "idea" o "resuelto". Nunca se le agregan brazos, ropa ni objetos.
- **Tamaño mínimo:** 32 px de alto. Por debajo, las patas desaparecen; en ese caso se usa el logo "b".

---

## 6. Imagen de producto

La imagen es el diseño. Si una sección no tiene una imagen real del producto, se simplifica a texto; **no se rellena**. La única excepción son los proyectos del laboratorio, que se ilustran con una escena de Andy (§5); la ilustración se sustituye por la foto real en cuanto exista.

**Sí**
- **Capturas reales** de sitios entregados, dentro de marcos planos de celular o navegador (contorno `ink` de 2 px, sin sombra ni reflejo), centradas sobre `paper-warm`.
- **Capturas del software industrial**, a sangre o en marco plano de navegador o monitor, mostrando la pantalla de operación real.
- **Sistemas embebidos terminados:** el equipo en su carcasa, instalado donde trabaja (en el refrigerador, el tinaco o la puerta), o en foto de estudio sobre fondo `white` o `deep` liso. Siempre que se pueda, junto a la captura de la alerta o el panel en el celular. **No se muestran tarjetas electrónicas sueltas.**
- Imágenes servidas desde Cloudinary con `next/image`, `sizes` correcto y `object-fit: cover` para cada formato.

**No**
- Fotos de stock: personas frente a laptops, apretones de manos, oficinas genéricas.
- Imágenes generadas por IA presentadas como trabajo real.
- Fondos abstractos de circuitos, código flotante, redes neuronales o cerebros.
- Mockups 3D inclinados con sombras dramáticas.
- Logos de clientes como decoración sin el proyecto detrás.

**Datos del cliente:** todas las capturas se revisan antes de publicarse. No deben mostrar nombres, teléfonos, correos ni datos reales de usuarios finales. En el software industrial, además, se ocultan o difuminan el nombre y logo de la planta o del cliente, los números de parte, los nombres de operadores y cualquier dato de producción. El proyecto se describe por el problema que resuelve, no por para quién se hizo, salvo que el cliente lo autorice por escrito.

### Cómo se habla de embebidos
Vendemos **sistemas y resultados**, no tarjetas.
- **No** se nombran plataformas ni componentes en textos de venta (ESP32, STM32, Raspberry Pi, Arduino, sensores por modelo). Al cliente le importa qué resuelve, no con qué está hecho.
- **Excepción, proyectos del laboratorio:** la tecnología va en la línea de especificaciones del proyecto (16/500 `ink`, separada por `·`), nunca en el título ni en la descripción. Así el texto lo entiende cualquiera y quien sabe de técnica ve el detalle.
- **Sí** se nombra el sistema por lo que hace ("Monitor de temperatura con alertas") y el resultado en términos del negocio ("te avisa en WhatsApp antes de que se eche a perder la mercancía").
- La plataforma se elige por proyecto y solo se menciona en la propuesta técnica, si el cliente la pide.

---

## 7. Composición

### Patrón de pantalla de producto
Cada sección principal sigue el ritmo de Tesla: **nombre → línea de valor → especificaciones → dos botones → imagen**.

```
┌──────────────────────────────────────────────┐
│                                              │
│    Iluminación por detección de presencia    │  ← 40/500 ink
│  La luz se enciende cuando llegas y se apaga │  ← 20/400 body
│                cuando te vas.                │
│  ESP32 · Sensores de presencia · Automatiz.  │  ← 16/500 ink
│                                              │
│            ┌────────────────────┐            │
│            │  escena de Andy o  │            │  ← imagen del producto
│            │  foto del sistema  │            │
│            └────────────────────┘            │
└──────────────────────────────────────────────┘
```

- Texto centrado sobre la imagen en escritorio y en móvil. Así se mantiene una sola columna de lectura.
- Alternativa en escritorio (≥1024 px): texto a la izquierda e imagen a la derecha (columnas 5/7), alineados al centro vertical. Úsala solo cuando la imagen sea horizontal.

### Secuencia de la página de inicio
Una pantalla por idea, en este orden:
1. **Hero** sobre `deep`: *Laboratorio de soluciones electrónicas a la medida*, con video de ambiente oscuro detrás (`embedded_systems_hero.mp4`) y la tira de tres accesos. Sin Andy.
2. **Qué hacemos:** cuatro servicios en grid de dos columnas, solo texto (número 14/500 `soft`, título 18/500, descripción en `body`).
3. **Del laboratorio:** cada proyecto en su propia pantalla, alternando `paper` y `white`. Patrón: título → línea de valor → descripción → línea de tecnología → escena de Andy. **Sin botón y sin etiqueta de tipo:** son muestras de lo que hemos construido, no productos en venta, porque todo se diseña a la medida. La invitación a platicar vive en la barra de WhatsApp y en Contacto.
4. **Cómo trabajamos:** cuatro pasos en una fila, solo texto.
5. **Nosotros**, sobre `deep`.
6. **Contacto:** Andy inverso y dos botones.

`/portafolio` muestra el mismo laboratorio con el título como `h1`.

Los textos viven en `src/lib/content.ts` y los proyectos en `src/lib/projects.ts`. No se escriben textos directamente en los componentes.

### Espaciado
- **Unidad base: 8 px.** Escala: 4, 8, 16, 24, 32, 48, 64, 96, 128.
- Entre título y línea de valor: 16 px. Entre especificaciones y botones: 32 px. Entre botones y la imagen: 48 px (32 en móvil).
- Entre botones: 16 px.
- Padding horizontal: 24 px en móvil, 48 px en tablet y 64 px en escritorio.

### Contenedor
- Ancho máximo del contenido: **1200 px**, centrado. Las imágenes de producto pueden ir a sangre completa.
- Altura de las secciones de producto: `min-height: 100svh`, con el contenido centrado verticalmente. **Nunca altura fija**: si el contenido no cabe, la sección crece.
- Grid de proyectos: `repeat(auto-fit, minmax(min(100%, 420px), 1fr))`, con 24 px de separación.

### Radios
| Valor | Uso |
|---|---|
| 0 | Secciones y la mayoría de los elementos |
| 4 px | Botones, campos de formulario y botones de navegación |
| 12 px | Imágenes de producto, tarjetas de proyecto y la barra de WhatsApp |
| 50% | Indicadores de carrusel y avatares |

### El espacio en blanco
El espacio en blanco es la señal de calidad. Que se vea **un solo mensaje a la vez** es intencional: cada scroll es una transición deliberada, como pasar de un modelo al siguiente en una sala de exhibición. Si sobra espacio, se deja vacío.

---

## 8. Profundidad y movimiento

| Nivel | Tratamiento | Uso |
|---|---|---|
| 0, plano | Sin sombra ni borde | Todo por defecto |
| 1, esmerilado | `rgba(255,255,255,0.80)` + `blur(12px)` | Navegación al hacer scroll |
| 2, flotante | Fondo `white` + borde `line` | Barra de WhatsApp y banner de cookies |
| 3, modal | Fondo `rgba(14,27,46,0.60)` detrás del panel | Modal de contacto y menú móvil |

- **Sin `box-shadow`** decorativo en ninguna parte. El único `box-shadow` permitido es el anillo de foco.
- **Movimiento:** `0.33s cubic-bezier(0.5, 0, 0, 0.75)` para todo. Solo cambian color, fondo, borde y opacidad.
- **Aparición al hacer scroll:** solo `opacity` de 0 a 1 en 0.33 s. Se retira el `translateY(16px)` de `.reveal-item`.
- **Sin** `scale`, `translate`, rebotes ni parallax en hover o scroll.
- Con `prefers-reduced-motion: reduce` no hay transiciones: todo aparece directamente.
- Se retira `.hero-seam` (la costura irregular del hero anterior).

---

## 9. Comportamiento responsive

| Nombre | Ancho | Cambios |
|---|---|---|
| Móvil | <720 px | Una columna, menú en panel, título de 32 px, botones apilados al 100% de ancho, grid de proyectos en una columna |
| Tablet | 720–1023 px | Navegación completa si cabe; botones lado a lado; grid de proyectos en 2 columnas |
| Escritorio | 1024–1439 px | Título de 40 px y patrón alternativo de texto e imagen permitido |
| Escritorio grande | ≥1440 px | El contenido se queda en 1200 px centrado y solo las imágenes a sangre crecen |

- **Áreas táctiles:** mínimo 44 × 44 px. Los botones primarios miden 48 px de alto.
- **Página:** funciona a 360 px de ancho sin scroll horizontal.
- **Imágenes:** `next/image` con `sizes` por breakpoint; las de debajo del primer pantallazo, con carga diferida.

---

## 10. Hacer y no hacer

### Hacer
- Dejar que el producto (capturas reales, dispositivos, ofertas claras) domine cada pantalla.
- Usar `blue.dark` (o `gold` sobre `deep`) **solo** para la acción principal.
- Mostrar un mensaje por pantalla, con dos botones como máximo.
- Escribir el precio y el tiempo de entrega en la línea de especificaciones. La claridad vende.
- Usar Inter en 400 y 500, en tamaños de 14 a 40 px.
- Usar radio de 4 px en todo lo interactivo.
- Dejar vacío el espacio que sobra.
- Usar 0.33 s en todas las transiciones.
- Etiquetar con honestidad lo que es "Proyecto de cliente" y lo que es "Proyecto de estudio".
- Verificar contraste AA (4.5:1 para texto, 3:1 para componentes) en cada combinación nueva.

### No hacer
- Sombras, degradados, patrones, texturas o brillos.
- Usar `blue` (`#2E86C1`) para texto pequeño o como fondo de botón con texto blanco (3.97:1).
- Usar `gold` como color de texto sobre fondos claros, o como decoración repetida.
- Mostrar un botón azul y uno dorado en la misma pantalla.
- Usar bordes alrededor de tarjetas: la separación se logra con espacio.
- Usar mayúsculas forzadas, eyebrows, serifas o tracking.
- Usar texto mayor a 40 px o pesos 600 y 700.
- Usar botones en forma de píldora.
- Animar con escala o desplazamiento.
- Poner a Andy en el hero o más de una vez por pantalla.
- Usar fotos de stock o imágenes de IA presentadas como trabajo real.
- Escribir textos directamente en componentes en lugar de usar `content.ts`.

---

## 11. Guía para agentes

### Referencia rápida
- Acción sobre fondo claro: `blue.dark` `#1B5A85` con texto blanco
- Acción sobre `deep`: `gold` `#C98A3E` con texto `deep`
- Fondo: `white` `#FFFFFF` · alterno `paper` `#F4F6F9` · imagen `paper-warm` `#EFF2F6`
- Superficie oscura: `deep` `#0E1B2E`
- Títulos: `ink` `#16283F` · cuerpo `body` `#3B4A5C` · terciario `soft` `#546273`
- Marca: `blue` `#2E86C1` (Andy e íconos grandes) · `gold` (nodo y LED)

### Ejemplos de instrucciones
- "Crea la pantalla de un proyecto del laboratorio sobre `paper`, altura mínima de pantalla completa. Título en Inter 40/500 `ink`, línea de valor en 20/400 `body`, descripción en 16/400 `body`, tecnología 'ESP32 · Sensores de presencia · Automatización' en 16/500 `ink`. A la derecha (columnas 5/7 en escritorio), la escena de Andy sobre `paper-warm` con radio de 12 px. Sin botón ni etiqueta de tipo. Sin sombras."
- "Crea la sección de sistemas embebidos sobre `deep`: título en `paper` 40/500, línea en `soft-on-dark`, botón primario `gold` con texto `deep` y la foto del sistema instalado sobre fondo `deep` liso, sin bordes. No menciones plataformas ni componentes."
- "Crea el bloque de proyectos destacados: los dos sistemas de software industrial, cada uno a ancho completo con captura 16:9 y radio de 12 px, nombre en 18/500 `ink`, una línea en `body` sobre el problema que resuelve y la etiqueta 'Software industrial' en 14/400 `soft`."
- "Crea el grid de proyectos: dos columnas en escritorio y una en móvil, separación de 24 px. Cada tarjeta lleva la captura 3:2 con radio de 12 px, debajo el nombre en 18/500 `ink`, una línea en `body` y la etiqueta 'Proyecto de cliente' en 14/400 `soft`. Sin bordes ni sombras."
- "Crea la barra persistente de WhatsApp: anclada abajo, ancho máximo de 560 px, fondo `white`, borde `line` y radio de 12 px. Andy a 32 px, el texto '¿Tienes un proyecto? Escríbenos' y un botón primario compacto. Se oculta cuando la sección de contacto está visible."

### Cómo iterar
1. Trabaja **un componente a la vez**.
2. Usa los nombres de token de este documento, nunca hex sueltos en los componentes.
3. Antes de terminar, pregúntate si la interfaz se nota. Si se nota "diseñada", sobra algo.
4. Revisa cada pantalla a 360 px y a 1440 px.
5. Si una sección no tiene imagen real del producto, simplifícala a texto en lugar de rellenarla.