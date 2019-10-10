# virsical-sign


[![npm](https://img.shields.io/npm/v/virsical-sign.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/virsical-sign)
[![NPM downloads](http://img.shields.io/npm/dm/virsical-sign.svg?style=flat-plastic)](https://npmjs.org/package/virsical-sign)

> 威思客签名算法 2.x



## 范围

微服务中使用

## 算法描述

[接口签名规范](https://docs.rd.virsical.cn/microservice/2wei-fu-wu-kai-fa-gui-fan/jie-kou-qian-ming.html)

## 使用

```js
 import VirsicalSign from 'virsical-sign';
 //or
 //import {getSign} from 'virsical-sign';

const url = 'http://localhost:8080/api/user?id=1&lang=zh_CN&tokenSn=1111';
const key = '123';
const body = 'XXX'; // 可选

VircalSign.getSign(url, key, body);
```

&nbsp; 

> 威思客签名算法 1.0.6

## 使用

```js
 import VirsicalSign from 'virsical-sign';
 //or
 //import {getSign} from 'virsical-sign';

const url = 'http://localhost:8080/api/user?id=1&lang=zh_CN&tokenSn=1111';
const token = 'ADFASA23427UIOUKIJO9W3YOHSLEFJS93U0RJIFSD';
VircalSign.getSign(url, token);
```
