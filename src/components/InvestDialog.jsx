import React from 'react'
import PropTypes from 'prop-types'

import { formatTermRemaining } from './formatters'
import Button from './Button'

import styled from 'styled-components'
const Dialog = styled.dialog`
  // center on screen
  position: fixed;
  top: 50%;
  transform: translate(0, -50%);

  z-index: 1;
  background-color: #e1e5e6;
`
const DialogTitle = styled.h2`
  margin: 0;
`
const LoanTitle = styled.h3`
  font-weight: normal;
  margin: 0;
  font-size: 1rem;
`
const InvestmentAmountForm = styled.form`
  display: flex;
`
  const Field = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
  `
    const AmountLabel = styled.label`
      flex-grow: 3;
    `
    const AmountInput = styled.input`
      padding: 0.3rem;
      box-sizing: border-box;
      flex-grow: 1;
      margin-right: 1rem;
    `
    const InvestButton = Button.extend`
      width: 30%;
      min-width: 8rem;
    `
const Backdrop = styled.div`
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`

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

  render = () => <div>
    <Dialog data-test="invest-dialog" open="true">
      <DialogTitle data-test="title">Invest in Loan</DialogTitle>

      <LoanTitle data-test="loan-title">{this.props.loan.title}</LoanTitle>

      <dl>
        <dt>Amount available:</dt>
        <dd data-test="amount_available">£{this.props.loan.available.toLocaleString()}</dd>

        <dt>Loan ends in:</dt>
        <dd data-test="term_remaining">{formatTermRemaining(this.props.loan.term_remaining)}</dd>
      </dl>

      <InvestmentAmountForm data-test="investment-amount-form" onSubmit={this.handleSubmit}>
        <Field data-test="investment-amount-field">
          <AmountLabel htmlFor="invest--investment-amount">Investment amount (£)</AmountLabel>
          <AmountInput id="invest--investment-amount" name="investmentAmount" type="number" required="required" autoFocus />
        </Field>
        <InvestButton type="submit">Invest now</InvestButton>
      </InvestmentAmountForm>
    </Dialog>
    <Backdrop />
  </div>
}