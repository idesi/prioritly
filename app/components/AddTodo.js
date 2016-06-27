import React from 'react'
import { connect } from 'react-redux'
import { postTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input, select;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(postTodo({title: input.value, priority: select.value}))
        //dispatch(addTodo({title: input.value, priority: select.value}))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <select ref={node => {
            select = node
        }}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
