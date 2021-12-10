import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CursoHasUsuario from 'App/Models/CursoHasUsuario'
import StoreCursoHasUsuarioValidator from 'App/Validators/StoreCursoHasUsuarioValidator'

export default class CursoHasUsuariosController {
  public async index({}: HttpContextContract) {
    const curso_usuarioDB = await CursoHasUsuario.all()
    return curso_usuarioDB
  }
 
  public async store({request, auth}: HttpContextContract) {
    const data = await request.validate(StoreCursoHasUsuarioValidator)
    const curso_usuarioDB = await CursoHasUsuario.create({...data, user_id: auth.user?.id})
    return curso_usuarioDB
  }

  public async show({params, response}: HttpContextContract) {
    try {
      const curso_usuarioDB = await CursoHasUsuario.findOrFail(params.id)
      return curso_usuarioDB
    } catch (error) {
      response.status(400).send("Dado não encontrado!")
    }
    
  }

  public async update({request, params, response}: HttpContextContract) {
    try {
      const curso_usuarioDB = await CursoHasUsuario.findOrFail(params.id)
      const data = await request.validate(StoreCursoHasUsuarioValidator)
      curso_usuarioDB.concluido_porcentagem = data.concluido_porcentagem
      curso_usuarioDB.avaliacao_usuario = data.avaliacao_usuario
      await curso_usuarioDB.save()
      return curso_usuarioDB
      
    } catch (error) {
      response.status(400).send("Ocorreu um erro inesperado!")
    }
  }

  public async destroy({params, response}: HttpContextContract) {
    try {
      const curso_usuarioDB = await CursoHasUsuario.findOrFail(params.id)
      await curso_usuarioDB.delete()
      return curso_usuarioDB
    } catch (error) {
      response.status(400).send("Ocorreu um erro inesperado!")
    }
  }
}
