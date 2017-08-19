import React from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

export default class Loan extends React.Component {
  static propTypes = {
    loan: PropTypes.object.isRequired
  };

  pluralise = (word, number) =>
    word + (number > 1 ? 's' : '')

  formatTermRemaining = termRemainingInSeconds => {
      const durationRemaining = moment.duration(termRemainingInSeconds * 1000)
      const days = durationRemaining.days()
      const months = durationRemaining.months()
      const durationParts = []

      if (months) {
        durationParts.push(months)
        durationParts.push(' ' + this.pluralise('month', months))
      }

      if (months && days) {
        durationParts.push(', ')
      }
      
      if (days) {
        durationParts.push(days)
        durationParts.push(' ' + this.pluralise('day', days))
      }

      return durationParts.join('')
    }

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