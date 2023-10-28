const mongoose = require('mongoose');

const dbURI = process.env.ATLAS_URI;
const inventoryDB = mongoose.createConnection(dbURI, { useNewUrlParser: true });

inventoryDB.on('connected', () => {
    console.log('connected to inventory db');
});


module.exports = { inventoryDB };