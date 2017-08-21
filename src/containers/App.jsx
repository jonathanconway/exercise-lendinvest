import React from 'react'

import { loans } from '../api-client/loans'
import Loan from '../components/Loan'
import TotalAvailable from '../components/TotalAvailable'
import InvestDialog from '../components/InvestDialog'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleLoanClickInvest = loanId =>
    this.setState({
      investInLoan: loans.filter(loan => loan.id === loanId)[0]
    })

  render = () => <div data-test="app">
    {
      loans.map((loan, index) =>
        <Loan key={index} loan={loan} onClickInvest={this.handleLoanClickInvest} />
      )
    }
    <TotalAvailable loans={loans} />

    {this.state.investInLoan ? <InvestDialog loan={this.state.investInLoan} /> : null}
  </div>
}