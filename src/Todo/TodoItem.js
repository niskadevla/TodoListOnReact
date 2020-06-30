import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from '../context';
import './TodoItem.scss'

const TodoItem = ({todo = {}, i, onChange = f => f}) => {
  const {removeTodo} = useContext(Context);
  const classes = [];

  todo.completed && classes.push('done');

  return (
    <li className="todo-list__item">
      <label className={classes.join(' ')}>
        <input
          type="checkbox"
          onChange={() => onChange(todo.id)}
          checked={todo.completed}
        />
        <b>{i + 1})&nbsp;</b>
        <span>{todo.title}</span>
      </label>

      <button className="rm" onClick={removeTodo.bind(null, todo.id)}>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  i: PropTypes.number,
  onChange: PropTypes.func,
};

export default TodoItem;
