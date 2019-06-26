import React, { Component } from 'react'

export class SingleTodo extends Component {
    render() {
        return (
            <li>{this.props.todo} <button onClick={this.props.remove}>X</button></li>
        )
    }
}

export default SingleTodo
