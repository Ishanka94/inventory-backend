const Inventory = require('../../models/inventory');
// const Flow = require('../../models/flow');
const sendResponse = require('../../utils/response');
const httpStatus = require('http-status');

const getAllInventories= async (req, res) => {
    const allList = await Inventory.find();
    return sendResponse(res, httpStatus.OK , allList);
}

const createInventory = async (req, res) => {
    const inventoryData = Inventory(req.body);
    const savedData = await inventoryData.save();
    if (savedData) {
        return sendResponse(res, httpStatus.OK , savedData);
    }};

// const getFormByPath= async (req, res) => {
//     let childForm;
//     // const allForms = await Flow.find({$and: [{parentFormId : 'F1'}, {path: 'a.b.c'}]}).populate({path: 'childFormRef', model: Form});
//     const filteredForms = await Flow.find({$and: [{parentFormId : req?.body?.parentFormId}, {path: req?.body?.path}]}).populate({path: 'childFormRef', model: Form});
//     if (filteredForms && filteredForms.length > 0) {
//         childForm = filteredForms[0].childFormRef;
//     }
//     return sendResponse(res, httpStatus.OK , childForm);
// }

module.exports = {
    getAllInventories,
    createInventory,
    // getFormByPath
}