import {styled} from '@mui/system';
import {
    Alert,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Skeleton,
    Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {Activity, useEffect, useState} from 'react';
import Linkify from 'linkify-react';

import useFontStore from "../util/font-store.ts";
import {type FontMetadata} from "../util/font-metadata.ts";

import fontWeightName from '../util/fontWeightName.json' with {type: 'json'};

const ModalHeader = styled(DialogTitle)`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
`;

const MetadataProperty = styled(ListItemText)`
    display: flex;
    flex-flow: column-reverse nowrap;

    .MuiListItemText-primary {
        border-left: .125rem solid lightgray;
        padding-left: .375rem;
    }

    .MuiListItemText-secondary {
        font-family: monospace;
    }
`;

const MetadataList = styled(List)`
    background-color: whitesmoke;
    overflow-y: auto;
`;

/** Not Available (N/A) Component */
const NA = <Skeleton variant={'rectangular'}/>;

export default function FontMetadataView() {
    const [metadata, setMetadata] = useState<FontMetadata | null>(null);
    const current = useFontStore(s => s.current);
    const open = useFontStore(s => s.metadataOpen);
    const onClose = useFontStore(s => s.closeMetadata);

    useEffect(() => {
        setMetadata(JSON.parse(sessionStorage.getItem(current) || 'null'));
    }, [current]);

    return (
        <Dialog {...{open, onClose}} >
            <ModalHeader
                //@ts-ignore
                component={'div'}>
                <Typography component={'h2'} variant={'h5'}>Font Metadata</Typography>
                <IconButton onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            </ModalHeader>
            <DialogContent
                //@ts-ignore
                component={'section'}
                elevation={2} id={'font-metadata'}>
                <article>
                    <Activity mode={metadata ? 'visible' : 'hidden'}>

                        <MetadataList>
                            <ListItem>
                                <MetadataProperty secondary={'Font Name'} primary={metadata?.fontName ?? NA}/>
                            </ListItem>
                            <ListItem>
                                <MetadataProperty secondary={'Font Weight'}
                                                  primary={metadata ? `${metadata.weight} / ${fontWeightName[metadata.weight]}` : NA}/>
                            </ListItem>
                            <ListItem>
                                <MetadataProperty secondary={'Font Style'}
                                                  primary={metadata ? (metadata.style.charAt(0).toUpperCase() + metadata.style.slice(1)) : NA}/>
                            </ListItem>
                            {
                                metadata?.version &&
                                <ListItem>
                                    <MetadataProperty secondary={'Version'} primary={<Linkify>{metadata?.version ?? NA}</Linkify>}/>
                                </ListItem>
                            }
                            {
                                metadata?.designer &&
                                <ListItem>
                                    <MetadataProperty secondary={'Author'} primary={<Linkify>{metadata.designer}</Linkify>}/>
                                </ListItem>
                            }
                            {
                                metadata?.copyright &&
                                <ListItem>
                                    <MetadataProperty secondary={'Copyright'} primary={<Linkify>{metadata.copyright}</Linkify>}/>
                                </ListItem>
                            }
                        </MetadataList>
                    </Activity>
                    <Activity mode={metadata ? 'hidden' : 'visible'}>
                        <Alert severity="error">This is an error Alert.</Alert>
                    </Activity>
                </article>
            </DialogContent>
        </Dialog>
    );
}