
const {updateUserAccessToken} = require("./dynamoDb");
const {exchangeAuthCode}  =require("./tiktokApis");

exports.handler = async (event) => {
    try {
        console.log(`EVENT: ${JSON.stringify(event)}`);
        const tokens = await exchangeAuthCode(event.arguments.authCode);
        console.log(tokens)
        if (!tokens?.access_token ||!tokens?.advertiser_id ){
            return false;
        }
        console.log("tokens: ", tokens)
        await updateUserAccessToken(JSON.stringify(tokens),event.identity.claims.sub);
        return true;        
    } catch (error) {
        console.log("linkTiktokAccount::Errors", error);
        return false;
    }
};
