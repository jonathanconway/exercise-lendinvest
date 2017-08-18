import React from 'react'
import PropTypes from 'prop-types'

export default class Loan extends React.Component {
  static propTypes = {
    loan: PropTypes.object.isRequired
  };

  render = () => <div>
    <h2 data-test="title">{this.props.loan.title}</h2>

    <dl>
      <dt>tranche</dt>
      <dd data-test="tranche">{this.props.loan.tranche}</dd>

      <dt>available</dt>
      <dd data-test="available">£{this.props.loan.available.toLocaleString()}</dd>

      <dt>annualised_return</dt>
      <dd data-test="annualised_return">£{this.props.loan.annualised_return.toLocaleString()}</dd>

      <dt>term_remaining</dt>
      <dd data-test="term_remaining">{this.formatTermRemaining(this.props.loan.term_remaining)}</dd>

      <dt>ltv</dt>
      <dd data-test="ltv">£{this.props.loan.ltv.toLocaleString()}</dd>

      <dt>amount</dt>
      <dd data-test="amount">£{this.props.loan.amount.toLocaleString()}</dd>
    </dl>
  </div>
}