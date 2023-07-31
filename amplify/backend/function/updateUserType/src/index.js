const { updateUserProfileType } = require('./dynamoDb');

exports.handler = async (event) => {
  try {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    user_types = ['CREATIVE_USER', 'BRAND_USER'];
    if (!user_types.includes(event.arguments.userType)) {
      return false;
    }

    await updateUserProfileType(
      event.arguments.userType,
      event?.identity?.claims?.sub || 'd1a257d9-4eab-4466-a88d-4e52258136c2'
    );
    return true;
  } catch (error) {
    console.log('linkTiktokAccount::Errors', error);
    return false;
  }
};
