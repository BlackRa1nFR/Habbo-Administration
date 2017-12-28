import Query from 'node-mysql-importer'
import Config from '../../../../config/database.json'
export default class Prepare {
  static runQueries (cb) {
    Query.config({
      'host': Config.connection.host,
      'user': Config.connection.user,
      'password': Config.connection.password,
      'database': Config.connection.database
    })

    Query.importSQL(`${__dirname}/queries/install.sql`)
      .then(() => {
        cb()
      })
      .catch(e => {
        cb('failed')
      })
  }
}
