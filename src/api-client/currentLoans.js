import { loans } from '../../data/current-loans.json'

const formatLoanAmounts = loan =>
  Object.assign({}, loan, {
    amount: parseFloat(loan.amount.replace(/,/g, ''))
  })

export const get = () => (loans.map(formatLoanAmounts))