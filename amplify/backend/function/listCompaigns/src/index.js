const {listCampaigns} = require('./tiktokApis')
exports.handler = async (event) => {
    try {
        console.log(`EVENT: ${JSON.stringify(event)}`);
        const res = await listCampaigns(event.arguments.token,event.arguments.advertiser_id);
        console.log(res);
        return JSON.stringify(res);

    } catch (error) {
        console.log("listCompaigns::Err", error)
        return "{message: \"ERROR\"}"        
    }
};
