const { Router } = require ('express');
const controller = require ('../controller/controller')

const route = Router();

route.get('/',controller.getData);
route.post('/',controller.addUser);
route.get('/:id',controller.getDataById);
route.put('/:id',controller.updateUser)
route.delete('/:id',controller.deleteUser);

module.exports = route;