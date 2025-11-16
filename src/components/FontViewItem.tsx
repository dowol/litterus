import {Skeleton, Paper, IconButton, Chip, Tooltip} from '@mui/material';
import {styled} from '@mui/system';

import useFontView from '../util/font-view';
import useFontStore from '../util/font-store.ts';
import blobs from '../util/blobs';

import ClearIcon from '@mui/icons-material/Clear';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';

import {type FontMetadata, getFontMetadata} from '../util/font-metadata';

import {useCallback, useEffect, useMemo, useState} from "react";

import fontWeightName from '../util/fontWeightName.json' with {type: 'json'};

const FontViewBox = styled(Paper)`
    margin: .5rem;
    padding: .375rem .75rem;
    overflow-x: hidden;

    & p.sample-text {
        text-align: left;
        unicode-bidi: isolate;
        margin: 0;
        text-wrap: nowrap;

        overflow-x: hidden;
        padding: 0 .25rem;
        user-select: none;
    }
`;

const FontViewHeader = styled('div')`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
`;

const ControlBox = styled('div')`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
`;

const FontFaceInfo = styled('h6')`
    font-weight: 200;
    margin: 0;
    font-size: 1rem;
    border-bottom: 1px solid gray;
    padding: 0 .375rem;

    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    gap: .25rem;
`;

const FontFaceName = styled('strong')`
    text-transform: uppercase;
    font-weight: 700;
    font-style: italic;
`;

const FontWeight = styled(Chip)`
`;

const FontIsItalic = styled(Chip)`
    font-style: italic;
`;

interface FontViewProps {
    src?: string;
    family?: string;
}

export default function FontViewItem({src, family}: FontViewProps) {
    if(!src) src='';

    const id = useMemo(() => blobs.getUUID(src)?.replaceAll('-', ''), []);
    const unloadFont = useFontStore(s => s.remove);

    const [metadata, setMetadata] = useState<FontMetadata | null>(null);
    const setCurrent = useFontStore(s => s.setCurrent);

    const onDelete = useCallback(() => {
        unloadFont(src);
    }, []);

    const onInfo = useCallback(() => {
        const id = blobs.getUUID(src) ?? '';
        setCurrent(id);
    }, []);

    useEffect(() => {
        let fontFace: FontFace;

        getFontMetadata(src)
            .then(data => {
                setMetadata(data);
                const key = 'font-metadata:' + blobs.getUUID(src);
                setCurrent(key);
                sessionStorage.setItem(key, JSON.stringify(data));
                fontFace = new FontFace(data.fontName, `url('${src}')`, {
                    style: data.style.toString(),
                    weight: data.weight.toString()
                });
                document.fonts.add(fontFace);
                fontFace.load().catch(reason => console.error(reason));
            });

        return () => void (fontFace && document.fonts.delete(fontFace));

    }, []);


    return (
        <FontViewBox
            // @ts-ignore
            component={'li'}
            sx={{
                '& p.sample-text': {
                    fontFamily: family || `${metadata?.fontName && `'${metadata.fontName}'`}, system-ui, sans-serif`,
                    fontWeight: metadata?.weight.toString(),
                    fontStyle: metadata?.style.toString()
                }
            }}
            elevation={2} id={id ? 'font_' + id : undefined}>
            <FontViewHeader>

                <FontFaceInfo translate={'no'}>
                    <FontFaceName>{family || (metadata?.fontName ?? <Skeleton variant={'rectangular'}/>)}</FontFaceName>
                    {(metadata?.weight) &&
                        <FontWeight label={`${metadata.weight} / ${fontWeightName[metadata.weight]}`} size={'small'}/>}
                    {metadata?.style === 'italic' && <FontIsItalic label={'italic'} size={'small'}/>}
                </FontFaceInfo>

                <ControlBox>
                    <Tooltip title={`View Metadata of ${metadata?.fontName} ${metadata?.subFamilyName}`} arrow>
                        <IconButton onClick={onInfo}>
                            <InfoOutlineIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={`Unload ${metadata?.fontName} ${metadata?.subFamilyName}`} arrow>
                        <IconButton onClick={onDelete}>
                            <ClearIcon/>
                        </IconButton>
                    </Tooltip>

                </ControlBox>
            </FontViewHeader>
            <SampleText/>
        </FontViewBox>
    );
}

function SampleText() {
    const text = useFontView(s => s.text);

    return (
        <p className={'sample-text'} translate={'no'}>{text}</p>
    );
}

