
import Async from 'async'
import Bans from './bans'
import Filter from './filter'
import Rights from './rights'
import Database from  '../../../server'
import Chatlog from '../logs/chatlog'
import Error from '../../../../libraries/error'

class Rooms extends Database.Model
{

    get tableName ()
    {
        return 'rooms';
    }

    static delete (id)
    {
      Async.parallel([
        // Self
        function (callback) {
          Rooms.where('id', id).destroy()
            .then (s => {
              callback(null, null)
            })
            .catch (error => {
              callback(error)
            })
        },
        // Bans
        function (callback) {
          Bans.where('room_id', id).destroy()
            .then (s => {
              callback(null, null)
            })
            .catch (error => {
              callback(error)
            })
        },
        // Rights
        function (callback) {
          Rights.where('room_id', id).destroy()
            .then (s => {
              callback(null, null)
            })
            .catch (error => {
              callback(error)
            })
        },
        // Filter
        function (callback) {
          Filter.where('room_id', id).destroy()
            .then (s => {
              callback(null, null)
            })
            .catch (error => {
              callback(error)
            })
        },
        // Items
        function (callback) {
          Items.where('room_id', id).destroy()
            .then (s => {
              callback(null, null)
            })
            .catch (error => {
              callback(error)
            })
        }
      ], ((errors, results) => {
        if (errors)
        {
          new Error('normal', errors)
        }
      }))

    }


}

export default Rooms;
