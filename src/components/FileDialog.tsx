import {styled} from "@mui/system";
import {type ChangeEvent, type DragEvent, type MouseEvent, useCallback, useRef} from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import useFontStore from "../util/font-store.ts";

const FileDropArea = styled('div')`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    column-gap: 1.5rem;
    border: 1px dashed gray;
    border-radius: .5rem;
    margin: .5rem;
    position: sticky;
    bottom: 0;
    background-color: rgba(245, 245, 245, 87.5%);
    
    flex-grow: 1;

    svg {
        width: 2rem;
        height: 2rem;
    }

    p.prompt {
        text-transform: uppercase;
        font-size: 1rem;

        .nocaps {
            text-transform: initial;
        }

        small {
            text-transform: initial;
        }
    }

    input[type=file] {
        display: none;
    }
`;

// List of allowed font subtypes
const allowedTypes = ['otf', 'ttf', 'woff', 'woff2'];

export default function FileDialog() {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const addFont = useFontStore(s => s.add);


    const onClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if (e.isPropagationStopped()) {
            const input = fileInputRef.current!;
            input.click();
        }
    }, []);

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files && e.currentTarget.files.length > 0) {
            [...e.currentTarget.files].forEach(addFont);
        }
        else
            console.warn('No font files were selected.');
    }, []);


    return (
        <FileDropArea {...{onClick}} onDoubleClick={onClick}>
            <FileUploadIcon/>
            <p className={'prompt'}>
                Click here to load your fonts <br/>
                <small>
                    <strong>{allowedTypes.map(s => s.toUpperCase()).join(', ') + ' '}</strong>
                    types of file are supported.
                </small>
            </p>

            <input type={'file'} onChange={onChange} multiple
                   accept={allowedTypes.map(subtype => '.' + subtype).join(',')}
                   ref={fileInputRef}/>
        </FileDropArea>
    )
}