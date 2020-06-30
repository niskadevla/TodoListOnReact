import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './AddTodo.scss';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  static propTypes = {
    onCreate: PropTypes.func.isRequired
  }

  submitHandler = e => {
    e.preventDefault();
    const {value} = this.state;

    if(value.trim()) {
      this.props.onCreate(value);
      this.setState({value: ''});
    }
  }

  render() {
    const {value} = this.state;
    return (
      <form className="form-add-todo" onSubmit={this.submitHandler}>
        <input
          type="text"
          value={value}
          onChange={e => this.setState({value: e.target.value})}
        />
        <button className="btn" type="submit">Add todo</button>
      </form>
    )
  }
}

export default AddTodo;
