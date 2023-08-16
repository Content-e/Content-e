const fs = require('fs');
const jwt = require('jsonwebtoken');
exports.handler = async (event, context) => {
  console.log('event', event);
  const result = validateToken(
      event.triggerSource === 'PreAuthentication_Authentication'
          ? event.request.validationData.token
          : event.request.clientMetadata.token,
      event.triggerSource === 'PreAuthentication_Authentication'
          ? event.request.validationData.user
          : event.request.clientMetadata.user
  );
  if (result) {
    if(event.triggerSource !== 'PreAuthentication_Authentication'){
      event.response.autoConfirmUser = true;
      event.response.autoVerifyEmail = true;
    }
    return event;
  } else {
    return null;
  }
};

function validateToken(token, user) {
  const publicKey = fs.readFileSync('./cert.pem', 'utf8');
  try {
    if (token) {
      const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
      console.log(decoded);
      return decoded.sub === user && decoded.exp * 1000 >= new Date().getTime();
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}