// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import { Button, List, Icon, ButtonContent } from 'semantic-ui-react';

const TodoList = (props) => {
    return(
        <List animated vertialAlign= 'middle'>
            {props.todos.map(todo => (
                <Todo 
                key= {todo.id}
                item= {todo}
                toggleTask={props.toggleTask}
             />
    ))}
             <Button animated onClick={props.handleRemove}>
                 <ButtonContent visible>Clear Completed</ButtonContent>
                <ButtonContent hidden>
                    <Icon name='arrow right' />
                 </ButtonContent>
            </Button>
         </List>
    
    );
};

export default TodoList;