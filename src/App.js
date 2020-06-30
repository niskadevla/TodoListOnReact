import React, {Component} from 'react';
import Todolist from './Todo/TodoList';
// import AddTodo from './Todo/AddTodo';
import Context from './context';
import Loader from './Loader';

const AddTodo = React.lazy(() => import('./Todo/AddTodo'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      loading: true
    };

    this.getData();
  }

  toggleTodo = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })});
  }

  removeTodo = (id) => {
    this.setState({todos: this.state.todos.filter(todo => todo.id !== id)});
  }

  addTodo = (title) => this.setState({todos: this.state.todos.concat([{
                                        title,
                                        id: Date.now(),
                                        completed: false
                                      }])})

  getData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=10')
        .then(response => response.json())
        .then(todos => this.setState({todos, loading: false}));
  }

  render() {
    const {todos, loading} = this.state;
    return (
      <Context.Provider value={{removeTodo: this.removeTodo}}>
        <div className="wrapper">
          <h1>React TodoList</h1>
          <React.Suspense fallback={<Loader />}>
            <AddTodo onCreate={this.addTodo}/>
          </React.Suspense>

          {loading && <Loader />}
          {todos.length ?
            <Todolist todos={todos} onToggle={this.toggleTodo}/> :
            loading ? null : <p>No todos!</p>
          }
        </div>
      </Context.Provider>
    );
  }
}

export default App;
