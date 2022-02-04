/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'Lázaro, até ano que vem...' }
})

Route.post("/register", "AuthController.register")
Route.post("/login", "AuthController.login")

Route.group(() => {
  Route.resource("cursos", 'CursosController').apiOnly()
})

Route.get("/curso_usuario", "CursoHasUsuarioController.index")
Route.get("/curso_usuario/:id", "CursoHasUsuarioController.show")

Route.group(() => {
  Route.resource("curso_usuario", 'CursoHasUsuarioController').apiOnly().except(['index', 'show'])
}).middleware('auth')