import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'react-redux';
import 'react-router';
import 'react-router-redux';
import 'axios';
import 'js-cookie';
//import 'lodash';
import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById('app')
)
