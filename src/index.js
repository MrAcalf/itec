import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import Base from "./styles/Base"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './App'
import PageViewEmpresa from './components/PageViewEmpresa'
import PageViewServicos from './components/PageviewServicos'
import PageViewMissao from './components/PageViewMissao'

ReactDOM.render(
    
    <Router>
        <Switch>
            <>
                <Base />
                <Route path="/" exact={true} component={App} />
                <Route path="/empresa" exact={true} component={PageViewEmpresa} />
                <Route path="/servicos" exact={true} component={PageViewServicos} />
                <Route path="/missao" exact={true} component={PageViewMissao} />
            </>
        </Switch>        
    </ Router>
    
    ,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
