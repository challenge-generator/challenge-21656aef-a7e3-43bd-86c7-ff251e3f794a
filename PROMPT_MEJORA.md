# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Lo que le falta a este proyecto

Esto NO lo tenes que adivinar: salio de comparar el proyecto contra la arquitectura declarada del reto y de un analisis estatico del codigo. Completalo TODO.

### Referencias colgando en el codigo que si esta

Cada una rompe la compilacion:

- `src/app/features/users/users-list.page.ts` — `User.filter`: Se invoca `filter` sobre `User`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/features/users/admin-users.page.ts` — `User.find`: Se invoca `find` sobre `User`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/features/users/admin-users.page.ts` — `User.forEach`: Se invoca `forEach` sobre `User`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/features/users/admin-users.page.ts` — `User.filter`: Se invoca `filter` sobre `User`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/shared/components/modal/modal.component.ts` — `FormField.map`: Se invoca `map` sobre `FormField`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/shared/components/modal/modal.component.ts` — `FormField.forEach`: Se invoca `forEach` sobre `FormField`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/shared/components/modal/modal.component.ts` — `FormField.reduce`: Se invoca `reduce` sobre `FormField`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `package.json` — `@ionic/cli@8.0.0`: @ionic/cli declara la version 8.0.0, pero el registry de npm respondio que esa version no existe. Es una version inventada: reemplazala por una version publicada real, o si no se conoce con certeza, usa el mecanismo centralizado del ecosistema (BOM/parent/platform/version catalog) y no declares una version individual.

## Como saber que terminaste

```bash
npm install && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Movil, Especialidad Desarrollador, Tecnología Ionic, Advanced

### Brecha de conocimiento
Examina las principales características de la POO (herencia, cohesión, abstracción, polimorfismo, acoplamiento y encapsulamiento) y las aplica para mejorar la calidad general del código

### Misión / candidato
Candidato con experiencia avanzada en desarrollo móvil con Ionic

### Reto
- Tema: Técnicas de programación orientada a objetos
- Seniority: advanced-l2
- Tipo: theoretical
- Título: Exploración y aplicación de principios de POO en desarrollo móvil
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Identificación de problemas de POO en el código existente — objetivo: Reconocer y documentar problemas de POO en un proyecto móvil — entregable (NO resolver): Documento con la identificación y descripción de problemas de POO en el código.
- Fase 2: Aplicación de soluciones de POO para mejorar el código — objetivo: Aplicar principios de POO para solucionar los problemas identificados — entregable (NO resolver): Código refactorizado con soluciones de POO aplicadas y documentación de las soluciones.
- Fase 3: Evaluación y reflexión sobre las mejoras aplicadas — objetivo: Evaluar el impacto de las mejoras de POO en el código — entregable (NO resolver): Documento con evaluación del impacto de las mejoras de POO y propuestas de mejoras adicionales.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "ionic-poo-refactoring",
  "version": "0.0.1",
  "author": "Ionic Framework",
  "homepage": "https://ionicframework.com/",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "ionic:build": "ionic build",
    "ionic:serve": "ionic serve"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "17.3.0",
    "@angular/common": "17.3.0",
    "@angular/compiler": "17.3.0",
    "@angular/core": "17.3.0",
    "@angular/forms": "17.3.0",
    "@angular/platform-browser": "17.3.0",
    "@angular/platform-browser-dynamic": "17.3.0",
    "@angular/router": "17.3.0",
    "@capacitor/android": "6.1.0",
    "@capacitor/core": "6.1.0",
    "@ionic/angular": "8.3.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.6.2",
    "zone.js": "~0.14.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "17.3.0",
    "@angular-eslint/builder": "17.3.0",
    "@angular-eslint/eslint-plugin": "17.3.0",
    "@angular-eslint/eslint-plugin-template": "17.3.0",
    "@angular-eslint/template-parser": "17.3.0",
    "@angular/cli": "17.3.0",
    "@angular/compiler-cli": "17.3.0",
    "@capacitor/cli": "6.1.0",
    "@ionic/angular-toolkit": "11.0.1",
    "@ionic/cli": "8.0.0",
    "@types/jasmine": "~5.1.0",
    "@types/node": "^20.12.7",
    "@typescript-eslint/eslint-plugin": "7.8.0",
    "@typescript-eslint/parser": "7.8.0",
    "eslint": "^8.56.0",
    "eslint-plugin-import": "2.29.1",
    "eslint-plugin-jsdoc": "48.2.3",
    "eslint-plugin-prefer-arrow": "1.2.3",
    "jasmine-core": "~5.1.0",
    "jasmine-spec-reporter": "~7.0.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "^2.1.0",
    "typescript": "5.4.5"
  },
  "description": "Proyecto Ionic con Angular para refactorización de principios POO",
  "browserslist": [
    "last 1 Chrome version",
    "last 1 Firefox version",
    "last 2 Edge major versions",
    "last 2 Safari major versions",
    "last 2 iOS major versions",
    "last 1 Android version"
  ]
}

// === ARCHIVO: tsconfig.json ===
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "es2022",
    "module": "es2022",
    "lib": [
      "es2022",
      "dom"
    ],
    "useDefineForClassFields": false,
    "strictPropertyInitialization": false
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true,
    "preserveWhitespaces": false
  },
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]
}

// === ARCHIVO: ionic.config.json ===
{
  "name": "ionic-poo-refactoring",
  "integrations": {
    "capacitor": {}
  },
  "type": "angular",
  "root": "src",
  "sourceMapType": "source-map",
  "npmClient": "npm",
  "id": "e1a2b3c4",
  "watchIgnore": [
    "**/node_modules/**",
    "**/.git/**",
    "**/tmp/**",
    "**/dist/**",
    "**/android/**",
    "**/ios/**"
  ],
  "plugins": {
    "Capacitor": {
      "android": {
        "path": "android"
      },
      "ios": {
        "path": "ios"
      }
    }
  },
  "projects": {
    "app": {
      "context": "app",
      "config": {
        "appId": "com.example.ionicpoo",
        "appName": "Ionic POO Refactoring",
        "webDir": "www",
        "build": "ionic:build",
        "serve": {
          "port": 8100,
          "host": "localhost"
        }
      }
    }
  }
}

// === ARCHIVO: src/app/core/services/auth.service.ts ===
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { User } from '../../shared/models/user.model';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;
  private readonly STORAGE_KEY = 'currentUser';

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
    this.currentUser = this.currentUserSubject.asObservable();
    this.loadUserFromStorage();
  }

  private loadUserFromStorage(): void {
    Storage.get({ key: this.STORAGE_KEY }).then(result => {
      if (result.value) {
        const user: User = JSON.parse(result.value);
        this.currentUserSubject.next(user);
      }
    });
  }

  public login(email: string, password: string): Observable<User> {
    // Simulación de llamada a API
    const mockUser: User = {
      id: '1',
      email: email,
      name: 'Test User',
      role: 'user',
      lastLogin: new Date().toISOString()
    };

    return of(mockUser).pipe(
      tap(user => {
        this.currentUserSubject.next(user);
        Storage.set({ key: this.STORAGE_KEY, value: JSON.stringify(user) });
      }),
      catchError(error => {
        this.showErrorToast('Credenciales inválidas');
        return throwError(() => new Error('Login failed'));
      })
    );
  }

  public logout(): Observable<void> {
    return new Observable<void>(observer => {
      Storage.remove({ key: this.STORAGE_KEY }).then(() => {
        this.currentUserSubject.next(null);
        this.router.navigate(['/login']);
        this.showSuccessToast('Sesión cerrada correctamente');
        observer.next();
        observer.complete();
      }).catch(error => {
        this.showErrorToast('Error al cerrar sesión');
        observer.error(error);
      });
    });
  }

  public getCurrentUser(): Observable<User | null> {
    return this.currentUser;
  }

  public isAuthenticated(): Observable<boolean> {
    return this.currentUser.pipe(
      map(user => !!user)
    );
  }

  public hasRole(role: string): Observable<boolean> {
    return this.currentUser.pipe(
      map(user => user?.role === role)
    );
  }

  public updateUserProfile(updatedData: Partial<User>): Observable<User> {
    return this.currentUser.pipe(
      map(user => {
        if (!user) {
          throw new Error('No hay usuario autenticado');
        }
        const updatedUser: User = { ...user, ...updatedData };
        this.currentUserSubject.next(updatedUser);
        Storage.set({ key: this.STORAGE_KEY, value: JSON.stringify(updatedUser) });
        return updatedUser;
      }),
      catchError(error => {
        this.showErrorToast('Error al actualizar perfil');
        return throwError(() => new Error('Update failed'));
      })
    );
  }

  private async showErrorToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: 'danger'
    });
    await toast.present();
  }

  private async showSuccessToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: 'success'
    });
    await toast.present();
  }

  public registerUser(userData: Omit<User, 'id' | 'lastLogin'>): Observable<User> {
    // Simulación de registro
    const newUser: User = {
      id: Math.random().toString(36).substring(2, 9),
      ...userData,
      lastLogin: new Date().toISOString()
    };

    return of(newUser).pipe(
      tap(user => {
        this.currentUserSubject.next(user);
        Storage.set({ key: this.STORAGE_KEY, value: JSON.stringify(user) });
      }),
      catchError(error => {
        this.showErrorToast('Error al registrar usuario');
        return throwError(() => new Error('Registration failed'));
      })
    );
  }
}

// === ARCHIVO: src/app/core/services/user.service.ts ===
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../../shared/models/user.model';
import { ToastController } from '@ionic/angular';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl + '/users';

  constructor(
    private http: HttpClient,
    private toastController: ToastController
  ) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      catchError(error => {
        this.showErrorToast('Error al cargar usuarios');
        return throwError(() => new Error('Failed to fetch users'));
      })
    );
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        this.showErrorToast('Error al cargar usuario');
        return throwError(() => new Error('Failed to fetch user'));
      })
    );
  }

  createUser(userData: Omit<User, 'id' | 'lastLogin'>): Observable<User> {
    return this.http.post<User>(this.apiUrl, userData).pipe(
      catchError(error => {
        this.showErrorToast('Error al crear usuario');
        return throwError(() => new Error('Failed to create user'));
      })
    );
  }

  updateUser(id: string, userData: Partial<User>): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/${id}`, userData).pipe(
      catchError(error => {
        this.showErrorToast('Error al actualizar usuario');
        return throwError(() => new Error('Failed to update user'));
      })
    );
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        this.showErrorToast('Error al eliminar usuario');
        return throwError(() => new Error('Failed to delete user'));
      })
    );
  }

  searchUsers(query: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}?search=${query}`).pipe(
      catchError(error => {
        this.showErrorToast('Error al buscar usuarios');
        return throwError(() => new Error('Failed to search users'));
      })
    );
  }

  private async showErrorToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: 'danger'
    });
    await toast.present();
  }

  // Método acoplado directamente a implementación específica
  getAdminUsers(): Observable<User[]> {
    return this.getUsers().pipe(
      map(users => users.filter(user => user.role === 'admin'))
    );
  }

  // Método con lógica de presentación mezclada
  getUserFullName(user: User): string {
    return `${user.name} (${user.role})`;
  }

  // Método que viola encapsulamiento
  updateUserDirectly(user: User): void {
    this.http.patch<User>(`${this.apiUrl}/${user.id}`, user).subscribe({
      next: () => {
        this.toastController.create({
          message: 'Usuario actualizado',
          duration: 2000,
          color: 'success'
        }).then(toast => toast.present());
      },
      error: () => {
        this.toastController.create({
          message: 'Error al actualizar',
          duration: 2000,
          color: 'danger'
        }).then(toast => toast.present());
      }
    });
  }
}

// === ARCHIVO: src/app/core/services/notification.service.ts ===
import { Injectable } from '@angular/core';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationCountSubject = new BehaviorSubject<number>(0);
  public notificationCount$ = this.notificationCountSubject.asObservable();

  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  async showToast(message: string, color: string = 'primary', duration: number = 2000): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      color: color,
      position: 'bottom'
    });
    await toast.present();
  }

  async showErrorToast(message: string): Promise<void> {
    await this.showToast(message, 'danger', 3000);
  }

  async showSuccessToast(message: string): Promise<void> {
    await this.showToast(message, 'success', 2000);
  }

  async showAlert(title: string, message: string, buttons: any[] = ['OK']): Promise<void> {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: buttons
    });
    await alert.present();
  }

  async showConfirmationAlert(title: string, message: string): Promise<boolean> {
    return new Promise<boolean>(async (resolve) => {
      const alert = await this.alertController.create({
        header: title,
        message: message,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => resolve(false)
          },
          {
            text: 'Confirmar',
            handler: () => resolve(true)
          }
        ]
      });
      await alert.present();
    });
  }

  async showLoading(message: string = 'Cargando...'): Promise<HTMLIonLoadingElement> {
    const loading = await this.loadingController.create({
      message: message,
      spinner: 'crescent'
    });
    await loading.present();
    return loading;
  }

  // Lógica de presentación mezclada con lógica de negocio
  showOrderNotification(orderId: string, status: string): void {
    let message = '';
    let color = '';

    switch (status) {
      case 'created':
        message = `Pedido #${orderId} creado con éxito`;
        color = 'success';
        break;
      case 'shipped':
        message = `Pedido #${orderId} en camino`;
        color = 'warning';
        break;
      case 'delivered':
        message = `Pedido #${orderId} entregado`;
        color = 'success';
        break;
      case 'cancelled':
        message = `Pedido #${orderId} cancelado`;
        color = 'danger';
        break;
      default:
        message = `Estado del pedido #${orderId}: ${status}`;
        color = 'primary';
    }

    this.showToast(message, color);
  }

  // Método que viola cohesión
  incrementNotificationCount(): void {
    const currentCount = this.notificationCountSubject.value;
    this.notificationCountSubject.next(currentCount + 1);
  }

  resetNotificationCount(): void {
    this.notificationCountSubject.next(0);
  }

  // Método con lógica de UI directamente en el servicio
  async showUserProfileAlert(userName: string, userEmail: string): Promise<void> {
    const alert = await this.alertController.create({
      header: `Perfil de ${userName}`,
      subHeader: userEmail,
      message: '<ion-avatar><img src="https://gravatar.com/avatar"></ion-avatar>',
      buttons: ['Cerrar']
    });
    await alert.present();
  }

  // Método que viola encapsulamiento
  getToastController(): ToastController {
    return this.toastController;
  }
}

// === ARCHIVO: capacitor.config.ts ===
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ionic.poo.refactoring',
  appName: 'Ionic POO Refactoring',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    cleartext: true,
    hostname: 'localhost'
  },
  android: {
    buildToolsVersion: '34.0.0',
    minSdkVersion: 23,
    targetSdkVersion: 34,
    useAndroidX: true,
    allowMixedContent: true,
    webContentsDebuggingEnabled: true
  },
  ios: {
    minVersion: '13.0',
    allowsInsecureLocalhost: true,
    cordovaNativeVersion: '7.0.0'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: '#ffffff',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: true,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'small',
      splashFullScreen: true,
      splashMaintainAspectRatio: true
    },
    StatusBar: {
      backgroundColor: '#ffffff',
      style: 'dark'
    },
    LocalNotifications: {
      smallIcon: 'assets/icon/notification-icon.png',
      sound: 'beep.wav'
    }
  },
  logging: {
    logLevel: 'debug',
    maxLogEntries: 100
  },
  experimental: {
    legacyBranding: false,
    hideLogs: false
  }
};

export default config;

// === ARCHIVO: README.md ===
# Reto de Refactorización de Principios POO en Ionic

## Descripción del Proyecto

Este proyecto forma parte de un ejercicio práctico de refactorización de código móvil basado en principios de Programación Orientada a Objetos (POO). El objetivo principal es identificar, documentar y resolver problemas de diseño orientado a objetos en una aplicación móvil desarrollada con Ionic y Angular.

El proyecto base contiene **problemas intencionales de POO** que el participante deberá identificar durante la primera fase del reto. Estos problemas están relacionados con herencia inadecuada, bajo acoplamiento, falta de cohesión, abstracción deficiente, polimorfismo mal aplicado y encapsulamiento insuficiente.

## Contexto del Dominio

La aplicación móvil simula un sistema de gestión de usuarios con autenticación, notificaciones y gestión de pedidos. El dominio del problema incluye las siguientes entidades principales:

- **Usuario**: Sistema de autenticación, perfil de usuario y gestión de roles (administrador y usuario regular)
- **Autenticación**: Login, logout, registro y actualización de perfil de usuario
- **Notificaciones**: Sistema de notificaciones toast, alertas y confirmación de acciones
- **Pedidos**: Gestión de pedidos con estados y notificaciones asociadas

## Estructura del Proyecto

El proyecto sigue una estructura MVC adaptada para Ionic con Angular:

```
src/
├── app/
│   ├── core/
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   ├── user.service.ts
│   │   │   └── notification.service.ts
│   │   └── models/
│   ├── features/
│   │   ├── auth/
│   │   │   ├── login.page.ts
│   │   │   ├── login.page.html
│   │   │   └── auth-guard.ts
│   │   └── users/
│   │       ├── users-list.page.ts
│   │       ├── user-detail.page.ts
│   │       └── admin-users.page.ts
│   ├── shared/
│   │   ├── components/
│   │   │   ├── button/
│   │   │   ├── input/
│   │   │   └── modal/
│   │   ├── models/
│   │   │   ├── user.model.ts
│   │   │   ├── order.model.ts
│   │   │   └── base.model.ts
│   │   └── utils/
│   │       ├── date-helper.ts
│   │       ├── validation-helper.ts
│   │       └── format-helper.ts
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/
├── environments/
└── theme/
```

### Capas de la Arquitectura

**Capa de Presentación (Features)**
Contiene las páginas y componentes de UI que el usuario interactúa directamente. Cada página maneja la presentación y delega la lógica de negocio a los servicios.

**Capa de Servicios (Core)**
Contiene la lógica de negocio centralizada. Los servicios manejan la comunicación con APIs externas, gestión de estado y operaciones de dominio.

**Capa Compartida (Shared)**
Proporciona componentes reutilizables, modelos de datos y utilidades comunes a toda la aplicación.

## Tecnologías y Versiones

- **Framework**: Ionic 8.3.0 con Angular 17.3.0
- **Lenguaje**: TypeScript 5.4.5
- **Capacitor**: 6.1.0 para compilación nativa
- **Gestor de Paquetes**: npm

## Requisitos Previos

Para ejecutar este proyecto necesitas tener instalado:

- Node.js (versión 18 o superior)
- npm (versión 9 o superior)
- Ionic CLI (versión 8.0.0)
- Android Studio (para compilación Android)
- Xcode (para compilación iOS, solo en macOS)

## Instalación y Ejecución

### Paso 1: Instalar Dependencias

Ejecuta el siguiente comando en la raíz del proyecto para instalar todas las dependencias necesarias:

```bash
npm install
```

Este comando leerá el archivo `package.json` e instalará todas las dependencias especificadas tanto en producción como en desarrollo.

### Paso 2: Ejecutar en Desarrollo

Para iniciar el servidor de desarrollo con recarga en caliente:

```bash
ionic serve
```

Este comando compilará la aplicación y la servirá en `http://localhost:8100`. El navegador se abrirá automáticamente mostrando la aplicación.

Alternativamente, puedes usar:

```bash
ng serve
```

### Paso 3: Compilación para Producción

Para generar los archivos optimizados para producción:

```bash
ionic build
```

Los archivos generados se encuentran en la carpeta `www`.

### Paso 4: Generación de Aplicación Nativa

#### Android

Para generar el APK de Android:

```bash
npx cap add android
npx cap sync android
cd android && ./gradlew assembleDebug
```

El APK se generará en `android/app/build/outputs/apk/debug/`.

#### iOS

Para generar la aplicación iOS:

```bash
npx cap add ios
npx cap sync ios
npx cap open ios
```

Esto abrirá Xcode donde podrás compilar y ejecutar la aplicación en el simulador o dispositivo.

## Fases del Reto

### Fase 1: Identificación de Problemas de POO

**Objetivo**: Reconocer y documentar problemas de POO en el código existente.

**Entregable**: Documento con la identificación y descripción de problemas de POO en el código.

En esta fase, el participante debe analizar el código base e identificar los siguientes tipos de problemas:

- **Herencia**: Clases que heredan cuando deberían compositionarse, jerarquías inapropiadas, violacion del principio de substitución de Liskov
- **Cohesión**: Clases que hacen demasiado, responsabilidades mezcladas, bajo cohesión entre miembros de una clase
- **Abstracción**: Abstracciones insuficientes o excesivas, interfaces mal definidas, clases concretas expuestas donde deberían haber abstracciones
- **Polimorfismo**: Código que usa condicionales en lugar de polimorfismo, falta de aprovechamiento del tipado
- **Acoplamiento**: Acoplamiento rígido entre módulos, dependencias circulares, alto acoplamiento
- **Encapsulamiento**: Exposición de detalles de implementación, getters y setters innecesarios, estado mutable expuesto

### Fase 2: Aplicación de Soluciones de POO

**Objetivo**: Aplicar principios de POO para solucionar los problemas identificados.

**Entregable**: Código refactorizado con soluciones de POO aplicadas y documentación de las soluciones.

El participante debe aplicar las siguientes técnicas de refactorización:

- Reemplazar herencia por composición donde sea apropiado
- Extraer clases y métodos para aumentar la cohesión
- Crear abstracciones (interfaces) para reducir el acoplamiento
- Aplicar el principio de responsabilidad única
- Implementar el patrón de inyección de dependencias
- Mejorar el encapsulamiento exponiendo solo lo necesario
- Utilizar polimorfismo en lugar de condicionales

### Fase 3: Evaluación y Reflexión

**Objetivo**: Evaluar el impacto de las mejoras de POO en el código.

**Entregable**: Documento con evaluación del impacto de las mejoras de POO y propuestas de mejoras adicionales.

En esta fase se debe analizar:

- Métricas de calidad de código antes y después
- Impacto en la mantenibilidad
- Impacto en la testabilidad
- Impacto en el rendimiento
- Lecciones aprendidas
- Propuestas de mejora continua

## Documentación Adicional

En la carpeta `docs/` encontrarás documentación de referencia:

- `identificacion-problemas-poo.md`: Guía para identificar problemas de POO
- `soluciones-aplicadas.md`: Patrones y técnicas de solución aplicadas
- `evaluacion-mejoras.md`: Criterios de evaluación de las mejoras

## Comandos Útiles

```bash
# Verificar instalación de Ionic
ionic --version

# Generar nuevo componente
ionic g component shared/components/mi-componente

# Generar nuevo servicio
ionic g service core/services/mi-servicio

# Generar nueva página
ionic g page features/mi-pagina

# Ejecutar tests unitarios
ng test

# Ejecutar análisis estático
ng lint

# Análisis de TypeScript
npx tsc --noEmit
```

## Notas Importantes

Este proyecto contiene **problemas intencionales de POO** que deben ser identificados y resueltos como parte del ejercicio. El código funciona correctamente desde el punto de vista funcional, pero presenta deficiencias desde la perspectiva del diseño orientado a objetos.

El objetivo pedagógico es desarrollar la capacidad de:

1. Detectar code smells relacionados con POO
2. Aplicar refactorizaciones apropiadas
3. Justificar las decisiones de diseño
4. Evaluar el impacto de los cambios

## Soporte

Si encuentras problemas durante la ejecución del proyecto, verifica que tienes todas las dependencias correctamente instaladas y que las versiones coinciden con las especificadas en este documento.

// === ARCHIVO: src/main.ts ===
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { defineCustomElements } from '@ionic/core/loader';
import { addIcons } from 'ionicons';
import { chevronBack, chevronForward, person, cart, notifications, settings, logOut, create, trash, add, remove, search, menu, close, checkmark, alertCircle, informationCircle, warning, camera, image, locate, barcode, qrCodeScanner, print, share, heart, heartOutline, star, starOutline, bookmark, bookmarkOutline, flag, flagOutline, globe, wallet, card, cash, walletOutline, cardOutline, cashOutline, personCircle, personCircleOutline, people, peopleCircle, chatbubbles, chatbubble, mail, mailOutline, call, callOutline, location, locationOutline, calendar, calendarOutline, time, timeOutline, lockClosed, lockOpen, eye, eyeOff, fingerPrint, key, qrCode, barcodeOutline, walletSharp, cartSharp, personSharp, homeSharp, listSharp, gridSharp, appsSharp, settingsSharp, notificationsSharp, helpCircle, helpCircleOutline, shieldCheckmark, shieldClose, fingerPrintOutline, shieldOutline, keyOutline, lockClosedOutline, lockOpenOutline, eyeOutline, eyeOffOutline, calendarOutlineOutline, timeOutlineOutline, locationOutlineOutline, mailOutlineOutline, callOutlineOutline, chatbubblesOutline, chatbubbleOutline } from 'ionicons/icons';

if (environment.production) {
  enableProdMode();
}

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Promise Rejection:', event.reason);
  if (environment.production) {
    event.preventDefault();
  }
});

window.addEventListener('error', (event) => {
  console.error('Global Error:', event.error);
  if (environment.production) {
    event.preventDefault();
  }
});

const start = () => {
  addIcons({
    chevronBack,
    chevronForward,
    person,
    cart,
    notifications,
    settings,
    logOut,
    create,
    trash,
    add,
    remove,
    search,
    menu,
    close,
    checkmark,
    alertCircle,
    informationCircle,
    warning,
    camera,
    image,
    locate,
    barcode,
    qrCodeScanner,
    print,
    share,
    heart,
    heartOutline,
    star,
    starOutline,
    bookmark,
    bookmarkOutline,
    flag,
    flagOutline,
    globe,
    wallet,
    card,
    cash,
    walletOutline,
    cardOutline,
    cashOutline,
    personCircle,
    personCircleOutline,
    people,
    peopleCircle,
    chatbubbles,
    chatbubble,
    mail,
    mailOutline,
    call,
    callOutline,
    location,
    locationOutline,
    calendar,
    calendarOutline,
    time,
    timeOutline,
    lockClosed,
    lockOpen,
    eye,
    eyeOff,
    fingerPrint,
    key,
    qrCode,
    barcodeOutline,
    walletSharp,
    cartSharp,
    personSharp,
    homeSharp,
    listSharp,
    gridSharp,
    appsSharp,
    settingsSharp,
    notificationsSharp,
    helpCircle,
    helpCircleOutline,
    shieldCheckmark,
    shieldClose,
    fingerPrintOutline,
    shieldOutline,
    keyOutline,
    lockClosedOutline,
    lockOpenOutline,
    eyeOutline,
    eyeOffOutline,
    calendarOutlineOutline,
    timeOutlineOutline,
    locationOutlineOutline,
    mailOutlineOutline,
    callOutlineOutline,
    chatbubblesOutline,
    chatbubbleOutline
  });

  defineCustomElements(window).then(() => {
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .then((module) => {
        console.log('Aplicación Ionic iniciada correctamente');
      })
      .catch((err) => {
        console.error('Error al iniciar la aplicación:', err);
      });
  }).catch((err) => {
    console.error('Error al cargar componentes Ionic:', err);
  });
};

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  start();
} else {
  window.addEventListener('DOMContentLoaded', start);
}

// === ARCHIVO: src/index.html ===
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8"/>
  <title>Ionic POO Refactoring</title>
  <base href="/"/>
  <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
  <meta name="color-scheme" content="light dark"/>
  <meta name="format-detection" content="telephone=no"/>
  <meta name="msapplication-tap-highlight" content="no"/>
  <meta name="apple-mobile-web-app-capable" content="yes"/>
  <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
  <link rel="icon" type="image/x-icon" href="assets/icon/favicon.ico"/>
  <link rel="icon" type="image/png" href="assets/icon/favicon.png"/>
  <link rel="apple-touch-icon" href="assets/icon/icon.png"/>
  <link rel="apple-touch-startup-image" href="assets/icon/splash.png"/>
  <meta name="application-name" content="Ionic POO"/>
  <meta name="msapplication-TileColor" content="#ffffff"/>
  <meta name="msapplication-TileImage" content="assets/icon/icon.png"/>
  <link rel="manifest" href="manifest.json"/>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <style>
    @font-face {
      font-family: 'Ionicons';
      src: url('assets/fonts/ionicons.woff2?v=8.3.0') format('woff2');
      font-weight: normal;
      font-style: normal;
    }
    * {
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      user-select: none;
    }
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #ffffff;
      color: #000000;
      overflow: hidden;
      -webkit-overflow-scrolling: touch;
      overscroll-behavior: none;
    }
    @media (prefers-color-scheme: dark) {
      html, body {
        background-color: #000000;
        color: #ffffff;
      }
    }
    .ion-page {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .ion-content {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
    }
    .loading-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      z-index: 9999;
    }
    @media (prefers-color-scheme: dark) {
      .loading-container {
        background: #000000;
      }
    }
    .loading-spinner {
      width: 48px;
      height: 48px;
      border: 4px solid #e0e0e0;
      border-top-color: #3880ff;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    .app-root {
      display: block;
      width: 100%;
      height: 100%;
    }
    .hide {
      display: none !important;
    }
  </style>
  <script>
    // Configuración global de la aplicación
    window.APP_CONFIG = {
      appName: 'Ionic POO Refactoring',
      appVersion: '0.0.1',
      apiUrl: 'https://api.example.com',
      enableDebug: false,
      timeout: 30000,
      retryAttempts: 3
    };
    
    // Detectar si es un dispositivo móvil
    window.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Detectar plataforma
    window.platform = {
      isAndroid: /Android/i.test(navigator.userAgent),
      isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent),
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    };
    
    // Registro de errores para debugging
    window.errorLog = [];
    window.onerror = function(msg, url, line, col, error) {
      window.errorLog.push({
        message: msg,
        url: url,
        line: line,
        column: col,
        error: error,
        timestamp: new Date().toISOString()
      });
      return false;
    };
  </script>
</head>
<body>
  <app-root>
    <div class="loading-container">
      <div class="loading-spinner"></div>
    </div>
  </app-root>
  <noscript>
    <div style="padding: 20px; text-align: center; font-family: sans-serif;">
      <h1>JavaScript Requerido</h1>
      <p>Esta aplicación requiere JavaScript para funcionar.</p>
      <p>Por favor, habilite JavaScript en su navegador.</p>
    </div>
  </noscript>
  <script src="runtime.js" type="module"></script>
  <script src="polyfills.js" type="module"></script>
  <script src="vendor.js" type="module"></script>
  <script src="main.js" type="module"></script>
</body>
</html>

// === ARCHIVO: src/app/shared/models/user.model.ts ===
export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  lastLogin: Date | null;
  role: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class UserModel implements User {
  public id: string = '';
  public email: string = '';
  public password: string = '';
  public name: string = '';
  public lastLogin: Date | null = null;
  public role: string = '';
  public phone: string = '';
  public address: string = '';
  public city: string = '';
  public country: string = '';
  public isActive: boolean = true;
  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();

  constructor(data?: Partial<User>) {
    if (data) {
      this.id = data.id ?? '';
      this.email = data.email ?? '';
      this.password = data.password ?? '';
      this.name = data.name ?? '';
      this.lastLogin = data.lastLogin ?? null;
      this.role = data.role ?? '';
      this.phone = data.phone ?? '';
      this.address = data.address ?? '';
      this.city = data.city ?? '';
      this.country = data.country ?? '';
      this.isActive = data.isActive ?? true;
      this.createdAt = data.createdAt ?? new Date();
      this.updatedAt = data.updatedAt ?? new Date();
    }
  }

  getFullName(): string {
    return this.name;
  }

  getInitials(): string {
    const parts = this.name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return this.name.substring(0, 2).toUpperCase();
  }

  isAdmin(): boolean {
    return this.role === 'admin';
  }

  isUserActive(): boolean {
    return this.isActive;
  }

  toggleActive(): void {
    this.isActive = !this.isActive;
    this.updatedAt = new Date();
  }

  updateProfile(data: Partial<User>): void {
    this.name = data.name ?? this.name;
    this.email = data.email ?? this.email;
    this.phone = data.phone ?? this.phone;
    this.address = data.address ?? this.address;
    this.city = data.city ?? this.city;
    this.country = data.country ?? this.country;
    this.updatedAt = new Date();
  }

  getProfileSummary(): string {
    return `${this.name} (${this.email}) - ${this.role}`;
  }

  validateEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }

  validatePassword(): boolean {
    return this.password.length >= 6;
  }

  getAddressFormatted(): string {
    return `${this.address}, ${this.city}, ${this.country}`;
  }

  toJSON(): User {
    return {
      id: this.id,
      email: this.email,
      password: this.password,
      name: this.name,
      lastLogin: this.lastLogin,
      role: this.role,
      phone: this.phone,
      address: this.address,
      city: this.city,
      country: this.country,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }

  static fromJSON(json: any): UserModel {
    return new UserModel({
      id: json.id,
      email: json.email,
      password: json.password,
      name: json.name,
      lastLogin: json.lastLogin ? new Date(json.lastLogin) : null,
      role: json.role,
      phone: json.phone,
      address: json.address,
      city: json.city,
      country: json.country,
      isActive: json.isActive,
      createdAt: json.createdAt ? new Date(json.createdAt) : new Date(),
      updatedAt: json.updatedAt ? new Date(json.updatedAt) : new Date()
    });
  }
}

// === ARCHIVO: src/app/shared/models/order.model.ts ===
import { UserModel } from './user.model';

export interface Order {
  order_id: string;
  user_id: string;
  product_id: string;
  product_name: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  status: string;
  order_date: string;
  shipping_address: string;
  payment_method: string;
  payment_status: string;
  tracking_number: string | null;
  notes: string;
}

export class OrderModel implements Order {
  public order_id: string = '';
  public user_id: string = '';
  public product_id: string = '';
  public product_name: string = '';
  public quantity: number = 0;
  public unit_price: number = 0;
  public total_price: number = 0;
  public status: string = 'pending';
  public order_date: string = '';
  public shipping_address: string = '';
  public payment_method: string = '';
  public payment_status: string = 'pending';
  public tracking_number: string | null = null;
  public notes: string = '';

  constructor(data?: Partial<Order>) {
    if (data) {
      this.order_id = data.order_id ?? '';
      this.user_id = data.user_id ?? '';
      this.product_id = data.product_id ?? '';
      this.product_name = data.product_name ?? '';
      this.quantity = data.quantity ?? 0;
      this.unit_price = data.unit_price ?? 0;
      this.total_price = data.total_price ?? 0;
      this.status = data.status ?? 'pending';
      this.order_date = data.order_date ?? '';
      this.shipping_address = data.shipping_address ?? '';
      this.payment_method = data.payment_method ?? '';
      this.payment_status = data.payment_status ?? 'pending';
      this.tracking_number = data.tracking_number ?? null;
      this.notes = data.notes ?? '';
    }
  }

  static createFromApiResponse(apiResponse: any): OrderModel {
    const order = new OrderModel();
    order.order_id = apiResponse.id;
    order.user_id = apiResponse.userId;
    order.product_id = apiResponse.items?.[0]?.productId ?? '';
    order.product_name = apiResponse.items?.[0]?.name ?? '';
    order.quantity = apiResponse.items?.[0]?.quantity ?? 0;
    order.unit_price = apiResponse.items?.[0]?.price ?? 0;
    order.total_price = apiResponse.totalAmount;
    order.status = apiResponse.status;
    order.order_date = apiResponse.createdAt;
    order.shipping_address = apiResponse.shipping?.address ?? '';
    order.payment_method = apiResponse.payment?.method ?? '';
    order.payment_status = apiResponse.payment?.status ?? 'pending';
    order.tracking_number = apiResponse.trackingNumber ?? null;
    order.notes = apiResponse.notes ?? '';
    return order;
  }

  calculateTotal(): number {
    return this.quantity * this.unit_price;
  }

  isPending(): boolean {
    return this.status === 'pending';
  }

  isCompleted(): boolean {
    return this.status === 'completed';
  }

  isCancelled(): boolean {
    return this.status === 'cancelled';
  }

  isPaid(): boolean {
    return this.payment_status === 'paid';
  }

  hasTracking(): boolean {
    return this.tracking_number !== null && this.tracking_number !== '';
  }

  getStatusDisplay(): string {
    const statusMap: { [key: string]: string } = {
      'pending': 'Pendiente',
      'processing': 'Procesando',
      'shipped': 'Enviado',
      'delivered': 'Entregado',
      'completed': 'Completado',
      'cancelled': 'Cancelado'
    };
    return statusMap[this.status] || this.status;
  }

  getPaymentStatusDisplay(): string {
    const paymentStatusMap: { [key: string]: string } = {
      'pending': 'Pendiente',
      'processing': 'Procesando',
      'paid': 'Pagado',
      'failed': 'Fallido',
      'refunded': 'Reembolsado'
    };
    return paymentStatusMap[this.payment_status] || this.payment_status;
  }

  updateStatus(newStatus: string): void {
    this.status = newStatus;
  }

  updatePaymentStatus(newPaymentStatus: string): void {
    this.payment_status = newPaymentStatus;
  }

  setTrackingNumber(tracking: string): void {
    this.tracking_number = tracking;
  }

  toApiFormat(): any {
    return {
      id: this.order_id,
      userId: this.user_id,
      items: [
        {
          productId: this.product_id,
          name: this.product_name,
          quantity: this.quantity,
          price: this.unit_price
        }
      ],
      totalAmount: this.total_price,
      status: this.status,
      createdAt: this.order_date,
      shipping: {
        address: this.shipping_address
      },
      payment: {
        method: this.payment_method,
        status: this.payment_status
      },
      trackingNumber: this.tracking_number,
      notes: this.notes
    };
  }

  toJSON(): Order {
    return {
      order_id: this.order_id,
      user_id: this.user_id,
      product_id: this.product_id,
      product_name: this.product_name,
      quantity: this.quantity,
      unit_price: this.unit_price,
      total_price: this.total_price,
      status: this.status,
      order_date: this.order_date,
      shipping_address: this.shipping_address,
      payment_method: this.payment_method,
      payment_status: this.payment_status,
      tracking_number: this.tracking_number,
      notes: this.notes
    };
  }
}

// === ARCHIVO: src/app/shared/models/base.model.ts ===
export class BaseModel {
  protected createdAt: Date = new Date();
  protected updatedAt: Date = new Date();
  protected isDeleted: boolean = false;

  constructor() {}

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  isMarkedAsDeleted(): boolean {
    return this.isDeleted;
  }

  markAsDeleted(): void {
    this.isDeleted = true;
    this.updatedAt = new Date();
  }

  restore(): void {
    this.isDeleted = false;
    this.updatedAt = new Date();
  }

  touch(): void {
    this.updatedAt = new Date();
  }

  hasBeenModified(): boolean {
    return this.createdAt.getTime() !== this.updatedAt.getTime();
  }

  getAgeInDays(): number {
    const now = new Date();
    const diffMs = now.getTime() - this.createdAt.getTime();
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
  }

  getDaysSinceLastUpdate(): number {
    const now = new Date();
    const diffMs = now.getTime() - this.updatedAt.getTime();
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
  }

  clone(): BaseModel {
    const cloned = new BaseModel();
    cloned.createdAt = new Date(this.createdAt);
    cloned.updatedAt = new Date(this.updatedAt);
    cloned.isDeleted = this.isDeleted;
    return cloned;
  }

  validate(): boolean {
    return !this.isDeleted;
  }

  getMetadata(): { createdAt: Date; updatedAt: Date; isDeleted: boolean } {
    return {
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      isDeleted: this.isDeleted
    };
  }

  setMetadata(metadata: { createdAt?: Date; updatedAt?: Date; isDeleted?: boolean }): void {
    if (metadata.createdAt) this.createdAt = metadata.createdAt;
    if (metadata.updatedAt) this.updatedAt = metadata.updatedAt;
    if (metadata.isDeleted !== undefined) this.isDeleted = metadata.isDeleted;
  }

  toJSON(): any {
    return {
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      isDeleted: this.isDeleted
    };
  }

  static fromJSON(json: any): BaseModel {
    const model = new BaseModel();
    model.createdAt = json.createdAt ? new Date(json.createdAt) : new Date();
    model.updatedAt = json.updatedAt ? new Date(json.updatedAt) : new Date();
    model.isDeleted = json.isDeleted ?? false;
    return model;
  }

  isNew(): boolean {
    return this.getAgeInDays() === 0;
  }

  isStale(daysThreshold: number = 30): boolean {
    return this.getDaysSinceLastUpdate() > daysThreshold;
  }

  getTimeSinceCreation(): string {
    const days = this.getAgeInDays();
    if (days === 0) return 'Hoy';
    if (days === 1) return 'Ayer';
    if (days < 7) return `Hace ${days} días`;
    if (days < 30) return `Hace ${Math.floor(days / 7)} semanas`;
    return `Hace ${Math.floor(days / 30)} meses`;
  }

  getTimeSinceUpdate(): string {
    const days = this.getDaysSinceLastUpdate();
    if (days === 0) return 'Ahora mismo';
    if (days === 1) return 'Ayer';
    if (days < 7) return `Hace ${days} días`;
    if (days < 30) return `Hace ${Math.floor(days / 7)} semanas`;
    return `Hace ${Math.floor(days / 30)} meses`;
  }

  exportToString(): string {
    return JSON.stringify(this.toJSON());
  }
}

// === ARCHIVO: src/app/app.component.ts ===
import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { AuthService } from './core/services/auth.service';
import { NotificationService } from './core/services/notification.service';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
  standalone: true,
  imports: [IonApp, IonRouterOutlet]
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.initializeApp();
  }

  private initializeApp(): void {
    this.authService.isAuthenticated().subscribe(isAuth => {
      if (!isAuth) {
        console.log('Aplicación iniciada - usuario no autenticado');
      } else {
        console.log('Aplicación iniciada - usuario autenticado');
      }
    });

    this.notificationService.notificationCount$.subscribe(count => {
      console.log(`Notificaciones pendientes: ${count}`);
    });

    this.loadInitialData();
  }

  private loadInitialData(): void {
    this.userService.getUsers().subscribe({
      next: (users) => console.log(`Cargados ${users.length} usuarios`),
      error: (err) => console.error('Error al cargar usuarios:', err)
    });
  }

  public getAppVersion(): string {
    return '1.0.0';
  }

  public getCurrentYear(): number {
    return new Date().getFullYear();
  }
}

// === ARCHIVO: src/app/app.config.ts ===
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { IonicModule } from '@ionic/angular/standalone';

import { routes } from './app.routes';
import { AuthService } from './core/services/auth.service';
import { UserService } from './core/services/user.service';
import { NotificationService } from './core/services/notification.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions()
    ),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(IonicModule.forRoot()),
    AuthService,
    UserService,
    NotificationService
  ]
};

// === ARCHIVO: src/app/app.routes.ts ===
import { Routes } from '@angular/router';
import { AuthGuard } from '../features/auth/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('../features/auth/login.page').then(m => m.LoginPage),
    canActivate: []
  },
  {
    path: 'users',
    loadComponent: () => import('../features/users/users-list.page').then(m => m.UsersListPage),
    canActivate: [AuthGuard],
    data: { roles: ['user', 'admin'] }
  },
  {
    path: 'user/:id',
    loadComponent: () => import('../features/users/user-detail.page').then(m => m.UserDetailPage),
    canActivate: [AuthGuard],
    data: { roles: ['user', 'admin'] }
  },
  {
    path: 'admin/users',
    loadComponent: () => import('../features/users/admin-users.page').then(m => m.AdminUsersPage),
    canActivate: [AuthGuard],
    data: { roles: ['admin'] }
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

// === ARCHIVO: src/app/features/auth/login.page.ts ===
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonButton, IonInput, IonItem, IonList, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonToast } from '@ionic/angular/standalone';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonButton,
    IonInput,
    IonItem,
    IonList,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonToast
  ],
  templateUrl: './login.page.html'
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;
  showPassword: boolean = false;
  emailError: string = '';
  passwordError: string = '';

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      if (user) {
        this.router.navigate(['/users']);
      }
    });
  }

  async onLogin(): Promise<void> {
    this.emailError = '';
    this.passwordError = '';
    
    if (!this.email || !this.email.trim()) {
      this.emailError = 'El correo electrónico es requerido';
      return;
    }
    
    if (!this.validateEmail(this.email)) {
      this.emailError = 'Por favor ingresa un correo electrónico válido';
      return;
    }
    
    if (!this.password || this.password.length < 6) {
      this.passwordError = 'La contraseña debe tener al menos 6 caracteres';
      return;
    }

    if (!this.validatePasswordStrength(this.password)) {
      this.passwordError = 'La contraseña debe contener al menos una letra mayúscula, una minúscula y un número';
      return;
    }

    this.isLoading = true;

    this.authService.login(this.email, this.password).subscribe({
      next: (user) => {
        this.isLoading = false;
        this.notificationService.showSuccessToast('Bienvenido ' + user.name + ' ' + user.lastName);
        this.redirectUserByRole(user);
      },
      error: (error) => {
        this.isLoading = false;
        this.handleLoginError(error);
      }
    });
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private validatePasswordStrength(password: string): boolean {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    return hasUpperCase && hasLowerCase && hasNumber;
  }

  private redirectUserByRole(user: any): void {
    if (user.role === 'admin') {
      this.router.navigate(['/admin-users']);
    } else {
      this.router.navigate(['/users']);
    }
  }

  private handleLoginError(error: any): void {
    if (error.status === 401) {
      this.notificationService.showErrorToast('Credenciales incorrectas. Por favor verifica tu correo y contraseña.');
    } else if (error.status === 0) {
      this.notificationService.showErrorToast('Error de conexión. Verifica tu conexión a internet e intenta nuevamente.');
    } else if (error.status === 500) {
      this.notificationService.showErrorToast('Error del servidor. Por favor intenta más tarde.');
    } else {
      this.notificationService.showErrorToast('Ocurrió un error inesperado. Por favor intenta nuevamente.');
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  async onForgotPassword(): Promise<void> {
    if (!this.email || !this.validateEmail(this.email)) {
      this.notificationService.showErrorToast('Por favor ingresa tu correo electrónico primero');
      return;
    }
    
    const confirmed = await this.notificationService.showConfirmationAlert(
      'Recuperar contraseña',
      '¿Te enviaremos un enlace de recuperación a ' + this.email + '?'
    );
    
    if (confirmed) {
      this.notificationService.showSuccessToast('Enlace de recuperación enviado a tu correo');
    }
  }

  onRegister(): void {
    this.router.navigate(['/register']);
  }

  clearErrors(): void {
    this.emailError = '';
    this.passwordError = '';
  }
}

// === ARCHIVO: src/app/features/auth/login.page.html ===
<ion-content [fullscreen]="true">
  <div class="login-container">
    <ion-card class="login-card">
      <ion-card-header>
        <ion-card-title class="login-title">Iniciar Sesión</ion-card-title>
      </ion-card-header>
      
      <ion-card-content>
        <form (ngSubmit)="onLogin()">
          <ion-list lines="none" class="login-form">
            <ion-item class="form-item">
              <ion-label position="stacked">Correo Electrónico</ion-label>
              <ion-input
                type="email"
                [(ngModel)]="email"
                name="email"
                placeholder="tu@email.com"
                [clearInput]="true"
                (ionInput)="clearErrors()"
                [class.error-input]="emailError !== ''">
              </ion-input>
              <div *ngIf="emailError" class="error-message">{{ emailError }}</div>
            </ion-item>
            
            <ion-item class="form-item">
              <ion-label position="stacked">Contraseña</ion-label>
              <div class="password-container">
                <ion-input
                  [type]="showPassword ? 'text' : 'password'"
                  [(ngModel)]="password"
                  name="password"
                  placeholder="••••••••"
                  [clearInput]="false"
                  (ionInput)="clearErrors()"
                  [class.error-input]="passwordError !== ''">
                </ion-input>
                <ion-button
                  fill="clear"
                  class="password-toggle"
                  (click)="togglePasswordVisibility()">
                  <ion-icon [name]="showPassword ? 'eye-off' : 'eye'" slot="icon-only"></ion-icon>
                </ion-button>
              </div>
              <div *ngIf="passwordError" class="error-message">{{ passwordError }}</div>
            </ion-item>
            
            <ion-button
              expand="block"
              type="submit"
              [disabled]="isLoading"
              class="login-button">
              <ion-spinner *ngIf="isLoading" name="lines-small"></ion-spinner>
              <span *ngIf="!isLoading">Iniciar Sesión</span>
            </ion-button>
            
            <ion-button
              expand="block"
              fill="clear"
              (click)="onForgotPassword()"
              class="forgot-password-button">
              ¿Olvidaste tu contraseña?
            </ion-button>
            
            <div class="register-section">
              <span>¿No tienes cuenta?</span>
              <ion-button
                fill="clear"
                (click)="onRegister()"
                class="register-button">
                Regístrate
              </ion-button>
            </div>
          </ion-list>
        </form>
      </ion-card-content>
    </ion-card>
    
    <div class="footer-info">
      <p>© 2024 Ionic POO Refactoring</p>
    </div>
  </div>
</ion-content>

// === ARCHIVO: src/app/features/auth/auth-guard.ts ===
import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { map, take, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  return authService.isAuthenticated().pipe(
    take(1),
    switchMap(isAuthenticated => {
      if (isAuthenticated) {
        const requiredRoles = route.data['roles'] as string[];
        
        if (requiredRoles && requiredRoles.length > 0) {
          return authService.hasRole(requiredRoles[0]).pipe(
            map(hasRole => {
              if (hasRole) {
                return true;
              } else {
                router.navigate(['/unauthorized']);
                return false;
              }
            })
          );
        }
        
        return of(true);
      } else {
        router.navigate(['/login'], { 
          queryParams: { returnUrl: state.url }
        });
        return of(false);
      }
    })
  );
};

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  return authService.hasRole('admin').pipe(
    take(1),
    map(hasRole => {
      if (hasRole) {
        return true;
      } else {
        router.navigate(['/unauthorized']);
        return false;
      }
    })
  );
};

export const guestGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  return authService.isAuthenticated().pipe(
    take(1),
    map(isAuthenticated => {
      if (!isAuthenticated) {
        return true;
      } else {
        router.navigate(['/users']);
        return false;
      }
    })
  );
};

// === ARCHIVO: src/app/features/users/users-list.page.ts ===
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, LoadingController, RefresherCustomEvent } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Subject, takeUntil, forkJoin } from 'rxjs';
import { UserService } from '../../core/services/user.service';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]
})
export class UsersListPage extends UserListBaseComponent implements OnInit, OnDestroy {
  public users: User[] = [];
  public filteredUsers: User[] = [];
  public searchQuery: string = '';
  public isLoading: boolean = false;
  public currentUser: User | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private loadingController: LoadingController
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadCurrentUser();
    this.loadUsers();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadCurrentUser(): void {
    this.authService.getCurrentUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        this.currentUser = user;
      });
  }

  public async loadUsers(): Promise<void> {
    this.isLoading = true;
    const loading = await this.notificationService.showLoading('Cargando usuarios...');

    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (users) => {
          this.users = users;
          this.filteredUsers = users;
          this.isLoading = false;
          loading.dismiss();
        },
        error: async (error) => {
          this.isLoading = false;
          loading.dismiss();
          await this.notificationService.showErrorToast('Error al cargar usuarios');
          console.error('Error loading users:', error);
        }
      });
  }

  public onSearchChange(event: Event): void {
    const target = event.target as HTMLIonSearchbarElement;
    this.searchQuery = target.value?.toLowerCase() || '';
    this.filterUsers();
  }

  private filterUsers(): void {
    if (!this.searchQuery.trim()) {
      this.filteredUsers = this.users;
      return;
    }

    this.filteredUsers = this.users.filter(user =>
      user.name?.toLowerCase().includes(this.searchQuery) ||
      user.email?.toLowerCase().includes(this.searchQuery) ||
      user.lastName?.toLowerCase().includes(this.searchQuery)
    );
  }

  public async refreshData(event: RefresherCustomEvent): Promise<void> {
    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (users) => {
          this.users = users;
          this.filterUsers();
          event.target.complete();
        },
        error: async (error) => {
          event.target.complete();
          await this.notificationService.showErrorToast('Error al actualizar usuarios');
          console.error('Error refreshing users:', error);
        }
      });
  }

  public async deleteUser(user: User): Promise<void> {
    const confirmed = await this.notificationService.showConfirmationAlert(
      'Confirmar eliminación',
      `¿Está seguro de eliminar al usuario ${user.name}?`
    );

    if (confirmed) {
      this.userService.deleteUser(user.id)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: async () => {
            await this.notificationService.showSuccessToast('Usuario eliminado correctamente');
            this.loadUsers();
          },
          error: async (error) => {
            await this.notificationService.showErrorToast('Error al eliminar usuario');
            console.error('Error deleting user:', error);
          }
        });
    }
  }

  public getUserStatus(user: User): string {
    return user.isActive ? 'Activo' : 'Inactivo';
  }

  public getUserInitials(user: User): string {
    const firstName = user.name?.charAt(0) || '';
    const lastName = user.lastName?.charAt(0) || '';
    return (firstName + lastName).toUpperCase();
  }

  public trackByUserId(index: number, user: User): string {
    return user.id;
  }
}

class UserListBaseComponent {
  protected baseTitle: string = 'Lista de Usuarios';
  protected baseRoute: string = '/users';

  protected getBaseInfo(): { title: string; route: string } {
    return {
      title: this.baseTitle,
      route: this.baseRoute
    };
  }

  protected logBaseAccess(): void {
    console.log('Acceso a lista de usuarios');
  }
}

// === ARCHIVO: src/app/features/users/user-detail.page.ts ===
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil, switchMap } from 'rxjs';
import { UserService } from '../../core/services/user.service';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, FormsModule, ReactiveFormsModule]
})
export class UserDetailPage extends UserDetailBasePage implements OnInit, OnDestroy {
  public user: User | null = null;
  public isEditing: boolean = false;
  public isLoading: boolean = false;
  public userForm!: FormGroup;
  public userId: string | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private toastController: ToastController
  ) {
    super();
    this.initializeForm();
  }

  private initializeForm(): void {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      address: [''],
      isActive: [true]
    });
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.loadUser(this.userId);
    }
    this.logPageAccess();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadUser(id: string): void {
    this.isLoading = true;
    this.userService.getUserById(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (user) => {
          this.user = user;
          this.populateForm(user);
          this.isLoading = false;
        },
        error: async (error) => {
          this.isLoading = false;
          await this.notificationService.showErrorToast('Error al cargar usuario');
          console.error('Error loading user:', error);
        }
      });
  }

  private populateForm(user: User): void {
    this.userForm.patchValue({
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone || '',
      address: user.address || '',
      isActive: user.isActive
    });
  }

  public toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  public async saveChanges(): Promise<void> {
    if (!this.userForm.valid || !this.user) {
      await this.notificationService.showErrorToast('Por favor complete todos los campos requeridos');
      return;
    }

    this.isLoading = true;
    const updatedData: Partial<User> = this.userForm.value;

    this.userService.updateUser(this.user.id, updatedData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: async (updatedUser) => {
          this.user = updatedUser;
          this.isEditing = false;
          this.isLoading = false;
          await this.notificationService.showSuccessToast('Usuario actualizado correctamente');
        },
        error: async (error) => {
          this.isLoading = false;
          await this.notificationService.showErrorToast('Error al actualizar usuario');
          console.error('Error updating user:', error);
        }
      });
  }

  public async cancelEdit(): Promise<void> {
    if (this.user) {
      this.populateForm(this.user);
    }
    this.isEditing = false;
  }

  public getUserAge(): number | null {
    if (!this.user?.birthDate) return null;
    const birth = new Date(this.user.birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }

  public async confirmDelete(): Promise<void> {
    if (!this.user) return;

    const confirmed = await this.notificationService.showConfirmationAlert(
      'Confirmar eliminación',
      '¿Está seguro de eliminar este usuario? Esta acción no se puede deshacer.'
    );

    if (confirmed) {
      this.deleteUser();
    }
  }

  private async deleteUser(): Promise<void> {
    if (!this.user) return;

    this.isLoading = true;
    this.userService.deleteUser(this.user.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: async () => {
          await this.notificationService.showSuccessToast('Usuario eliminado correctamente');
        },
        error: async (error) => {
          this.isLoading = false;
          await this.notificationService.showErrorToast('Error al eliminar usuario');
          console.error('Error deleting user:', error);
        }
      });
  }
}

class UserDetailBasePage {
  protected pageTitle: string = 'Detalle de Usuario';
  protected defaultBackUrl: string = '/users';
  protected pageIcon: string = 'person';

  protected logPageAccess(): void {
    console.log(`Acceso a página: ${this.pageTitle}`);
  }

  protected getPageInfo(): { title: string; backUrl: string; icon: string } {
    return {
      title: this.pageTitle,
      backUrl: this.defaultBackUrl,
      icon: this.pageIcon
    };
  }

  protected validateAccess(): boolean {
    return true;
  }
}

// === ARCHIVO: src/app/features/users/admin-users.page.ts ===
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ActionSheetController, AlertController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from '../../core/services/user.service';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.page.html',
  styleUrls: ['./admin-users.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, FormsModule]
})
export class AdminUsersPage extends UserListPage implements OnInit, OnDestroy {
  public adminUsers: User[] = [];
  public selectedUsers: Set<string> = new Set();
  public isSelectionMode: boolean = false;
  public bulkActionsVisible: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController
  ) {
    super(
      userService,
      authService,
      notificationService,
      {} as any
    );
  }

  ngOnInit(): void {
    this.loadAdminUsers();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public loadAdminUsers(): void {
    this.userService.getAdminUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (users) => {
          this.adminUsers = users;
        },
        error: async (error) => {
          await this.notificationService.showErrorToast('Error al cargar administradores');
          console.error('Error loading admin users:', error);
        }
      });
  }

  public toggleSelectionMode(): void {
    this.isSelectionMode = !this.isSelectionMode;
    if (!this.isSelectionMode) {
      this.selectedUsers.clear();
      this.bulkActionsVisible = false;
    }
  }

  public toggleUserSelection(userId: string): void {
    if (this.selectedUsers.has(userId)) {
      this.selectedUsers.delete(userId);
    } else {
      this.selectedUsers.add(userId);
    }
    this.bulkActionsVisible = this.selectedUsers.size > 0;
  }

  public isUserSelected(userId: string): boolean {
    return this.selectedUsers.has(userId);
  }

  public async showUserActions(user: User): Promise<void> {
    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones de usuario',
      buttons: [
        {
          text: 'Ver detalle',
          icon: 'eye',
          handler: () => {
            console.log('View user:', user.id);
          }
        },
        {
          text: 'Editar usuario',
          icon: 'create',
          handler: () => {
            console.log('Edit user:', user.id);
          }
        },
        {
          text: 'Cambiar rol',
          icon: 'people',
          handler: () => {
            this.changeUserRole(user);
          }
        },
        {
          text: 'Desactivar usuario',
          icon: 'power',
          handler: () => {
            this.toggleUserActive(user);
          }
        },
        {
          text: 'Eliminar usuario',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            this.confirmDeleteUser(user);
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  private async changeUserRole(user: User): Promise<void> {
    const currentRole = user.role || 'user';
    const newRole = currentRole === 'admin' ? 'user' : 'admin';

    const alert = await this.alertController.create({
      header: 'Cambiar rol',
      message: `¿Cambiar rol de ${user.name} a ${newRole}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.updateUserRole(user, newRole);
          }
        }
      ]
    });

    await alert.present();
  }

  private updateUserRole(user: User, newRole: string): void {
    const updatedUser = { ...user, role: newRole };
    this.userService.updateUserDirectly(updatedUser);
  }

  private async toggleUserActive(user: User): Promise<void> {
    const action = user.isActive ? 'desactivar' : 'activar';
    const confirmed = await this.notificationService.showConfirmationAlert(
      `Confirmar ${action}`,
      `¿Está seguro de ${action} al usuario ${user.name}?`
    );

    if (confirmed) {
      const updatedUser = { ...user, isActive: !user.isActive };
      this.userService.updateUserDirectly(updatedUser);
      await this.notificationService.showSuccessToast(`Usuario ${action}do correctamente`);
      this.loadAdminUsers();
    }
  }

  private async confirmDeleteUser(user: User): Promise<void> {
    const confirmed = await this.notificationService.showConfirmationAlert(
      'Confirmar eliminación',
      `¿Está seguro de eliminar al administrador ${user.name}?`
    );

    if (confirmed) {
      this.userService.deleteUser(user.id)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: async () => {
            await this.notificationService.showSuccessToast('Administrador eliminado correctamente');
            this.loadAdminUsers();
          },
          error: async (error) => {
            await this.notificationService.showErrorToast('Error al eliminar administrador');
          }
        });
    }
  }

  public async bulkActivateUsers(): Promise<void> {
    const userIds = Array.from(this.selectedUsers);
    for (const userId of userIds) {
      const user = this.adminUsers.find(u => u.id === userId);
      if (user) {
        const updatedUser = { ...user, isActive: true };
        this.userService.updateUserDirectly(updatedUser);
      }
    }
    await this.notificationService.showSuccessToast('Usuarios activados correctamente');
    this.clearSelection();
    this.loadAdminUsers();
  }

  public async bulkDeactivateUsers(): Promise<void> {
    const userIds = Array.from(this.selectedUsers);
    for (const userId of userIds) {
      const user = this.adminUsers.find(u => u.id === userId);
      if (user) {
        const updatedUser = { ...user, isActive: false };
        this.userService.updateUserDirectly(updatedUser);
      }
    }
    await this.notificationService.showSuccessToast('Usuarios desactivados correctamente');
    this.clearSelection();
    this.loadAdminUsers();
  }

  public async bulkDeleteUsers(): Promise<void> {
    const confirmed = await this.notificationService.showConfirmationAlert(
      'Confirmar eliminación masiva',
      `¿Está seguro de eliminar ${this.selectedUsers.size} usuarios?`
    );

    if (confirmed) {
      const userIds = Array.from(this.selectedUsers);
      for (const userId of userIds) {
        this.userService.deleteUser(userId)
          .pipe(takeUntil(this.destroy$))
          .subscribe();
      }
      await this.notificationService.showSuccessToast('Usuarios eliminados correctamente');
      this.clearSelection();
      this.loadAdminUsers();
    }
  }

  private clearSelection(): void {
    this.selectedUsers.clear();
    this.bulkActionsVisible = false;
    this.isSelectionMode = false;
  }

  public getSelectedCount(): number {
    return this.selectedUsers.size;
  }

  public isAllSelected(): boolean {
    return this.selectedUsers.size === this.adminUsers.length && this.adminUsers.length > 0;
  }

  public toggleSelectAll(): void {
    if (this.isAllSelected()) {
      this.selectedUsers.clear();
    } else {
      this.adminUsers.forEach(user => this.selectedUsers.add(user.id));
    }
    this.bulkActionsVisible = this.selectedUsers.size > 0;
  }

  public filterAdminUsers(query: string): void {
    const searchTerm = query.toLowerCase();
    this.adminUsers = this.adminUsers.filter(user =>
      user.name?.toLowerCase().includes(searchTerm) ||
      user.email?.toLowerCase().includes(searchTerm) ||
      user.role?.toLowerCase().includes(searchTerm)
    );
  }
}

class UserListPage {
  public users: User[] = [];
  public searchQuery: string = '';
  public isLoading: boolean = false;

  constructor(
    protected userService: UserService,
    protected authService: AuthService,
    protected notificationService: NotificationService,
    protected loadingController: any
  ) {}

  protected getPageTitle(): string {
    return 'Lista de usuarios';
  }

  public logAccess(): void {
    console.log('Acceso a lista de usuarios');
  }

  public filterUsers(query: string): void {
    console.log('Filtering users with query:', query);
  }
}

// === ARCHIVO: src/app/shared/components/button/button.component.ts ===
import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, IonButton, IonIcon],
  template: `
    <ion-button
      [type]="type"
      [fill]="fill"
      [size]="size"
      [disabled]="isDisabled || !isValid()"
      [expand]="expand"
      [color]="color"
      (click)="handleClick($event)"
    >
      <ion-icon *ngIf="icon" [name]="icon" slot="start"></ion-icon>
      <ng-content></ng-content>
    </ion-button>
  `
})
export class ButtonComponent implements OnInit, OnDestroy {
  @Input() type: 'submit' | 'button' | 'reset' = 'button';
  @Input() fill: 'solid' | 'outline' | 'default' = 'solid';
  @Input() size: 'small' | 'default' | 'large' = 'default';
  @Input() expand: 'full' | 'block' | 'none' = 'none';
  @Input() color: string = 'primary';
  @Input() icon: string | undefined;
  @Input() disabled: boolean = false;
  @Input() validateEmail: boolean = false;
  @Input() emailValue: string = '';
  @Input() validatePassword: boolean = false;
  @Input() passwordValue: string = '';
  @Input() validateRequired: boolean = false;
  @Input() requiredValue: any = null;
  @Input() validateMinLength: boolean = false;
  @Input() minLengthValue: string = '';
  @Input() minLength: number = 0;
  @Input() validateMaxLength: boolean = false;
  @Input() maxLengthValue: string = '';
  @Input() maxLength: number = 0;
  @Input() validatePattern: boolean = false;
  @Input() patternValue: string = '';
  @Input() patternRegex: string = '';
  @Input() validateCustom: boolean = false;
  @Input() customValidationFn: ((value: any) => boolean) | undefined;

  @Output() buttonClick = new EventEmitter<Event>();
  @Output() validationFailed = new EventEmitter<string>();

  private isDisabled: boolean = false;
  private validationMessages: string[] = [];

  ngOnInit() {
    if (this.disabled) {
      this.isDisabled = true;
    }
  }

  ngOnDestroy() {
    this.validationMessages = [];
  }

  handleClick(event: Event) {
    if (!this.isValid()) {
      event.preventDefault();
      event.stopPropagation();
      this.validationFailed.emit(this.getValidationMessage());
      return;
    }
    this.buttonClick.emit(event);
  }

  isValid(): boolean {
    this.validationMessages = [];

    if (this.validateEmail && !this.isValidEmail(this.emailValue)) {
      this.validationMessages.push('El correo electrónico no es válido');
      return false;
    }

    if (this.validatePassword && !this.isValidPassword(this.passwordValue)) {
      this.validationMessages.push('La contraseña debe tener al menos 8 caracteres');
      return false;
    }

    if (this.validateRequired && this.isEmpty(this.requiredValue)) {
      this.validationMessages.push('Este campo es obligatorio');
      return false;
    }

    if (this.validateMinLength && this.isValidMinLength(this.minLengthValue)) {
      this.validationMessages.push(`El texto debe tener al menos ${this.minLength} caracteres`);
      return false;
    }

    if (this.validateMaxLength && this.isValidMaxLength(this.maxLengthValue)) {
      this.validationMessages.push(`El texto debe tener como máximo ${this.maxLength} caracteres`);
      return false;
    }

    if (this.validatePattern && !this.isValidPattern(this.patternValue)) {
      this.validationMessages.push('El formato no es válido');
      return false;
    }

    if (this.validateCustom && this.customValidationFn) {
      if (!this.customValidationFn(this.requiredValue)) {
        this.validationMessages.push('La validación personalizada falló');
        return false;
      }
    }

    return this.validationMessages.length === 0;
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private isValidPassword(password: string): boolean {
    return password.length >= 8;
  }

  private isEmpty(value: any): boolean {
    return value === null || value === undefined || value === '';
  }

  private isValidMinLength(value: string): boolean {
    return value.length < this.minLength;
  }

  private isValidMaxLength(value: string): boolean {
    return value.length > this.maxLength;
  }

  private isValidPattern(value: string): boolean {
    if (!this.patternRegex) return true;
    const regex = new RegExp(this.patternRegex);
    return regex.test(value);
  }

  private getValidationMessage(): string {
    return this.validationMessages.join(', ');
  }

  setDisabled(disabled: boolean): void {
    this.isDisabled = disabled;
  }

  getValidationMessages(): string[] {
    return [...this.validationMessages];
  }
}

// === ARCHIVO: src/app/shared/components/input/input.component.ts ===
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonInput, IonLabel, IonItem, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, IonInput, IonLabel, IonItem, IonList],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  template: `
    <ion-list>
      <ion-item>
        <ion-label position="floating" *ngIf="label">{{ label }}</ion-label>
        <ion-input
          [type]="type"
          [placeholder]="placeholder"
          [value]="innerValue"
          [disabled]="disabled"
          [readonly]="readonly"
          [clearInput]="clearInput"
          [autocomplete]="autocomplete"
          [autocorrect]="autocorrect"
          [spellcheck]="spellcheck"
          [max]="max"
          [min]="min"
          [step]="step"
          (ionInput)="onInput($event)"
          (ionBlur)="onBlur($event)"
          (ionFocus)="onFocus($event)"
        ></ion-input>
      </ion-item>
    </ion-list>
    <div *ngIf="showError" class="error-message">
      {{ errorMessage }}
    </div>
  `,
  styles: [`
    .error-message {
      color: var(--ion-color-danger, #eb445a);
      font-size: 12px;
      padding: 4px 16px;
      margin-top: 4px;
    }
  `]
})
export class InputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() clearInput: boolean = false;
  @Input() autocomplete: string = 'off';
  @Input() autocorrect: string = 'off';
  @Input() spellcheck: boolean = false;
  @Input() max: string | undefined;
  @Input() min: string | undefined;
  @Input() step: string | undefined;
  @Input() errorMessage: string = 'Valor inválido';
  @Input() showError: boolean = false;

  @Output() valueChange = new EventEmitter<any>();
  @Output() ionBlurEvent = new EventEmitter<any>();
  @Output() ionFocusEvent = new EventEmitter<any>();

  innerValue: any = '';

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.innerValue = value;
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: any): void {
    const value = event.detail.value;
    this.innerValue = value;
    this.onChange(value);
    this.valueChange.emit(value);
  }

  onBlur(event: any): void {
    this.onTouched();
    this.ionBlurEvent.emit(event);
  }

  onFocus(event: any): void {
    this.ionFocusEvent.emit(event);
  }

  getValue(): any {
    return this.innerValue;
  }

  setValue(value: any): void {
    this.innerValue = value;
    this.onChange(value);
  }

  clear(): void {
    this.innerValue = '';
    this.onChange('');
  }

  focus(): void {
    const inputElement = document.querySelector('ion-input');
    if (inputElement) {
      inputElement.focus();
    }
  }
}

// === ARCHIVO: src/app/shared/components/modal/modal.component.ts ===
import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonFooter, IonList, IonItem, IonLabel, IonInput, IonTextarea } from '@ionic/angular/standalone';
import { User } from '../../models/user.model';
import { Order } from '../../models/order.model';

interface ModalData {
  title: string;
  content: string;
  data?: any;
}

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'textarea';
  value: string;
  required: boolean;
}

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonFooter,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea
  ],
  template: `
    <ion-modal [isOpen]="isOpen" (didDismiss)="onDismiss()" [breakpoints]="breakpoints" [initialBreakpoint]="initialBreakpoint">
      <ng-template>
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button (click)="onCancel()">Cancelar</ion-button>
            </ion-buttons>
            <ion-title>{{ modalTitle }}</ion-title>
            <ion-buttons slot="end">
              <ion-button (click)="onConfirm()" [strong]="true">Confirmar</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <div *ngIf="mode === 'display'">
            <div class="display-content">
              <h2>{{ displayData?.title }}</h2>
              <p>{{ displayData?.content }}</p>
              <div *ngIf="displayData?.data" class="data-section">
                <pre>{{ displayData.data | json }}</pre>
              </div>
            </div>
          </div>

          <div *ngIf="mode === 'form'">
            <ion-list>
              <ion-item *ngFor="let field of formFields">
                <ion-label position="floating">{{ field.label }}</ion-label>
                <ion-input
                  *ngIf="field.type !== 'textarea'"
                  [type]="field.type"
                  [(ngModel)]="field.value"
                  [required]="field.required"
                  (ionChange)="onFieldChange(field.name, $event)"
                ></ion-input>
                <ion-textarea
                  *ngIf="field.type === 'textarea'"
                  [(ngModel)]="field.value"
                  [required]="field.required"
                  (ionChange)="onFieldChange(field.name, $event)"
                ></ion-textarea>
              </ion-item>
            </ion-list>
          </div>

          <div *ngIf="mode === 'user'">
            <ion-list>
              <ion-item>
                <ion-label position="floating">Nombre</ion-label>
                <ion-input [(ngModel)]="userData.name" (ionChange)="onUserFieldChange('name', $event)"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Email</ion-label>
                <ion-input type="email" [(ngModel)]="userData.email" (ionChange)="onUserFieldChange('email', $event)"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Teléfono</ion-label>
                <ion-input type="tel" [(ngModel)]="userData.phone" (ionChange)="onUserFieldChange('phone', $event)"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Dirección</ion-label>
                <ion-input [(ngModel)]="userData.address" (ionChange)="onUserFieldChange('address', $event)"></ion-input>
              </ion-item>
            </ion-list>
          </div>

          <div *ngIf="mode === 'order'">
            <ion-list>
              <ion-item>
                <ion-label position="floating">ID de Orden</ion-label>
                <ion-input [(ngModel)]="orderData.id" [readonly]="true"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Cliente</ion-label>
                <ion-input [(ngModel)]="orderData.customerName" (ionChange)="onOrderFieldChange('customerName', $event)"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Total</ion-label>
                <ion-input type="number" [(ngModel)]="orderData.total" (ionChange)="onOrderFieldChange('total', $event)"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Estado</ion-label>
                <ion-input [(ngModel)]="orderData.status" (ionChange)="onOrderFieldChange('status', $event)"></ion-input>
              </ion-item>
            </ion-list>
          </div>
        </ion-content>

        <ion-footer>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button color="medium" (click)="onCancel()">Cancelar</ion-button>
            </ion-buttons>
            <ion-buttons slot="end">
              <ion-button (click)="onConfirm()" [strong]="true">Confirmar</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-footer>
      </ng-template>
    </ion-modal>
  `,
  styles: [`
    .display-content {
      padding: 16px;
    }
    .data-section {
      margin-top: 16px;
      background: #f5f5f5;
      padding: 12px;
      border-radius: 8px;
    }
    pre {
      white-space: pre-wrap;
      word-wrap: break-word;
    }
  `]
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() isOpen: boolean = false;
  @Input() mode: 'display' | 'form' | 'user' | 'order' = 'display';
  @Input() modalTitle: string = 'Modal';
  @Input() breakpoints: number[] = [0, 0.5, 1];
  @Input() initialBreakpoint: number = 0.5;

  @Output() closed = new EventEmitter<void>();
  @Output() confirmed = new EventEmitter<any>();
  @Output() cancelled = new EventEmitter<void>();
  @Output() dataChanged = new EventEmitter<{ field: string; value: any }>();

  @ViewChild('modalContent') modalContent: ElementRef | undefined;

  displayData: ModalData | null = null;
  formFields: FormField[] = [];
  userData: Partial<User> = {};
  orderData: Partial<Order> = {};

  private formState: Map<string, any> = new Map();
  private isDirty: boolean = false;

  ngOnInit() {
    this.initializeDefaults();
  }

  ngOnDestroy() {
    this.formState.clear();
    this.displayData = null;
    this.formFields = [];
    this.userData = {};
    this.orderData = {};
  }

  private initializeDefaults(): void {
    if (this.mode === 'user') {
      this.userData = {
        name: '',
        email: '',
        phone: '',
        address: ''
      };
    } else if (this.mode === 'order') {
      this.orderData = {
        id: '',
        customerName: '',
        total: 0,
        status: 'pending'
      };
    }
  }

  setDisplayData(data: ModalData): void {
    this.displayData = data;
    this.isDirty = false;
  }

  setFormFields(fields: FormField[]): void {
    this.formFields = fields.map(field => ({ ...field }));
    fields.forEach(field => {
      this.formState.set(field.name, field.value);
    });
    this.isDirty = false;
  }

  setUserData(user: User): void {
    this.userData = { ...user };
    this.trackChange('user', user);
    this.isDirty = false;
  }

  setOrderData(order: Order): void {
    this.orderData = { ...order };
    this.trackChange('order', order);
    this.isDirty = false;
  }

  onFieldChange(fieldName: string, event: any): void {
    const value = event.detail?.value || event;
    this.formState.set(fieldName, value);
    this.isDirty = true;
    this.dataChanged.emit({ field: fieldName, value });
  }

  onUserFieldChange(fieldName: string, event: any): void {
    const value = event.detail?.value || event;
    (this.userData as any)[fieldName] = value;
    this.isDirty = true;
    this.dataChanged.emit({ field: `user.${fieldName}`, value });
  }

  onOrderFieldChange(fieldName: string, event: any): void {
    const value = event.detail?.value || event;
    (this.orderData as any)[fieldName] = value;
    this.isDirty = true;
    this.dataChanged.emit({ field: `order.${fieldName}`, value });
  }

  onDismiss(): void {
    this.closed.emit();
    this.resetState();
  }

  onCancel(): void {
    this.cancelled.emit();
    this.resetState();
  }

  onConfirm(): void {
    let result: any;

    switch (this.mode) {
      case 'display':
        result = this.displayData;
        break;
      case 'form':
        result = this.formFields.reduce((acc, field) => {
          acc[field.name] = field.value;
          return acc;
        }, {} as Record<string, any>);
        break;
      case 'user':
        result = this.userData;
        break;
      case 'order':
        result = this.orderData;
        break;
    }

    this.confirmed.emit(result);
    this.isDirty = false;
  }

  private trackChange(source: string, data: any): void {
    if (source === 'user') {
      Object.keys(data).forEach(key => {
        this.formState.set(`user.${key}`, (data as any)[key]);
      });
    } else if (source === 'order') {
      Object.keys(data).forEach(key => {
        this.formState.set(`order.${key}`, (data as any)[key]);
      });
    }
  }

  private resetState(): void {
    this.displayData = null;
    this.formFields = [];
    this.userData = {};
    this.orderData = {};
    this.formState.clear();
    this.isDirty = false;
    this.initializeDefaults();
  }

  getFormState(): Map<string, any> {
    return new Map(this.formState);
  }

  hasChanges(): boolean {
    return this.isDirty;
  }

  getUserData(): Partial<User> {
    return { ...this.userData };
  }

  getOrderData(): Partial<Order> {
    return { ...this.orderData };
  }

  getFormData(): Record<string, any> {
    return this.formFields.reduce((acc, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {} as Record<string, any>);
  }
}

// === ARCHIVO: src/app/shared/utils/date-helper.ts ===
import { format, parseISO, addDays, subDays, differenceInDays, isValid, isAfter, isBefore, startOfDay, endOfDay, addMonths, subMonths, isSameDay } from 'date-fns';

export class DateHelper {
  static formatDate(date: Date | string, formatStr: string = 'yyyy-MM-dd'): string {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    if (!isValid(dateObj)) {
      return 'Fecha inválida';
    }
    return format(dateObj, formatStr);
  }

  static formatDateTime(date: Date | string): string {
    return DateHelper.formatDate(date, 'yyyy-MM-dd HH:mm:ss');
  }

  static formatDateForDisplay(date: Date | string): string {
    return DateHelper.formatDate(date, 'dd/MM/yyyy');
  }

  static formatDateTimeForDisplay(date: Date | string): string {
    return DateHelper.formatDate(date, 'dd/MM/yyyy HH:mm');
  }

  static parseDate(dateString: string): Date | null {
    const parsed = parseISO(dateString);
    return isValid(parsed) ? parsed : null;
  }

  static addDaysToDate(date: Date | string, days: number): Date {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return addDays(dateObj, days);
  }

  static subtractDaysFromDate(date: Date | string, days: number): Date {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return subDays(dateObj, days);
  }

  static addMonthsToDate(date: Date | string, months: number): Date {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return addMonths(dateObj, months);
  }

  static subtractMonthsFromDate(date: Date | string, months: number): Date {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return subMonths(dateObj, months);
  }

  static getDaysDifference(date1: Date | string, date2: Date | string): number {
    const dateObj1 = typeof date1 === 'string' ? parseISO(date1) : date1;
    const dateObj2 = typeof date2 === 'string' ? parseISO(date2) : date2;
    return differenceInDays(dateObj1, dateObj2);
  }

  static isDateAfter(date1: Date | string, date2: Date | string): boolean {
    const dateObj1 = typeof date1 === 'string' ? parseISO(date1) : date1;
    const dateObj2 = typeof date2 === 'string' ? parseISO(date2) : date2;
    return isAfter(dateObj1, dateObj2);
  }

  static isDateBefore(date1: Date | string, date2: Date | string): boolean {
    const dateObj1 = typeof date1 === 'string' ? parseISO(date1) : date1;
    const dateObj2 = typeof date2 === 'string' ? parseISO(date2) : date2;
    return isBefore(dateObj1, dateObj2);
  }

  static isSameDate(date1: Date | string, date2: Date | string): boolean {
    const dateObj1 = typeof date1 === 'string' ? parseISO(date1) : date1;
    const dateObj2 = typeof date2 === 'string' ? parseISO(date2) : date2;
    return isSameDay(dateObj1, dateObj2);
  }

  static getStartOfDay(date: Date | string): Date {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return startOfDay(dateObj);
  }

  static getEndOfDay(date: Date | string): Date {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return endOfDay(dateObj);
  }

  static getCurrentDate(): Date {
    return new Date();
  }

  static getCurrentDateString(): string {
    return format(new Date(), 'yyyy-MM-dd');
  }

  static getCurrentDateTimeString(): string {
    return format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  }

  static isValidDate(date: any): boolean {
    if (!date) return false;
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return isValid(dateObj);
  }

  static getRelativeTimeString(date: Date | string): string {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    const now = new Date();
    const diffDays = differenceInDays(now, dateObj);

    if (diffDays === 0) return 'Hoy';
    if (diffDays === 1) return 'Ayer';
    if (diffDays === -1) return 'Mañana';
    if (diffDays > 0 && diffDays < 7) return `Hace ${diffDays} días`;
    if (diffDays < 0 && diffDays > -7) return `En ${Math.abs(diffDays)} días`;

    return DateHelper.formatDateForDisplay(dateObj);
  }

  static getDateRangeArray(startDate: Date | string, endDate: Date | string): Date[] {
    const start = typeof startDate === 'string' ? parseISO(startDate) : startDate;
    const end = typeof endDate === 'string' ? parseISO(endDate) : endDate;
    const days = differenceInDays(end, start);
    const dates: Date[] = [];

    for (let i = 0; i <= days; i++) {
      dates.push(addDays(start, i));
    }

    return dates;
  }

  static getMonthName(date: Date | string): string {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, 'MMMM');
  }

  static getDayOfWeek(date: Date | string): string {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, 'EEEE');
  }

  static getShortMonthName(date: Date | string): string {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, 'MMM');
  }

  static getYear(date: Date | string): number {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return dateObj.getFullYear();
  }

  static getMonth(date: Date | string): number {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return dateObj.getMonth() + 1;
  }

  static getDay(date: Date | string): number {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return dateObj.getDate();
  }

  static isWeekend(date: Date | string): boolean {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    const day = dateObj.getDay();
    return day === 0 || day === 6;
  }

  static getWeekNumber(date: Date | string): number {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    const startOfYear = new Date(dateObj.getFullYear(), 0, 1);
    const days = Math.floor((dateObj.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000));
    return Math.ceil((days + startOfYear.getDay() + 1) / 7);
  }
}

// === ARCHIVO: src/app/shared/utils/validation-helper.ts ===
export class ValidationHelper {
  static validateEmail(email: string): boolean {
    if (!email || email.trim() === '') {
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static validateEmailRequired(email: string): string | null {
    if (!email || email.trim() === '') {
      return 'El correo electrónico es requerido';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'El formato del correo electrónico es inválido';
    }
    return null;
  }

  static validateEmailFormat(email: string): boolean {
    if (!email || email.trim() === '') {
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static validatePhone(phone: string): boolean {
    if (!phone || phone.trim() === '') {
      return false;
    }
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  static validatePhoneRequired(phone: string): string | null {
    if (!phone || phone.trim() === '') {
      return 'El teléfono es requerido';
    }
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      return 'El formato del teléfono es inválido';
    }
    return null;
  }

  static validatePhoneFormat(phone: string): boolean {
    if (!phone || phone.trim() === '') {
      return false;
    }
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  static validatePassword(password: string): boolean {
    if (!password || password.length < 8) {
      return false;
    }
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
  }

  static validatePasswordRequired(password: string): string | null {
    if (!password || password.trim() === '') {
      return 'La contraseña es requerida';
    }
    if (password.length < 8) {
      return 'La contraseña debe tener al menos 8 caracteres';
    }
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (!hasUpperCase) {
      return 'La contraseña debe contener al menos una letra mayúscula';
    }
    if (!hasLowerCase) {
      return 'La contraseña debe contener al menos una letra minúscula';
    }
    if (!hasNumber) {
      return 'La contraseña debe contener al menos un número';
    }
    if (!hasSpecialChar) {
      return 'La contraseña debe contener al menos un carácter especial';
    }
    return null;
  }

  static validatePasswordStrength(password: string): number {
    if (!password || password.length === 0) return 0;
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1;
    return strength;
  }

  static validateRequired(value: any): boolean {
    if (value === null || value === undefined) {
      return false;
    }
    if (typeof value === 'string') {
      return value.trim().length > 0;
    }
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    return true;
  }

  static validateRequiredField(fieldName: string, value: any): string | null {
    if (value === null || value === undefined) {
      return `${fieldName} es requerido`;
    }
    if (typeof value === 'string' && value.trim().length === 0) {
      return `${fieldName} es requerido`;
    }
    if (Array.isArray(value) && value.length === 0) {
      return `${fieldName} es requerido`;
    }
    return null;
  }

  static validateMinLength(value: string, minLength: number): boolean {
    return value && value.length >= minLength;
  }

  static validateMinLengthField(fieldName: string, value: string, minLength: number): string | null {
    if (!value || value.length < minLength) {
      return `${fieldName} debe tener al menos ${minLength} caracteres`;
    }
    return null;
  }

  static validateMaxLength(value: string, maxLength: number): boolean {
    return value && value.length <= maxLength;
  }

  static validateMaxLengthField(fieldName: string, value: string, maxLength: number): string | null {
    if (value && value.length > maxLength) {
      return `${fieldName} no debe exceder ${maxLength} caracteres`;
    }
    return null;
  }

  static validateRange(value: number, min: number, max: number): boolean {
    return value >= min && value <= max;
  }

  static validateRangeField(fieldName: string, value: number, min: number, max: number): string | null {
    if (value < min || value > max) {
      return `${fieldName} debe estar entre ${min} y ${max}`;
    }
    return null;
  }

  static validateUrl(url: string): boolean {
    if (!url || url.trim() === '') {
      return false;
    }
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  static validateUrlField(fieldName: string, url: string): string | null {
    if (!url || url.trim() === '') {
      return `${fieldName} es requerido`;
    }
    try {
      new URL(url);
      return null;
    } catch {
      return `El formato de ${fieldName} es inválido`;
    }
  }

  static validateDni(dni: string): boolean {
    if (!dni || dni.trim() === '') {
      return false;
    }
    const dniRegex = /^[0-9]{8}[A-Za-z]$/;
    return dniRegex.test(dni);
  }

  static validateDniField(dni: string): string | null {
    if (!dni || dni.trim() === '') {
      return 'El DNI es requerido';
    }
    const dniRegex = /^[0-9]{8}[A-Za-z]$/;
    if (!dniRegex.test(dni)) {
      return 'El formato del DNI es inválido';
    }
    return null;
  }

  static validateCreditCard(cardNumber: string): boolean {
    if (!cardNumber || cardNumber.trim() === '') {
      return false;
    }
    const cleaned = cardNumber.replace(/\s/g, '');
    if (!/^\d{13,19}$/.test(cleaned)) {
      return false;
    }
    let sum = 0;
    let isEven = false;
    for (let i = cleaned.length - 1; i >= 0; i--) {
      let digit = parseInt(cleaned.charAt(i), 10);
      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      isEven = !isEven;
    }
    return sum % 10 === 0;
  }

  static validateCreditCardField(cardNumber: string): string | null {
    if (!cardNumber || cardNumber.trim() === '') {
      return 'El número de tarjeta es requerido';
    }
    const cleaned = cardNumber.replace(/\s/g, '');
    if (!/^\d{13,19}$/.test(cleaned)) {
      return 'El número de tarjeta debe tener entre 13 y 19 dígitos';
    }
    let sum = 0;
    let isEven = false;
    for (let i = cleaned.length - 1; i >= 0; i--) {
      let digit = parseInt(cleaned.charAt(i), 10);
      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      isEven = !isEven;
    }
    if (sum % 10 !== 0) {
      return 'El número de tarjeta es inválido';
    }
    return null;
  }

  static validateUsername(username: string): boolean {
    if (!username || username.trim().length < 3) {
      return false;
    }
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    return usernameRegex.test(username);
  }

  static validateUsernameField(username: string): string | null {
    if (!username || username.trim() === '') {
      return 'El nombre de usuario es requerido';
    }
    if (username.trim().length < 3) {
      return 'El nombre de usuario debe tener al menos 3 caracteres';
    }
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(username)) {
      return 'El nombre de usuario solo puede contener letras, números y guiones bajos';
    }
    return null;
  }

  static validateMatch(value: string, confirmValue: string): boolean {
    return value === confirmValue;
  }

  static validateMatchField(fieldName: string, value: string, confirmValue: string): string | null {
    if (value !== confirmValue) {
      return `Los campos ${fieldName} no coinciden`;
    }
    return null;
  }

  static validateNumeric(value: string): boolean {
    if (!value || value.trim() === '') {
      return false;
    }
    return !isNaN(Number(value)) && !isNaN(parseFloat(value));
  }

  static validateNumericField(fieldName: string, value: string): string | null {
    if (!value || value.trim() === '') {
      return `${fieldName} es requerido`;
    }
    if (isNaN(Number(value)) || isNaN(parseFloat(value))) {
      return `${fieldName} debe ser un número válido`;
    }
    return null;
  }

  static validateInteger(value: string): boolean {
    if (!value || value.trim() === '') {
      return false;
    }
    return Number.isInteger(Number(value));
  }

  static validateDecimal(value: string): boolean {
    if (!value || value.trim() === '') {
      return false;
    }
    const decimalRegex = /^\d+(\.\d+)?$/;
    return decimalRegex.test(value);
  }

  static validateAlphanumeric(value: string): boolean {
    if (!value || value.trim() === '') {
      return false;
    }
    return /^[a-zA-Z0-9]+$/.test(value);
  }

  static validateAlphabetic(value: string): boolean {
    if (!value || value.trim() === '') {
      return false;
    }
    return /^[a-zA-Z]+$/.test(value);
  }

  static validatePostalCode(postalCode: string): boolean {
    if (!postalCode || postalCode.trim() === '') {
      return false;
    }
    const postalCodeRegex = /^\d{5}$/;
    return postalCodeRegex.test(postalCode);
  }

  static validatePostalCodeField(postalCode: string): string | null {
    if (!postalCode || postalCode.trim() === '') {
      return 'El código postal es requerido';
    }
    const postalCodeRegex = /^\d{5}$/;
    if (!postalCodeRegex.test(postalCode)) {
      return 'El código postal debe tener 5 dígitos';
    }
    return null;
  }

  static validateDateNotPast(date: Date | string): boolean {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return dateObj >= today;
  }

  static validateDateNotPastField(fieldName: string, date: Date | string): string | null {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (dateObj < today) {
      return `${fieldName} no puede ser una fecha pasada`;
    }
    return null;
  }

  static validateDateNotFuture(date: Date | string): boolean {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return dateObj <= today;
  }

  static validateDateRange(startDate: Date | string, endDate: Date | string): boolean {
    const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
    const end = typeof endDate === 'string' ? new Date(endDate) : endDate;
    return start <= end;
  }

  static validateDateRangeField(startDate: Date | string, endDate: Date | string): string | null {
    const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
    const end = typeof endDate === 'string' ? new Date(endDate) : endDate;
    if (start > end) {
      return 'La fecha de inicio debe ser anterior a la fecha de fin';
    }
    return null;
  }
}

// === ARCHIVO: src/app/shared/utils/format-helper.ts ===
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Order } from '../models/order.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root'
})
export class FormatHelper {
  private currencyFormatSubject = new BehaviorSubject<string>('USD');
  public currencyFormat$: Observable<string> = this.currencyFormatSubject.asObservable();

  private dateFormatSubject = new BehaviorSubject<string>('DD/MM/YYYY');
  public dateFormat$: Observable<string> = this.dateFormatSubject.asObservable();

  constructor(private toastController: ToastController) {}

  formatCurrency(amount: number, currency?: string): string {
    const curr = currency || this.currencyFormatSubject.value;
    const symbols: { [key: string]: string } = {
      'USD': '$',
      'EUR': '€',
      'GBP': '£',
      'MXN': '$',
      'ARS': '$'
    };
    const symbol = symbols[curr] || '$';
    const formattedAmount = amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `${symbol}${formattedAmount}`;
  }

  formatDate(date: Date | string, format?: string): string {
    const fmt = format || this.dateFormatSubject.value;
    const d = typeof date === 'string' ? new Date(date) : date;
    if (isNaN(d.getTime())) {
      return 'Fecha inválida';
    }
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    const hours = d.getHours().toString().padStart(2, '0');
    const minutes = d.getMinutes().toString().padStart(2, '0');

    if (fmt === 'DD/MM/YYYY') {
      return `${day}/${month}/${year}`;
    } else if (fmt === 'MM/DD/YYYY') {
      return `${month}/${day}/${year}`;
    } else if (fmt === 'YYYY-MM-DD') {
      return `${year}-${month}-${day}`;
    } else if (fmt === 'DD/MM/YYYY HH:mm') {
      return `${day}/${month}/${year} ${hours}:${minutes}`;
    }
    return `${day}/${month}/${year}`;
  }

  formatPhone(phone: string, countryCode: string = '+54'): string {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (countryCode === '+54') {
      if (cleanPhone.length === 10) {
        return `+54 9 ${cleanPhone.substring(0, 3)}-${cleanPhone.substring(3, 6)}-${cleanPhone.substring(6)}`;
      } else if (cleanPhone.length === 11) {
        return `+54 ${cleanPhone.substring(0, 2)}-${cleanPhone.substring(2, 5)}-${cleanPhone.substring(5, 8)}-${cleanPhone.substring(8)}`;
      }
    }
    return `${countryCode} ${cleanPhone}`;
  }

  formatUserName(user: User): string {
    const firstName = user.firstName || '';
    const lastName = user.lastName || '';
    const fullName = `${firstName} ${lastName}`.trim();
    if (fullName.length === 0) {
      return user.email || 'Usuario sin nombre';
    }
    return fullName.toUpperCase();
  }

  formatOrderStatus(status: string): string {
    const statusMap: { [key: string]: string } = {
      'pending': 'Pendiente',
      'processing': 'Procesando',
      'shipped': 'Enviado',
      'delivered': 'Entregado',
      'cancelled': 'Cancelado',
      'refunded': 'Reembolsado'
    };
    return statusMap[status.toLowerCase()] || status;
  }

  formatOrderId(orderId: string): string {
    return `#${orderId.toUpperCase().padStart(8, '0')}`;
  }

  formatCreditCard(cardNumber: string): string {
    const clean = cardNumber.replace(/\s/g, '');
    if (clean.length < 13 || clean.length > 19) {
      return 'Número de tarjeta inválido';
    }
    const lastFour = clean.slice(-4);
    const masked = '*'.repeat(clean.length - 4) + lastFour;
    return masked.replace(/(.{4})/g, '$1 ').trim();
  }

  formatPercentage(value: number, decimals: number = 2): string {
    return `${(value * 100).toFixed(decimals)}%`;
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  truncateText(text: string, maxLength: number, suffix: string = '...'): string {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength - suffix.length) + suffix;
  }

  capitalizeWords(text: string): string {
    return text.replace(/\b\w/g, char => char.toUpperCase());
  }

  formatAddress(address: any): string {
    if (!address) return 'Sin dirección';
    const parts = [];
    if (address.street) parts.push(address.street);
    if (address.number) parts.push(address.number);
    if (address.city) parts.push(address.city);
    if (address.state) parts.push(address.state);
    if (address.zipCode) parts.push(address.zipCode);
    if (address.country) parts.push(address.country);
    return parts.join(', ');
  }

  formatUserDisplayName(user: User, includeEmail: boolean = false): string {
    const name = this.formatUserName(user);
    if (includeEmail && user.email) {
      return `${name} (${user.email})`;
    }
    return name;
  }

  formatOrderSummary(order: Order): string {
    const id = this.formatOrderId(order.id);
    const status = this.formatOrderStatus(order.status);
    const total = this.formatCurrency(order.total);
    const date = this.formatDate(order.createdAt);
    return `${id} - ${status} - ${total} - ${date}`;
  }

  async showFormatToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'primary'
    });
    await toast.present();
  }

  validateEmailFormat(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validatePhoneFormat(phone: string): boolean {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    return phoneRegex.test(phone);
  }

  validateDateFormat(dateString: string): boolean {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  }

  setCurrencyFormat(format: string): void {
    this.currencyFormatSubject.next(format);
  }

  setDateFormat(format: string): void {
    this.dateFormatSubject.next(format);
  }

  getCurrencySymbol(): string {
    const currency = this.currencyFormatSubject.value;
    const symbols: { [key: string]: string } = {
      'USD': '$',
      'EUR': '€',
      'GBP': '£',
      'MXN': '$',
      'ARS': '$'
    };
    return symbols[currency] || '$';
  }

  formatTimeAgo(date: Date | string): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    const now = new Date();
    const seconds = Math.floor((now.getTime() - d.getTime()) / 1000);

    if (seconds < 60) return 'Hace un momento';
    if (seconds < 3600) return `Hace ${Math.floor(seconds / 60)} minutos`;
    if (seconds < 86400) return `Hace ${Math.floor(seconds / 3600)} horas`;
    if (seconds < 2592000) return `Hace ${Math.floor(seconds / 86400)} días`;
    if (seconds < 31536000) return `Hace ${Math.floor(seconds / 2592000)} meses`;
    return `Hace ${Math.floor(seconds / 31536000)} años`;
  }

  formatInitials(firstName: string, lastName: string): string {
    const first = firstName ? firstName.charAt(0).toUpperCase() : '';
    const last = lastName ? lastName.charAt(0).toUpperCase() : '';
    return `${first}${last}` || '?';
  }

  sanitizeInput(input: string): string {
    return input.replace(/[<>]/g, '').trim();
  }

  parseQueryParams(queryString: string): { [key: string]: string } {
    const params: { [key: string]: string } = {};
    const pairs = queryString.replace(/^\?/, '').split('&');
    pairs.forEach(pair => {
      const [key, value] = pair.split('=');
      if (key) {
        params[decodeURIComponent(key)] = decodeURIComponent(value || '');
      }
    });
    return params;
  }

  buildQueryString(params: { [key: string]: any }): string {
    const pairs: string[] = [];
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== undefined) {
        pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
      }
    });
    return pairs.length > 0 ? `?${pairs.join('&')}` : '';
  }

  generateRandomId(length: number = 8): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  maskSensitiveData(data: string, showLastChars: number = 4): string {
    if (data.length <= showLastChars) {
      return '*'.repeat(data.length);
    }
    const masked = '*'.repeat(data.length - showLastChars);
    return masked + data.slice(-showLastChars);
  }

  formatJSON(json: any, indent: number = 2): string {
    try {
      return JSON.stringify(json, null, indent);
    } catch (error) {
      return 'Error al formatear JSON';
    }
  }

  parseJSON(jsonString: string): any {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      return null;
    }
  }

  cloneObject<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }

  mergeObjects<T>(target: T, source: Partial<T>): T {
    return { ...target, ...source };
  }

  isEmptyObject(obj: any): boolean {
    return Object.keys(obj).length === 0;
  }

  sortByKey<T>(array: T[], key: keyof T, ascending: boolean = true): T[] {
    return array.sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];
      if (aVal < bVal) return ascending ? -1 : 1;
      if (aVal > bVal) return ascending ? 1 : -1;
      return 0;
    });
  }

  groupBy<T>(array: T[], key: keyof T): { [group: string]: T[] } {
    return array.reduce((groups, item) => {
      const groupKey = String(item[key]);
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(item);
      return groups;
    }, {} as { [group: string]: T[] });
  }

  removeDuplicates<T>(array: T[], key?: keyof T): T[] {
    if (!key) {
      return Array.from(new Set(array));
    }
    const seen = new Set();
    return array.filter(item => {
      const value = item[key];
      if (seen.has(value)) {
        return false;
      }
      seen.add(value);
      return true;
    });
  }

  async copyToClipboard(text: string): Promise<boolean> {
    try {
      await navigator.clipboard.writeText(text);
      await this.showFormatToast('Copiado al portapapeles');
      return true;
    } catch (error) {
      return false;
    }
  }

  debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: any;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}

// === ARCHIVO: docs/identificacion-problemas-poo.md ===
# Identificación de Problemas de POO en el Código Existente

## Objetivo de la Fase 1

El objetivo de esta fase es reconocer y documentar los problemas de programación orientada a objetos que existen en el proyecto móvil desenvolvido con Ionic y Angular. Este análisis permite comprender las debilidades del código actual antes de proponer soluciones.

## Metodología de Análisis

Para identificar problemas de POO en el código, es necesario revisar las clases, servicios y componentes del proyecto aplicando los siguientes criterios de evaluación:

### Análisis de Cohesión

La cohesión mide cuánto están relacionados entre sí los miembros de una clase. Una clase con baja cohesión tiene responsabilidades dispersas que dificultan su mantenimiento y comprensión. Los indicadores de baja cohesión incluyen:

- Métodos que manipulan datos de diferentes entidades del dominio
- Campos que representan conceptos dispares sin relación lógica
- Clases que crecen indefinidamente añadiendo funcionalidades no relacionadas
- Dificultad para nombrar la clase de forma precisa y descriptiva

### Análisis de Acoplamiento

El acoplamiento mide la dependencia entre clases. Un acoplamiento fuerte dificulta los cambios y reduce la reutilización. Los síntomas de acoplamiento problemático incluyen:

- Cambios en una clase que obligan a modificar múltiples clases dependientes
- Dificultad para probar clases de forma aislada
- Dependencias circulares entre módulos
- Clases que conocen demasiado sobre la implementación interna de otras

### Análisis de Herencia

La herencia mal utilizada crea jerarquías rígidas que no permiten flexibilidad. Problemas comunes incluyen:

- Herencia cuando composición sería más apropiada
- Jerarquías profundas que dificultan la comprensión
- Clases base con métodos que las subclases nunca utilizan
- Violación del principio de substitución de Liskov

### Análisis de Encapsulamiento

El encapsulamiento protege la integridad de los datos y oculta detalles de implementación. Problemas de encapsulamiento incluyen:

- Exposición directa de campos internos sin getters/setters controlados
- Modificación de estado interno desde clases externas
- Ausencia de validación en setters o constructores
- Exposición de estructuras de datos internas que limitan cambios futuros

### Análisis de Polimorfismo

El polimorfismo permite tratar objetos de diferentes clases de forma uniforme. Problemas relacionados:

- Uso de condicionales para manejar diferentes tipos en lugar de polimorfismo
- Métodos con muchos parámetros opcionales que podrían representarse con clases
- Switch statements que duplican lógica según el tipo de objeto
- Dificultad para extender comportamiento sin modificar código existente

## Estructura del Documento de Identificación

El documento de identificación de problemas debe contener las siguientes secciones obligatorias:

1. **Lista de problemas identificados**: Cada problema debe incluir código que demuestre la situación problemática, la ubicación exacta del archivo y la línea, y una explicación de por qué constituye un problema de POO.

2. **Clasificación por principio**: Los problemas deben agruparse según el principio de POO que violan: cohesión, acoplamiento, herencia, encapsulamiento o polimorfismo.

3. **Impacto estimado**: Para cada problema, indicar el impacto en mantenimiento, testabilidad y extensibilidad del código.

## Recomendaciones para el Análisis

Al examinar el código del proyecto, presta atención especial a los servicios de autenticación y gestión de usuarios, ya que contienen la lógica de negocio principal. Los componentes visuales deben analizarse para verificar que la lógica de presentación está correctamente separada de la lógica de negocio. Los modelos de datos deben revisarse para confirmar que representan correctamente las entidades del dominio y respetan el principio de responsabilidad única.

// === ARCHIVO: docs/soluciones-aplicadas.md ===
# Soluciones de POO Aplicadas y su Justificación

## Objetivo de la Fase 2

Esta fase consiste en aplicar los principios de programación orientada a objetos para resolver los problemas identificados en la fase anterior. Cada solución debe estar justificada técnicamente y demostrar mejora medible en la calidad del código.

## Principios de POO Aplicables

### Principio de Responsabilidad Única (SRP)

Cada clase debe tener una única razón para cambiar. La aplicación de este principio implica:

- Extraer responsabilidades secundarias a clases separadas
- Crear clases cohesivas con un propósito bien definido
- Facilitar el mantenimiento al limitar el impacto de cambios
- Mejorar la testabilidad al reducir dependencias

**Aplicación práctica**: Si un servicio maneja tanto autenticación como manipulación de datos de usuarios, es necesario dividirlo en AuthService y UserService con responsabilidades claramente diferenciadas.

### Principio de Abierto/Cerrado (OCP)

Las clases deben estar abiertas para extensión pero cerradas para modificación. Este principio se logra mediante:

- Uso de herencia y polimorfismo para extender comportamiento
- Implementación de patrones como Strategy, Observer o Decorator
- Abstracción de comportamientos comunes en interfaces
- Evitar modificaciones en código existente al añadir nuevas funcionalidades

### Principio de Sustitución de Liskov (LSP)

Los objetos de una clase derivada deben poder sustituir a objetos de la clase base sin alterar las propiedades del programa. La implementación correcta requiere:

- Mantener la coherencia entre las precondiciones y postcondiciones de métodos overridden
- No imponer requisitos más fuertes en las subclases que los definidos en la clase base
- Garantizar que los métodos de la subclase sean compatibles con los de la clase base
- Usar composición cuando la herencia crea relaciones artificiales

### Principio de Segregación de Interfaces (ISP)

Es preferible tener interfaces pequeñas y específicas a interfaces grandes y generales. La aplicación incluye:

- Definir interfaces con un conjunto reducido de métodos relacionados
- Evitar que las clases dependan de métodos que no utilizan
- Crear múltiples interfaces especializadas en lugar de una interfaz monolítica
- Permitir que las clases implementen solo las interfaces que necesitan

### Principio de Inversión de Dependencias (DIP)

Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones. La implementación correcta implica:

- Depender de interfaces o clases abstractas en lugar de implementaciones concretas
- Inyectar dependencias a través del constructor
- Usar inyección de dependencias para gestionar relaciones entre componentes
- Facilitar el intercambio de implementaciones sin modificar consumidores

## Justificación de Soluciones

Cada solución aplicada debe documentarse con la siguiente estructura:

1. **Problema original**: Referencia al problema identificado en la fase 1 con su ubicación en el código.

2. **Solución implementada**: Código refactorizado que resuelve el problema, incluyendo la nueva estructura de clases y relaciones.

3. **Principio de POO aplicado**: Explicación del principio o principios que justifican la solución.

4. **Beneficios obtenidos**: Mejoras concretas en términos de mantenibilidad, testabilidad, extensibilidad o rendimiento.

5. **Trade-offs considerados**: Cualquier妥协 o compromiso realizado al aplicar la solución, como mayor complejidad estructural o necesidad de código adicional.

## Ejemplo de Refactorización

Cuando se identifica una clase con múltiples responsabilidades, el proceso de refactorización sigue estos pasos:

- Identificar las diferentes responsabilidades de la clase
- Extraer cada responsabilidad a una clase separada
- Establecer las relaciones apropiadas entre las nuevas clases
- Actualizar los consumidores para usar las nuevas abstracciones
- Verificar que las pruebas existentes siguen pasando
- Añadir nuevas pruebas para cubrir el comportamiento refactorizado

// === ARCHIVO: docs/evaluacion-mejoras.md ===
# Evaluación del Impacto de las Mejoras y Propuestas de Mejora Adicional

## Objetivo de la Fase 3

La tercera fase consiste en evaluar el impacto de las mejoras de POO aplicadas en el código y proponer mejoras adicionales que continúen elevando la calidad del software. Esta evaluación debe ser objetiva y basada en métricas concretas.

## Métricas de Evaluación

### Métricas de Código

Para evaluar el impacto de las refactorizaciones, se utilizan las siguientes métricas:

- **Líneas de código por clase**: Mide el tamaño de las clases. Clases más pequeñas suelen indicar mayor cohesión y mejor aplicación del SRP.

- **Índice de acoplamiento**: Cuenta el número de dependencias entrantes y salientes de cada clase. Un acoplamiento bajo indica mayor independencia y facilidad de mantenimiento.

- **Profundidad de herencia**: Mide los niveles de jerarquía. Jerarquías poco profundas facilitan la comprensión y reducen la complejidad.

- **Métodos públicos vs privados**: Un número elevado de métodos públicos puede indicar violation del encapsulamiento o falta de abstracción.

### Métricas de Mantenibilidad

- **Facilidad de cambio**: Evaluar cuánto afecta un cambio típico a otras partes del sistema. Las refactorizaciones exitosas reducen esta propagación.

- **Testabilidad**: Medir la facilidad de crear pruebas unitarias para las clases refactorizadas. La inyección de dependencias y el bajo acoplamiento mejoran la testabilidad.

- **Reutilización**: Determinar si las clases refactorizadas pueden utilizarse en otros contextos sin modificación. La aplicación correcta de principios de POO aumenta la reutilización.

## Beneficios Observados

Las mejoras aplicadas deben documentarse con los beneficios específicos observados en cada área:

### Mejoras en Cohesión

Las clases ahora tienen responsabilidades bien definidas, lo que facilita la comprensión del código y reduce el tiempo necesario para realizar cambios. Cada clase puede evolucionar de forma independiente sin afectar otras partes del sistema.

### Mejoras en Acoplamiento

La reducción de dependencias directas entre clases permite modificar implementaciones sin propagar cambios. El uso de abstracciones e inyección de dependencias crea un sistema más flexible y mantenible.

### Mejoras en Testabilidad

Las clases con responsabilidades únicas y dependencias explícitas son más fáciles de probar de forma aislada. La posibilidad de mockear dependencias facilita la escritura de pruebas unitarias efectivas.

### Mejoras en Extensibilidad

El código refactorizado permite añadir nuevas funcionalidades mediante extensión en lugar de modificación. Los patrones aplicados facilitan la adición de nuevos comportamientos sin impactar el código existente.

## Propuestas de Mejora Adicional

Basándose en la evaluación realizada, se proponen las siguientes áreas de mejora continua:

### Refinamientos de Abstracción

Identificar oportunidades para crear abstracciones adicionales que simplifiquen la interacción con sistemas complejos. Considerar la creación de fachadas que oculten complejidad innecesaria para los consumidores.

### Patrones de Diseño

Evaluar la aplicación de patrones de diseño adicionales que puedan resolver problemas recurrentes. Patrones como Factory, Builder, Repository o Observer pueden proporcionar soluciones elegantes a desafíos comunes.

### Optimización de Rendimiento

Analizar el impacto de las abstracciones en el rendimiento de la aplicación. En algunos casos, puede ser necesario sacrificar pureza en el diseño por beneficios medibles de rendimiento.

### Documentación Técnica

Mejorar la documentación del código para facilitar la incorporación de nuevos desarrolladores. Documentar las decisiones de diseño y las razones de las refactorizaciones realizadas.

## Conclusiones

La aplicación sistemática de principios de POO produce mejoras tangibles en la calidad del código. Sin embargo, la refactorización es un proceso continuo que requiere evaluación constante y disposición a iterar sobre las soluciones implementadas. El objetivo no es alcanzar la perfección teórica, sino crear un código que sea mantenible, testeable y extensible dentro del contexto específico del proyecto.
```
