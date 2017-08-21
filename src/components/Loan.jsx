import React from 'react'
import PropTypes from 'prop-types'

import { formatTermRemaining } from './formatters'
import Button from './Button'

import styled from 'styled-components'
const Section = styled.section`
  display: flex;
  align-items: stretch;

  padding: 1rem;
  margin: 1rem 0;
  width: 100%;
  box-sizing: border-box;
  background-color: #dde1e2;
`
  const Details = styled.div`
    display: inline-block;
    width: 69%;
    margin-bottom: 0;
  `
    const Title = styled.h2`
      margin: 0;
      padding: 0;
      font-size: 1rem;
    `
  const ActionsAndStatus = styled.div`
    display: inline-block;
    width: 30%;
    float: right;

    > * {
      width: 100%;
      box-sizing: border-box;
    }
  `

export default class Loan extends React.Component {
  static propTypes = {
    loan: PropTypes.object.isRequired,
    onClickInvest: PropTypes.func.isRequired
  }

  render = () => <Section>
    <Details>
      <Title data-test="title">{this.props.loan.title}</Title>

      <dl>
        <dt>Tranche</dt>
        <dd data-test="tranche">{this.props.loan.tranche}</dd>

        <dt>Amount available</dt>
        <dd data-test="available">£{this.props.loan.available.toLocaleString()}</dd>

        <dt>Annualised return</dt>
        <dd data-test="annualised_return">£{this.props.loan.annualised_return.toLocaleString()}</dd>

        <dt>Term remaining</dt>
        <dd data-test="term_remaining">{formatTermRemaining(this.props.loan.term_remaining)}</dd>

        <dt>L.T.V.</dt>
        <dd data-test="ltv">£{this.props.loan.ltv.toLocaleString()}</dd>

        <dt>Amount</dt>
        <dd data-test="amount">£{this.props.loan.amount.toLocaleString()}</dd>
      </dl>
    </Details>

    <ActionsAndStatus>
      <Button data-test="invest" onClick={() => this.props.onClickInvest(this.props.loan.id)}>Invest in Loan</Button>
    </ActionsAndStatus>
  </Section>
}