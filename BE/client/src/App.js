import React from 'react';
import './App.css';
import FormikRegistertrationForm from './components/RegistertrationForm';
import axios from 'axios';
import FoodCard from './components/FoodCard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  };

  componentDidMount() {
     //Ading Axios GET Requeset here
     axios.get(`http://localhost:5000/api/restricted/data`)

     //handle success
     .then(response => {
         console.log('response api', response.data);
         this.setState({data: response.data});

     })
     .catch(err => console.log('Error, please try again', err));
  }

  render() {

    return (
      <div className="App">
        <FormikRegistertrationForm />

        {this.state.data.map(food => (
          <FoodCard food={food} />
        ))}
      </div>
    );
  }
}

export default App;
