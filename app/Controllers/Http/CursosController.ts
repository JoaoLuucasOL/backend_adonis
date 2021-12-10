//import { Response } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Curso from 'App/Models/Curso'
import StoreCursoValidator from 'App/Validators/StoreCursoValidator'

export default class CursosController {
  public async index({}: HttpContextContract) {
    const cursoDB = await Curso.all()
    return cursoDB
  }

  public async store({request}: HttpContextContract) {
    const data = await request.validate(StoreCursoValidator)
    const cursoDB = await Curso.create({...data})
    return cursoDB
  }

  public async show({params, response}: HttpContextContract) {
    try {
      const cursoDB = await Curso.findOrFail(params.id)
      return cursoDB
    } catch (error) {
      response.status(400).send("Dado não encontrado!")
    }
  }  

  public async update({request, params, response}: HttpContextContract) {
    try {
      const cursoDB = await Curso.findOrFail(params.id)
      const data = await request.validate(StoreCursoValidator)
      cursoDB.titulo = data.titulo
      cursoDB.preco = data.preco
      await cursoDB.save()
      return cursoDB
      
    } catch (error) {
      response.status(400).send("Ocorreu um erro inesperado!")
    }
  }

  public async destroy({params, response}: HttpContextContract) {
    try {
      const cursoDB = await Curso.findOrFail(params.id)
      await cursoDB.delete()
      return cursoDB
    } catch (error) {
      response.status(400).send("Ocorreu um erro inesperado!")
    }
  }
}
