import type { SupportedLocale } from './index'

type LocalizedText = Record<SupportedLocale, string>
type MountainFact = {
  name: LocalizedText
  point: LocalizedText
  description: LocalizedText
  reading?: string
  relatedSlugs: string[]
  sources: { label: string; url: string }[]
}

// Names are keyed by the existing URL slug so corrections never move a public page.
const mountainFacts: Record<string, MountainFact | undefined> = {
  zao: {
    name: {
      ja: '蔵王山（熊野岳）',
      en: 'Zao (Kumanodake)',
      'zh-CN': '藏王山（熊野岳）',
      'zh-TW': '藏王山（熊野岳）',
    },
    point: {
      ja: '熊野岳',
      en: 'Kumanodake',
      'zh-CN': '熊野岳',
      'zh-TW': '熊野岳',
    },
    description: {
      ja: '蔵王山の1,841 mは蔵王連峰の最高峰・熊野岳の標高です。刈田岳（1,758 m）は別の峰です。',
      en: 'Zao’s highest peak is Kumanodake (1,841 m). Kattadake (1,758 m) is a separate summit.',
      'zh-CN': '藏王连峰最高峰为熊野岳（1,841 m）；刈田岳（1,758 m）是另一座山峰。',
      'zh-TW': '藏王連峰最高峰為熊野岳（1,841 m）；刈田岳（1,758 m）是另一座山峰。',
    },
    sources: [
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
    ],
    relatedSlugs: [],
    reading: 'ざおうざん（くまのだけ）',
  },
  fuji: {
    name: {
      ja: '富士山（剣ヶ峯）',
      en: 'Mount Fuji (Kengamine)',
      'zh-CN': '富士山（剑峰）',
      'zh-TW': '富士山（劍峰）',
    },
    point: {
      ja: '剣ヶ峯（国土地理院の測定点）',
      en: 'Kengamine (GSI measured point)',
      'zh-CN': '剑峰（国土地理院测定点）',
      'zh-TW': '劍峰（國土地理院測定點）',
    },
    description: {
      ja: '富士山の最高地点・剣ヶ峯は3,776 mです。国土地理院の測定点の緯度・経度を掲載し、同じ地点を地図で確認できます。',
      en: 'Mount Fuji reaches 3,776 m at Kengamine. The latitude and longitude identify the GSI measured point; the map opens at that location.',
      'zh-CN': '富士山最高点剑峰海拔3,776 m。下列纬度、经度对应国土地理院测定点，可在地图中查看。',
      'zh-TW':
        '富士山最高點劍峰標高3,776 m。下列緯度、經度對應國土地理院測定點，可開啟同一位置的地圖。',
    },
    sources: [
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
    ],
    relatedSlugs: [],
  },
  asosan: {
    name: {
      ja: '阿蘇山（高岳）',
      en: 'Aso (Takadake)',
      'zh-CN': '阿苏山（高岳）',
      'zh-TW': '阿蘇山（高岳）',
    },
    point: {
      ja: '高岳',
      en: 'Takadake',
      'zh-CN': '高岳',
      'zh-TW': '高岳',
    },
    description: {
      ja: '阿蘇山の最高峰は高岳（1,592 m）です。中岳の1,506 mは中岳山頂の標高で、火口見学地点の高さとは異なります。',
      en: 'Aso’s highest summit is Takadake (1,592 m). Nakadake’s 1,506 m refers to its summit, not the crater viewing area.',
      'zh-CN': '阿苏山最高峰为高岳（1,592 m）。中岳的1,506 m指山顶海拔，并非火口参观点的高度。',
      'zh-TW': '阿蘇山最高峰為高岳（1,592 m）。中岳的1,506 m指山頂標高，並非火口參觀地點的高度。',
    },
    sources: [
      {
        label: '参考資料 / Source',
        url: 'https://www.data.jma.go.jp/vois/data/fukuoka/503_Asosan/503_index.html',
      },
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
      {
        label: '阿蘇山上ビジターセンター / Aso Visitor Center',
        url: 'https://aso-visitorcenter.com/climbing-information/',
      },
    ],
    relatedSlugs: [],
  },
  horaisan: {
    name: {
      ja: '蓬莱山（滋賀県大津市）',
      en: 'Horaisan (Otsu, Shiga)',
      'zh-CN': '蓬莱山（滋贺县大津市）',
      'zh-TW': '蓬萊山（滋賀縣大津市）',
    },
    point: {
      ja: '蓬莱山',
      en: 'Horaisan',
      'zh-CN': '蓬莱山',
      'zh-TW': '蓬萊山',
    },
    description: {
      ja: '滋賀県大津市の蓬莱山です。大津市の公表値1,173.8 mをメートル単位に丸めて1,174 mと表示しています。びわ湖バレイの打見山とは別の峰で、位置関係は施設の公式地図で確認できます。',
      en: 'Horaisan is in Otsu, Shiga. The city’s published 1,173.8 m is rounded to 1,174 m here. It is separate from Uchimi; see the Biwako Valley map for their locations.',
      'zh-CN':
        '这是滋贺县大津市的蓬莱山。大津市公布的1,173.8 m取整为1,174 m。打见山是另一座山峰，可参考琵琶湖谷官方地图。',
      'zh-TW':
        '這是滋賀縣大津市的蓬萊山。大津市公布的1,173.8 m四捨五入為1,174 m。打見山是另一座山峰，可參考琵琶湖谷官方地圖。',
    },
    sources: [
      {
        label: '参考資料 / Source',
        url: 'https://www.city.otsu.lg.jp/material/files/group/109/2026databook6.pdf',
      },
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
      {
        label: 'びわ湖バレイ / Biwako Valley',
        url: 'https://www.biwako-valley.com/wordpress/wp-content/uploads/2026/05/guidemap_zh-cht.pdf',
      },
    ],
    relatedSlugs: [],
  },
  hakkoda: {
    name: {
      ja: '八甲田山（大岳）',
      en: 'Hakkoda (Odake)',
      'zh-CN': '八甲田山（大岳）',
      'zh-TW': '八甲田山（大岳）',
    },
    point: {
      ja: '大岳',
      en: 'Odake',
      'zh-CN': '大岳',
      'zh-TW': '大岳',
    },
    description: {
      ja: '八甲田山の最高峰は大岳（1,584 m）です。ロープウェーが上がるのは別の峰・田茂萢岳の山頂付近で、大岳山頂へ直結するものではありません。駅の高さと山頂標高も区別してください。',
      en: 'Hakkoda’s highest summit is Odake (1,584 m). The ropeway reaches the summit area of a different peak, Tamoyachidake, not Odake. The station elevation is not the summit elevation.',
      'zh-CN':
        '八甲田山最高峰为大岳（1,584 m）。缆车通往另一座山峰田茂萢岳的山顶附近，并非大岳。车站高度与山顶海拔不同。',
      'zh-TW':
        '八甲田山最高峰為大岳（1,584 m）。纜車通往另一座山峰田茂萢岳的山頂附近，並非大岳。車站高度與山頂標高不同。',
    },
    sources: [
      {
        label: '参考資料 / Source',
        url: 'https://www.city.aomori.aomori.jp/bunka_sports_kankou/kankou/1005230/1005263/1005267.html',
      },
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
    ],
    relatedSlugs: [],
  },
  azuma: {
    name: {
      ja: '吾妻山（西吾妻山・山形県／福島県）',
      en: 'Azuma (Nishi-Azuma, Yamagata/Fukushima)',
      'zh-CN': '吾妻山（西吾妻山・山形／福岛）',
      'zh-TW': '吾妻山（西吾妻山・山形／福島）',
    },
    point: {
      ja: '西吾妻山',
      en: 'Nishi-Azuma',
      'zh-CN': '西吾妻山',
      'zh-TW': '西吾妻山',
    },
    description: {
      ja: '山形県・福島県にまたがる吾妻連峰の最高峰、西吾妻山（2,035 m）を掲載しています。島根県・広島県の同名の吾妻山とは別の山です。',
      en: 'This page covers Nishi-Azuma (2,035 m), the highest summit of the Azuma range across Yamagata and Fukushima. It is distinct from Azumayama in Shimane/Hiroshima.',
      'zh-CN': '本页为山形、福岛两县吾妻连峰最高峰西吾妻山（2,035 m），与岛根、广岛的同名山不同。',
      'zh-TW': '本頁為山形、福島兩縣吾妻連峰最高峰西吾妻山（2,035 m），與島根、廣島的同名山不同。',
    },
    sources: [
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
    ],
    relatedSlugs: ['azumayama'],
  },
  azumayama: {
    name: {
      ja: '吾妻山（島根県・広島県）',
      en: 'Azumayama (Shimane/Hiroshima)',
      'zh-CN': '吾妻山（岛根・广岛）',
      'zh-TW': '吾妻山（島根・廣島）',
    },
    point: {
      ja: '吾妻山',
      en: 'Azumayama',
      'zh-CN': '吾妻山',
      'zh-TW': '吾妻山',
    },
    description: {
      ja: '島根県・広島県の吾妻山（1,238 m）です。山形県・福島県の西吾妻山とは別の山です。',
      en: 'Azumayama (1,238 m) lies in Shimane/Hiroshima. It is distinct from Nishi-Azuma in Yamagata/Fukushima.',
      'zh-CN': '这是岛根、广岛两县的吾妻山（1,238 m），与山形、福岛的西吾妻山不同。',
      'zh-TW': '這是島根、廣島兩縣的吾妻山（1,238 m），與山形、福島的西吾妻山不同。',
    },
    sources: [
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
    ],
    relatedSlugs: ['azuma'],
  },
  daisetsuzan: {
    name: {
      ja: '大雪山（旭岳）',
      en: 'Daisetsuzan (Asahidake)',
      'zh-CN': '大雪山（旭岳）',
      'zh-TW': '大雪山（旭岳）',
    },
    point: {
      ja: '旭岳',
      en: 'Asahidake',
      'zh-CN': '旭岳',
      'zh-TW': '旭岳',
    },
    description: {
      ja: '大雪山は山々の総称です。掲載する2,291 mは最高峰・旭岳の標高で、座標もこの峰の位置です。',
      en: 'Daisetsuzan is a mountain group. The listed 2,291 m and coordinates refer to its highest summit, Asahidake.',
      'zh-CN': '大雪山是山群的总称。2,291 m为最高峰旭岳的海拔，坐标也对应此峰。',
      'zh-TW': '大雪山是山群的總稱。2,291 m為最高峰旭岳的標高，座標也對應此峰。',
    },
    sources: [
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
    ],
    relatedSlugs: [],
    reading: 'たいせつざん（あさひだけ）',
  },
  yatsugatake: {
    name: {
      ja: '八ヶ岳（赤岳）',
      en: 'Yatsugatake (Akadake)',
      'zh-CN': '八岳（赤岳）',
      'zh-TW': '八岳（赤岳）',
    },
    point: {
      ja: '赤岳',
      en: 'Akadake',
      'zh-CN': '赤岳',
      'zh-TW': '赤岳',
    },
    description: {
      ja: '八ヶ岳は山々の総称です。掲載する2,899 mは最高峰・赤岳の標高で、座標もこの峰の位置です。',
      en: 'Yatsugatake is a mountain group. The listed 2,899 m and coordinates refer to its highest summit, Akadake.',
      'zh-CN': '八岳是山群的总称。2,899 m为最高峰赤岳的海拔，坐标也对应此峰。',
      'zh-TW': '八岳是山群的總稱。2,899 m為最高峰赤岳的標高，座標也對應此峰。',
    },
    sources: [
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
    ],
    relatedSlugs: [],
    reading: 'やつがたけ（あかだけ）',
  },
  kirishimayama: {
    name: {
      ja: '霧島山（韓国岳）',
      en: 'Kirishima (Karakunidake)',
      'zh-CN': '雾岛山（韩国岳）',
      'zh-TW': '霧島山（韓國岳）',
    },
    point: {
      ja: '韓国岳',
      en: 'Karakunidake',
      'zh-CN': '韩国岳',
      'zh-TW': '韓國岳',
    },
    description: {
      ja: '霧島山は山々の総称です。掲載する1,700 mは最高峰・韓国岳の標高で、座標もこの峰の位置です。',
      en: 'Kirishima is a mountain group. The listed 1,700 m and coordinates refer to its highest summit, Karakunidake.',
      'zh-CN': '雾岛山是山群的总称。1,700 m为最高峰韩国岳的海拔，坐标也对应此峰。',
      'zh-TW': '霧島山是山群的總稱。1,700 m為最高峰韓國岳的標高，座標也對應此峰。',
    },
    sources: [
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
    ],
    relatedSlugs: [],
    reading: 'きりしまやま（からくにだけ）',
  },
  tateyama: {
    name: {
      ja: '立山（雄山）',
      en: 'Tateyama (Oyama)',
      'zh-CN': '立山（雄山）',
      'zh-TW': '立山（雄山）',
    },
    point: {
      ja: '雄山',
      en: 'Oyama',
      'zh-CN': '雄山',
      'zh-TW': '雄山',
    },
    description: {
      ja: 'このページの立山は雄山（3,003 m）です。雄山は3,003 m、立山の最高峰・大汝山は3,015 mで、異なる峰です。',
      en: 'This page covers Tateyama’s Oyama (3,003 m). Oyama is 3,003 m; the highest summit, Onanjiyama, is 3,015 m. They are different peaks.',
      'zh-CN': '本页为立山的雄山（3,003 m）。雄山3,003 m，最高峰大汝山3,015 m，两者为不同山峰。',
      'zh-TW': '本頁為立山的雄山（3,003 m）。雄山3,003 m，最高峰大汝山3,015 m，兩者為不同山峰。',
    },
    sources: [
      {
        label: '参考資料 / Source',
        url: 'https://tateyama.niye.go.jp/program/2755/',
      },
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
    ],
    relatedSlugs: ['tate'],
    reading: 'たてやま（おやま）',
  },
  tate: {
    name: {
      ja: '立山（大汝山）',
      en: 'Tateyama (Onanjiyama)',
      'zh-CN': '立山（大汝山）',
      'zh-TW': '立山（大汝山）',
    },
    point: {
      ja: '大汝山',
      en: 'Onanjiyama',
      'zh-CN': '大汝山',
      'zh-TW': '大汝山',
    },
    description: {
      ja: 'このページの立山は大汝山（3,015 m）です。雄山は3,003 m、立山の最高峰・大汝山は3,015 mで、異なる峰です。',
      en: 'This page covers Tateyama’s Onanjiyama (3,015 m). Oyama is 3,003 m; the highest summit, Onanjiyama, is 3,015 m. They are different peaks.',
      'zh-CN': '本页为立山的大汝山（3,015 m）。雄山3,003 m，最高峰大汝山3,015 m，两者为不同山峰。',
      'zh-TW': '本頁為立山的大汝山（3,015 m）。雄山3,003 m，最高峰大汝山3,015 m，兩者為不同山峰。',
    },
    sources: [
      {
        label: '参考資料 / Source',
        url: 'https://tateyama.niye.go.jp/program/2755/',
      },
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
    ],
    relatedSlugs: ['tateyama'],
    reading: 'たてやま（おおなんじやま）',
  },
  daisen: {
    name: {
      ja: '大山（弥山・鳥取県）',
      en: 'Daisen (Misen, Tottori)',
      'zh-CN': '大山（弥山・鸟取）',
      'zh-TW': '大山（彌山・鳥取）',
    },
    point: {
      ja: '弥山の掲載地点',
      en: 'Listed point near Misen',
      'zh-CN': '弥山附近的标示点',
      'zh-TW': '彌山附近的標示點',
    },
    description: {
      ja: '大山の弥山は1,709 m、最高峰の剣ヶ峰は1,729 mです。掲載位置は弥山側で、最高峰の座標ではありません。弥山から剣ヶ峰への縦走については鳥取県の最新案内を確認してください。',
      en: 'Daisen’s Misen is 1,709 m; its highest summit, Kengamine, is 1,729 m. The listed coordinates are on the Misen side, not the highest summit. Consult Tottori’s current guidance on the ridge to Kengamine.',
      'zh-CN':
        '大山弥山海拔1,709 m，最高峰剑峰为1,729 m。所列坐标位于弥山侧，并非最高峰。前往剑峰的山脊请查看鸟取县最新公告。',
      'zh-TW':
        '大山彌山標高1,709 m，最高峰劍峰為1,729 m。所列座標位於彌山側，並非最高峰。前往劍峰的稜線請查看鳥取縣最新公告。',
    },
    sources: [
      {
        label: '参考資料 / Source',
        url: 'https://chushikoku.env.go.jp/park/daisen/viewpoint/mt_daisen/index.html',
      },
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
      {
        label: '鳥取県の登山情報 / Tottori hiking information',
        url: 'https://www.pref.tottori.lg.jp/dd.aspx?menuid=66257',
      },
    ],
    relatedSlugs: [],
  },
  kitadake: {
    name: {
      ja: '北岳',
      en: 'Mount Kita',
      'zh-CN': '北岳',
      'zh-TW': '北岳',
    },
    point: {
      ja: '北岳',
      en: 'Mount Kita',
      'zh-CN': '北岳',
      'zh-TW': '北岳',
    },
    description: {
      ja: '北岳（3,193 m）は赤石山脈（南アルプス）にあり、間ノ岳・農鳥岳と白峰三山をなします。',
      en: 'Mount Kita (3,193 m) is in the Akaishi Mountains (Southern Alps). Together with Ainodake and Notoridake it forms the Shirane Sanzan.',
      'zh-CN': '北岳（3,193 m）位于赤石山脉（南阿尔卑斯），与间岳、农鸟岳合称白峰三山。',
      'zh-TW': '北岳（3,193 m）位於赤石山脈（南阿爾卑斯），與間岳、農鳥岳合稱白峰三山。',
    },
    sources: [
      {
        label: '参考資料 / Source',
        url: 'https://www.env.go.jp/nature/nationalparks/list/minamialps/spot/index.html',
      },
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
    ],
    relatedSlugs: ['ainodake', 'notoridake'],
  },
  kurodake: {
    name: {
      ja: '水晶岳（黒岳・富山県）',
      en: 'Suishodake (Kurodake, Toyama)',
      'zh-CN': '水晶岳（黑岳・富山）',
      'zh-TW': '水晶岳（黑岳・富山）',
    },
    point: {
      ja: '水晶岳の南峰',
      en: 'Suishodake, south summit',
      'zh-CN': '水晶岳南峰',
      'zh-TW': '水晶岳南峰',
    },
    description: {
      ja: '富山県の水晶岳（すいしょうだけ）は黒岳（くろだけ）とも呼ばれます。2,986 mは南峰の標高で、北海道の大雪山にある黒岳とは別の山です。',
      en: 'Suishodake in Toyama is also called Kurodake. The 2,986 m elevation refers to its south summit, not Kurodake in Hokkaido’s Daisetsuzan group.',
      'zh-CN': '富山县水晶岳也称黑岳。2,986 m为南峰海拔，与北海道大雪山的黑岳不同。',
      'zh-TW': '富山縣水晶岳也稱黑岳。2,986 m為南峰標高，與北海道大雪山的黑岳不同。',
    },
    sources: [
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
    ],
    relatedSlugs: [],
    reading: 'すいしょうだけ（くろだけ・なんぽう）',
  },
  makiyama: {
    name: {
      ja: '巻機山',
      en: 'Mount Makihata',
      'zh-CN': '卷机山',
      'zh-TW': '卷機山',
    },
    point: {
      ja: '巻機山の掲載地点',
      en: 'Listed point on Makihata',
      'zh-CN': '卷机山的标示点',
      'zh-TW': '卷機山的標示點',
    },
    description: {
      ja: '巻機山の読みは「まきはたやま」、英語表記はMount Makihataです。山域は新潟県・群馬県にまたがり、掲載地点の所在地は新潟県です。',
      en: 'Mount Makihata (巻機山, Makihata-yama) spans Niigata and Gunma. The listed point is in Niigata.',
      'zh-CN': '卷机山读作Makihata-yama。山域横跨新潟、群马，所列地点位于新潟县。',
      'zh-TW': '卷機山讀作Makihata-yama。山域橫跨新潟、群馬，所列地點位於新潟縣。',
    },
    sources: [
      {
        label: '参考資料 / Source',
        url: 'https://www.pref.niigata.lg.jp/site/minamiuonuma-miryoku/1356769320119.html',
      },
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
    ],
    relatedSlugs: [],
  },
  shiribeshi: {
    name: {
      ja: '羊蹄山（後方羊蹄山）',
      en: 'Mount Yotei',
      'zh-CN': '羊蹄山（后方羊蹄山）',
      'zh-TW': '羊蹄山（後方羊蹄山）',
    },
    point: {
      ja: '羊蹄山',
      en: 'Mount Yotei',
      'zh-CN': '羊蹄山',
      'zh-TW': '羊蹄山',
    },
    description: {
      ja: '北海道の羊蹄山（後方羊蹄山）は、蝦夷富士とも呼ばれる山です。英語ではMount Yotei、別名Ezo Fujiとして紹介されています。',
      en: 'Mount Yotei (羊蹄山／後方羊蹄山) is a mountain in Hokkaido, also known as Ezo Fuji.',
      'zh-CN': '北海道羊蹄山（后方羊蹄山）也称虾夷富士，英文名为Mount Yotei或Ezo Fuji。',
      'zh-TW': '北海道羊蹄山（後方羊蹄山）也稱蝦夷富士，英文名為Mount Yotei或Ezo Fuji。',
    },
    sources: [
      {
        label: '参考資料 / Source',
        url: 'https://www.mlit.go.jp/tagengo-db/en/H30-00065.html',
      },
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
    ],
    relatedSlugs: [],
    reading: 'ようていざん（しりべしやま）',
  },
  arakawa: {
    name: {
      ja: '荒川岳（悪沢岳・東岳）',
      en: 'Warusawadake (Higashidake)',
      'zh-CN': '恶泽岳（东岳）',
      'zh-TW': '惡澤岳（東岳）',
    },
    point: {
      ja: '悪沢岳（東岳）',
      en: 'Warusawadake (Higashidake)',
      'zh-CN': '恶泽岳（东岳）',
      'zh-TW': '惡澤岳（東岳）',
    },
    description: {
      ja: '悪沢岳（東岳）の標高は3,141 mです。荒川三山は東から悪沢岳（東岳）・中岳・前岳の3峰を指し、3,141 mは最高峰の悪沢岳の値です。',
      en: 'Warusawadake (Higashidake) rises to 3,141 m. The Arakawa Sanzan comprises Warusawadake (Higashidake), Nakadake and Maedake from east to west; 3,141 m refers to Warusawadake, the highest peak.',
      'zh-CN':
        '恶泽岳（东岳）海拔3,141 m。荒川三山从东到西为恶泽岳（东岳）、中岳、前岳，3,141 m指最高峰恶泽岳。',
      'zh-TW':
        '惡澤岳（東岳）標高3,141 m。荒川三山從東到西為惡澤岳（東岳）、中岳、前岳，3,141 m指最高峰惡澤岳。',
    },
    sources: [
      {
        label: '参考資料 / Source',
        url: 'https://www.city.shizuoka.lg.jp/okushizuoka/spot/s000019.html',
      },
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
    ],
    relatedSlugs: ['warusawadake', 'arakawanaka'],
  },
  warusawadake: {
    name: {
      ja: '悪沢岳（東岳）',
      en: 'Warusawadake (Higashidake)',
      'zh-CN': '恶泽岳（东岳）',
      'zh-TW': '惡澤岳（東岳）',
    },
    point: {
      ja: '悪沢岳（東岳）',
      en: 'Warusawadake (Higashidake)',
      'zh-CN': '恶泽岳（东岳）',
      'zh-TW': '惡澤岳（東岳）',
    },
    description: {
      ja: '悪沢岳（東岳）の標高は3,141 mです。荒川三山は東から悪沢岳（東岳）・中岳・前岳の3峰を指し、3,141 mは最高峰の悪沢岳の値です。',
      en: 'Warusawadake (Higashidake) rises to 3,141 m. The Arakawa Sanzan comprises Warusawadake (Higashidake), Nakadake and Maedake from east to west; 3,141 m refers to Warusawadake, the highest peak.',
      'zh-CN':
        '恶泽岳（东岳）海拔3,141 m。荒川三山从东到西为恶泽岳（东岳）、中岳、前岳，3,141 m指最高峰恶泽岳。',
      'zh-TW':
        '惡澤岳（東岳）標高3,141 m。荒川三山從東到西為惡澤岳（東岳）、中岳、前岳，3,141 m指最高峰惡澤岳。',
    },
    sources: [
      {
        label: '参考資料 / Source',
        url: 'https://www.city.shizuoka.lg.jp/okushizuoka/spot/s000019.html',
      },
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
    ],
    relatedSlugs: ['arakawa', 'arakawanaka'],
  },
  arakawanaka: {
    name: {
      ja: '荒川中岳',
      en: 'Arakawa Nakadake',
      'zh-CN': '荒川中岳',
      'zh-TW': '荒川中岳',
    },
    point: {
      ja: '荒川中岳',
      en: 'Arakawa Nakadake',
      'zh-CN': '荒川中岳',
      'zh-TW': '荒川中岳',
    },
    description: {
      ja: '荒川中岳の標高は3,084 mです。荒川三山は東から悪沢岳（東岳）・中岳・前岳の3峰を指し、3,141 mは最高峰の悪沢岳の値です。',
      en: 'Arakawa Nakadake rises to 3,084 m. The Arakawa Sanzan comprises Warusawadake (Higashidake), Nakadake and Maedake from east to west; 3,141 m refers to Warusawadake, the highest peak.',
      'zh-CN':
        '荒川中岳海拔3,084 m。荒川三山从东到西为恶泽岳（东岳）、中岳、前岳，3,141 m指最高峰恶泽岳。',
      'zh-TW':
        '荒川中岳標高3,084 m。荒川三山從東到西為惡澤岳（東岳）、中岳、前岳，3,141 m指最高峰惡澤岳。',
    },
    sources: [
      {
        label: '参考資料 / Source',
        url: 'https://www.city.shizuoka.lg.jp/okushizuoka/spot/s000019.html',
      },
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
    ],
    relatedSlugs: ['arakawa', 'warusawadake'],
  },
  yakedake: {
    name: {
      ja: '焼岳（北峰）',
      en: 'Yakedake (North Peak)',
      'zh-CN': '烧岳（北峰）',
      'zh-TW': '燒岳（北峰）',
    },
    point: {
      ja: '北峰の掲載地点',
      en: 'Listed point near the north summit',
      'zh-CN': '北峰附近的标示点',
      'zh-TW': '北峰附近的標示點',
    },
    description: {
      ja: '焼岳（やけだけ）の北峰（ほっぽう）は2,444 m、最高点の南峰は2,455 mです。掲載座標は北峰側を示し、南峰の標高・位置とは区別しています。',
      en: 'Yakedake’s north summit is 2,444 m; the higher south summit is 2,455 m. The listed coordinates are on the north summit side.',
      'zh-CN': '烧岳北峰为2,444 m，最高点南峰为2,455 m。所列坐标位于北峰侧，与南峰不同。',
      'zh-TW': '燒岳北峰為2,444 m，最高點南峰為2,455 m。所列座標位於北峰側，與南峰不同。',
    },
    sources: [
      {
        label: '参考資料 / Source',
        url: 'https://www.mlit.go.jp/tagengo-db/R2-00717.html',
      },
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
    ],
    relatedSlugs: [],
    reading: 'やけだけ（ほっぽう）',
  },
  be: {
    name: {
      ja: '別山（北峰・立山連峰）',
      en: 'Bessan (North Peak, Tateyama Range)',
      'zh-CN': '别山（北峰・立山连峰）',
      'zh-TW': '別山（北峰・立山連峰）',
    },
    point: {
      ja: '別山の北峰',
      en: 'Bessan, north summit',
      'zh-CN': '别山北峰',
      'zh-TW': '別山北峰',
    },
    description: {
      ja: '富山県・立山連峰の別山（べっさん）北峰、2,880 mを掲載しています。ローマ字はBessanです。白山連峰の同名の別山とは別の山です。',
      en: 'This is Bessan’s north summit (2,880 m) in Toyama’s Tateyama Range. It is distinct from the Bessan in the Hakusan range.',
      'zh-CN': '这是富山县立山连峰的别山北峰（2,880 m），罗马字为Bessan，与白山连峰的同名山不同。',
      'zh-TW': '這是富山縣立山連峰的別山北峰（2,880 m），羅馬字為Bessan，與白山連峰的同名山不同。',
    },
    sources: [
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
    ],
    relatedSlugs: [],
    reading: 'べっさん（ほっぽう）',
  },
  myoko: {
    name: {
      ja: '妙高山（北峰）',
      en: 'Myoko (North Peak)',
      'zh-CN': '妙高山（北峰）',
      'zh-TW': '妙高山（北峰）',
    },
    point: {
      ja: '北峰の掲載地点',
      en: 'Listed point near the north summit',
      'zh-CN': '北峰附近的标示点',
      'zh-TW': '北峰附近的標示點',
    },
    description: {
      ja: '妙高山の北峰は2,446 m、最高点の南峰は2,454 mです。このページの標高と掲載位置は北峰を指し、最高点の南峰とは区別しています。',
      en: 'Myoko’s north summit is 2,446 m; the highest point is the south summit at 2,454 m. This page’s elevation and listed position refer to the north summit.',
      'zh-CN': '妙高山北峰为2,446 m，最高点南峰为2,454 m。本页标高与位置对应北峰，不是最高点南峰。',
      'zh-TW': '妙高山北峰為2,446 m，最高點南峰為2,454 m。本頁標高與位置對應北峰，不是最高點南峰。',
    },
    sources: [
      {
        label: '参考資料 / Source',
        url: 'https://akakura.gr.jp/activity/787/',
      },
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
    ],
    relatedSlugs: [],
    reading: 'みょうこうさん（ほっぽう）',
  },
  'kusatsu-shirane': {
    name: {
      ja: '草津白根山（本白根山）',
      en: 'Kusatsu-Shirane (Motoshirane)',
      'zh-CN': '草津白根山（本白根山）',
      'zh-TW': '草津白根山（本白根山）',
    },
    point: {
      ja: '本白根山の最高点',
      en: 'Motoshirane highest point',
      'zh-CN': '本白根山最高点',
      'zh-TW': '本白根山最高點',
    },
    description: {
      ja: '草津白根山は本白根山・白根山などの総称です。2,171 mは本白根山の最高点。湯釜は別の峰である白根山（2,160 m）の火口湖です。',
      en: 'Kusatsu-Shirane is a group including Motoshirane and Shirane. The 2,171 m elevation refers to Motoshirane’s highest point. Yugama is a crater lake on Shirane (2,160 m), a different peak.',
      'zh-CN':
        '草津白根山是本白根山、白根山等的总称。2,171 m指本白根山最高点；汤釜是另一座白根山（2,160 m）的火口湖。',
      'zh-TW':
        '草津白根山是本白根山、白根山等的總稱。2,171 m指本白根山最高點；湯釜是另一座白根山（2,160 m）的火口湖。',
    },
    sources: [
      {
        label: '参考資料 / Source',
        url: 'https://ds.data.jma.go.jp/svd/vois/data/tokyo/305_Kusatsu-Shiranesan/305_index.html',
      },
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
    ],
    relatedSlugs: [],
    reading: 'くさつしらねさん（もとしらねさん）',
  },
  'mount-fugendake-mount-unzendake': {
    name: {
      ja: '雲仙岳（普賢岳）',
      en: 'Unzen (Fugendake)',
      'zh-CN': '云仙岳（普贤岳）',
      'zh-TW': '雲仙岳（普賢岳）',
    },
    point: {
      ja: '普賢岳',
      en: 'Fugendake',
      'zh-CN': '普贤岳',
      'zh-TW': '普賢岳',
    },
    description: {
      ja: '普賢岳の標高は1,359 mです。雲仙岳の最高峰は平成新山（1,483 m）で、別の峰です。掲載座標は普賢岳を指します。',
      en: 'Fugendake is 1,359 m. Unzen’s highest peak is Heisei-Shinzan (1,483 m), a different summit. The listed coordinates refer to Fugendake.',
      'zh-CN':
        '普贤岳海拔1,359 m；云仙岳最高峰为平成新山（1,483 m）。两者是不同山峰，所列坐标对应普贤岳。',
      'zh-TW':
        '普賢岳標高1,359 m；雲仙岳最高峰為平成新山（1,483 m）。兩者是不同山峰，所列座標對應普賢岳。',
    },
    sources: [
      {
        label: '参考資料 / Source',
        url: 'https://www.data.jma.go.jp/vois/data/filing/bulletin/catalog/appendix/v_active.html',
      },
      {
        label: '国土地理院 / GSI',
        url: 'https://www.gsi.go.jp/kihonjohochousa/kihonjohochousa41139.html',
      },
    ],
    relatedSlugs: [],
  },
}

export const getMountainFact = (slug: string) => mountainFacts[slug]
