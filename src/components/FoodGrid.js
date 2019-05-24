import React from 'react';

class FoodGrid extends React.Component {
   
    state = { message: null };
  
    renderDivs = () =>
      [1, 2, 3].map(divId => (
       
        <div
          key={divId}
          data-div_id={divId}
          data-div_name={`Div ${divId}`}
          onClick={this.handleDivClicked}
        >
          Div {divId}
        </div>
      ));
  

    handleDivClicked = ev => {
      this.setState({
        
        message: `Clicked div Id ${ev.currentTarget.dataset.div_id}, name ${
          ev.currentTarget.dataset.div_name
        }`
      });
    };
  
    render() {
      return (
        <div className="App">
          <div>Click on one of the DIVs below:</div>
          {this.renderDivs()}
          {this.state.message && (
            <div className="alert alert-primary">{this.state.message}</div>
          )}
        </div>
      );
    }
  }
  
  

export default FoodGrid; 
