import React from 'react';
import { Button, Input, Icon, ButtonContent } from 'semantic-ui-react';

class TodoForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            taskText:""
        }
    }

    //state has been set in the constructor, now add functionality to handle changes to that state
    handleChange = e => {
        this.setState({
            taskText: e.target.value
        });
    };

    //and add those changes to state
    handleSubmit = e => {
        e.preventDefault();
    this.props.addItem(this.state.taskText)   
 };

 render() {
     return(
         <form onSubmit= {this.handleSubmit}>
             <Input
             label={{icon:'asterisk'}}
             labelPosition='right corner'
             type= 'text'
             name= 'taskText'
             placeholder= 'add a new to-do'
             value= {this.state.taskText}
             onChange= {this.handleChange}
             />
             <Button compact size= 'mini' floated= 'right' animated= 'fade'>
                 <ButtonContent visible>Add</ButtonContent>
                 <ButtonContent hidden><Icon name= 'paper plane outline'/></ButtonContent>
                 </Button>
         </form>
     )
 }


}
export default TodoForm;