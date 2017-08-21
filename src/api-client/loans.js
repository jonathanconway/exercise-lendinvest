import { loans as _loans } from '../../data/current-loans.json'

const formatLoanAmounts = loan =>
  Object.assign({}, loan, {
    amount: parseFloat(loan.amount.replace(/,/g, ''))
  })

const investInLoan = (loanId, amount) => {}

const loans = _loans.map(formatLoanAmounts)

export { investInLoan, loans }

export default { investInLoan, loans }