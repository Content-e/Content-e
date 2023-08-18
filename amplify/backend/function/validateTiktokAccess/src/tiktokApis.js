const axios = require('axios').default;

const validateToken = async (authCode) => {

  const headers = {
    'User-Agent': 'PostmanRuntime/7.31.3',
    Accept: '*/*',
    'Content-Type': 'application/json',
    Connection: 'keep-alive',
  };

  const url = new URL(process.env.TKTOK_BUSNS_API_GET_ADVERTISERS)

  const params = new URLSearchParams();
  params.append('app_id', process.env.TKTOK_APP_ID);
  params.append('secret', process.env.TKTOK_SECRET);
  url.search = params.toString();
  headers['Access-Token'] = authCode
  try {
    const response = await axios.get(url.href, {headers});
    const advertisers_list = response?.data?.data?.list;
    return {
      advertisers_list
    };
  } catch (error) {
    return {
      error
    }
  }
};

module.exports = { validateToken };
