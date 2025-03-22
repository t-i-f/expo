import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LocalStorage {
    static get = async (key: string, defaultValue?: string): Promise<string | undefined> => {
        const x = await AsyncStorage.getItem(key);
        return x || defaultValue;
    };

    static getBool = async (key: string, defaultValue = false): Promise<boolean> => {
        const x = await AsyncStorage.getItem(key);
        return x === undefined ? defaultValue : Boolean(x);
    };

    static getInt = async (key: string, defaultValue = -1): Promise<number> => {
        const x = await AsyncStorage.getItem(key);
        return x === undefined ? defaultValue : Number(x);
    };

    static set = async (key: string, value: any) => {
        return AsyncStorage.setItem(key, value);
    };

    static remove = async (key: string) => {
        return AsyncStorage.removeItem(key);
    };

    static clear = async () => {
        return AsyncStorage.clear();
    };

    static multiremove = async (keys: string[]) => {
        return AsyncStorage.multiRemove(keys);
    };

    static multiSet = async (obj: Record<string, any>) => {
        return AsyncStorage.multiSet(Object.entries(obj));
    };
}
