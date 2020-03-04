/* eslint-disable no-unused-vars */
import React from 'react';
import ReactJson from 'react-json-view';


function Results (props){
  if (props.response.Headers) {
    return (
      <section className='results'>
        <p> 
          <ReactJson src= {props.response} />
        </p>
      </section>
    );
  }else return <section></section>;
}
export default Results;