import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { TokenGateProvider } from 'collabland-tokengate-react-context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TokenGateProvider>
      <App />
    </TokenGateProvider>
  </React.StrictMode>,
)
