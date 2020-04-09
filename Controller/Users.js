const mongoose = require('mongoose');
const modelUsers = mongoose.model('Users');

let UsersController = {};

UsersController.allUsuário = (req, res) => {

    modelUsuário.find()
    .then(results => res.json(results))
    .catch(err => res.json(errr));
}

UsersController.newUsuário = (req, res) => {
    if(req.body.UsuárioName && req.body.email){
         req.json({email: 'virmerson@gmail.com'});
        if(req.body.email2 && req.body.email == req.body.email2){

            modelUsers.findOne({'UsuárioName': req.body.UsuáriName})
                .then(email => {
                    if(email) {
                        res.json({ sucess: false, message: 'Usuário existente', status: 200});
                    } 
                })
                .then(email => {
                    if(email) {
                        res.json({ sucess: false, message: 'Usuário não existente', status: 403})
                    }
                })
        }
    }
}



module.exports = UsuárioController;