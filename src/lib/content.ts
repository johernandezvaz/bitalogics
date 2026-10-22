export const siteContent = {
  nav: {
    brand: "bitalogics",
    logoAlt: "Logotipo de Bitalogics, desarrollo de software en Chihuahua",
    links: [
      { label: "Servicios", href: "/#servicios" },
      { label: "Portafolio", href: "/#portafolio" },
      { label: "Nosotros", href: "/#nosotros" },
      { label: "Contacto", href: "/#contacto" },
    ],
    cta: "Iniciar proyecto",
    menuOpenLabel: "Abrir menú",
    menuCloseLabel: "Cerrar menú",
  },
  whatsapp: {
    number: "[NÚMERO WHATSAPP]",
    message: "Hola, quiero cotizar un proyecto con Bitalogics.",
  },
  hero: {
    title: "Tu negocio en línea en 7 días",
    valueLine:
      "Páginas web en Chihuahua con Google Maps y WhatsApp, listas para recibir clientes.",
    specs: "7 días · desde $2,500 MXN · botón de WhatsApp",
    primaryCta: "Cotizar por WhatsApp",
    secondaryCta: "Ver ejemplos",
    projectId: "[IMAGEN]",
  },
  services: {
    eyebrow: "Servicios",
    title: "Servicios de páginas web, software e IoT en Chihuahua",
    items: [
      {
        num: "01",
        title: "Tu negocio en línea en 7 días",
        price: "2500",
        description:
          "Páginas web en Chihuahua para negocios locales, listas en 7 días y desde $2,500 MXN. Se ven bien en celular y te encuentran en Google.",
      },
      {
        num: "02",
        title: "Tienda en línea para negocios",
        description:
          "Vende tus productos por internet con catálogo, carrito y pagos, pensada para comprar fácil desde el celular.",
      },
      {
        num: "03",
        title: "Software a la medida",
        description:
          "Desarrollo de software a la medida en Chihuahua: sistemas de citas, inventario y paneles de control hechos para cómo trabaja tu negocio.",
      },
      {
        num: "04",
        title: "Sistemas embebidos e IoT",
        description:
          "Tarjetas ESP32, sensores y monitoreo remoto para medir, controlar y recibir avisos de tus equipos desde cualquier lugar.",
      },
    ],
  },
  portfolio: {
    eyebrow: "Portafolio",
    title: "Portafolio de sitios web y tiendas en línea",
    intro:
      "Este portafolio incluye tanto proyectos desarrollados para clientes como exploraciones de diseño propias del estudio.",
    viewAllCta: "Ver todos los proyectos",
    backToHomeCta: "← Volver al inicio",
    pageTitle: "Portafolio: páginas web y tiendas en línea en Chihuahua",
    pageSubtitle:
      "Explora nuestro trabajo de cliente y las exploraciones de diseño que hemos desarrollado como estudio.",
    tags: {
      real: "Proyecto de cliente",
      concept: "Proyecto de estudio",
    },
  },
  about: {
    eyebrow: "Nosotros",
    title: "Tecnología con un enfoque humano",
    paragraph1:
      "En Bitalogics creemos que cada negocio trabaja de forma diferente, por eso no hacemos soluciones genéricas. Nos tomamos el tiempo de entender cómo funciona cada proyecto para desarrollar software que realmente resuelva problemas y facilite el trabajo del día a día.",
    paragraph2:
      "Hemos trabajado en proyectos de distintos tamaños, desde páginas web y tiendas en línea hasta sistemas internos para empresas con procesos más complejos. Sin importar el alcance, nuestro objetivo siempre es el mismo: crear herramientas confiables, fáciles de usar y que aporten valor desde el primer día.",
    founderName: "José Hernández",
    founderTitle: "Fundador · Ingeniero en Sistemas Computacionales",
  },
  serviceSections: [
    {
      id: "sitios-web",
      title: "Tu negocio en línea en 7 días",
      valueLine:
        "Sitio web con Google Maps y botón de WhatsApp, listo para recibir clientes.",
      specs: "7 días · desde $2,500 MXN · sin plantillas",
      primaryCta: "Cotizar por WhatsApp",
      secondaryCta: "Ver ejemplos",
      surface: "white" as const,
      projectId: "1",
    },
    {
      id: "tiendas",
      title: "Tienda en línea para negocios",
      valueLine:
        "Vende tus productos por internet con catálogo, carrito y pagos en línea.",
      specs: "Catálogo · carrito · pagos · optimizada para celular",
      primaryCta: "Cotizar por WhatsApp",
      secondaryCta: "Ver ejemplo",
      surface: "paper" as const,
      projectId: "2",
    },
    {
      id: "sistemas",
      title: "Software a la medida",
      valueLine:
        "Sistemas de citas, inventario y paneles hechos para cómo trabaja tu negocio.",
      specs: "Citas · inventario · paneles · acceso por rol",
      primaryCta: "Platicar sobre tu proyecto",
      secondaryCta: "",
      surface: "white" as const,
      projectId: "3",
    },
    {
      id: "iot",
      title: "Sistemas embebidos e IoT",
      valueLine:
        "Tarjetas ESP32, sensores y monitoreo remoto para medir y controlar tus equipos.",
      specs: "ESP32 · sensores · monitoreo remoto · alertas",
      primaryCta: "Cotizar prototipo",
      secondaryCta: "",
      surface: "deep" as const,
      projectId: "",
    },
  ],
  howWeWork: {
    title: "Cómo trabajamos",
    steps: [
      {
        num: "01",
        title: "Diagnóstico",
        description: "Entendemos cómo funciona tu negocio antes de escribir una sola línea de código.",
      },
      {
        num: "02",
        title: "Propuesta",
        description: "Presentamos alcance, tiempo de entrega y precio por escrito, sin sorpresas.",
      },
      {
        num: "03",
        title: "Desarrollo",
        description: "Iteramos contigo en ciclos cortos para que el resultado sea exactamente lo que necesitas.",
      },
      {
        num: "04",
        title: "Entrega",
        description: "Capacitamos a tu equipo, entregamos el código fuente y dejamos todo funcionando.",
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title: "¿Tienes un proyecto en mente? Hablemos.",
    body: "Cuéntanos qué necesitas y te respondemos en menos de 24 horas.",
    cta: "Escríbenos",
    whatsappCta: "Cotizar por WhatsApp",
    email: "mailto:hola@bitalogics.com",
  },
  footer: {
    copyright: "© 2026 Bitalogics",
    location: "Chihuahua, México",
  },
};