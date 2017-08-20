import React from 'react'

import { loans } from '../../data/current-loans.json'
import Loan from '../components/Loan'
import TotalAvailable from '../components/TotalAvailable'

export default class App extends React.Component {
  render = () => <div data-test="app">
    {
      loans.map((loan, index) =>
        <Loan key={index} loan={loan} />
      )
    }
    <TotalAvailable loans={loans} />
  </div>
}