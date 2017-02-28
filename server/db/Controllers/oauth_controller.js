let qs = require('querystring');
let request = require('request');


let oAuthController = {

  requestCode: (req, res, next) => {
    let url =
      'https://github.com/login/oauth/authorize?' +
      'scope=user&' +
      'redirect_uri=http://localhost:8080/github/callback&' +
      'client_id=81b916f418c87ee8c616';

    res.redirect(url);
  },

  getAuthToken: (req, res, next) => {
    console.log('auth code', req.query.code);
    let tokenQuery = {
      client_id: '81b916f418c87ee8c616',
      client_secret: '1925660810efb15e0dbb17d14520110eb68eae79',
      code: req.query.code,
      accept: 'application/json'
    };

    let url = 'https://github.com/login/oauth/access_token?' + qs.stringify(tokenQuery);

    let options = {
      url: url,
      headers: {
        'user-agent': 'canbeanything'
      },
      json: true
    };

    request(options, (err, resp, body) => {
      if (err) return res.send(500, err);
      console.log(body);
      res.cookie('token', body.access_token);

      let options = {
        url: 'https://api.github.com/user',
        headers: {
          'user-agent': 'canbeanything',
          'Accept': 'application/json',
          'Authorization': 'token ' + body.access_token
        },
        json: true
      };
      request(options, (err, resp, body) => {
        res.send(body);
      });
    });
  }
}


module.exports = oAuthController;