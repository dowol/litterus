import ot from 'opentype.js';

export type CssFontSizeUnit = 'px' | 'pt' | 'rem' | 'mm' | 'cm' | 'in' ;

export type CssFontSize = number | `${number}${CssFontSizeUnit}`;
export type CssFontStyle = 'normal' | 'italic' | 'oblique';
export type CssFontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;


export interface FontMetadata {
    fontName: string;
    subFamilyName: string;
    weight: CssFontWeight;
    style: Omit<CssFontStyle, 'oblique'>
    localizedName: Record<string, string>;
    copyright?: string;
    version?: string;
    designer?: string;
    url?: string;
}

export async function getFontMetadata(src: string): Promise<FontMetadata>{
    const font = await ot.load(src);

    const result: FontMetadata = {
        fontName: font.names.fontFamily.en,
        subFamilyName: font.names.fontSubfamily?.en,
        weight: font.tables.os2.usWeightClass,
        style: Boolean(font.tables.os2.fsSelection & 1) ? 'italic' : 'normal',
        localizedName: font.names.fontFamily,
        copyright: font.names.copyright?.en,
        version: font.names.version.en,
        designer: font.names.designer?.en,
    };

    if(result.weight <= 250) {
        if(/Thin$/i.test(result.fontName))
            result.weight = 100;
        else if(/ExtraLight$/i.test(result.fontName))
            result.weight = 200;
    }

    return result;

}