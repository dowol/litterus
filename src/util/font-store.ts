import {create} from 'zustand';

interface FontStoreData {
    fontList: string[];
    current: string;
}

interface FontStoreAction {
    add(blob: Blob): string;
    remove(id_or_url: string): void;
    setCurrent(current: string): void;
}

type FontStore = FontStoreData & FontStoreAction;

const useFontStore = create<FontStore>((set, factory) => ({
    fontList: [],
    current: '',
    add(blob) {
        const url = URL.createObjectURL(blob);
        set(({fontList}) => ({fontList: [...fontList, url]}));
        return url;
    },
    remove(id_or_url) {
        if(!URL.canParse(id_or_url))
            id_or_url = `blob:${location.origin}/${id_or_url}`;

        set(({fontList}) => ({fontList: fontList.filter(item => item !== id_or_url)}));
        URL.revokeObjectURL(id_or_url);
    },
    setCurrent(current) {
        set({current});
    }
}));

export default useFontStore;