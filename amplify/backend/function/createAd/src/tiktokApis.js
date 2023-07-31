const axios = require('axios').default;

const creatSparkAd = async (token, advId, authCode) => {
  const url = process.env.TKTOK_BUSNS_API_BASE_URL + `tt_video/authorize/`;
  console.log(url);
  const headers = {
    'Access-Token': token,
    'Content-Type': 'application/json',
  };
  const _response = await axios.post(
    url,
    {
      advertiser_id: advId,
      auth_code: authCode,
    },
    { headers }
  );
  return _response.data;
};
const findSparkAd = async (token, authCode, advId, pageNum) => {
  const url =
    process.env.TKTOK_BUSNS_API_BASE_URL +
    `tt_video/list/?advertiser_id=${advId}&page_size=50&page=${pageNum}`;
  console.log(url);
  const headers = {
    'Access-Token': token,
  };
  const { data } = await axios.get(url, { headers });
  if (data?.code === 0 && data?.message === 'OK') {
    for (let _ad of data?.data?.list) {
      if (_ad?.item_info?.auth_code === authCode) {
        return {
          item_id: _ad?.item_info?.item_id,
          identity_id: _ad?.user_info.identity_id,
        };
      }
    }
    return data?.data?.page_info;
  }
  throw new Error(
    `Listing Spark Ads returned in error: ${JSON.stringify(data)}`
  );
};
const checkIfPageEnded = (pageInfo) => {
  return pageInfo?.page < pageInfo?.total_page;
};

const createAdWithCompaign = async (token, adgroupId, advId, adInfo) => {
  const url = process.env.TKTOK_BUSNS_API_BASE_URL + `ad/create/`;
  console.log(url);
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
          identity_id: adInfo.identity_id,
          identity_type: 'AUTH_CODE',
          ad_name: '',
          tiktok_item_id: adInfo.item_id,
          ad_format: 'SINGLE_VIDEO',
          // "ad_text":"Testing",
          item_duet_status: 'DISABLE',
          item_stitch_status: 'DISABLE',
        },
      ],
    },
    { headers }
  );
  return _response.data;
};

const createAd = async (token, authCode, advId, adgroupId, userProfileId) => {
  console.log('Creating Spark add');
  const sprkAd = await creatSparkAd(token, advId, authCode);
  console.log('Creating Spark add response', sprkAd);

  let currentPage = 1;
  if (sprkAd?.code !== 0 || sprkAd?.message !== 'OK') {
    throw new Error(
      `Creating SparkAd returned Error ${JSON.stringify(sprkAd)}`
    );
  }
  console.log('Finding Spark add');
  let resp = await findSparkAd(token, authCode, advId, currentPage);
  while (!resp?.item_id) {
    if (checkIfPageEnded(resp)) {
      break;
    }
    currentPage += 1;
    resp = await findSparkAd(token, authCode, advId, currentPage);
  }
  if (!resp?.item_id) {
    throw new Error(
      `Listing Spark Ads Didnt find any with authCode: ${authCode}`
    );
  }
  console.log('Finding Spark add Response ', resp);

  console.log('Creating add with groupId');
  const adCreated = await createAdWithCompaign(token, adgroupId, advId, resp);
  console.log('Creating add with groupId response: ', adCreated);
  if (adCreated?.code !== 0 || adCreated?.message !== 'OK') {
    throw new Error(
      `Creating Ad With GroupId  returned Error ${JSON.stringify(adCreated)}`
    );
  }
  return {
    identity_id: resp.identity_id,
    item_id: resp.item_id,
    ad_id: adCreated.data?.ad_ids?.[0],
    ad_group_id: adgroupId,
    campaing_id: adCreated.data?.creatives[0]?.campaign_id,
    advertiser_id: adCreated.data?.creatives[0]?.advertiser_id,
    user_profile_id: userProfileId,
    accessToken: token,
    ad_report: '',
    status: 'ACTIVE',
  };
};

module.exports = { createAd };
