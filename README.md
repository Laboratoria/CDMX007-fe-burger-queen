# Burguer Queen 

## Resumen

Burguer Queen es un proyecto que busca una propuesta para un negocio en la cadena de alimentos de comida rápida para mejorar el servicio y hacerlo más ágil se busca con ello recrear un ambiente más efectivo de trabajo en el que no sea complicado utilizar una web app para hacer un pedido. Dentro del presente proyecto se realizo una mejor forma de generar pedidos a la que se acostumbra en este tipo de lugares con comandas que tienen muchos pasos a seguir y que no te dan accesibilidad en nuestra forma de hacer un pedido. Durante el transcurso de la investigación profundizamos en la forma de trabajo de un encargado de barra para comida rápida para validar si los procesos que incluimos eran los adecuados.


## Contexto

Para contextualizar el presente trabajo se analiza la investigación que se tiene de la INEGI con respecto a los trabajadores de restaurantes en comida rápida:

En nuestro país, de acuerdo con la ENOE, al tercer trimestre de 2017 la población con esta ocupación es cercana a 1.6 millones de personas, de las cuales 57% son mujeres y 43% hombres. Además, 53% de estos ocupados preparan comida rápida en establecimientos y 47% la elaboran y venden de manera ambulante.  
De cada mil ocupados en la República Mexicana, 30 son preparadores de comida rápida. De acuerdo con el lugar de residencia de estos ocupados, ocho entidades federativas (Estado de México, Jalisco, Veracruz de Ignacio de la Llave, Ciudad de México, Guanajuato, Michoacán de Ocampo, Puebla y Guerrero), concentran poco más de la mitad de ellos en el país (54.4 por ciento). 

Si se considera el nivel educativo entre los que preparan comida rápida en establecimientos y los que la preparan y venden de manera ambulante, se observa que es más alto el nivel de instrucción entre los primeros: de cada 100 son 65 los que cuentan con educación básica, 32 tienen educación post básica y solo tres no cuentan con instrucción. En el caso de los que preparan y venden de manera ambulante, de cada 100 son 74 quienes tienen educación básica, 18 con post básica y ocho sin instrucción.

Las jornadas de trabajo más largas entre los preparadores de comida rápida las experimentan los que trabajan en establecimientos, pues 64.8% laboran más de 35 horas a la semana. En el caso de los que preparan y venden alimentos en forma ambulante, 57.4% laboran más de 35 horas a la semana y 42.6% menos de 35 horas a la semana.

Los preparadores de comida rápida ganan en promedio 32 pesos por hora trabajada. Entre los que la preparan en establecimientos el promedio es de 30.8 pesos y para los que lo hacen en forma ambulante es de 33.5 pesos por hora. Si se toma en consideración el nivel de ingresos por salario mínimo3 mensual que perciben las personas con estas ocupaciones, destaca que de cada 100 de estos ocupados, 60 ganan entre uno y dos salarios mínimos y nueve no perciben ingresos.
La investigación que se lleva a cabo en México por parte de [Mercawise](https://www.mercawise.com/estudios-de-mercado-en-mexico/encuesta-sobre-comida-rapida
), nos permite dirigir nuestros esfuerzos a lo que realmente están pidiendo de igual forma los clientes.
En esta investigación se muestra gráficamente lo siguiente:
- De una muestra de 100 encuestados de la república mexicana con un rango de edades de 25-34 años son los usuarios que más consumen comida rápida.
- En un 47% gasta de presupuesto en comida rápida de $100 a $200 pesos. 
- En un 82% de los encuestados valoran más la calidad en los alimentos en los establecimientos de comida rápida, apariencia del lugar en segundo lugar y la rapidez en el servicio como tercer lugar.

![encuesta](https://i.ibb.co/9w09bYy/muestra.jpg)
![encuesta](https://i.ibb.co/VJfTKLK/fracuencia.jpg)
![encuesta](https://i.ibb.co/ScwWWzj/presu.jpg)
![encuesta](https://i.ibb.co/9t4B3QP/valoran.jpg)
![encuesta](https://i.ibb.co/9gWP9K7/cadena-fav.jpg)

Por lo cual elegimos generar un modelo de negocio en el cual tengamos contacto aún con los clientes ya que a pesar de que valoran la rapidez también nos dimos cuenta que requieren al menos una atención personalizada entonces buscamos un modelo de negocio como mencionamos en nuestro objetivo general accesible.

Para  nuestra investigación se obtienen los requerimientos tanto de la curricula de UX tanto de la de Front end para poder relacionar todos los requerimientos:

### Requerimientos

Entender cómo se realizan los pedidos en un restaurante similar a BQ y cuáles son las necesidades del personal de cocina y del personal de atención al público (meser@s y cajer@s).
Ideal si dentro de la investigación toman fotos de las formas en que se toman pedidos actualmente.
Diseñar la versión para tablets de esta aplicación, teniendo en cuenta el modo de uso de esta tablet (por ej. El uso de la pantalla táctil) y los distintos tipos de usuarios.
El diseño se debe adaptar a dos tamaños de tablets 9.7 y 7 pulgadas.
Crear un ícono para poder agregar la pantalla al home de la tablet. Puedes usar appicon y agregar las especificaciones para el equipo de desarrollo.
El estado actual del pedido siempre visible mientras tomamos un pedido.
Necesitamos hacer una web app, así será accesible y funcionará bien en tablets iOS y Android.
Testear e iterar los diseños con personal de restaurantes similares a BQ.
Entregar las especificaciones de diseño al equipo de desarrollo en Figma, Zeplin ó XD.

### UI

#### Hito 1: Tomar pedidos

* Ingresar nombre del cliente.
* Filtrar _menú_ por _desayuno_ y _resto del día_.
* Agregar ítem al pedido.
* Eliminar ítem del pedido.
* Mostrar _resumen_ de pedido con todos los items y el total.
* Enviar a cocina (esto debe guardar el pedido).

#### Hito 2: Ver/atender pedidos

* Vista de pedidos pendientes
* Marcar pedido como listo
* Ver historial de pedidos

#### Hito 3: Autenticación

* Inicio de sesión
* Restaurar contraseña

### UX

Entender cómo se realizan los pedidos en un restaurante similar a BQ y cuáles son las necesidades del personal de cocina y del personal de atención al público (meser@s y cajer@s).
Ideal si dentro de la investigación toman fotos de las formas en que se toman pedidos actualmente.
Diseñar la versión para tablets de esta aplicación, teniendo en cuenta el modo de uso de esta tablet (por ej. El uso de la pantalla táctil) y los distintos tipos de usuarios.
El diseño se debe adaptar a dos tamaños de tablets 9.7 y 7 pulgadas.
Crear un ícono para poder agregar la pantalla al home de la tablet. Puedes usar appicon y agregar las especificaciones para el equipo de desarrollo.
El estado actual del pedido siempre visible mientras tomamos un pedido.
Necesitamos hacer una web app, así será accesible y funcionará bien en tablets iOS y Android.
Testear e iterar los diseños con personal de restaurantes similares a BQ.
Entregar las especificaciones de diseño al equipo de desarrollo en Figma, Zeplin ó XD.

* Debe **verse bien y funcionar bien en tablets**.
* **No queremos una app nativa**, sino una web app que se pueda _agregar a la
  pantalla de inicio_ como PWA.
* Queremos botones grandes para fácil uso en pantallas táctiles (touch screens).
* Queremos el estado actual del pedido siempre visible mientras tomamos un
  pedido.
* Queremos que sea accesible y que funcione bien en tablets iOS y Android.


## Problema

Para poder elegir entre las muchas problemáticas que existen dentro de un restaurante de cómida rápida tuvimos que realizar una entrevista a profundidad a una joven de 26 años que trabajó en Domino’s, ella nos dio todos sus puntos de vista y así elegimos una problemática clara. Utilizamos la herramienta de Empathy Map para poder ver los pains y gains del sistema que ella controlaba así como las emociones que tenía en su trabajo.

![problema](https://i.ibb.co/2nMXwKL/empathy-map.jpg)

Algunos de los problemas que pudimos ver con Daniela fueron los siguientes:

- La falta de capacitación laboral por parte de la empresa hizo que Daniela aprendiera a prueba y error.
- Los botones en el sistema eran confusos, ya que explicaba que cuando era para repartir o para comer en el lugar no estaban bien especificados.
- La cancelación del pedido era complicada, y por la indecisión del cliente por política se cobraba al mesero.
- No estaban actualizadas las promociones, ni había filtros para encontrarlas por lo cual era muy complicado y tardado llegar a la promoción.
- El sistema estaba en ingles por lo que era complicado para ella entender.
-Así como era una molestia para el que atendía como para el cliente que no se sabía si habían ciertos ingredientes sino hasta que se hacía el pedido en cocina.

## Objetivos

**General**
Realizar un MVP de Android y IOS basada en la accesibilidad: perceptibilidad, operatividad, simplicidad e indulgencia, creado para los meseros teniendo en cuenta a los demás stakeholders.

**Específicos**
- Realizar research para analizar correctamente la data para obtener el problema verdadero
- Tener el conocimiento que nos permita implementar un prototipo de alta fidelidad para nuestro usuario principal.
- Se pretende testear el prototipo de baja fidelidad para agregar al de alta todas las cualidades exigidas por el usuario.


## Stakeholders

Para poder revisar el panorama actual de un empleado de comida rápida tuvimos que investigar su entorno y con quien se rodea, por lo cual utilizamos la herramienta de stakeholders map para que cualquier movimiento que generamos en el prototipo e incluyamos la interacción de igual forma con los demás personajes.

![stakeholders](https://i.ibb.co/Ky1DHwS/stakeholdermap.png)

### Visitas de campo
Logramos obtener información a través de nuestra entrevista con Daniela ella nos dio los siguientes datos:

PAINS:
- No se les da ticket a los clientes
- Tiene demasiados botones
- No tiene filtros
- Promociones desordenadas
- Sin actualización de promociones
- Las promos se tienen que recordar ya que son con código.
- No hay avisos del área de cocina si no hay algún ingrediente
- Para cancelar un producto que no requiere el cliente es un problema el trámite.
- Para llenar la dirección del cliente se confunde mucho.
- La capacitación es a prueba y error.
- Muchos procesos se delegan al gerente 
- No hay estructura en pedidos ni tiempos

GAINS:
- Que se acomoden los botones en secciones
- Botones de diferentes colores
- Postres ordenados
- Todo en español
- Promos en existencia
- Capacitación divertida 
 
### KPI’S Cuantitativos
Para poder realizar una medición correcta de nuestra interfaz tenemos que testearla con usuarios clave, por ellos se realizó una prueba de usabilidad y se midió el tiempo en que se finaliza la tarea principal que es “Realizar un pedido”. 



### Insights

El encargado de barra desea una web app que genere de forma rápida y ágil su proceso de pedido porque indica que cuando tiene que modificar algún pedido por indecisión de sus clientes, pierde tiempo llamando al gerente, por lo cual decidimos agregar un formulario que apareciera de menu y que así se tomara mucho menos tiempo el usuario de nuestra app en registrar y además agregamos el botón de eliminar y editar para que ellos tengan la facilidad de hacer bien las cosas, recordando la seguridad a nuestro gerente de que no se podrá hacer ningún fraude ya que todo movimiento que realice el empleado estará monitoreado.

El encargado de barra necesita revisar las promociones en tiempo y forma, así como poder filtrar esto ya que nos comenta que es muy difícil encontrar una promo si es que el establecimiento tiene muchas promociones y no genera una actualización correcta. Por esto decidimos ingresar en nuestra web app un apartado sólo para promociones y se puedan agregar al pedido, y filtre por nombre de promoción.

El encargado de barra nos menciona que le urge hacer un corte de caja rápido y sin problemas con el gerente, por lo cual se genera un apartado para que al finalizar la jornada de trabajo el empleado pueda realizar el cierre con la información que ya se registró durante el día.

El encargado de barra nos menciona que sus compañeros que van iniciando tienen problemas con la capacitación ya que no hay como tal ellos aprenden con el método de prueba y error, así que para que ellos no fallen y puedan estudiar mientras se trabaja les agregamos el manual de procedimientos para que ellos realicen correctamente su trabajo.

### Benchmark

Aplicaciones para realizar pedidos en restaurantes de comida rápida: Teniendo conocimiento acerca de la competencia podemos hacer una medición de lo que les resulta más valioso a nuestros clientes.


![benchmark](https://i.ibb.co/ChdQpyj/benchmark.jpg)

Nos percatamos de que muchos de los inconvenientes que se tenían en otras cadenas de comida rápida tenían los mismos errores en sus sistemas.


## Retos de Diseño



1.       La primera propuesta se da con la intención de cumplir la necesidad principal de nuestro cliente que es la generación de pedidos. 
2.       El segundo reto será lograr que nuestro usuario pueda registrar todos sus pedidos para que cuando finalice su jornada laboral únicamente de clic a un botón para que envíe su información.
3.  El siguiente reto será que a partir de una categoría de promociones se puedan filtrar y encontrar mucho más rápido la promoción que se desea ingresar en el pedido.
 
4.       El cuarto reto será que nuestro cliente pueda modificar y eliminar de su pedido algún producto que el cliente ya no desee.

**Argumentos de los retos de diseño:**
- Algo que pudimos notar con nuestros KPIS es que muchos de los productos que se ofrecen son similares y no resuelven el generar el pedido de forma más ágil.
-  
### Diagrama de Flujos

El diagrama de flujos inicial fue el siguiente:


![diagrama de flujos]()

## Prototipo de Alta Fidelidad





















# Burger Queen

## Preámbulo

[React](https://reactjs.org/), [Angular](https://angular.io/) y [Vue](https://vuejs.org/)
son algunos de los _frameworks_ y _librerías_ de JavaScript más utilizados por
lxs desarrolladorxs alrededor del mundo, y hay una razón para eso.
En el contexto del navegador, [_mantener la interfaz sincronizada con el estado
es difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Al elegir un _framework_ o _librería_ para nuestra interfaz, nos apoyamos en una
serie de convenciones e implementaciones _probadas_ y _documentadas_ para
resolver un problema común a toda interfaz web. Esto nos permite concentrarnos
mejor (dedicar más tiempo) en las caractrísticas _específicas_ de
nuestra aplicación.

Cuando elegimos una de estas tecnologías no solo importamos un pedacito de
código para reusarlo (lo cuál es un gran valor per se), si no que adoptamos una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas
**abstracciones**, un **vocabulario**, una **comunidad**, etc...

Como desarrolladora Front-end, estos kits de desarrollo pueden resultarte
de gran ayuda para implementar rápidamente características de los proyectos en
los que trabajes.

## Resumen del proyecto

Esta vez tenemos un proyecto 100% por encargo. Si bien siempre puedes (y debes)
hacer sugerencias de mejoras y/o cambios, muchas veces trabajarás en proyectos
en los que primero hay que asegurarse de cumplir con lo requerido.

Un pequeño restaurante de hamburguesas, que está creciendo, necesita una
interfaz en la que puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente (a través de un
_backend_ del que nos darán detalles más adelante).

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

Esta es la información que tenemos del cliente:

> Somos **Burguer Queen**, una cadena de comida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y para
> seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de
> nuestros clientes.
>
> Tenemos 2 menús: uno muy sencillo para el desayuno:
>
> | Ítem                      | Precio \$ |
> | ------------------------- | --------- |
> | Café americano            | 5         |
> | Café con leche            | 7         |
> | Sandwich de jamón y queso | 10        |
> | Jugo de frutas natural    | 7         |
>
> Y otro menú para el resto del día:
>
> | Ítem                 | Precio |
> | -------------------- | ------ |
> | **Hamburguesas**     | **\$** |
> | Hamburguesa simple   | 10     |
> | Hamburguesa doble    | 15     |
> | **Acompañamientos**  | **\$** |
> | Papas fritas         | 5      |
> | Aros de cebolla      | 5      |
> | **Para tomar**       | **\$** |
> | Agua 500ml           | 5      |
> | Agua 750ml           | 7      |
> | Bebida/gaseosa 500ml | 7      |
> | Bebida/gaseosa 750ml | 10     |
>
> **Importante:** Los clientes pueden escoger entre hamburguesas de res,
> de pollo, o vegetariana. Además, por \$ 1 adicional, pueden agregarle queso
> o huevo.
>
> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien
> el su pedido varias veces antes de finalizarlo.

La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. El usuario debe poder ir eligiendo qué _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el
costo total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

## Objetivos de aprendizaje

1. El objetivo principal de es aprender a construir una _interfaz web_ usando
   el _framework_ elegido (React, Angular o Vue). Todos estos frameworks de
   Front-end atacan el mismo problema: **cómo mantener la interfaz y el estado
   sincronizados**. Así que esta experiencia espera familiarizarte con el concepto
   de _estado de pantalla_, y cómo cada cambio sobre el estado se va a
   ir reflejando en la interfaz (por ejemplo, cada vez que agregamos un _producto_
   a un _pedido_, la interfaz debe actualizar la lista del pedido y el total).

2. Como objetivo secundario, deberás seguir las recomendaciones para PWAs
   (_Progressive Web Apps_), lo cual incluye conceptos como **offline**. Para
   guiarte con respecto a este tema te recomendamos usar [Lighthouse](https://developers.google.com/web/tools/lighthouse/?hl=es),
   que es una herramienta de Google que nos ayuda a asegurar que nuestras web apps
   sigan "buenas prácticas". De hecho, usaremos Lighthouse a la hora de evaluar el
   proyecto.

3. Finalmente, la interfaz debe estar diseñada específicamente para correr en
   **tablets**.

Tópicos: _react_, _angular_,_vue_, _pwa_, _offline-first_, _service-worker_.

## Consideraciones

Este proyecto se debe "resolver" de forma individual.

Trabaja en una historia de usuario hasta terminarla antes de pasar a la siguiente. Trabaja
hasta la historia que puedas en el tiempo especificado.

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6+), HTML y CSS y empaquetada de manera automatizada.
En este proyecto Sí está permitido usar librerías o frameworks
(debes elegir entre [React](https://reactjs.org/),
[Angular](https://angular.io/) o [Vue](https://vuejs.org/)).

La aplicación debe ser un _Single Page App_. Los pedidos los tomaremos desde una
_tablet_, pero **no queremos una app nativa**, sino una web app que sea
**responsive** y pueda funcionar **offline**.

Necesitamos pensar bien en el aspecto UX de de quienes van a tomar los pedidos,
el tamaño y aspecto de los botones, la visibilidad del estado actual del
pedido, etc.

La aplicación desplegada debe tener 80% o más el las puntuaciones de
Performance, Progressive Web App, Accessibility y Best Practices de Lighthouse.

La aplicación debe hacer uso de `npm-scripts` y contar con scripts `start`,
`test`, `build` y `deploy`, que se encarguen de arrancar, correr las pruebas,
empaquetar y desplegar la aplicación respectivamente.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
_lines_ y _branches_.

Este proyecto incluye un _boilerplate_ con el código necesario para arrancar con
la parte de backend ya resuelta. El _boilerplate_ incluye los siguientes
archivos/carpetas con la configuración de Fierbase (hosting, firestore y
functions):

```text
./04-burger-queen/
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── functions
│   ├── index.js
│   ├── package.json
└── README.md

```

Para este proyecto trabajarás de la mano de una UX designer. Parte de la
interfaz ha sido propuesta y has escogido una de las propuestas para
desarrollarla.

Por otro lado, la parte de la interfaz no está incluida, por lo que, deberás
definir la estructura de carpetas y archivos que consideres necesaria. Puedes
guiarte de las convenciones del _framework_ elegido. Por ende, los _tests_ y el
_setup_ necesario para ejecutarlos, serán hechos por ti.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio.

## Criterios de aceptación del proyecto

### Definición del producto

El [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s) nos presenta este _backlog_ que es el resultado de su trabajo con el cliente hasta hoy.

---

#### [Historia de usuario 1] Mesero/a debe poder tomar pedido de cliente

Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario)

- Anotar nombre de cliente.
- Agregar productos al pedido.
- Eliminar productos.
- Ver resumen y el total de la compra.
- Enviar pedido a cocina (guardar en alguna base de datos).
- Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

- Debes haber recibido _code review_ de al menos una compañera.
- Haces _test_ unitarios y, además, has testeado tu producto manualmente.
- Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
- Desplegaste tu aplicación y has etiquetado tu versión (git tag).

---

#### [Historia de usuario 2] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de los clientes en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un cliente.

##### Criterios de aceptación

- Ver los pedidos ordenados según se van haciendo.
- Marcar los pedidos que se han preparado y están listos para servirse.
- Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

- Debes haber recibido _code review_ de al menos una compañera.
- Haces _test_ unitarios y, además, has testeado tu producto manualmente.
- Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
- Desplegaste tu aplicación y has etiquetado tu versión (git tag).

---

#### [Historia de usuario 3] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a los clientes que las hicieron.

##### Criterios de aceptación

- Ver listado de pedido listos para servir.
- Marcar pedidos que han sido entregados.

##### Definición de terminado

- Debes haber recibido _code review_ de al menos una compañera.
- Haces _test_ unitarios y, además, has testeado tu producto manualmente.
- Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
- Desplegaste tu aplicación y has etiquetado tu versión (git tag).
- Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.

---

## Habilidades involucradas en el proyecto

### Blandas

| Habilidad                                       |
| ----------------------------------------------- |
| Planificación, organización y manejo del tiempo |
| Autoaprendizaje                                 |
| Presentaciones                                  |
| Adaptabilidad                                   |
| Solución de problemas                           |
| Trabajo en equipo                               |
| Responsabilidad                                 |
| Dar y recibir feedback                          |
| Comunicación eficaz                             |

### Técnicas, Front-end

| Habilidad                     |
| ----------------------------- |
| **Computer Science**          |
| Lógica                        |
| Arquitectura                  |
| **Source Control Management** |
| Git                           |
| GitHub                        |
| **JavaScript**                |
| Estilo                        |
| Nomenclatura/semántica        |
| Funciones/modularidad         |
| Estructuras de datos          |
| Tests                         |
| **HTML**                      |
| Validación                    |
| Estilo                        |
| Semántica                     |
| **CSS**                       |
| DRY                           |
| Responsive                    |

### Técnicas, UX

| Habilidad                                         |
| ------------------------------------------------- |
| **Investigación (_Reseacrh_)**                    |
| User Centricity (_Diseño Centrado en el Usuario_) |
| **Diseño Visual (_Visual Design_)**               |

---

## Primeros pasos

1. El primer paso de este proyecto debe ser convertir el menú descrito por el
   cliente en una estructura que podamos poner en un archivo JSON para después
   _pintar_ en la pantalla

2. Haz un _fork_ de este repo (en GitHub).

3. Clona tu _fork_ en tu computadora:

   ```sh
   git clone git@github.com:<tu-usuario-de-github>/<cohortid>-burger-queen.git
   cd <cohortid>-burger-queen
   ```

4. Crea una rama a partir de `master` para empezar a trabajar. Por ejemplo:

   ```sh
   git checkout -b develop
   ```

5. Crear proyecto en [Firebase](https://firebase.google.com/)

6. Habilitar Firestore (_comenzar en modo bloqueado_) en sección de "Bases de
   Datos" de [Firebase console](https://console.firebase.google.com/).

7. Instalar utilidad de línea de comando de Firebase:

   ```sh
   npm i -g firebase-tools
   ```

8. Ahora usa el siguiente comando para acceder con tu cuenta de Google:

   ```sh
   firebase login
   ```

9. Agregamos entorno de producción para desplegar:

   ```sh
   firebase use --add
   ```

   Elige el proyecto de Firebase y un alias:

![image](https://user-images.githubusercontent.com/25906896/46550922-06d6e480-c89c-11e8-8ee1-7cdbe0445884.png)

10. Instalar dependencias de cloud functions:

```sh
# usando yarn
cd functions && yarn && cd ..
# alternativamente, usando npm
cd functions && npm install && cd ..
```

11. Desplegar:

```sh
firebase deploy
```

12. Llegado a este punto ya puedes comenzar con el _front-end_ :wink:

---

Nota para estudiantes que elijan React y quieran usar `create-react-app`:

Si tratas de usar `create-react-app` en el directorio del proyecto recibirás un
error diciendo que hay archivos que podrían presentar un conflicto. Para evitar
este problema puedes crear una nueva app usando `create-react-app` y de ahí
_mezclarla_ con la carpeta del proyecto:

```sh
# si estabase en la carpeta del proyecto, salimos a la carpeta de más arriba
cd ..

create-react-app burger-queen-tmp
cp -r burger-queen/* burger-queen-tmp/
cp -r burger-queen-tmp/.gitignore burger-queen-tmp/* burger-queen/
rm -rf burger-queen-tmp
cd burger-queen
```

---

**Con angular y vue, es similar**

## Pistas / Tips

### Frameworks / libraries

- [React](https://reactjs.org/)
- [Angular](https://angular.io/)
- [Vue](https://vuejs.org/)

### Herramientas

- [npm-scripts](https://docs.npmjs.com/misc/scripts)
- [Babel](https://babeljs.io/)
- [webpack](https://webpack.js.org/)

### PWA

- [Tu primera Progressive Web App - Google developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
- [Progressive Web Apps - codigofacilito.com](https://codigofacilito.com/articulos/progressive-apps)
- [offlinefirst.org](http://offlinefirst.org/)
- [Usando Service Workers - MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Cómo habilitar datos sin conexión - Firebase Docs](https://firebase.google.com/docs/firestore/manage-data/enable-offline?hl=es-419)

### Serverless

- [Qué es eso de serverless? - @PamRucinque en Medium](https://medium.com/@PamRucinque/qu%C3%A9-es-eso-de-serverless-f4f6c8949b87)
- [Qué es Serverless? | FooBar - YouTube](https://www.youtube.com/watch?v=_SYHUpLi-2U)
- [Firebase](https://firebase.google.com/)
- [Serverless Architectures - Martin Fowler](https://www.martinfowler.com/articles/serverless.html)

### Cloud functions

- [Cloud functions - Firebase Docs](https://firebase.google.com/docs/functions/?hl=es-419)




