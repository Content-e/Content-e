const {updateUserAccessToken} = require('./dynamoDb');
const {getAdvertisers} = require('./tiktokApis');

exports.handler = async (event) => {
    try {
        console.log(`EVENT: ${JSON.stringify(event)}`);
        const data = await getAdvertisers(event.arguments.authCode);
        console.log(data);
        if (!data || !data.length) {
            return false;
        }
        console.log('list: ', data);
        await updateUserAccessToken(
            JSON.stringify({authCode: event.arguments.authCode}),
            event.identity.claims.sub
        );
        return {data};
    } catch (error) {
        console.log('linkTiktokAccount::Errors', error);
        return {error};
    }
};
