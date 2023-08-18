const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

const updateUserProfileType = async (userType, userProfileId) => {
  const input = {
    // UpdateItemInput
    TableName: process.env.USER_PROFILE_TABLE_NAME, // required
    Key: {
      // Key // required
      id: userProfileId,
    },

    UpdateExpression: 'set userType = :x',
    // ExpressionAttributeNames: {
    //     "tiktokAccountAccess": "tiktokAccountAccess"
    // },
    ExpressionAttributeValues: {
      ':x': userType,
    },
    ReturnValues: 'UPDATED_NEW',
  };
  const response = await ddb.update(input).promise();
  console.log('resonse', response);
};

module.exports = { updateUserProfileType };
