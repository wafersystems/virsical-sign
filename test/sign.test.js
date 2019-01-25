/**
 * Created : vincent
 * Date : 2019-01-25 11:22
 * Email : wangxiao@wafersystems.com
 */
import VirsicalSign from '../src/sign';


const url = 'http://localhost:8080/api/user?';
const parameterWithBlank = 'id=1&lang=zh_CN&tokenSn=1111&name= ABC';
const parameter = 'id=1&lang=zh_CN&tokenSn=1111&name=ABC';

const token = 'ADFASA23427UIOUKIJO9W3YOHSLEFJS93U0RJIFSD';

test('url中参数带空格和不带空格, 签名值应该不同.', () => {
  expect(VirsicalSign.getSign(url + parameterWithBlank, token))
    .not.toEqual(VirsicalSign.getSign(url + parameter, token));
});
