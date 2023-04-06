const {getVideoDetails} = require("./tiktokApis")
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    try {
        const response = await getVideoDetails(event.arguments.token,event.arguments.advertiser_id, event.arguments.authCode);
        console.log("response:",response);
        return JSON.stringify(response);
    } catch (error) {
        console.log("getVideoDetails::Err", error)
        return "{\"message\":\"ERROR\"}"
    }
};
