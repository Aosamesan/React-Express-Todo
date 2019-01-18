import React from 'react'
import { connect } from 'react-redux'

class TodoListComponent extends React.Component {
    render() {
        const { todos, loading } = this.props

        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Content</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Deadline</th>
                        <th scope="col">Completed At</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, i) => <TodoComponent key={todo.id} {...todo} />)}
                </tbody>
            </table>
        )
    }
}

class TodoComponent extends React.Component {
    render() {
        console.log(this.props)
        const { title, content, created_at, deadline, complete_at, complete } = this.props

        return (
            <tr>
                <th scope="row">{title}</th>
                <td>{content}</td>
                <td>{created_at.toString()}</td>
                <td>{deadline.toString()}</td>
                <td>{complete_at.toString()}</td>
                <td>
                    <button className="btn btn-danger">×</button>
                </td>
            </tr>
        )
    }
}

export const TodoList = connect(state => state, dispatch => ({

}))(TodoListComponent)