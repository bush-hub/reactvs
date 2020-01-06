'use strict'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import { Hello } from "./components/Hello"

ReactDOM.render(
	<Hello compiler="Typescript" framework="React" />,
	document.getElementById('root')
)