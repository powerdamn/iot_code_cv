var rp = require('request-promise');
var cheerio = require('cheerio');

rp('https://news.ycombinator.com/').then((html)=>{
    let $ = cheerio.load(html);
    console.log(html);
    $('span.comhead').each(function(i,element) {
        var a = $(this).prev();
        console.log(a.text());

    });
}).catch(console.error.bind(console));