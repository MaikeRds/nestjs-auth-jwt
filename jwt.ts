const base64Url = require('base64-url');

const header = {
  alg: 'HS256',
  typ: 'JWT',
};

const payload = {
  username: 'user1@user.com',
  name: 'Maike Rodrigues',
  exp: new Date().getTime(), //timestamp
};

const headerEncoded = base64Url.encode(JSON.stringify(header));
const payloadEncoded = base64Url.encode(JSON.stringify(payload));

console.log(headerEncoded, payloadEncoded);

// node_modules/.bin/ts-node jwt.ts

const key = 'abcd123456';

//certificado - chave privada e outro publica

const crypt = require('crypto');

const signature = crypt
  .createHmac('sha256', key)
  .update(`${headerEncoded}.${payloadEncoded}`)
  .digest('bin');

console.log(
  `${headerEncoded}.${payloadEncoded}.${base64Url.encode(signature)}`,
);

// node_modules/.bin/ts-node jwt.ts
