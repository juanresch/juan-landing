import { SITE } from './site';

/**
 * Mensajes pre-cargados por contexto.
 * Cada página usa el contexto que corresponde para que Juan
 * sepa de qué parte del sitio viene la persona.
 */
export const WA_MESSAGES = {
  home: 'Hola Juan! Vi tu página web y me gustaría consultarte.',
  pareja: 'Hola Juan! Vi tu página sobre terapia de pareja y me gustaría consultarte.',
  individual: 'Hola Juan! Vi tu página sobre terapia individual y me gustaría consultarte.',
  online: 'Hola Juan! Vi tu página sobre terapia online y me gustaría consultarte.',
  sobreMi: 'Hola Juan! Vi tu página y me gustaría consultarte.',
  comoTrabajo: 'Hola Juan! Vi tu página y me gustaría consultarte.',
  faq: 'Hola Juan! Vi tu página y me gustaría consultarte. Tengo algunas preguntas.',
  contacto: 'Hola Juan! Vi tu página web y me gustaría agendar una sesión.',
} as const;

export type WaContext = keyof typeof WA_MESSAGES;

/**
 * Construye un link wa.me con mensaje pre-cargado.
 */
export function buildWaUrl(context: WaContext = 'home'): string {
  const message = WA_MESSAGES[context];
  return `${SITE.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
