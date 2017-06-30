# Evaluación Técnica Frontend SSr.

## Aclaraciones

- Elegí usar el framework Angular 2 porque ademas de ser una tecnología relativamente nueva, es muy performante y permite desarrollar aplicaciones SPA (parte del enunciado) en poco tiempo. También use Bootstrap para poder maquetar de forma sencilla y rápida la pantalla (y logrando tambien un diseño responsive)

- Para la selección de las fechas no use ningun control selector ya que uno de los puntos del enunciado era validar el formato de la fecha ingresada.

- Los filtros por estrella funcionan y la lógica esta hecha en el cliente, porque como el servicio es ficticio, la solicitud AJAX responde siempre lo mismo.

- Si bien el diseño es responsive y ningun control se desacomoda al resizear la pantalla, me hubiera gustado (con un poco mas de tiempo), poder hacer un diseño compacto mas amigable.

## Requisitos previos

Para poder correr la aplicación se requiere tener instalado NodeJS (https://nodejs.org/). Se recomienda descarga la versión estable (v6.11)

## Instalación

 - Descomprimir el paquete Despegar-LeandroDevesa.zip en una carpeta
 - Abrir una terminal, posicionarse en la carpeta donde se descomprimio el paquete, instalar las dependecias y ejecutar el servidor:
```sh
cd Despegar-LeandroDevesa
npm install
npm start
```

## Uso y prueba

Por default la app corre en el puerto 4200, pero por las dudas chequear en la terminal la linea en verde que dice "** NG Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200 **". 

Abrir un navegador y dirigirse al sitio localhost:4200 (o el puerto que corresponda), lo primero que se vera es algo como lo siguiente:

![](http://imgh.us/img1_12.png)

Esto es porque todavía no se ingresó ninguna fecha. 

Al ingresar fechas validas (que cumplan con lo pedido en el enunciado), el botón de buscar se pondra Azul y se le podrá hacer click. Ahora la pantalla se verá asi:

![](http://imgh.us/img3_4.png)

Un método rápido para chequear que la solicitud se hace con la URL correcta es abrir la consola y ver el siguiente log:

![](http://imgh.us/img2_9.png)

Tambíen se puede probar que los filtros por estrella funcionan y que las demas validaciones pedidas (campo destino, habitaciones, adultos, etc..) son realizadas.
