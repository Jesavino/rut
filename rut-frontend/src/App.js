import React, { Component } from 'react';
import Modal from './components/Modal';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// const plants = [
//   {
//     id: 1, 
//     name: 'Plant 1',
//     description: 'Plant 1 is here',
//   },
//   {
//     id: 2, 
//     name: 'Plant 2',
//     description: 'Plant 2 is here',
//   },
//   {
//     id: 3, 
//     name: 'Plant 3',
//     description: 'Plant 3 is here',
//   },
// ];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      activeItem: {
        name: "",
        description: "",
        moistureLevel: "",
      },
      viewCompleted: false,
      plantList: [],
    };
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("http://localhost:8000/api/plant")
      .then(res => this.setState({plantList: res.data}))
      .catch(err => console.log(err));
  };


  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleSubmit = item => {
      this.toggle();
      if (item.id) {
        axios
          .put(`http://localhost:8000/api/plant/${item.id}/`, item)
          .then(res => this.refreshList());
        return;
      }
      axios
        .post("http://localhost:8000/api/plant/", item)
        .then(res => this.refreshList());
    };
    handleDelete = item => {
      axios
        .delete(`http://localhost:8000/api/plant/${item.id}`)
        .then(res => this.refreshList());
    };
    createItem = () => {
      const item = { name: "", description: ""};
      this.setState({ activeItem: item, modal: !this.state.modal });
    };
    editItem = item => {
      this.setState({ activeItem: item, modal: !this.state.modal });
    };

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.plantList;
    console.log(newItems);
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span>
          {item.name}
        </span>
        <span>
          {item.description}
        </span>
        <span>
          Moisture Level: {item.moistureLevel}%
        </span>
        <span>
          <button 
            className="btn btn-secondary mr-2"
            onClick={() => this.editItem(item)}
          > 
            Edit
          </button>
          <button 
            className="btn btn-danger"
            onClick={() => this.handleDelete(item)}
          > 
            Delete 
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Rut Plant View</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button 
                  className="btn btn-primary"
                  onClick={this.createItem}
                >
                  Add plant
                </button>
              </div>
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}


export default App;
