import { sha256 } from 'js-sha256';
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
    return sha256(signature);
};

/**
 *
 * @param url
 * @param key
 * @param timestamp
 * @param body
 * @returns {*}
 */
export const getSign = (url, token, key, timestamp, body) => {
    const urlOjb = parse(url, true);
    let paramList = [];
    // 1 add token
    paramList.push(token);
    // 2 add key
    paramList.push(key);
    // 3 add timestamp
    paramList.push(timestamp);
    // 4 add path
    paramList.push(urlOjb.pathname);
    // 5 add query parameter
    paramList.push('{');
    const tmp = [];
    Object.keys(urlOjb.query).sort().forEach(key => {
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

let VirsicalSign = {};
VirsicalSign.getSign = getSign;

export default VirsicalSign;
