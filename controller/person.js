const PersonService = require('../service/person');

class PersonController {
    createPerson(req, res) {
        try {
            const id = await PersonService.createPerson(req.body);
            res.status(201).json(id);
        } catch ( err ) {
            console.err(err);
            res.status(500).json("something went wrong");
        }
    }
}

module.exports = new PersonController();