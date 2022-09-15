const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    url:{
        type:String,
    },
    name:{
        type:String,
        required:true
    },
});

const Company = mongoose.model('Company',CompanySchema);

module.exports = Company;