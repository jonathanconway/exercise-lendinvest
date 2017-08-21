import { loans as _loans } from '../../data/current-loans.json'

const parseFigure = figureAsString =>
  parseFloat(figureAsString.replace(/,/g, ''))

const parseFigures = loan =>
  Object.assign({}, loan, {
    amount: parseFigure(loan.amount),
    available: parseFigure(loan.available),
    annualised_return: parseFigure(loan.annualised_return),
    term_remaining: parseFigure(loan.term_remaining),
    ltv: parseFigure(loan.ltv)
  })

const investInLoan = (loanId, amount) => {}

const loans = _loans.map(parseFigures)

export { investInLoan, loans }

export default { investInLoan, loans }