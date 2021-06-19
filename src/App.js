//import logo from './logo.svg';
import Car from './Car/Car'
import { Component } from 'react';
import React from 'react';

class App extends Component {
  state = {
    cars: [
      {name: 'Audi', year:2018},
      {name: 'Ford', year: 2007},
      {name: 'BMW', year: 2005},
      {name: 'Mazda', year: 2009}
    ],
    pageTitle: "React components",
    showCars: true
  }

  changeTitleHandler = (newTitle) =>{ 
      if(newTitle !== this.state.pageTitle){
          this.setState({
            pageTitle: newTitle      
          })
          console.log("changeTitle to " + newTitle);  
      }else{
        console.log("Not changed!");
      }
    
  }
  // handleInput = (event) =>{
  //   //let pageTitle = this.state.pageTitle
  //   console.log("change",event.target.value);
  //   this.setState({
  //     pageTitle: event.target.value
  //   })
  // }
  toggleCarsHandler = () =>{
    this.setState({
      showCars: !this.state.showCars
    })
  }
  changeCarName = (index,event) =>{
    const cars = [...this.state.cars]
    cars[index].name = event.target.value
    this.setState({
      cars
    })
    console.log(cars[index].name,event,index)
  }
  onDeleteHandler = (index,event) =>{
    const cars = [...this.state.cars]
    cars.splice(index,1)
    this.setState({
      cars
    })
  }
  render(){
    let car = null
    if(this.state.showCars){
      car = this.state.cars.map((car,index) =>
    
      <Car
        key={index}
        name={car.name}
        year={car.year}
        onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
        onDelete={this.onDeleteHandler.bind(this)}
        onChangeName={this.changeCarName.bind(this,index)}
        />
      )
    }
     
    

    return (
      <div className="App">
        <h1 style={{textAlign: 'Center'}}>{this.state.pageTitle}</h1>
        {/* <input type="text" onChange={this.handleInput}/> */}
        <button onClick={this.toggleCarsHandler}>Toggle Cars</button>
        <p>Time: {this.props.date.toLocaleTimeString()}</p>
        <div style={{
          width: 800,
          margin: 'auto',
          paddingTop: '2px'
        }}>
          {car}
        </div>
          
        {/* <Car 
        name={cars[0].name} 
        year={cars[0].year} 
        onChangeTitle={this.changeTitleHandler.bind(this, cars[1].name)}/> */}
      </div>
    )
    
  // return createElement(
  //   "div",
  //   {
  //     className: "app"
  //   },
  //   createElement(
  //     'h1',
  //     null,
  //     'Hello World'
  //   )    
  // )
  
  }

}
export default App;
