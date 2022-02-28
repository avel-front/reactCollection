import React from "react";
import {addTodo} from "../actions";
import {connect} from "react-redux";


const AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form
            onSubmit={e => {
                e.preventDefault()
                dispatch(addTodo(input.value))
                input.value = ''
            }}
            >
                <input ref={node => (input = node)}/>
                <button type="submit">Add todo</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)
