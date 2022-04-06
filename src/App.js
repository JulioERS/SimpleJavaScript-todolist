import { Component } from "react";
import './app.css'

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }

  updateInput(key, value){
    //update react state
    this.setState({
      [key]: value
    });
  }
  addItem(){
    //create Item with Unique ID
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //copy of current list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem:""
    });
  }
  deleteItem(id){
    //copy current list of items
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList})
  }
  render() {
    return(
      <div className="App">
          <div >
            To DO list
            <br/>
            <input className="addTask"
            type="text"
            placeholder="add a task"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
            />
            <button className="addButton"
              onClick={() => this.addItem()}>
              Add 
              </button>
              <br/>
              <ul className="listedItems">
                {this.state.list.map(item => {
                  return(
                    <li key={item.id}>
                      {item.value}
                      <button className="deleteBtn"
                      onClick={() => this.deleteItem(item.id)}>
                        X         
                      </button>
                    </li>
                  )
                })}
              </ul>
          </div>
      </div>
    );
  }
}

export default App;
