const { validateToken } = require('./tiktokApis');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    try {
        const result = await validateToken(event.arguments.accessToken);
        if(result.error){
            console.log('validateTiktokAccount::Errors', result.error);
            return JSON.stringify({
                statusCode: 400,
            });
        }
        if(result.advertisers_list) {
            return JSON.stringify({
                statusCode: 200,
                body: result.advertisers_list,
            });
        }
    } catch (error) {
        console.log('validateTiktokAccount::Errors', error);
        return JSON.stringify({
            statusCode: 400,
        });
    }
};
