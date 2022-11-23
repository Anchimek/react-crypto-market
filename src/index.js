import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { ContextProvider } from './Context'

const container = document.getElementById('root');
ReactDOM.createRoot(
        container
    ).render(
        <Router>                                                        
            <ContextProvider>
                <App />
            </ContextProvider>
        </Router>
    )