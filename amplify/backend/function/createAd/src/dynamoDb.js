const AWS = require("aws-sdk");
const ddb = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });
const { v4: uuidv4 } = require('uuid');
const updateUserAccessToken = async (accessTokenPayload, userProfileId) => {
    const input = { // UpdateItemInput
        TableName: process.env.USER_PROFILE_TABLE_NAME, // required
        Key: { // Key // required
          "id": userProfileId
        },

        UpdateExpression: "set tiktokAccountAccess = :x",
        // ExpressionAttributeNames: {
        //     "tiktokAccountAccess": "tiktokAccountAccess"
        // },
        ExpressionAttributeValues: {
            ":x": accessTokenPayload
        },
        ReturnValues: "UPDATED_NEW",
    };
    const response = await ddb.update(input).promise();
    console.log("resonse", response)
}

const createApprovedAD = async (data) => {
    var params = {
        TableName: process.env.APPROVED_ADS_TABLE_NAME,
        Item: {
            "id": uuidv4(),
            "creativeRequestId": data.creativeRequestId,
            "identity_id": data.identity_id,
            "item_id": data.item_id,
            "ad_id": data.ad_id,
            "ad_group_id": data.ad_group_id,
            "campaing_id": data.campaing_id,
            "advertiser_id": data.advertiser_id,
            "user_profile_id": data.user_profile_id,
            "accessToken": data.accessToken,
            "ad_report": data.ad_report,
            "status": data.status 
        }
      };
    const response = await ddb.put(params).promise();
    console.log("resonse", response)
}

module.exports = {updateUserAccessToken, createApprovedAD}