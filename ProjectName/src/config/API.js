export default {
  LOGIN: {method: 'POST', url: 'auth/login'},
  REGISTER: {method: 'POST', url: 'auth/register'},
  LOGOUT: {method: 'POST', url: 'auth/logout'},
  FORGET_PASSWORD: {method: 'POST', url: 'auth/forgot'},
  SET_FORGET_PASSWORD: {method: 'POST', url: 'auth/setPasssword'},
  UPLOAD_MEDIA: {method: 'POST', url: 'auth/upload'},
  UPLOAD_ASSETS: {
    method: 'POST',
    url: 'auth/createAsset',
    body: {screenName: '', name: '', data: {}, image: ''},
  },
  UPLOAD_VIDEO_MEDIA: {
    method: 'POST',
    url: 'auth/createMedia',
    body: {
      name: '',
      data: {},
      image: '',
      category: '',
      folder: '',
    },
  },
  // Ad
  GET_ALL_ADS: {method: 'GET', url: 'ad'}, // same as Get All Devices
  CREATE_ADS: {method: 'POST', url: 'ad/create'},
  GET_ASSETS: {method: 'GET', url: 'auth/getAllAssets'},
  GET_MEDIA: {method: 'GET', url: 'auth/getAllMedia'},
  GET_EFFECTS: {method: 'GET', url: 'auth/getAllEffects'},
  //Update
  UPDATE_PROFILE: {method: 'PUT', url: 'auth/update'},
  UPDATE_PASSWORD: {method: 'PUT', url: 'auth/updatePassword'},
  //translateX
  TRANSLATE: {method: 'POST', url: 'auth/translate'},
};
