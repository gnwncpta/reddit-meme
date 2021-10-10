const Meme = require('./Meme');
const get = new Meme();

(async () => {
    const meme = await get.random.meme('reddit');
    console.log(meme);
})();

