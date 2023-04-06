const {createAd} = require("./tiktokApis");
const { createApprovedAD} = require("./dynamoDb");

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    try {
        const createdAd = await createAd  (
            event.arguments.token, 
            event.arguments.authCode,
            event.arguments.advId,
            event.arguments.adgroupId,
            event.identity.claims.sub );
        console.log("createAd::Response:", createdAd);

        await createApprovedAD({creativeRequestId: event.arguments.creativeRequestId, ...createdAd});
        return JSON.stringify({code: 0, message: "OK"});
    } catch (error) {
        console.log("getVideoDetails::Err", error);
        return "{\"message\":\"ERROR\"}";
    }
};
