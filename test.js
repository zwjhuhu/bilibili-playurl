var resolveCid = require('./index.js');

resolveCid(57366904,{ quality: 80 }).then(function (url) {
  console.log(url);
});

resolveCid(57366904, { season_type: 1, quality: 80}).then(function (url) {
  console.log(url);
});