import React, { Component } from 'react';

const LoaderHOC = (WrappedComponent) => {
    return class LoaderHOC extends Component{
      render(){
          this.props.Navigation.length=== 0 ? <div className = 'Loader'></div> : <WrapperComponent {... this.props}/>
      }
    }
}

export default LoaderHOC;