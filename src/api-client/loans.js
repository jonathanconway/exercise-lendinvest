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

const loans = _loans.map(parseFigures)

const investInLoan = (loanId, amount) => {
  const loan = loans.filter(loan => loan.id === loanId)[0]
  if (!loan) {
    throw new RangeError('Loan with specified id could not be found')
  }
  loans[loans.indexOf(loan)].available = loan.available - amount
}

export { investInLoan, loans }