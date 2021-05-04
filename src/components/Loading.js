import React from 'react';
import loading from './assets/loading.svg';
import './style/Loading.css'

const Loading = () => (
  <div className="spinner">
    <img src={loading}/>
  </div>
);

export default Loading;
