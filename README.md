# README #

Este README explica la forma de implementar el proyecto y las variables de configuración

### Instalar paquetes de nodejs ###

* Ejecutar el comando 
`npm install`

* Iniciaalizar el proyecto 
`npm run dev`


### Agregar archivos multimedia  ###

* En la ruta '/src/assets/' se crea una carpeta llamada media donde se alojaran los cursos  

### Archivo de configuración de los cursos provider.json ###

* Dirigirse al archivo json del proyecto "src/components/utils/provider.json"  
* Agregar un nuevo curso la estructura es la siguiente 

`
{
  "courses": [
    {
      "name": "Programming - Python", 
      "color": "#BCCEF4",
      "list":[
        {
          "chapter": "Capitulo 1",
          "videos":[
            {
              "name": "Inicio Python",
              "video": "programming/python/capitulo_1/1settings.mp4",
              "subtitle": "programming/python/capitulo_1/1settings.vtt"
            },
            {
              "name": "Intermedio Python",
              "video": "programming/python/capitulo_1/CarteraReunionFonsalud.mov",
              "subtitle": "programming/python/capitulo_1/1settings.vtt"
            }
          ]
        },
        {
          "chapter": "Capitulo 2",
          "videos":[
            {
              "name": "Inicio Python",
              "video": "programming/python/capitulo_1/1settings.mp4",
              "subtitle": "programming/python/capitulo_1/1settings.vtt"
            },
            {
              "name": "Intermedio Python",
              "video": "programming/python/capitulo_1/1settings.mp4",
              "subtitle": "programming/python/capitulo_1/1settings.vtt"
            }
          ]
        }
      ]
    }
  ]
}
    `









