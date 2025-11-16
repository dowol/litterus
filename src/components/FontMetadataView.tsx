import {styled} from '@mui/system';
import {Paper, Typography, List, ListItem, ListItemText, Skeleton, Tooltip, IconButton} from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';

import {Activity, useEffect, useState} from 'react';
import useFontStore from "../util/font-store.ts";
import type {FontMetadata} from "../util/font-metadata.ts";

import fontWeightName from '../util/fontWeightName.json' with {type: 'json'};

const PropertiesView = styled(Paper)`
    min-height: 80px;
    border-radius: unset;

    @media (min-width: 960px) {
        width: 280px;
        padding: .5rem 0;
        position: sticky;
        top: 0;
        left: 0;
        overflow-x: hidden;
        overflow-y: auto;
    }

    > article {
        margin: .5rem;
    }

    h2 {
        text-align: center;
    }
    
    .description {
        text-align: center;
    }
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

const NA = <Skeleton variant={'rectangular'}/>;

export default function FontMetadataView() {

    const [metadata, setMetadata] = useState<FontMetadata | null>(null);
    const current = useFontStore(s => s.current);

    useEffect(() => {
        setMetadata(JSON.parse(sessionStorage.getItem('font-metadata:' + current) || '""'));
    }, [current]);

    return (
        <PropertiesView
            //@ts-ignore
            component={'section'}
            elevation={2} id={'font-metadata'}>
            <article>
                <Typography component={'h2'} variant={'h5'}>Font Metadata</Typography>

                <Activity mode={metadata ? 'visible' : 'hidden'}>

                    <List>
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
                                <MetadataProperty secondary={'Version'} primary={metadata?.version ?? NA}/>
                            </ListItem>
                        }
                        {
                            metadata?.designer &&
                            <ListItem>
                                <MetadataProperty secondary={'Author'} primary={metadata.designer}/>
                            </ListItem>
                        }
                        {
                            metadata?.copyright &&
                            <ListItem>
                                <MetadataProperty secondary={'Copyright'} primary={metadata.copyright}/>
                            </ListItem>
                        }

                    </List>

                </Activity>
                <Activity mode={metadata ? 'hidden' : 'visible'}>
                    <p className={'description'}>
                        Click <strong>Font Info</strong> button(ⓘ) <br/>
                        to retrieve font metadata.
                    </p>
                </Activity>
            </article>
        </PropertiesView>
    );
}