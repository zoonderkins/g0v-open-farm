import React, {Component} from 'react';
import {DotLoader} from 'react-spinners';

class LoadingSpinner extends Component{
  render() {
    let {loading} = this.props;
    console.log(`[new loading]`, loading);
    return (
      <div className="sweet-loading">
        <DotLoader
          css={'display:block; margin: 10vh auto;'}
          sizeUnit={"vw"}          
          size={50}
          color={"#123abc"}
          loading={loading}
        />
      </div>
    );
  }
};

export default LoadingSpinner;