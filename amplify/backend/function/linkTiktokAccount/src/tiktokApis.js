const axios = require('axios').default;


const exchangeAuthCode = async(authCode) => {
    
    let data = {
        "app_id": process.env.TKTOK_APP_ID,
        "auth_code": authCode,
        "secret": process.env.TKTOK_SECRET
    };
    const url=  process.env.TKTOK_BUSNS_API_ACCESS_ENDPOINT;
    const headers = { 
        "User-Agent": "PostmanRuntime/7.31.3",
        'Accept': "*/*",
        'Content-Type': 'application/json',
        'Connection': 'keep-alive'
    }
    const _response =  await axios.post(url, data, {headers});
    console.log("tiktok api response: ", _response?.data)
    return {
        access_token: _response?.data?.data?.access_token,
        advertiser_id: _response?.data?.data?.advertiser_ids?.[0] || ""
    }

}


module.exports = {exchangeAuthCode}