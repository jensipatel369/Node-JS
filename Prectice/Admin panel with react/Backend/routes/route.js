const express = require('express');
const route = express.Router();
const ctl = require('../controller/ctl');

route.post('/login', ctl.login);
route.post('/addData', ctl.addData);
route.get('/getData', ctl.getData);
route.delete('/deleteData',ctl.deleteData)
route.put('/updateData',ctl.updateData)
route.post('/logout',ctl.logout);

module.exports = route;