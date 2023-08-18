const { listAdGroups } = require('./tiktokApis');
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  try {
    const response = await listAdGroups(
      event.arguments.token,
      event.arguments.advertiser_id,
      event.arguments.campaignId
    );
    console.log('response:', response);
    return JSON.stringify(response);
  } catch (error) {
    console.log('listAdGroups::Err', error);
    return '{"message":"ERROR"}';
  }
};
