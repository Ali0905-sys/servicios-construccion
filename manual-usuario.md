# Manual de Usuario
## Sistema de Gestión Académica

> **Estado de la documentación:** primera versión del sistema (aplicación de consola).
>
> **Nota:** El proyecto todavía está en desarrollo. La interfaz gráfica con Windows Forms está pendiente. Este manual describe únicamente las funciones que aparecen en el código actual y deberá actualizarse cuando se implemente la versión gráfica.

## 1. Introducción

El Sistema de Gestión Académica es una aplicación desarrollada en C# que permite administrar información relacionada con estudiantes, cursos, matrículas y calificaciones.

Su propósito es facilitar el registro y la consulta de información académica, así como realizar cálculos de promedios de manera automática.

Este manual describe las funcionalidades disponibles en la primera versión del sistema y los pasos que debe seguir el usuario para utilizarlas.

## 2. Inicio del sistema

Al ejecutar la versión actual de la aplicación, se muestra un menú principal con el nombre **Sistema de Gestión Académica**.

Desde este menú, el usuario puede acceder a las opciones disponibles:

1. Registrar estudiante.
2. Registrar curso.
3. Matricular estudiante.
4. Registrar calificaciones.
5. Consultar promedio del estudiante.
6. Consultar promedio del curso.
7. Consultar información académica.
8. Mostrar cursos activos.
9. Salir.

Para ingresar a una funcionalidad, el usuario debe escribir el número correspondiente y presionar la tecla **Enter**.

## 3. Registro de estudiantes

Esta opción permite ingresar nuevos estudiantes al sistema.

**Procedimiento:**

1. Seleccionar la opción **1. Registrar estudiante**.
2. Ingresar la cédula del estudiante.
3. Ingresar el nombre del estudiante.
4. El sistema registra la información y muestra un mensaje de confirmación.

El sistema verifica que la cédula no se encuentre registrada anteriormente. Si ya existe un estudiante con esa identificación, muestra un mensaje indicando que el estudiante ya está registrado y no agrega un registro duplicado.

## 4. Registro de cursos

Esta funcionalidad permite agregar cursos al sistema académico.

**Procedimiento:**

1. Seleccionar la opción **2. Registrar curso**.
2. Ingresar el código del curso.
3. Escribir el nombre del curso.
4. El sistema registra el curso y lo establece como activo.

El sistema verifica que el código del curso no exista previamente. Si ya está registrado, informa al usuario y evita duplicar el registro.

## 5. Matrícula de estudiantes

Esta opción permite asociar un estudiante con un curso disponible.

**Procedimiento:**

1. Seleccionar la opción **3. Matricular estudiante**.
2. Ingresar la cédula del estudiante.
3. Ingresar el código del curso.
4. El sistema verifica que el estudiante exista.
5. Comprueba que el curso esté registrado y activo.
6. Si las condiciones se cumplen, registra la matrícula.

El sistema también verifica que el estudiante no se encuentre matriculado anteriormente en el mismo curso.

## 6. Registro de calificaciones

Esta funcionalidad permite registrar las notas de un estudiante en un curso en el que se encuentre matriculado.

**Procedimiento:**

1. Seleccionar la opción **4. Registrar calificaciones**.
2. Ingresar la cédula del estudiante.
3. Ingresar el código del curso.
4. Introducir la calificación solicitada.

Las calificaciones deben encontrarse dentro del rango de **0 a 100**. Si el usuario introduce una nota fuera de ese rango, el sistema solicita nuevamente el dato.

Además, el sistema verifica que exista una matrícula asociada al estudiante y al curso indicados antes de registrar la calificación.

## 7. Consulta del promedio del estudiante

Esta opción permite calcular el promedio general de las calificaciones registradas para un estudiante.

**Procedimiento:**

1. Seleccionar la opción **5. Consultar promedio del estudiante**.
2. Ingresar la cédula del estudiante.
3. El sistema verifica que el estudiante esté registrado.
4. Si existen calificaciones, calcula y muestra el promedio general con dos decimales.

Si el estudiante no tiene calificaciones registradas, el sistema muestra un mensaje informativo.

## 8. Consulta del promedio del curso

Esta funcionalidad permite conocer el promedio general de las calificaciones registradas en un curso.

**Procedimiento:**

1. Seleccionar la opción **6. Consultar promedio del curso**.
2. Ingresar el código del curso.
3. El sistema verifica que el curso exista.
4. Si existen calificaciones registradas, calcula y presenta el promedio general del curso con dos decimales.

Si todavía no existen calificaciones, el sistema informa al usuario.

## 9. Consulta de información académica

Esta opción permite consultar la información académica de un estudiante específico.

**Procedimiento:**

1. Seleccionar la opción **7. Consultar información académica**.
2. Ingresar la cédula del estudiante.
3. El sistema muestra el nombre y la cédula del estudiante.
4. Presenta los cursos en los que se encuentra matriculado.
5. Muestra el código y el estado de cada curso.
6. Presenta las calificaciones registradas y el promedio de cada matrícula cuando existan notas.

Si el estudiante no tiene cursos matriculados, el sistema muestra un mensaje indicándolo.

## 10. Mostrar cursos activos

Esta funcionalidad permite visualizar los cursos que se encuentran registrados con estado activo.

**Procedimiento:**

1. Seleccionar la opción **8. Mostrar cursos activos**.
2. El sistema consulta los cursos registrados.
3. Muestra el código y el nombre de cada curso activo.

Si no existen cursos activos, presenta un mensaje informativo.

## 11. Validaciones y mensajes del sistema

La versión actual incorpora validaciones para controlar algunos datos y evitar inconsistencias durante el registro y la consulta de información.

Entre las principales se encuentran:

- Verificación de cédulas de estudiantes duplicadas.
- Verificación de códigos de cursos existentes.
- Comprobación de la existencia del estudiante antes de matricularlo.
- Comprobación de que el curso exista y esté activo.
- Prevención de matrículas duplicadas para un mismo estudiante y curso.
- Validación de calificaciones dentro del rango permitido de 0 a 100.
- Validación de entradas numéricas para las opciones del menú.
- Validación de entradas numéricas para las calificaciones.

El sistema muestra mensajes para informar si una operación se realizó correctamente o si ocurrió alguna situación que impide completarla.

## 12. Cierre del sistema

Para finalizar la aplicación, el usuario debe seleccionar la opción **9. Salir** del menú principal.

El sistema presenta el mensaje:

> Saliendo del sistema...

Después de esta acción, termina la ejecución del programa.

## 13. Consideraciones sobre el almacenamiento de información

En la versión actual, la información se administra mediante listas y colecciones en memoria.

Por esta razón, los registros permanecen disponibles mientras la aplicación está en ejecución. El código revisado no implementa almacenamiento permanente en archivos ni en una base de datos; por lo tanto, la información se pierde al cerrar el programa.

## 14. Actualización de este manual

Este documento corresponde a la primera versión de consola del Sistema de Gestión Académica.

Cuando se implemente la interfaz gráfica mediante Windows Forms, será necesario actualizar los procedimientos, los nombres de las opciones, las instrucciones de navegación y las capturas de pantalla para que coincidan con el funcionamiento real de la versión final.
