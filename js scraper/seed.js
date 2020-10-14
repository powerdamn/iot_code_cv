//request and cheerio lib


const request = require('request'),
    cheerio = require('cheerio');


const scrapeItems = (url)=>{
    request(url,(err,response,body) => {
        if (err) console.error(err);
        var $ = cheerio.load(body);
        
        const child = "";
        const parent = "";

        $(child,parent).each(()=>{
            if (this){
                console.log(this)
            }
        })
    }}

scrapeItems("")
