export declare type MountainsData = {
    no: number;
    name: string;
    kanaName: string;
    elevation: number;
    mountainSystem: string;
    prefectures: string;
    longitude: number;
    latitude: number;
    remarks: string;
};
export declare const get100FamousMountainsInJapan: () => MountainsData[];
export declare const get100FamousMountainsInJapan_hokkaido: () => MountainsData[];
export declare const get100FamousMountainsInJapan_kansai: () => MountainsData[];
export declare const get100FamousMountainsInJapan_elevation: () => MountainsData[];
