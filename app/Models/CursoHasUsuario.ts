import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Curso from 'App/Models/Curso'

export default class CursoHasUsuario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public curso_id: number

  @column()
  public concluido_porcentagem: number

  @column()
  public avaliacao_usuario: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
   public user: BelongsTo<typeof User>

  @belongsTo(() => Curso)
   public curso: BelongsTo<typeof Curso>
}
