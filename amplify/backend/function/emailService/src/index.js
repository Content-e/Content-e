const aws = require('aws-sdk');
const ses = new aws.SES({ region: process.env.REGION });

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  try {
    console.log('email handler event: ', event);
    var params = {
      Destination: {
        ToAddresses: ['Hello@edcsquared.io'],
      },
      Message: {
        Body: {
          Text: { Data: event.arguments.data.message },
        },

        Subject: {
          Data: `EDC Squared Customer Response | ${event.arguments.data.name}`,
        },
      },
      Source: 'Hello@edcsquared.io',
    };

    await ses.sendEmail(params).promise();
    return true;
  } catch (error) {
    console.log('Email Service:: Exception', error);
    return false;
  }
};
