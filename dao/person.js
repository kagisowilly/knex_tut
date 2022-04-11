const db = require('../db/db');

class personDAO {
   async createPerson(first_name, last_name, email) {
     const [id] = await db('person')
     .insert({
        email,
        first_name: first_name,
        last_name: last_name,
     })
     .returning('id');

     return id;
   }
}

module.exports = new personDAO();