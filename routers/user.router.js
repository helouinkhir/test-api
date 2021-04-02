const app = require('express');
let router = app.Router();
const userController = require('../controllers/user.controller.js')

router.post('/signUp', userController.signUp);
router.post('/signIn', userController.login);

module.exports = router;