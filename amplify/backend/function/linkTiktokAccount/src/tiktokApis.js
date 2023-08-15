const axios = require('axios').default;

const exchangeAuthCode = async (authCode) => {
  let data = {
    app_id: process.env.TKTOK_APP_ID,
    auth_code: authCode,
    secret: process.env.TKTOK_SECRET,
  };

  let url = process.env.TKTOK_BUSNS_API_ACCESS_ENDPOINT;
  const headers = {
    'User-Agent': 'PostmanRuntime/7.31.3',
    Accept: '*/*',
    'Content-Type': 'application/json',
    Connection: 'keep-alive',
  };
  const _response = await axios.post(url, data, { headers });
  console.log('tiktok api response: ', _response?.data);
  url = new URL(process.env.TKTOK_BUSNS_API_GET_ADVERTISERS)

  const params = new URLSearchParams();
  params.append('app_id', process.env.TKTOK_APP_ID);
  params.append('secret', process.env.TKTOK_SECRET);
  url.search = params.toString();
  headers['Access-Token'] = _response?.data?.data?.access_token
  const response = await axios.get(url.href,{ headers });
  const advertisers_list = response?.data?.data?.list;
  console.log('advertisers_list: ', advertisers_list);
  return {
    access_token: _response?.data?.data?.access_token,
    advertiser_id: _response?.data?.data?.advertiser_ids.length? _response?.data?.data?.advertiser_ids[0]: '',
    advertisers_list
  };
};

module.exports = { exchangeAuthCode };
