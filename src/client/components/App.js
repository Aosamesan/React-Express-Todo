import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import { TodoList } from './TodoList';

class AppComponent extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Switch>
                    <Route excat={true} path="/"><TodoList /></Route>
                </Switch>
            </div>
        )
    }
}

export const App = withRouter(connect(state => state, dispatch => ({

}))(AppComponent))