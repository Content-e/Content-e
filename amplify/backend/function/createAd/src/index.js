const {createAd} = require("./tiktokApis");
const { createApprovedAD} = require("./dynamoDb");
const { uploadToTiktok, createAdWithVideoUpload } = require("./tiktokVideoUpload");

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    try {
        if ( (event.arguments.landingPageUrl.split("/")).length > 0 ){
            const data = await uploadToTiktok(event.arguments.token,event.arguments.advId,event.arguments.landingPageUrl);
            console.log("data====>>>", data?.data);
            if (data?.data?.message !== 'OK'){
                return false;
            }
            console.log("Creating ad", event)
            
            const adResponse = await createAdWithVideoUpload(event.arguments.token,
                event.arguments.adgroupId,
                event.arguments.advId,
                data?.data?.data?.[0]?.video_id,
                event.identity.claims.sub 
            )
            console.log("Ad response: ",adResponse)
            const approvedAdRequest = await createApprovedAD({creativeRequestId: event.arguments.creativeRequestId, ...adResponse});
            console.log("updated db: ", approvedAdRequest)
            return true;
        }
        const createdAd = await createAd  (
            event.arguments.token, 
            event.arguments.authCode,
            event.arguments.advId,
            event.arguments.adgroupId,
            event.identity.claims.sub );
        console.log("createAd::Response:", createdAd);

        await createApprovedAD({creativeRequestId: event.arguments.creativeRequestId, ...createdAd});
        return true;
    } catch (error) {
        console.log("getVideoDetails::Err", error);
        return false;
    }
};
