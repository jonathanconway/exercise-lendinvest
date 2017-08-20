import React from 'react'
import PropTypes from 'prop-types'

import { formatTermRemaining } from './formatters'

export default class InvestDialog extends React.Component {
  static propTypes = {
    loan: PropTypes.object.isRequired,
    onSubmitInvestmentAmount: PropTypes.func.isRequired
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmitInvestmentAmount(
      parseFloat(e.target.elements.investmentAmount.value))
  }

  render = () => <dialog open="true">
    <h2 data-test="title">Invest in Loan</h2>

    <h3 data-test="loan-title">{this.props.loan.title}</h3>

    <dl>
      <dd>Amount available:</dd>
      <dt data-test="amount_available">£{this.props.loan.available.toLocaleString()}</dt>

      <dd>Loan ends in:</dd>
      <dt data-test="term_remaining">{formatTermRemaining(this.props.loan.term_remaining)}</dt>
    </dl>

    <form onSubmit={this.handleSubmit}>
      <div>
        <label htmlFor="invest--investment-amount">Investment amount (£)</label>
        <input id="invest--investment-amount" name="investmentAmount" type="number" />
      </div>
      <button type="submit">Invest now</button>
    </form>
  </dialog>
}