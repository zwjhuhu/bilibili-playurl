var c = require('./vm-159')
  , I = c.cwrap("r", null, "string number number number string string number".split(" "))
  , g = c.cwrap("s", null, ["number"])
  , P = []
  , B = c.XB.addFunction(function (b, e) { P.shift().call(null, c.TB(b)) });

g(B);

function stringify(obj) {
  let arr = [];
  for(let key in obj){
    arr.push(key+'='+obj[key]);
  }
  return arr.join('&');
}

module.exports = function (cid, options) {
  if ('number' == typeof options) {
    options = {
      quality: parseInt(options)
    };
  } else {
    options = options || {};
  }
  var quality = options.quality || 0
    , season_type = options.season_type || 0
    , domains = [ "interface.bilibili.com/v2/playurl?", "bangumi.bilibili.com/player/web_api/v2/playurl?", "bangumi.bilibili.com/player/web_api/playurl?" ];
  delete options.quality;
  if(season_type < 1){
    delete options.season_type;
  }
  // 原来的混淆后的代码里面有setTimeout调用,所以用异步
  return new Promise(function (resolve, reject) {
    P.push(resolve);
    options.qn = quality;
    options.module = ['bangumi', 'movie'][season_type - 1];
    I(domains[+!!season_type], true, cid, quality, "", stringify(options), 0);
  });
};
