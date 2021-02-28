import React from 'react';
import axios from 'axios';

// const api_version = process.env.REACT_APP_SERVER_PORT;
const api_version = 'v1';

function callServer() {
  axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/${api_version}/users`, {
    params: {
      table: 'user',
    },
  }).then((response) => {
    console.log(response.data);
  });
  axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/${api_version}/organizations`, {
    params: {
      table: 'organization',
    },
  }).then((response) => {
    console.log(response.data);
  });
  axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/${api_version}/tickets`, {
    params: {
      table: 'ticket',
    },
  }).then((response) => {
    console.log(response.data);
  });
}

export function SampleComponent() {
  return (
    <div>
      This is a sample component
      {callServer()}
    </div>
  );
}