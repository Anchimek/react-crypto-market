import ReactDOM from 'react-dom/client'
import App from './App'
import { ContextProvider } from './Context'

const container = document.getElementById('root');
ReactDOM.createRoot(
        container
    ).render(
        <ContextProvider>
            <App />
        </ContextProvider>
    )