const axios = require('axios').default;


const listAdGroups = async(token, advId, campgnId) => {
    
    const url=  process.env.TKTOK_BUSNS_API_BASE_URL+`adgroup/get/?advertiser_id=${advId}&fields=%5B%22adgroup_id%22%2C%22adgroup_name%22%5D&filtering={\"campaign_ids\":[\"${campgnId}\"],\"primary_status\": \"STATUS_DELIVERY_OK\"}`
    const headers = { 
        'Access-Token': token
    }
    const _response =  await axios.get(url, {headers});
    return _response.data;
}


module.exports = {listAdGroups}