import {styled} from '@mui/system';
import Header from "./components/Header.tsx";
import FontMetadataView from "./components/FontMetadataView.tsx";
import FontViewList from "./components/FontViewList.tsx";

const LayoutRoot = styled('div')`
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    justify-content: flex-start;
    width: 100vw;
    height: 100vh;
`;

const AppContent = styled('div')`
    flex-grow: 1;
    
    display: flex;
    flex-flow: column nowrap;
    align-items:stretch;
    justify-content: flex-start;
    
    @media(min-width: 960px) {
        flex-flow: row nowrap;
        justify-content: space-between;
        overflow: hidden;
    }
    
    background-color: whitesmoke;
`;

function App() {

    return (
        <LayoutRoot>
            <Header/>
            <AppContent>
                <FontMetadataView/>
                <FontViewList/>
            </AppContent>
        </LayoutRoot>
    )
}

export default App;
