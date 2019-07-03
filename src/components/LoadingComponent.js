import React from 'react';
import { css } from '../node_modules/@emotion/core';
// First way to import
import { ClipLoader } from 'react-spinners';
// Another way to import
// import ClipLoader from 'react-spinners/ClipLoader';
 
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
 
export default class LoadingComponent extends React.Component {

  render() {
    return (
      <div className='sweet-loading'>
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          // loading={this.state.loading}
        />
      </div> 
    )
  }
}