const Url = require('../models/url')
const shortid = require('shortid');

const getAllUrl = async (req,res) =>{
    const urls = await Url.find({});
    res.status(200).json({urls})
    // return res.send("Fine");
}

const shortUrl = async (req,res) =>{
    const body = req.body.redirecturl;
    if(!body) {
        return res.status(400).json({msg: "Please give the url"})
    }


    const short = shortid();
    const entry = await Url.create({
        redirecturl: body,
        shorturl: short
    })
    res.status(201).json({entry})
}

const getUrl = async (req,res)=>{
    const urlcount = await Url.findOne({shorturl: req.params.small});
    if(!urlcount){
        return res.status(404).json({msg: "Not Found"})
    }
    
    let cnt = urlcount.count + 1
    const url = await Url.findOneAndUpdate({
        shorturl: req.params.small
    }, {
        count: cnt
    }, {
        new:true
    });
    res.status(301).redirect(url.redirecturl);
}


module.exports = {
    getAllUrl,
    shortUrl,
    getUrl
}