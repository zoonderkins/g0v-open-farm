import React, {Component} from 'react';
import {BarLoader	} from 'react-spinners';
import css from '@emotion/css';
const override = css`
  display:block; 
  margin: 0 auto;
`;
class LoadingSpinner extends Component{
  render() {
    let {loading} = this.props;
    console.log(`[new loading]`, loading);
    return (
      <div className="sweet-loading">
        <BarLoader	
          css={`display:block; margin:0 auto;`}
          sizeUnit={"vw"}          
          size={100}
          color={"#433B37"}
          loading={loading}
        />
      </div>
    );
  }
};

export default LoadingSpinner;