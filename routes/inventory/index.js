const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/get-all-inventories', controller.getAllInventories);
router.post('/create-inventory', controller.createInventory);
// router.get('/get-form-by-path', controller.getFormByPath);

module.exports = router;