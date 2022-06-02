const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({req}, res) { 
    console.log('Auth Test 1:', req.body, req.query, req.headers);
    let token = req.body.token || req.query.token || req.headers.authorization;
    if (!token) { 
      return req
    }
    if (req.headers.authorization) { 
      token = token.split(' ').pop().trim(); 
    }
    try { 
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }
    return req.user;
  },
  signToken: function ({ username, email, _id }) { 
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};