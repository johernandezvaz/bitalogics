import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  alternates: { canonical: "/legal/cookies" },
  description:
    "Política de Cookies de Bitalogics. Qué cookies usamos y cómo puedes gestionarlas.",
};

export default function CookiesPage() {
  return (
    <article>
      <LegalStyles />

      <p className="legal-updated">Última actualización: Marzo de 2026</p>
      <h1>Política de Cookies</h1>

      <p>
        Esta Política de Cookies explica cómo <strong>Bitalogics</strong>{" "}
        utiliza cookies y tecnologías similares cuando visitas{" "}
        <a href="https://bitalogics.com">bitalogics.com</a>.
      </p>
      <p>
        Al continuar navegando o utilizando este sitio web, aceptas el uso de
        cookies según lo descrito en esta política.
      </p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que se almacenan en tu
        dispositivo (computadora, tableta o smartphone) cuando visitas un sitio
        web. Se utilizan ampliamente para optimizar el funcionamiento de los
        sitios web, recordar las preferencias del usuario y proporcionar
        información a los propietarios sobre cómo interactúan los visitantes con
        sus sitios.
      </p>
      <p>
        Las cookies no suelen contener información que identifique directamente
        a un usuario, pero pueden estar asociadas con la información almacenada
        en tu navegador.
      </p>

      <h2>2. Cómo utiliza Bitalogics las cookies</h2>
      <p>
        Bitalogics utiliza cookies para mejorar la funcionalidad y el rendimiento
        del sitio web, así como para comprender mejor cómo lo utilizan los
        visitantes. Las cookies se pueden utilizar para:
      </p>
      <ul>
        <li>Garantizar el correcto funcionamiento del sitio web</li>
        <li>Recordar las preferencias básicas del usuario (como la aceptación de esta política)</li>
        <li>Analizar el tráfico general del sitio web y los patrones de uso</li>
        <li>Mejorar la experiencia general del usuario</li>
      </ul>
      <p>
        Bitalogics <strong>no utiliza cookies para vender datos personales ni
          rastrear a los usuarios con fines publicitarios</strong>.
      </p>

      <h2>3. Tipos de cookies que podemos utilizar</h2>

      <h3>Cookies esenciales</h3>
      <p>
        Estas cookies son necesarias para el funcionamiento básico del sitio
        web. Habilitan funciones como navegar por las páginas, guardar las
        preferencias básicas (por ejemplo, si ya aceptaste esta política) y
        asegurar el acceso a ciertas áreas del sitio. Sin estas cookies, algunas
        partes del sitio web podrían no funcionar correctamente.
      </p>

      <h3>Cookies de análisis</h3>
      <p>
        Bitalogics puede utilizar herramientas de análisis para comprender cómo
        interactúan los visitantes con el sitio web. Estas cookies pueden
        recopilar información como páginas visitadas, tiempo de permanencia,
        sitios de referencia, región geográfica general y tipo de dispositivo o
        navegador.
      </p>
      <p>
        Esta información se utiliza <strong>únicamente con fines estadísticos y
          de mejora</strong> y no identifica a usuarios individuales.
      </p>

      <h2>4. Cookies de terceros</h2>
      <p>
        Algunas cookies pueden ser instaladas por servicios de terceros que
        ayudan a operar o analizar el sitio web. Estos proveedores pueden
        procesar información técnica limitada necesaria para realizar sus
        servicios. Bitalogics no controla las prácticas de privacidad de estos
        proveedores externos, por lo que se recomienda revisar sus políticas de
        privacidad.
      </p>

      <h2>5. Gestión o desactivación de cookies</h2>
      <p>
        La mayoría de los navegadores web te permiten controlar las cookies a
        través de su configuración. Normalmente puedes:
      </p>
      <ul>
        <li>Eliminar cookies existentes</li>
        <li>Bloquear nuevas cookies</li>
        <li>Recibir alertas cuando se utilicen cookies</li>
      </ul>
      <p>
        Las instrucciones para administrar las cookies suelen encontrarse en la
        sección <em>Ayuda</em> o <em>Configuración</em> de tu navegador. Ten en
        cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad
        del sitio web.
      </p>

      <h2>6. Cambios en esta política</h2>
      <p>
        Bitalogics puede actualizar esta Política de Cookies ocasionalmente para
        reflejar cambios en la tecnología, la normativa o la funcionalidad del
        sitio web. Cuando se realicen actualizaciones, se revisará la fecha de
        &ldquo;Última actualización&rdquo; al inicio de esta página. El uso
        continuado del sitio web indica la aceptación de la política actualizada.
      </p>

      <h2>7. Contacto</h2>
      <p>
        <strong>Bitalogics</strong>
        <br />
        Correo electrónico:{" "}
        <a href="mailto:bitalogics@gmail.com">bitalogics@gmail.com</a>
      </p>
    </article>
  );
}

function LegalStyles() {
  return (
    <style>{`
      article h1 {
        font-family: var(--font-fraunces), serif;
        font-size: 32px;
        font-weight: 500;
        color: var(--color-ink);
        margin: 0 0 28px;
        line-height: 1.2;
      }
      article h2 {
        font-family: var(--font-fraunces), serif;
        font-size: 19px;
        font-weight: 500;
        color: var(--color-ink);
        margin: 40px 0 12px;
        padding-top: 32px;
        border-top: 1px solid var(--color-line);
      }
      article h3 {
        font-family: var(--font-inter), sans-serif;
        font-size: 14px;
        font-weight: 600;
        color: var(--color-ink);
        margin: 20px 0 8px;
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
      article p, article li {
        font-family: var(--font-inter), sans-serif;
        font-size: 15px;
        color: rgba(22,40,63,0.80);
        line-height: 1.75;
        margin: 0 0 14px;
      }
      article ul {
        margin: 0 0 14px;
        padding-left: 20px;
      }
      article li { margin-bottom: 6px; }
      article a { color: var(--color-blue); text-decoration: underline; }
      .legal-updated {
        font-family: var(--font-jetbrains), monospace !important;
        font-size: 11.5px !important;
        color: var(--color-text-soft) !important;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        margin-bottom: 16px !important;
      }
    `}</style>
  );
}
