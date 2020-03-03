const AppModel = require('../models/AppModels.js');



const addFormContent = async function (req, res, next) {
    const params = {
        type: req.body.type,
        title: req.body.title,
        content: req.body.content,
    }

    console.log(params);
    try {
        const newActivity = new AppModel(params);
        const result = await newActivity.addFormContent();
        res.send({ result: result });
    } catch (err) {
        next(err);
    }
}

const updateFormContent = async function (req, res, next) {
    const params = {
        type: req.body.type,
        title: req.body.title,
        content: req.body.content,
        id: req.body.id,
        image_id: req.body.image_id,
        link_id: req.body.link_id,   
    }

    console.log(params);
    try {
        const newActivity = new AppModel(params);
        const result = await newActivity.updateFormContent();
        res.send({ result: result });
    } catch (err) {
        next(err);
    }
}

const getServicesList = async function (req, res, next) {
    try {
        const result = await new AppModel({}).getServicesList();
        res.send({ serviceList: result });
    } catch (err) {
        next(err);
    }
}


const getWhyusList = async function (req, res, next) {
    try {
        const result = await new AppModel({}).getWhyusList();
        res.send({ whyUsList: result });
    } catch (err) {
        next(err);
    }
}


const getAboutList = async function (req, res, next) {
    try {
        const result = await new AppModel({}).getAboutList();
        res.send({ aboutList: result });
    } catch (err) {
        next(err);
    }
}


const getContactList = async function (req, res, next) {
    try {
        const result = await new AppModel({}).getContactList();
        res.send({ contactList: result });
    } catch (err) {
        next(err);
    }
}

const getGoalsList = async function (req, res, next) {
    try {
        const result = await new AppModel({}).getGoalsList();
        res.send({ goalsList: result });
    } catch (err) {
        next(err);
    }
}

const getTechnologyList = async function (req, res, next) {
    try {
        const result = await new AppModel({}).getTechnologyList();
        res.send({ technologyList: result });
    } catch (err) {
        next(err);
    }
}

const getPartnersList = async function (req, res, next) {
    try {
        const result = await new AppModel({}).getPartnersList();
        res.send({ partnersList: result });
    } catch (err) {
        next(err);
    }
}


const getPortfolioList = async function (req, res, next) {
    try {
        const result = await new AppModel({}).getPortfolioList();
        res.send({ portfolioList: result });
    } catch (err) {
        next(err);
    }
}




module.exports = {
    addFormContent: addFormContent,
    getServicesList: getServicesList,
    getWhyusList: getWhyusList,
    getAboutList: getAboutList,
    getContactList:getContactList,
    getGoalsList:getGoalsList,
    getTechnologyList:getTechnologyList,
    getPartnersList:getPartnersList,
    getPortfolioList:getPortfolioList,
    updateFormContent: updateFormContent,

};