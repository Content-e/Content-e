const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

const updateUserAccessToken = async (accessTokenPayload, userProfileId) => {
  const input = {
    // UpdateItemInput
    TableName: process.env.USER_PROFILE_TABLE_NAME, // required
    Key: {
      // Key // required
      id: userProfileId,
    },

    UpdateExpression: 'set tiktokAccountAccess = :x',
    // ExpressionAttributeNames: {
    //     "tiktokAccountAccess": "tiktokAccountAccess"
    // },
    ExpressionAttributeValues: {
      ':x': accessTokenPayload,
    },
    ReturnValues: 'UPDATED_NEW',
  };
  const response = await ddb.update(input).promise();
  console.log('response', response);
};

module.exports = { updateUserAccessToken };
