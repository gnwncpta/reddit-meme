const Xray = require('x-ray');
const x = Xray();

class Meme {

    constructor(){
        this.random = {
            reddit(){
                return x('https://www.reddit.com/t/memes/', '.Post', [{
                    title: 'h3._eYtD2XCVieq6emjKBH3m',
                    media: "div._3JgI-GOrkmyIeDeyzXdyUD [src]@src", // [src]@src used if the tag is not constant for e.g 9 of 10 tag is <img> but the 1 of 10 is <source>
                    update: 'a._3jOxDPIQ0KaOWpzvSQo-1s',
                }])
                    .then(res => res)
            },
            async process(meme){
                const theMeme = await meme;
                const math = Math.random() * 8;
                const index = math.toString().slice(0, 1);
                console.log(index);
        
                return theMeme[index];
            },
            async meme(type){
                if(!type.length){
                    return await this.process(await this.reddit());
                } else if(type === 'reddit'){
                    return await this.process(await this.reddit());
                } else if(type === '9gag'){
                    return await this.gag();
                }
            }
        }
    }

    ycombinator(){ // => unused
        return x('https://blog.ycombinator.com/', '.post', [{ title: 'h1 a', link: '.article-title@href' }]).then(res => res);
    }

    redditHome(){ // => unused
        return x('https://reddit.com/', '.content', (err, result) => console.log(result));
    }

    gag(){ // => experimental
        return x('https://9gag.com/meme/', 'article', [{
            title: 'h1'
        }])
            .then(res => res)
    }
    
}

module.exports = Meme;