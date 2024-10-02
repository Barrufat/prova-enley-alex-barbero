# ProvaAlexBarbero

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.6.

## PARTE 1 (Teórica):

Describe los desafíos del SEO en Single Page Applications (SPAs) como las construidas con
Angular, y explica al menos tres estrategias para mejorar el SEO de tales aplicaciones.

- DESAFÍOS EN SPA:
  1- INDEXACIÓN DE CONTENIDOS:
  El contenido se carga de forma dinámica (client-side-rendering), esto hace que el HTML inicial que se carga este "vacío" (Javascript se encarga de llenarlo posteriormente) y, por lo tanto, que los motores de busqueda de los navegadores tengan más dificultades para indexar y "entender" el contenido de la página.

2- RENDIMIENTO:
La carga inicial, al ser dinámica, puede ser más pesada. Esto afecta negativamente a la experiencia de usuario y a las métricas de los buscadores (como por ejemplo las Core Web Vitals de Google)

3- METADATOS:
Las páginas SPA por defecto suelen carecer de metadatos únicos por sección, los cuales son vitales para una buena indexación de la página.

4- GESTIÓN DE ENLACES INTERNOS:
Los enlaces internos son gestionados por Javascript, por lo que algunos motores de búsqueda no son capaces de seguir correctamente estos enlaces, limitando el rastreo correcto de la página.

- ESTRATEGIAS DE MEJORA PARA SEO:
  1- SERVER SIDE RENDERING (SSR):
  Implementar SSR de forma que la aplicación se genere en el servidor antes de mandarlo al cliente. Esto hace
  que el HTML que se carga inicialmente ya este completo, mejorando la indexación y el SEO.

2- PRE-RENDERING:
Esta técnica genera una versión estática de las páginas de la aplicación que se sirve a los motores de búsqueda. Angular Universal, por ejemplo, es una herramienta integrada en Angular para la creación de una versión estática de la página con todo el contenido necesario para el SEO.

3- GESTIÓN DE METADATOS: Asegurarse del manejo de los metadatos de forma que cada página incluya el uso correcto de las etiquetas de título, descripción y palabras clave que ayudan a los motores de búsqueda a comprender de que se trata la página. Hay bibliotecas como Angular Meta que permiten el manejo de los metadatos para cada una de las páginas de la aplicación.

4- URL AMIGABLES: El uso de URL's legibles y descriptivas facilitará la navegación tanto para los motores de búsqueda como para los usuarios.
