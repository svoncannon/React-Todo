import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'
import { Card, Header, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; 

// In this file we are going to set up: State management to contain the items on the to do list, and render the list items, form to add items and a way to toggle or otherwise manipulate the list

const todos=[
  {
  task: "Do Project", 
  id: 1, 
  completed: false
  }, 
  {
  task: "Do Laundry", 
  id: 2, 
  completed: false
  },
  {
  task: "Make Dinner", 
  id: 3, 
  completed: false
  }, 
  {
  task: "Do Some Reading", 
  id: 4, 
  completed: false
  }, 
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // set up state management
  constructor() {
    super();
    this.state = {todos};
  }

  //add toggle function on todo items
  toggleTask = (id) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if(item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  //add item to list
  addItem = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTask]
    
    });
  };

  //remove completed tasks
  handleRemove = () => {
    const newTodos = this.state.todos.filter((item) => !item.completed);
    this.setState({
       todos: newTodos
      });
    
    };


  render() {
    return (
      <div className= 'appBody'>
        <Card>
          <Card.Content>
            <Header color='teal' as='h2'>
              <Icon color='teal' name='edit outline'/>
              To-Do-List
            </Header>
          </Card.Content>
          <Card.Content>
            <TodoForm addItem={this.addItem}/>
          </Card.Content>
          <Card.Content>
            <TodoList
            toggleTask={this.toggleTask}
            todos={this.state.todos}
            handleRemove={this.handleRemove}
            />
          </Card.Content>
        </Card>        
      </div>
    );
  }
}

export default App;
