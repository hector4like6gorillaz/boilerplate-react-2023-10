# React + TypeScript + Vite + Axios + Redux + HeroIcons + LocalForage + Sass + React-Router-Dom + Cypress

# version de node requerida para el proyecto

# v18.13.0

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

LocalForage documentation:
https://localforage.github.io/localForage/

Cypress documentation:
https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test

Axios documentation:
https://axios-http.com/es/docs/intro

Heroicons see icons:
https://heroicons.com/

Redux toolkit:
https://redux-toolkit.js.org/usage/usage-guide

Sass:
https://sass-lang.com/documentation/

previo a levantar el servidor es importante crear un archivo llamado

# .env.local

en la raiz de la carpeta a la altura de vite.config.ts el cual debe contener por el momento a modo de ejemplo:

# VITE_APP_API=https://pokeapi.co/api/v2/

# ---------------------------------------->

Para levantar el servidor (esta configurado en el puerto 3000 importante dejarlo fijo para cypress):

# npm run dev

Para correr cypress basta con ejecutar:

# npm run cy

Este boiler plate contiene ejemplos de como utilizar en su mayoria las librerias ya instaladas en el pequeño ejemplo que prepare, considero borrar hasta el final los ejemplos en caso de que los necesiten.

Se posee una pequeña preconfiguracion sin terminar para el axios y las apis protegidas etc etc ejecutando alguna accion en caso de querer ejecutarlas (para las privadas)

se tiene una configuracion basica de pretier para acomodar el codigo sin ";" en el final de las instrucciones ya que js no lo necesita (configuracion personal)

Cypress solo corre en el ambiente de desarrollo por lo tanto se intala en devDeoendencies

Sass no esta configurado hasta el momento solo es una base de copy paste de un proyecto anterior
