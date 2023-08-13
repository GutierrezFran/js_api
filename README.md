# Proyecto de API con Node.js, Express y SQLite3

Este es un proyecto de ejemplo que demuestra cómo crear una API básica utilizando Node.js, Express y SQLite3. La API permite realizar operaciones (Crear, Leer) en una base de datos SQLite.

⚠️ **Nota:** Este proyecto actualmente no cuenta con medidas de seguridad implementadas. En la versión 2, se agregarán características de seguridad para proteger la API y los datos. Utiliza este proyecto solo con fines educativos o de desarrollo en un entorno seguro.

## Requisitos previos

Asegúrate de tener Node.js y npm (Node Package Manager) instalados en tu sistema. Puedes descargarlos e instalarlos desde [nodejs.org](https://nodejs.org/).

## Instalación

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/GutierrezFran/js_api.git
cd js_api

## Endpoints
Aquí los endpoints disponibles en esta API:

```bash
GET /v1/users/hello-world          - Muestra mensaje hola mundo.
POST /v1/users/insert              - Inserta un nuevo usuario, pasar un json en Postman.
GET /v1/users                      - Selecciona y devuelve todos los registros de la base de datos.

