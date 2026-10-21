# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Exploración y aplicación de principios de POO en desarrollo móvil**.

| | |
|---|---|
| Tema | Técnicas de programación orientada a objetos |
| Nivel | advanced-l2 |
| Chapter | Móvil |
| Especialidad | Ionic |
| Stack | TypeScript / Angular 17 |
| Patron arquitectonico | MVC con problemas intencionales de POO para refactorización |
| Tiempo estimado | 8 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json, ionic.config.json y capacitor.config.ts en la raiz`
- `src/main.ts como bootstrap`
- `src/app con las rutas y paginas`
- `src/services con los clientes HTTP`
- `src/models del dominio`

Dependencias:

- @ionic/angular 8.3.0
- @angular/core 17.3.0
- @angular/common 17.3.0
- @angular/forms 17.3.0
- @angular/router 17.3.0
- @angular/platform-browser 17.3.0
- @angular/platform-browser-dynamic 17.3.0
- typescript 5.4.5
- @capacitor/core 6.1.0
- @capacitor/android 6.1.0
- @ionic/cli 8.0.0

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Identificación de problemas de POO en el código existente**: Documento con la identificación y descripción de problemas de POO en el código.
- **Fase 2 — Aplicación de soluciones de POO para mejorar el código**: Código refactorizado con soluciones de POO aplicadas y documentación de las soluciones.
- **Fase 3 — Evaluación y reflexión sobre las mejoras aplicadas**: Documento con evaluación del impacto de las mejoras de POO y propuestas de mejoras adicionales.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Lo que falta y tenes que completar

### 1. Referencias colgando (8)

Salieron de un analisis estatico del codigo que SI esta en el repo. Cada una rompe la compilacion:

- [ ] `src/app/features/users/users-list.page.ts` — `User.filter`
      Se invoca `filter` sobre `User`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/features/users/admin-users.page.ts` — `User.find`
      Se invoca `find` sobre `User`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/features/users/admin-users.page.ts` — `User.forEach`
      Se invoca `forEach` sobre `User`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/features/users/admin-users.page.ts` — `User.filter`
      Se invoca `filter` sobre `User`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/shared/components/modal/modal.component.ts` — `FormField.map`
      Se invoca `map` sobre `FormField`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/shared/components/modal/modal.component.ts` — `FormField.forEach`
      Se invoca `forEach` sobre `FormField`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/shared/components/modal/modal.component.ts` — `FormField.reduce`
      Se invoca `reduce` sobre `FormField`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `package.json` — `@ionic/cli@8.0.0`
      @ionic/cli declara la version 8.0.0, pero el registry de npm respondio que esa version no existe. Es una version inventada: reemplazala por una version publicada real, o si no se conoce con certeza, usa el mecanismo centralizado del ecosistema (BOM/parent/platform/version catalog) y no declares una version individual.

### Presentes (31)

- `package.json`
- `tsconfig.json`
- `ionic.config.json`
- `src/app/core/services/auth.service.ts`
- `src/app/core/services/user.service.ts`
- `src/app/core/services/notification.service.ts`
- `capacitor.config.ts`
- `README.md`
- `src/main.ts`
- `src/index.html`
- `src/app/shared/models/user.model.ts`
- `src/app/shared/models/order.model.ts`
- `src/app/shared/models/base.model.ts`
- `src/app/app.component.ts`
- `src/app/app.config.ts`
- `src/app/app.routes.ts`
- `src/app/features/auth/login.page.ts`
- `src/app/features/auth/login.page.html`
- `src/app/features/auth/auth-guard.ts`
- `src/app/features/users/users-list.page.ts`
- `src/app/features/users/user-detail.page.ts`
- `src/app/features/users/admin-users.page.ts`
- `src/app/shared/components/button/button.component.ts`
- `src/app/shared/components/input/input.component.ts`
- `src/app/shared/components/modal/modal.component.ts`
- `src/app/shared/utils/date-helper.ts`
- `src/app/shared/utils/validation-helper.ts`
- `src/app/shared/utils/format-helper.ts`
- `docs/identificacion-problemas-poo.md`
- `docs/soluciones-aplicadas.md`
- `docs/evaluacion-mejoras.md`

### Capas del patron declarado

Cada una tiene que existir como directorio real con al menos un archivo. Codigo plano en la raiz no satisface el patron.

- `src/app/core/services`
- `src/app/features/auth`
- `src/app/features/users`
- `src/app/shared/components`
- `src/app/shared/models`
- `src/app/shared/utils`
- `docs`

## Verificacion

```bash
npm install && npm run build
```

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **MVC con problemas intencionales de POO para refactorización**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Movil, Especialidad Desarrollador, Tecnología Ionic, Advanced
- Brecha que el reto ataca: Examina las principales características de la POO (herencia, cohesión, abstracción, polimorfismo, acoplamiento y encapsulamiento) y las aplica para mejorar la calidad general del código
- Mision: Candidato con experiencia avanzada en desarrollo móvil con Ionic

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
