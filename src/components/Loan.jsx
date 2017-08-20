import React from 'react'
import PropTypes from 'prop-types'

import { formatTermRemaining } from './formatters'

export default class Loan extends React.Component {
  static propTypes = {
    loan: PropTypes.object.isRequired,
    onClickInvest: PropTypes.func.isRequired
  }

  render = () => <div>
    <h2 data-test="title">{this.props.loan.title}</h2>

    <dl>
      <dt>tranche</dt>
      <dd data-test="tranche">{this.props.loan.tranche}</dd>

      <dt>Amount available</dt>
      <dd data-test="available">£{this.props.loan.available.toLocaleString()}</dd>

      <dt>annualised_return</dt>
      <dd data-test="annualised_return">£{this.props.loan.annualised_return.toLocaleString()}</dd>

      <dt>term_remaining</dt>
      <dd data-test="term_remaining">{formatTermRemaining(this.props.loan.term_remaining)}</dd>

      <dt>ltv</dt>
      <dd data-test="ltv">£{this.props.loan.ltv.toLocaleString()}</dd>

      <dt>Amount</dt>
      <dd data-test="amount">£{this.props.loan.amount.toLocaleString()}</dd>
    </dl>

    <button data-test="invest" onClick={this.props.onClickInvest(this.props.loan.id)}>Invest in Loan</button>
  </div>
}