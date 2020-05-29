import React from 'react';
import { HashRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';
import Home from '@/views/Home';
import Prototype from '@/views/prototype';
<<<<<<< HEAD
import ScopeClosure from '@/views/scope-closure';
import Execution from '@/views/execution';
import ValType from '@/views/val-type';
=======
import ScopeClosure from '@/views/scope-closure'
>>>>>>> origin/qa

const Navs = [
    {
        label: '首页',
        value: '/home'
    },
    {
<<<<<<< HEAD
        label: '变量和类型',
        value: '/val-type'
    },
    {
=======
>>>>>>> origin/qa
        label: '原型',
        value: '/prototype'
    },
    {
        label: '作用域和闭包',
        value: '/scope-closure'
<<<<<<< HEAD
    },
    {
        label: '执行机制',
        value: '/execution'
=======
>>>>>>> origin/qa
    }
];

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            route: '/home'
        }
        this.changeRoute = this.changeRoute.bind(this);
    }

    render() {
        return (
            <Router>
                <div className='root'>
                    <div className='navigator'>
                        <ul>
                            {
                                Navs.map((elem, index) => (
                                    <li key={index}
                                        onClick={() => { this.changeRoute(elem.value) }}
                                        className={this.state.route === elem.value ? 'active' : null}>
                                        <Link to={elem.value}>{elem.label}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='content'>
                        <Switch>
                            <Route path="/home">
                                <Home/>
                            </Route>
                            <Route path="/prototype">
                                <Prototype />
                            </Route>
                            <Route path="/scope-closure">
                                <ScopeClosure />
                            </Route>
<<<<<<< HEAD
                            <Route path="/execution">
                                <Execution />
                            </Route>
                            <Route path="/val-type">
                                <ValType />
                            </Route>
=======
>>>>>>> origin/qa
                            <Redirect to="/home" />
                        </Switch>

                    </div>
                    <div className='foot'></div>
                </div>
            </Router>
        )
    }

    changeRoute(value) {
        this.setState({
            route: value
        });
    }
<<<<<<< HEAD
=======

>>>>>>> origin/qa
}

export default App;
