# factory-method

* [Español](#español)
   * [Descripción](#descripción)
   * [Cuando](#cuando)
   * [Cómo](#cómo)
* [English](#english)
   * [Description](#description)
   * [When](#when)
   * [How](#how)

# Español <img src="images/esp.svg" width="35">
Patrón Factory Method usando Javascript &amp; Openlayers.

### Descripción
Factory Method crea objetos de un subtipo determinado a través de una clase Factory. Es útil cuando al diseñar no se sabe que subtipo se va a utilizar, sospechamos que añadiran nuevos subtipos o cuando se quiere delegar la lógica de la creación de los objetos sobre una clase, en este caso una clase Factory. Con este patrón se puede conseguir crear objetos de manera dinámica haceiendo uso de archivos de configuración, XML, properties, consultas a base de datos, etc.
Con este patrón conseguimos:
   * Evitar el acoplamiento entre la creación de los objetos y las subclases.
   * Respetar el principio de responsabilidad única.
   * Respetar el principio de Abierto / Cerrado.

### Cuando
   * Cuando al diseñar no se conoce que subclase se utilizará.
   * Cuando se necesita delegar el control de la creación de objetos mediante una interfaz común.
   * Cuando la creación de un objeto se basa en condicionales (if/else, switch).
   * Cuando queremos dar la opción de a futuro extender los componentes internos.

### Cómo
Diagrama de clases UML del patrón:

<img src="images/Factory-Method-Class-Diagram.svg">

# English <img src="images/gbr.svg" width="35">
Factory Method Pattern using Javascript &amp; Openlayers.

### Descriptión
...
### When
...
### How
...