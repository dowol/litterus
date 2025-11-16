import {Toolbar, List} from '@mui/material';
import {styled} from '@mui/system';

import {useRef, useCallback, useMemo} from "react";
import type {FormEvent} from 'react';

import Sortable from 'sortablejs';

import defaultText from '../util/defaultText.json' with {type: 'json'}

import useFontView from '../util/font-view';
import useFontStore from '../util/font-store.ts';

import FileDialog from './FileDialog.tsx';
import FontViewItem from "./FontViewItem.tsx";

const FontView = styled('article')`
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    justify-content: space-between;

    @media (min-width: 960px) {
        width: calc(100vw - 280px);
    }

    flex-grow: 1;

    > * {
        padding: 0 1.5rem;
    }

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


