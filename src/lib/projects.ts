export interface LabProject {
  id: string;
  title: string;
  /** Una línea de valor bajo el título */
  summary: string;
  description: string;
  /** Etiquetas técnicas: solo se muestran aquí, nunca en textos de venta (DESIGN.md §6) */
  tech: string[];
  /** Ilustración de Andy mientras no haya foto real del sistema */
  illustration: string;
  illustrationAlt: string;
}

export const labProjects: LabProject[] = [
  {
    id: "silla-mirada-voz",
    title: "Silla de ruedas controlada por mirada y voz",
    summary:
      "Una nueva forma de control para personas que no pueden usar el joystick.",
    description:
      "Le dimos a una silla de ruedas eléctrica comercial una nueva forma de control. El sistema reconoce comandos de voz y sigue el movimiento de los ojos, todo procesado dentro del dispositivo, sin internet. Para integrarlo, reproducimos la señal del joystick original: la silla funciona sin modificar su electrónica.",
    tech: [
      "Raspberry Pi",
      "Visión por computadora",
      "Reconocimiento de voz local",
      "Emulación de joystick",
    ],
    illustration: "/brand/andy-silla.svg",
    illustrationAlt:
      "Ilustración: Andy mira una silla de ruedas y le da órdenes con la vista y la voz",
  },
  {
    id: "iluminacion-presencia",
    title: "Iluminación por detección de presencia",
    summary: "La luz se enciende cuando llegas y se apaga cuando te vas.",
    description:
      "Un sistema que detecta a las personas en un espacio y enciende o apaga la iluminación automáticamente. Reduce el consumo de energía sin que nadie tenga que acordarse del apagador.",
    tech: ["ESP32", "Sensores de presencia", "Automatización"],
    illustration: "/brand/andy-presencia.svg",
    illustrationAlt:
      "Ilustración: Andy entra a un cuarto, el sensor lo detecta y la lámpara se enciende",
  },
];
