const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdsSchema = new Schema({
    primary_text:{
        type:String,
    },
    headline:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    company_id:{
        type:Schema.Types.ObjectId,
        ref:'Company'
    },
    cta:{
        type:String
    },
    image_url:{
        type:String
    }
});

const Ads = mongoose.model('Ads',AdsSchema);

module.exports = Ads;