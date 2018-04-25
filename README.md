# virsical-sign

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