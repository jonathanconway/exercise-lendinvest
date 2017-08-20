import React from 'react'
import PropTypes from 'prop-types'

export default class TotalAvailable extends React.Component {
  static propTypes = {
    loans: PropTypes.array.isRequired
  };

  totalAvailable = () =>
    this.props.loans
      .map(loan => loan.available)
      .reduce((amount1, amount2) =>
        parseFloat(amount1) + parseFloat(amount2))

  render = () => <div>
    Total amount available for investments: £{this.totalAvailable().toLocaleString()}
  </div>
}