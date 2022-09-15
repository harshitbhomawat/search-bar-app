const express = require('express');
const router = express.Router();
const Ads = require('../models/ads');
const Company = require('../models/company');


router.post('/company',(req,res,next) => {
    // console.log(req.body);
    // res.sendStatus(200);
    Company.create(req.body)
    .then((data)=>res.json(data))
    .catch(next);
});
router.get('/company',(req,res,next)=>{
    Company.find({})
    .then((data)=>res.json(data))
    .catch(next);
});


router.post('/ads',(req,res,next) => {
    // console.log(req.body);
    // res.sendStatus(200);
    Ads.create(req.body)
    .then((data)=>res.json(data))
    .catch(next);
});
router.get('/ads',(req,res,next)=>{
    Ads.find({})
    .then((data)=>res.json(data))
    .catch(next);
});

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
}

router.get('/filter',(req,res,next)=>{
    let search_text = req.body.search_text.toLowerCase();
    Ads.find({}).then(
        (data)=>{
            let filtered_list=[]
            let flag = false;
            (async () => {
                await asyncForEach(data, async (ad) => {
                    flag=false
                    let company = await Company.findById(ad.company_id);
                    if(company.name.toLowerCase().includes(search_text)){
                        filtered_list.push(ad)
                        flag=true
                    }
                    if(!flag && (ad.primary_text.toLowerCase().includes(search_text) || ad.headline.toLowerCase().includes(search_text))){
                        filtered_list.push(ad)
                    }
                });
                res.json({filtered_list:filtered_list})
            })();  
        })
        .catch(error=>res.json({error:error}));    
});




module.exports = router;