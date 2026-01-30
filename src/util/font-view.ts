import {create} from 'zustand';
import type {CssFontSize, CssFontStyle, CssFontWeight} from './font-metadata';

interface FontSampleTextData {
    text: string;
    fontSize: CssFontSize;
    fontStyle: CssFontStyle;
    fontWeight: CssFontWeight;
}

interface FontSampleTextActions {
    setText: (text: string) => void;
    setFontSize: (fontSize: CssFontSize) => void;
    setFontStyle: (fontStyle: CssFontStyle) => void;
    setFontWeight: (fontWeight: CssFontWeight) => void;

}

const useFontView = create<FontSampleTextData & FontSampleTextActions>(set => ({
    text: '',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: 400,


    setText(text) {
        if(text) set({text});
        else set({text: ''});
    },
    setFontSize: (fontSize) => {
        set({fontSize});
    },
    setFontStyle: (fontStyle: CssFontStyle) => {
        set({fontStyle});
    },
    setFontWeight(fontWeight) {
        set({fontWeight});
    }
}));

export default useFontView;