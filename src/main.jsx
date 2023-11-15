import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MainApp2 } from './components/MainApp2'
import { Provider } from 'react-redux'
import { Store } from './Store/Store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
      <MainApp2/>
  </Provider>
)
