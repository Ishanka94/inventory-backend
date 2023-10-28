const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const conn = require('../config/db-connect');

const InventorySchema = new Schema({
    name: {
        type: Schema.Types.String,
        require: true,
    },
    contact: {
        type: Schema.Types.String,
        require: true,
    },
    label: {
        type: Schema.Types.String,
        require: true,
    }
}, {collection : 'Inventory'});

module.exports = Inventory = conn.inventoryDB.model('Inventory', InventorySchema);