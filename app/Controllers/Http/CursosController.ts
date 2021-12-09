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

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
