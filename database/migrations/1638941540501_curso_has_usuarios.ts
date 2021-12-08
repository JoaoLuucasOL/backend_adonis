import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CursoHasUsuarios extends BaseSchema {
  protected tableName = 'curso_has_usuario'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      table
        .integer("curso_id")
        .unsigned()
        .references("id")
        .inTable("cursos")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")  
      table.integer("concluido_porcentagem")

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.dateTime('created_at', { useTz: true })
      table.dateTime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
