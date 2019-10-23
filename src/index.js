import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import Base from "./styles/Base"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PageViewEmpresa from './components/PageViewEmpresa'
import PageViewServicos from './components/PageviewServicos'
import PageViewMissao from './components/PageViewMissao'
import PageViewHome from './components/PageViewHome'

ReactDOM.render(
    
    <Router>
        <Switch>
            <>
                <Base />
                <Route path="/" exact component={PageViewHome} />
                <Route path="/empresa" component={PageViewEmpresa} />                
                <Route path="/missao" component={PageViewMissao} />
                <Route path="/servicos" component={PageViewServicos} />
            </>
        </Switch>        
    </ Router>
    
    ,
    document.getElementById('root')
)
serviceWorker.unregister()
