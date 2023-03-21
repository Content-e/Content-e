const aws = require("aws-sdk");
const ses = new aws.SES({ region: process.env.REGION });

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {

    try {
        console.log("email handler event: ",event)
        var params = {
            Destination: {
            ToAddresses: ["adeeltahir1995@gmail.com"],
            },
            Message: {
            Body: {
                Text: { Data: event.arguments.data.message },
            },

            Subject: { Data: `EDC Squared Customer Response | ${event.arguments.data.name}` },
            },
            Source: event.arguments.data.from,
        };
    
        await ses.sendEmail(params).promise();
        return {error:false}
        
    } catch (error) {
        console.log("Email Service:: Exception", error);
        return {error: true, message: error?.message}

    }

};
