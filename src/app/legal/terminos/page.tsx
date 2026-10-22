import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  alternates: { canonical: "/legal/terminos" },
  description:
    "Términos y Condiciones de uso del sitio web de Bitalogics. Última actualización: Marzo 2026.",
};

export default function TerminosPage() {
  return (
    <article>
      <LegalStyles />

      <p className="legal-updated">Última actualización: Marzo de 2026</p>
      <h1>Términos y Condiciones de Uso</h1>

      <p>
        Bienvenido a <strong>Bitalogics</strong>. Estos Términos y Condiciones
        rigen el uso del sitio web{" "}
        <a href="https://bitalogics.com">bitalogics.com</a> y de cualquier
        servicio, herramienta o contenido relacionado proporcionado por
        Bitalogics.
      </p>
      <p>
        Al acceder o utilizar este sitio web, usted acepta cumplir y estar
        sujeto a estos Términos y Condiciones. Si no está de acuerdo con estos
        términos, debe dejar de usar el sitio web.
      </p>

      <h2>1. Información de la empresa</h2>
      <p>
        Este sitio web es operado por <strong>Bitalogics</strong>, una agencia
        digital independiente operada por su propietario y titular de una
        actividad económica registrada en México.
      </p>
      <p>Bitalogics se especializa en servicios que incluyen, entre otros:</p>
      <ul>
        <li>Diseño y desarrollo de sitios web</li>
        <li>Desarrollo de aplicaciones web</li>
        <li>Sistemas internos y herramientas a la medida</li>
        <li>Automatización de procesos</li>
        <li>Consultoría técnica digital</li>
      </ul>
      <p>
        Para cualquier consulta sobre estos términos:{" "}
        <a href="mailto:bitalogics@gmail.com">bitalogics@gmail.com</a>
      </p>

      <h2>2. Finalidad del sitio web</h2>
      <p>
        El propósito de este sitio web es proporcionar información sobre
        Bitalogics, sus servicios y trabajos previos. Toda la información
        presentada es solo para fines informativos y puede actualizarse,
        modificarse o eliminarse en cualquier momento sin previo aviso.
      </p>

      <h2>3. Aceptación de los términos</h2>
      <p>
        Al acceder o utilizar este sitio web, usted confirma que ha leído,
        comprendido y aceptado estos Términos y Condiciones. Si no está de
        acuerdo, debe dejar de usar el sitio web inmediatamente.
      </p>

      <h2>4. Uso permitido</h2>
      <p>Los usuarios se comprometen a utilizar este sitio web de forma legal y respetuosa. No se permite:</p>
      <ul>
        <li>Utilizar el sitio web con fines ilegales</li>
        <li>Intentar obtener acceso no autorizado al sitio web o a su infraestructura</li>
        <li>Interrumpir o interferir con la seguridad del sitio web</li>
        <li>Utilizar sistemas automatizados o bots para extraer contenido sin permiso</li>
        <li>Copiar, reproducir, distribuir o explotar cualquier parte del sitio web sin autorización</li>
      </ul>
      <p>
        Bitalogics se reserva el derecho de restringir o bloquear el acceso a
        los usuarios que infrinjan estos términos.
      </p>

      <h2>5. Propiedad intelectual</h2>
      <p>
        Todo el contenido de este sitio web — logotipos, marca, elementos de
        diseño, gráficos, contenido escrito, herramientas de software y código
        — es propiedad de <strong>Bitalogics</strong>, a menos que se indique lo
        contrario. Queda estrictamente prohibida la reproducción, redistribución
        o uso comercial no autorizado de este contenido sin autorización previa
        por escrito.
      </p>

      <h2>6. Portafolio y trabajo de clientes</h2>
      <p>
        Bitalogics puede mostrar proyectos completados o en curso en su sección
        de portafolio. Todas las marcas comerciales y logotipos de los clientes
        son propiedad de sus respectivos dueños. Si un proyecto está protegido
        por un acuerdo de confidencialidad, Bitalogics respetará dichos términos
        y podrá omitir dicho trabajo de la exhibición pública.
      </p>

      <h2>7. Formularios de contacto y solicitudes de proyectos</h2>
      <p>
        El envío de un formulario, consulta o mensaje a través del sitio web no
        crea una relación contractual entre el usuario y Bitalogics. Bitalogics
        se reserva el derecho de aceptar o rechazar solicitudes de proyectos a
        su discreción. Cualquier acuerdo formal debe confirmarse por escrito por
        separado.
      </p>

      <h2>8. Contratos de servicio</h2>
      <p>
        Todos los servicios prestados por Bitalogics están sujetos a contratos,
        propuestas o acuerdos individuales que definen el alcance del trabajo,
        precios, plazos, entregables y condiciones de pago. Estos Términos y
        Condiciones no reemplazan ni anulan ningún contrato específico acordado
        con un cliente.
      </p>

      <h2>9. Pagos y reembolsos</h2>
      <p>
        Las condiciones de pago se definen en los contratos individuales de cada
        proyecto. En general, los proyectos pueden requerir un pago inicial
        parcial o total, y el trabajo comenzará solo después de la confirmación
        del pago. Las políticas de reembolso específicas se detallarán en los
        contratos individuales.
      </p>

      <h2>10. Servicios de terceros</h2>
      <p>
        Bitalogics podría recurrir a servicios o plataformas de terceros
        (proveedores de alojamiento, APIs, herramientas de análisis) para ofrecer
        ciertas funcionalidades. Bitalogics no se responsabiliza de las
        interrupciones, fallos o limitaciones causadas por estos proveedores
        externos.
      </p>

      <h2>11. Disponibilidad del sitio web</h2>
      <p>
        Bitalogics no garantiza la disponibilidad ininterrumpida del sitio web.
        El sitio web o cualquiera de sus funciones pueden ser actualizados,
        modificados, suspendidos o descontinuados en cualquier momento sin previo
        aviso.
      </p>

      <h2>12. Limitación de responsabilidad</h2>
      <p>
        En la medida máxima permitida por la ley, Bitalogics no será responsable
        de ningún daño indirecto, incidental o consecuente que resulte del uso o
        la imposibilidad de usar el sitio web, de la confianza depositada en la
        información proporcionada, o de errores o interrupciones técnicas.
      </p>

      <h2>13. Privacidad</h2>
      <p>
        Bitalogics respeta la privacidad del usuario. Cualquier dato personal
        recopilado a través de formularios de contacto u otras interacciones se
        gestionará de acuerdo con nuestra{" "}
        <a href="/legal/privacidad">Política de Privacidad</a>.
      </p>

      <h2>14. Cambios a estos términos</h2>
      <p>
        Bitalogics se reserva el derecho de modificar o actualizar estos
        Términos y Condiciones en cualquier momento. Las actualizaciones se
        reflejarán en la fecha de &ldquo;Última actualización&rdquo; al inicio de
        este documento. El uso continuado del sitio web constituye la aceptación
        de los términos revisados.
      </p>

      <h2>15. Ley aplicable</h2>
      <p>
        Estos Términos y Condiciones se regirán e interpretarán de conformidad
        con las leyes de México. Cualquier disputa estará sujeta a la
        jurisdicción aplicable en México.
      </p>

      <h2>16. Información de contacto</h2>
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
      article li {
        margin-bottom: 6px;
      }
      article a {
        color: var(--color-blue);
        text-decoration: underline;
      }
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
