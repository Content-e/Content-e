const axios = require('axios').default;

const getAdvertisers = async (authCode) => {
  console.log('authCode', authCode)
  let data = {
    app_id: process.env.TKTOK_APP_ID,
    auth_code: authCode,
    secret: process.env.TKTOK_SECRET,
  };
  const url = new URL(process.env.TKTOK_BUSNS_API_ACCESS_ENDPOINT)

  const params = new URLSearchParams();
  params.append('app_id', process.env.TKTOK_APP_ID);
  params.append('secret', process.env.TKTOK_SECRET);
  url.search = params.toString();
  const headers = {
    'User-Agent': 'PostmanRuntime/7.31.3',
    Accept: '*/*',
    'Content-Type': 'application/json',
    Connection: 'keep-alive',
    'Access-Token': authCode
  };
  const _response = await axios.get(url.href,{ headers });
  console.log('tiktok api response: ', _response?.data,);
  return _response?.data?.data?.list;
};

module.exports = { getAdvertisers };
