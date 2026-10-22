export interface Project {
  id: string;
  title: string;
  description: string;
  tag: "real" | "concept" | "industrial";
  destacado: boolean;
  image?: string;
}

export const projects: Project[] = [

  {
    id: "ind-1",
    title: "Calculadora de perfiles estructurales",
    description:
      "Herramienta de escritorio para calcular y seleccionar perfiles metálicos según carga, eliminando las tablas en papel y reduciendo errores de selección.",
    tag: "industrial",
    destacado: true,
    image: "/calculadora_perfiles.jpeg",
  },
  {
    id: "ind-2",
    title: "Plataforma web para laboratorio de ensayos",
    description:
      "Sistema para que los clientes del laboratorio soliciten ensayos, revisen resultados y descarguen reportes sin necesidad de llamar o ir en persona.",
    tag: "industrial",
    destacado: true,
    image: "/ASE-CA LAB-02.png",
  },

  // Proyectos de cliente
  {
    id: "1",
    title: "Sapphirus — Tienda de Ropa Americana",
    description:
      "Tienda en línea de ropa americana importada, pensada para comprar fácil desde el celular y pagar con toda confianza.",
    tag: "real",
    destacado: true,
    image: "/sapphirus-logo.png",
  },
  {
    id: "2",
    title: "Fajas Colombianas Maydel",
    description:
      "Tienda en línea de fajas colombianas, diseñada para que los clientes encuentren lo que buscan y compren sin fricciones desde el celular.",
    tag: "real",
    destacado: true,
    image: "/fajas-maydel-logo.png",
  },
  {
    id: "3",
    title: "Plataforma para Despacho Contable",
    description:
      "Sitio web para un despacho contable, para que sus clientes encuentren su información y se comuniquen con la empresa sin complicaciones.",
    tag: "real",
    destacado: false,
    image: "/Logo-1.png",
  },
  {
    id: "5",
    title: "Sitio para Agencia de Marketing Digital",
    description:
      "Sitio propio de una agencia de desarrollo y marketing digital, enfocado en atraer nuevos clientes a través de buscadores. La base de lo que hoy es Bitalogics.",
    tag: "real",
    destacado: true,
    image:
      "https://res.cloudinary.com/dizorsslw/image/upload/v1774266308/u6wpk55ptnxrhmsmwlwf.png",
  },

  // Proyectos de estudio
  {
    id: "6",
    title: "Landing Page para Spa de Belleza",
    description:
      "Propuesta de sitio web para un spa, con espacio para reservar citas en línea y un diseño pensado para transmitir confianza.",
    tag: "concept",
    destacado: true,
    image:
      "https://res.cloudinary.com/dizorsslw/image/upload/v1774265851/vegl8t4ooe3movuxnpmd.png",
  },
  {
    id: "7",
    title: "Landing Page para Clínica Dental",
    description:
      "Propuesta de sitio web para una clínica dental, con catálogo de servicios y formulario de contacto directo.",
    tag: "concept",
    destacado: false,
    image:
      "https://res.cloudinary.com/dizorsslw/image/upload/v1774265854/qhtupyk4pom4zdrmqws2.png",
  },
  {
    id: "8",
    title: "Landing Page para Consultorio Dental Infantil",
    description:
      "Propuesta de sitio para un consultorio dental pediátrico, con diseño pensado para niños y padres, y contacto directo por WhatsApp.",
    tag: "concept",
    destacado: false,
    image:
      "https://res.cloudinary.com/dizorsslw/image/upload/v1774265853/u8nfyqhyadnnyx9owzzu.png",
  },
  {
    id: "9",
    title: "Sitio Portafolio para Psicóloga",
    description:
      "Propuesta de sitio para una psicóloga, con blog de artículos y sistema de reserva de citas en línea.",
    tag: "concept",
    destacado: false,
    image:
      "https://res.cloudinary.com/dizorsslw/image/upload/v1774265853/li3ieh8h5c27aqp4ttkv.png",
  },
];
