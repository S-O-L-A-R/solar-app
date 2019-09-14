import React from 'react'
import ReactDOM from 'react-dom'
import { unregister } from './serviceWorker'
import { configure as mobxConfigure } from 'mobx'
import App from 'core/App'
import mliffx from 'mliffx'

mliffx.init()

mobxConfigure({ enforceActions: 'observed' })

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister()
