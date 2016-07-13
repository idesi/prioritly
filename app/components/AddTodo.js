import React from 'react'
import { connect } from 'react-redux'
import { postTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input, select;

  return (
    <div>
      <form style={{'margin': '10px 0'}} onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(postTodo({title: input.value, priority: select.value}))
        input.value = ''
      }}>
        <input style={{marginRight: '10px', border: '2px solid #ff4081', borderRadius: '5px', width: '200px', height: '30px', boxSizing: 'border-box'}} ref={node => {
          input = node
        }} />
        <select style={{marginRight: '10px', width: '100px', background: '#00bcd4', color: 'white', height: '30px'}} ref={node => {
            select = node
        }}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>
        <button type="submit" style={{boxSizing:'border-box', height: '30px', color: 'white', background: '#00bcd4'}}>
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
