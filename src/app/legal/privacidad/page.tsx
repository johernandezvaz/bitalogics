import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — Bitalogics",
  description:
    "Política de Privacidad de Bitalogics. Cómo recopilamos, usamos y protegemos tu información personal.",
};

export default function PrivacidadPage() {
  return (
    <article>
      <LegalStyles />

      <p className="legal-updated">Última actualización: Marzo de 2026</p>
      <h1>Política de Privacidad</h1>

      <p>
        Esta Política de Privacidad describe cómo <strong>Bitalogics</strong>{" "}
        recopila, utiliza y protege tu información personal cuando visitas o
        interactúas con el sitio web{" "}
        <a href="https://silqapps.com">silqapps.com</a>.
      </p>
      <p>
        Al utilizar este sitio web, aceptas las prácticas descritas en esta
        política.
      </p>

      <h2>1. Quiénes somos</h2>
      <p>
        Bitalogics es una agencia digital independiente que ofrece servicios de
        diseño y desarrollo de sitios web, aplicaciones web, sistemas internos y
        consultoría digital. Es operada por su propietario en Chihuahua, México.
      </p>
      <p>
        Para cualquier consulta relacionada con la privacidad:{" "}
        <a href="mailto:bitalogics@gmail.com">bitalogics@gmail.com</a>
      </p>

      <h2>2. Información que recopilamos</h2>

      <h3>Información que tú proporcionas</h3>
      <p>
        Al completar el formulario de contacto en el sitio web, podemos
        recopilar:
      </p>
      <ul>
        <li>Nombre completo</li>
        <li>Correo electrónico</li>
        <li>Número de WhatsApp (opcional)</li>
        <li>Contenido del mensaje</li>
      </ul>
      <p>Esta información la proporcionas voluntariamente.</p>

      <h3>Información recopilada automáticamente</h3>
      <p>
        Al visitar el sitio web, es posible que se recopile automáticamente
        cierta información técnica, como tipo de navegador, tipo de dispositivo,
        páginas visitadas, tiempo de permanencia, sitio de referencia y región
        geográfica general. Estos datos se recopilan mediante tecnologías web
        estándar (cookies o herramientas de análisis) y se usan únicamente para
        mejorar el rendimiento del sitio.
      </p>

      <h2>3. Cómo usamos tu información</h2>
      <p>La información recopilada puede utilizarse para:</p>
      <ul>
        <li>Responder a las consultas enviadas a través del formulario de contacto</li>
        <li>Evaluar posibles solicitudes de proyectos</li>
        <li>Mejorar el rendimiento y la usabilidad del sitio web</li>
        <li>Analizar patrones generales de uso</li>
      </ul>
      <p>
        Bitalogics <strong>no vende, alquila ni intercambia</strong> información
        personal con terceros.
      </p>

      <h2>4. Cookies</h2>
      <p>
        Este sitio web puede utilizar cookies para garantizar el correcto
        funcionamiento del sitio, recordar preferencias básicas del usuario y
        analizar patrones de tráfico. Puedes desactivar las cookies en la
        configuración de tu navegador, aunque algunas partes del sitio podrían
        no funcionar correctamente. Consulta nuestra{" "}
        <a href="/legal/cookies">Política de Cookies</a> para más detalles.
      </p>

      <h2>5. Servicios de terceros</h2>
      <p>
        Bitalogics puede utilizar servicios de terceros (proveedores de
        alojamiento web, servicios de análisis, APIs) para operar o mejorar el
        sitio web. Estos terceros pueden procesar datos técnicos limitados
        necesarios para el funcionamiento de sus servicios. Bitalogics no
        controla cómo los proveedores externos gestionan sus propias prácticas
        de privacidad.
      </p>

      <h2>6. Seguridad de los datos</h2>
      <p>
        Bitalogics toma medidas razonables para proteger la información enviada
        a través del sitio web. Sin embargo, ningún método de transmisión por
        internet puede garantizar la completa seguridad. Los usuarios deben
        evitar enviar información personal o financiera confidencial a través del
        sitio web.
      </p>

      <h2>7. Retención de datos</h2>
      <p>
        La información personal enviada a través de los formularios de contacto
        podrá conservarse durante el tiempo necesario para responder a la
        consulta o mantener la comunicación sobre una solicitud de proyecto. Si
        deseas solicitar la eliminación de tu información, puedes contactarnos
        en cualquier momento.
      </p>

      <h2>8. Tus derechos</h2>
      <p>
        Dependiendo de tu ubicación, podrías tener derechos respecto a tus
        datos personales, incluyendo solicitar acceso, corrección o eliminación
        de tu información. Para ejercer estos derechos, contacta a:{" "}
        <a href="mailto:bitalogics@gmail.com">bitalogics@gmail.com</a>.
      </p>

      <h2>9. Privacidad infantil</h2>
      <p>
        Este sitio web y sus servicios no están destinados a menores de 13 años.
        Bitalogics no recopila deliberadamente información personal de menores.
        Si se identifican dichos datos, se eliminarán de inmediato.
      </p>

      <h2>10. Cambios a esta política</h2>
      <p>
        Bitalogics podrá actualizar esta Política de Privacidad ocasionalmente.
        Las actualizaciones se reflejarán en la fecha de &ldquo;Última
        actualización&rdquo; al inicio de esta página. El uso continuado del
        sitio web después de las actualizaciones implica la aceptación de la
        política revisada.
      </p>

      <h2>11. Contacto</h2>
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
