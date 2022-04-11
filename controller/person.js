const PersonService = require('../service/person')

class personController{
  async createPerson(req, res){
    try{
        const id = await PersonService.createPerson(req.body);
        res.status(201).json(id);
    }catch(err){
        console.error(err);
    }
  }
}

module.exports = new personController();