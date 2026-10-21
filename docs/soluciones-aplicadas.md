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