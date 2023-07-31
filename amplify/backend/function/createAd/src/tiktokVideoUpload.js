const axios = require('axios').default;

const AWS = require('aws-sdk');
const s3 = new AWS.S3({ signatureVersion: 'v4' });

const getS3Object = async (key) => {
  try {
    await s3
      .headObject({ Bucket: process.env.CREATIVES_BUCKET, Key: key })
      .promise();
    // const data = await s3.getObject({ Bucket: process.env.CREATIVES_BUCKET, Key: key }).promise();
    // return data;
    return true;
  } catch (err) {
    return false;
  }
};

const s3SignedUrl = async (key) => {
  const url = await s3.getSignedUrl('getObject', {
    Bucket: process.env.CREATIVES_BUCKET,
    Key: key, //filename
    Expires: 60 * 60, //time to expire in seconds - 60 min
  });

  return url;
};
const uploadToTiktok = async (token, advId, videoPath) => {
  console.log('Checking if object is available ', videoPath);

  const isPresent = await getS3Object(videoPath);
  if (!isPresent) {
    return { error: true };
  }
  console.log('Getting Signed URL');
  const videoUrl = await s3SignedUrl(videoPath);
  console.log('Signed URL: ', videoUrl);

  // const baseUrl = process.env.TKTOK_BUSNS_API_BASE_URL.replace("1.3","1.2");
  const baseUrl = process.env.TKTOK_BUSNS_API_BASE_URL;

  const url = baseUrl + `file/video/ad/upload/`;
  console.log('Base URL: ', url);

  const headers = {
    'Access-Token': token,
    'Content-Type': 'application/json',
  };
  const _response = await axios.post(
    url,
    {
      advertiser_id: advId,
      video_url: videoUrl,
      upload_type: 'UPLOAD_BY_URL',
      allow_download: true,
      // "is_third_party": true
    },
    { headers }
  );
  return { data: _response.data, error: false };
};

const createIdentity = async (token, advId) => {
  // const url=  process.env.TKTOK_BUSNS_API_BASE_URL+`identity/create/`;
  // console.log("Prepared url :",url)
  // const headers = {
  //     'Access-Token': token,
  //     'Content-Type': "application/json"
  // }
  // const _response =  await axios.post(url, {
  //     "advertiser_id":advId,
  //     "image_uri":"ad-site-i18n-sg/202305235d0da09b1b64921445f99331",
  //     "display_name": "CUSTOMIZED_USER"
  // },{headers});
  // const url=  process.env.TKTOK_BUSNS_API_BASE_URL+`file/image/ad/search/?advertiser_id=${advId}`;
  // console.log("Prepared url :",url)
  // const headers = {
  //     'Access-Token': token,
  //     'Content-Type': "application/json"
  // }
  // const _response =  await axios.get(url, {headers});
};

const generateVideoThumbnail = async (token, advId, videoId) => {
  let url =
    process.env.TKTOK_BUSNS_API_BASE_URL +
    `file/video/suggestcover/?advertiser_id=${advId}&video_id=${videoId}`;
  console.log('Prepared url :', url);
  const headers = {
    'Access-Token': token,
    'Content-Type': 'application/json',
  };
  const _response = await axios.get(url, { headers });
  if (_response?.data?.data?.list?.length < 1) {
    throw new Error('No thumbnails found');
  }
  console.log(_response?.data);
  console.log(_response?.data?.data?.list);
  return _response?.data?.data?.list?.[0]?.id;
};
const getIdentityId = async (token, advId) => {
  const url =
    process.env.TKTOK_BUSNS_API_BASE_URL +
    `identity/get/?advertiser_id=${advId}`;
  console.log('Prepared url :', url);
  const headers = {
    'Access-Token': token,
    'Content-Type': 'application/json',
  };
  const _response = await axios.get(url, { headers });
  if (_response?.data?.data?.identity_list?.length < 0) {
    console.log('No identities found', _response?.data);
    return false;
  }
  for (let _identity of _response?.data?.data?.identity_list) {
    if (_identity?.display_name === 'CUSTOMIZED_USER') {
      return _identity?.identity_id;
    }
  }
  console.log('No identities found', _response?.data);
  return false;
};

const createAdWithVideoUpload = async (
  token,
  adgroupId,
  advId,
  videoId,
  userProfileId
) => {
  // console.log("getting Identity id",advId);
  // const _identityId = await getIdentityId(token,advId);
  // if(_identityId === false){
  //     return false;
  // }
  // console.log("using identity id ",_identityId)
  console.log('getting video thumbnail');
  const imageId = await generateVideoThumbnail(token, advId, videoId);
  console.log('video thumbnail id: ', imageId);
  const baseUrl = process.env.TKTOK_BUSNS_API_BASE_URL.replace('1.3', '1.2');
  const url = baseUrl + `ad/create/`;
  console.log('Prepared url :', url);
  const headers = {
    'Access-Token': token,
    'Content-Type': 'application/json',
  };
  const _response = await axios.post(
    url,
    {
      advertiser_id: advId,
      adgroup_id: adgroupId,
      creatives: [
        {
          // "identity_id": _identityId,
          // "identity_type":"CUSTOMIZED_USER",
          ad_name: '',
          display_name: 'DISPLAY_NAME',
          video_id: videoId,
          ad_format: 'SINGLE_VIDEO',
          ad_text: 'asd',
          image_ids: [imageId],
          item_duet_status: 'DISABLE',
          item_stitch_status: 'DISABLE',
        },
      ],
    },
    { headers }
  );
  console.log('Ad creation Response: ', _response.data);
  if (_response?.data?.message !== 'OK') {
    throw new Error('Error while creating ad', _response.data);
  }
  return {
    identity_id: 'VIDEO_UPLOAD',
    item_id: videoId,
    ad_id: '' + _response?.data?.data?.ad_ids?.[0],
    ad_group_id: adgroupId,
    campaing_id: 'NONE',
    advertiser_id: advId,
    user_profile_id: userProfileId,
    accessToken: token,
    ad_report: '',
    status: 'ACTIVE',
  };
};

module.exports = { uploadToTiktok, createAdWithVideoUpload };
