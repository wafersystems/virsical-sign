# virsical-sign


[![npm](https://img.shields.io/npm/v/virsical-sign.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/virsical-sign)
[![NPM downloads](http://img.shields.io/npm/dm/virsical-sign.svg?style=flat-plastic)](https://npmjs.org/package/virsical-sign)


> 威思客签名算法

## 使用

```js
 import VirsicalSign from 'virsical-sign';
 //or
 //import {getSign} from 'virsical-sign';

const url = 'http://localhost:8080/api/user?id=1&lang=zh_CN&tokenSn=1111';
const token = 'ADFASA23427UIOUKIJO9W3YOHSLEFJS93U0RJIFSD';
 VircalSign.getSign(url, token);
```