import ReactDOM from 'react-dom/client'
import './globals.scss'
import App from './root-cmp/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './store/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
)
