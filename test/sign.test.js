/**
 * Created : vincent
 * Date : 2019-01-25 11:22
 * Email : wangxiao@wafersystems.com
 */
import VirsicalSign from '../src/sign';

const url = 'http://localhost:8080/api/user?';
const parameterWithBlank = 'z=1&id=1&lang=zh_CN&tokenSn=1111&name= ABC';
const parameter = 'id=1&lang=zh_CN&tokenSn=1111&name=ABC';
const body = JSON.stringify({ a: 1, b: 2 });

let time = new Date().getTime();

const key = '123';

test('url中参数带空格和不带空格, 签名值应该不同.', () => {
  expect(VirsicalSign.getSign(url + parameterWithBlank, key, time))
    .not.toEqual(VirsicalSign.getSign(url + parameter, key, time));
});

test('携带body与不带body, 签名值应该不同.', () => {
  expect(VirsicalSign.getSign(url + parameterWithBlank, key, time))
    .not.toEqual(VirsicalSign.getSign(url + parameterWithBlank, key, time, body));
});


test('时间不同，参数相同，签名值不相同.', () => {
  expect(VirsicalSign.getSign(url + parameterWithBlank, key, time))
    .not.toEqual(VirsicalSign.getSign(url + parameterWithBlank, key, time + 1));
});
