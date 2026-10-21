# Exploración y aplicación de principios de POO en desarrollo móvil

Explora y aplica los principales principios de la programación orientada a objetos (POO) para mejorar la calidad del código en un proyecto de desarrollo móvil con Ionic. Identifica y resuelve problemas comunes relacionados con la herencia, cohesión, abstracción, polimorfismo, acoplamiento y encapsulamiento.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Técnicas de programación orientada a objetos |
| **Nivel** | advanced-l2 |
| **Tipo** | theoretical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Identificación de problemas de POO en el código existente

**Objetivo:** Reconocer y documentar problemas de POO en un proyecto móvil

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Analiza el código de un proyecto móvil existente y documenta problemas relacionados con herencia, cohesión, abstracción, polimorfismo, acoplamiento y encapsulamiento.
- Identifica al menos tres problemas específicos y describe cómo afectan la calidad del código.

**Entregable:** Documento con la identificación y descripción de problemas de POO en el código.

<details>
<summary>Pistas de conocimiento</summary>

- Revisa el código en busca de clases con responsabilidades múltiples.
- Busca ejemplos de herencia profunda y considera si es apropiada.

</details>

### Fase 2: Aplicación de soluciones de POO para mejorar el código

**Objetivo:** Aplicar principios de POO para solucionar los problemas identificados

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Proponer y aplicar soluciones para los problemas de POO identificados en la fase anterior.
- Reescribe el código para mejorar la herencia, cohesión, abstracción, polimorfismo, acoplamiento y encapsulamiento.
- Documenta las soluciones aplicadas y explica cómo mejoran la calidad del código.

**Entregable:** Código refactorizado con soluciones de POO aplicadas y documentación de las soluciones.

<details>
<summary>Pistas de conocimiento</summary>

- Considera el uso de interfaces para mejorar la abstracción.
- Aplica el principio de responsabilidad única para mejorar la cohesión.

</details>

### Fase 3: Evaluación y reflexión sobre las mejoras aplicadas

**Objetivo:** Evaluar el impacto de las mejoras de POO en el código

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Evalúa el impacto de las mejoras de POO aplicadas en la calidad del código.
- Reflexiona sobre las decisiones tomadas y considera posibles mejoras adicionales.
- Documenta tus reflexiones y propone al menos una mejora adicional.

**Entregable:** Documento con evaluación del impacto de las mejoras de POO y propuestas de mejoras adicionales.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la mantenibilidad y escalabilidad del código mejorado.
- Evalúa la claridad y comprensión del código después de las mejoras.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los principios de la programación orientada a objetos y por qué son importantes?
- **paraQueSirve**: ¿Cómo se aplican los principios de POO para mejorar la calidad del código?
- **comoSeUsa**: ¿Cómo se identifican y solucionan problemas de POO en el código?
- **erroresComunes**: ¿Cuáles son los errores comunes relacionados con los principios de POO y cómo se evitan?
- **queDecisionesImplica**: ¿Qué decisiones implica la aplicación de principios de POO en el desarrollo móvil?

## Criterios de Evaluacion

- Identificación y documentación de problemas de POO en el código.
- Aplicación de soluciones de POO para mejorar el código.
- Evaluación del impacto de las mejoras de POO en la calidad del código.
- Reflexión sobre las decisiones tomadas y propuestas de mejoras adicionales.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
