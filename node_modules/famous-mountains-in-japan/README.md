<p align="center">
  <a href="hthttps://famous-mountains-100-in-japan.web.app/">
    <img width="70%" src="https://github.com/ryunosuke0922/kongo/blob/master/public/images/img04.jpg" />
  </a>
</p>

<h1 align="center">日本百名山のデータ🗻</h1>

<p align="center">🚀website https://www.famous-mountains-in-japan.com</p>

## Install💎

```bash
yarn add --dev git+https://github.com/ryunosuke0922/famous-mountains-in-japan.git
```

Or

```bash
npm install --save-dev git+https://github.com/ryunosuke0922/famous-mountains-in-japan.git
```

## 例🚀

[React example](https://github.com/ryunosuke0922/kongo/blob/master/src/pages/index.tsx)

```js
import { get100FamousMountainsInJapan } from 'famous-mountains-in-japan'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      {get100FamousMountainsInJapan().map((e) => (
        <div key={e.no}>
          <p data={e}></p>
        </div>
      ))}
    </>
  )
}

export default Home
```


## データ⛰

[全ての山のデータ](https://github.com/ryunosuke0922/famous-mountains-in-japan/blob/master/src/module.ts)

|  カラム  |  内容  |
| ---- | ---- |
|  name  |  山の名前(例:火打山)  |
|  kanaName  |  かな(例:ひうちやま)  |
|  elevation  |  標高(例:2462)  |
|  mountainSystem  |  山系(例:頸城山塊)  |
|  prefectures  |  都道府県(例:新潟県)  |

## Lisence👩🏻‍⚖️ 

This project is licensed under the MIT License, see the [LICENSE](https://github.com/ryunosuke0922/kongo/blob/master/LICENSE) file for details
