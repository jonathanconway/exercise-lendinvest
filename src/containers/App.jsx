import React from 'react'

import { loans, investInLoan } from '../api-client/loans'
import Loan from '../components/Loan'
import TotalAvailable from '../components/TotalAvailable'
import InvestDialog from '../components/InvestDialog'

import styled from 'styled-components'
const AppTitle = styled.section`
  font-size: 1.5rem;
`

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleLoanClickInvest = loanId =>
    this.setState({
      investDialogLoan: loans.filter(loan => loan.id === loanId)[0]
    })

  handleSubmitInvestmentAmount = amount =>{
    investInLoan(this.state.investDialogLoan.id, amount)
    this.setState({ investDialogLoan: null })
  }

  render = () => <div data-test="app">
    <AppTitle data-test="title">Current Loans</AppTitle>

    {
      loans.map((loan, index) =>
        <Loan key={index} loan={loan} onClickInvest={this.handleLoanClickInvest} />
      )
    }

    <TotalAvailable loans={loans} />

    {this.state.investDialogLoan
      ? <InvestDialog loan={this.state.investDialogLoan} onSubmitInvestmentAmount={this.handleSubmitInvestmentAmount} />
      : null}
  </div>
}