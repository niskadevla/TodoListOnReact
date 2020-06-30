import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import './TodoList.scss';

class TodoList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
  }

  render() {
    const {todos = [], onToggle = f => f} = this.props;
    return (
      <ul className="todo-list">
        {todos.map((todo, i) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo} i={i}
              onChange={onToggle}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
