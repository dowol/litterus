import {AppBar, IconButton, Toolbar, Typography} from '@mui/material';

import BorderColorIcon from '@mui/icons-material/BorderColor';

import {styled} from '@mui/system';
import useFontView from "../util/font-view.ts";
import {type FormEvent, useCallback, useMemo} from "react";
import defaultText from "../util/defaultText.json" with {type: 'json'};


const AppHeader = styled(AppBar)`
    position: sticky;
    top: 0;
`;

const AppHeaderItems = styled(Toolbar)`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    
    label {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
    }
    
    * {
        color: white;
    }
`;

const SampleTextInput = styled('input')`
    width: 100%;
    font-size: 1rem;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid gray;
    padding: .25rem .375rem;
    white-space: nowrap;
    resize: none;
    height: fit-content;
    font-family: system-ui;
    line-height: 1.2;
    background-color: transparent;

    &:focus {
        outline: 0;
    }

    &::placeholder {
        font-style: italic;
        color: lightgray;
    }
`;

export default function Header(){
    const placeholder = useMemo(() => String(defaultText.en), []);

    const setText = useFontView(s => s.setText);

    const onTextChange = useCallback((e: FormEvent<HTMLInputElement>) => {
        e.currentTarget.value = e.currentTarget.value.replaceAll(/\n+/g, '');
        setText(e.currentTarget.value || placeholder);
    }, []);

    return (
        <AppHeader>
            <AppHeaderItems>
                <Typography component={'h1'} variant={'h6'} translate={'no'}>Litterus</Typography>

                {/* control box */}
                <label>
                    <BorderColorIcon/>

                    <SampleTextInput placeholder={'Write a sample text here.'}
                                     onInput={onTextChange}
                                     autoComplete={'off'}
                                     list={'sample-text-list'}
                                     type={'text'}/>

                    <datalist id={'sample-text-list'}>
                        {
                            Object.entries(defaultText).map(([key, value]) => (
                                <option data-key={key} value={value}></option>
                            ))
                        }
                    </datalist>
                </label>

            </AppHeaderItems>
        </AppHeader>
    );
}