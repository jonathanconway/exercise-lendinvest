import React from 'react'

import { loans } from '../../data/current-loans.json'
import Loan from '../components/Loan'

export default class App extends React.Component {
  render = () => <div data-test="app">
    {
      loans.map((loan, index) =>
        <Loan key={index} loan={loan} />
      )
    }
  </div>
}