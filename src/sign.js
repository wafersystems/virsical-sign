import {MD5} from 'crypto-js';

export const getSign = (url, token) => {
  let paramList = [token || sessionStorage.getItem('token') || ''];
  if(url && url.indexOf('?') > -1) {
    const temp = url.split('?')[1].split('&');
    for(const p of temp) {
      paramList.push(p.split('=').join(''));
    }
  }
  return processJson(paramList)
};

const parseStrPlus = (param) => {
  let plus = 0;
  for (let pos = 0; pos < param.length; pos++) {
    plus += param.charCodeAt(pos);
  }
  return plus;
};

function processJson(data) {
  let signature = 0;
  data.forEach((item) => {
    signature += parseStrPlus(getMd5(item));
  });
  return signature
}

const getMd5 = (str) => {
  let md5Hex = MD5(str).toString();
  return md5Hex.slice(8, 24)
};

let VirsicalSign = {};
VirsicalSign.getSign = getSign;

export default VirsicalSign;