import {List} from '@mui/material';
import {styled} from '@mui/system';

import {useRef, useCallback} from "react";

import Sortable from 'sortablejs';

import useFontView from '../util/font-view';
import useFontStore from '../util/font-store.ts';

import FileDialog from './FileDialog.tsx';
import FontViewItem from "./FontViewItem.tsx";

const FontView = styled('article')`
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    justify-content: space-between;

    @media (min-width: 1024px) {
        width: 960px;
        margin: auto;
    }

    flex-grow: 1;

    ul {
        overflow-x: hidden;
        overflow-y: auto;
    }
`;


export default function FontViewList() {
    const listRef = useRef<HTMLUListElement>(null);
    const fontList = useFontStore(s => s.fontList);

    const fontSize = useFontView(s => s.fontSize);

    const callback = useCallback(() => {
        const sortable = Sortable.create(listRef.current!, {
            animation: 150,
            handle: '.sample-text',
        });

        return () => {
            sortable.destroy();
        }
    }, []);

    return (
        <FontView ref={callback}>
            <List ref={listRef} sx={{
                '& p.sample-text': {fontSize}
            }}>
                {
                    fontList.map(src => {
                        return (<FontViewItem {...{src}} key={src}/>);
                    })
                }
            </List>
            <FileDialog/>
        </FontView>
    )
}


