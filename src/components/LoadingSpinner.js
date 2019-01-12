import React, {Component} from 'react';
import {css} from '@emotion/core';
import {DotLoader} from 'react-spinners';

const override = css`
  display: block;
  margin: 10vh auto;
  border-color: red;
  height: 100%;
  width: 100%;
`;

class LoadingSpinner extends Component{
  render() {
    let {loading} = this.props;
    return (
      <div className="sweet-loading">
        <DotLoader
          css={override}
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