import type { SupportedLocale } from './index'
import type { MountainListId } from '@/types/mountains'

const lowSource = 'https://www.yamakei.co.jp/products/2824050010.html'
const threeHundredSource =
  'https://jac1.or.jp/wp-content/uploads/2016/10/300meizanlist%E3%80%80.pdf'

const scopes = {
  hyakuteizan: {
    ja: {
      title: '小林泰彦の日本百低山｜選定100座の一覧と地図',
      note: '小林泰彦著『日本百低山』（山と溪谷社）の100座を掲載しています。NHK「にっぽん百低山」の放送回一覧ではありません。',
      sourceLabel: '山と溪谷社：書籍情報と収録100座',
    },
    en: {
      title: 'Yasuhiko Kobayashi’s 100 Low Mountains of Japan: List and Map',
      note: 'These are the 100 mountains in Nihon Hyakuteizan by Yasuhiko Kobayashi, published by Yama-kei. This is not an episode guide to NHK’s Nippon Hyakuteizan.',
      sourceLabel: 'Yama-kei: book and 100-mountain contents',
    },
    'zh-CN': {
      title: '小林泰彦的日本百低山｜入选100座一览与地图',
      note: '收录小林泰彦著《日本百低山》（山与溪谷社）的100座山，并非NHK《にっぽん百低山》的播出节目列表。',
      sourceLabel: '山与溪谷社：书籍资料与100座目录',
    },
    'zh-TW': {
      title: '小林泰彥的日本百低山｜入選100座一覽與地圖',
      note: '收錄小林泰彥著《日本百低山》（山與溪谷社）的100座山，並非NHK《にっぽん百低山》的播出節目列表。',
      sourceLabel: '山與溪谷社：書籍資料與100座目錄',
    },
  },
  sambyakumeizan: {
    ja: {
      title: '日本三百名山から100座を探す｜一覧と地図',
      note: 'この地図と一覧は、日本山岳会の日本三百名山から本サイトに収録した100座です。全300座の一覧は日本山岳会の資料をご覧ください。百名山・二百名山のページにも関連する山を掲載しています。二百名山とは山上ヶ岳と荒沢岳など採否に違いがあり、単純な「300座から200座を引いた一覧」ではありません。',
      sourceLabel: '日本山岳会：全300座の選定資料（PDF）',
    },
    en: {
      title: 'Explore 100 Peaks from Japan’s 300 Famous Mountains',
      note: 'This map and list cover 100 selected entries from the Japanese Alpine Club’s 300 Famous Mountains. For all 300, see the club’s full list. Related peaks also appear on our 100 and 200 Famous Mountains pages. The 200-mountain selection differs, including Arasawadake instead of Sanjogatake, so this is not simply 300 minus 200.',
      sourceLabel: 'Japanese Alpine Club: complete 300-mountain list (PDF)',
    },
    'zh-CN': {
      title: '从日本三百名山中探索100座｜一览与地图',
      note: '此地图与列表收录日本山岳会日本三百名山中的100座，并非全部300座。完整名单见日本山岳会资料；本站百名山、二百名山页面也有相关山岳。二百名山以荒泽岳代替山上岳等，选定范围不同，本页不是简单的300减200。',
      sourceLabel: '日本山岳会：完整300座选定资料（PDF）',
    },
    'zh-TW': {
      title: '從日本三百名山中探索100座｜一覽與地圖',
      note: '此地圖與列表收錄日本山岳會日本三百名山中的100座，並非全部300座。完整名單見日本山岳會資料；本站百名山、二百名山頁面也有相關山岳。二百名山以荒澤岳代替山上岳等，選定範圍不同，本頁不是簡單的300減200。',
      sourceLabel: '日本山岳會：完整300座選定資料（PDF）',
    },
  },
}

export const getListScope = (listId: MountainListId, locale: SupportedLocale) => {
  if (listId !== 'hyakuteizan' && listId !== 'sambyakumeizan') return undefined

  return {
    ...scopes[listId][locale],
    sourceUrl: listId === 'hyakuteizan' ? lowSource : threeHundredSource,
  }
}
