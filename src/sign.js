import md5 from 'crypto-js/md5';
import parse from 'url-parse';

/**
 *
 * @param data
 * @returns {*}
 */
const processJson = (data) => {
  let signature = '';
  data.forEach((item) => {
    signature += item;
  });
  return md5(signature).toString();
};

/**
 *
 * @param timestamp
 * @param url
 * @param key
 * @param body
 * @returns {*}
 */
export const sign = (timestamp, url, key, body) => {
  const urlOjb = parse(url, true);
  let paramList = [];
  // 1 add key
  paramList.push(key);
  // 2 add timestamp
  paramList.push(timestamp);
  // 3 add path
  paramList.push(urlOjb.pathname);
  // 4 add query parameter
  paramList.push('{');
  const tmp = [];
  Object.keys(urlOjb.query).forEach(key => {
    tmp.push(`${key}=${urlOjb.query[key]}`);
  });
  paramList.push(tmp.toString());
  paramList.push('}');
  // 5 add body
  if (body) {
    paramList.push(body);
  }
  return processJson(paramList)
};


/**
 *  get url sing with key.
 * @param url
 * @param key
 * @param body
 */
export const getSign = (url, key, body) => {
  return sign(new Date().getTime(), url, key, body);
};

let VirsicalSign = {};
VirsicalSign.getSign = getSign;

export default VirsicalSign;
