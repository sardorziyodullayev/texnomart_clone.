import { StyledEngineProvider } from '@mui/material';
import Home from './pages/home/Home';

import './App.css';

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <Home />
        </StyledEngineProvider>
    );
}

export default App;
