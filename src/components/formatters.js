import moment from 'moment'

const pluralise = (word, number) =>
  word + (number > 1 ? 's' : '')

export const formatTermRemaining = termRemainingInSeconds => {
  const durationRemaining = moment.duration(termRemainingInSeconds * 1000)
  const days = durationRemaining.days()
  const months = durationRemaining.months()
  const durationParts = []

  if (months) {
    durationParts.push(months)
    durationParts.push(' ' + pluralise('month', months))
  }

  if (months && days) {
    durationParts.push(', ')
  }
  
  if (days) {
    durationParts.push(days)
    durationParts.push(' ' + pluralise('day', days))
  }

  return durationParts.join('')
}
