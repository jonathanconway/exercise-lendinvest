import { formatTermRemaining } from '../formatters'

describe('formatters', () => {
  describe('formatTermRemaining', () => {
    const oneDaySeconds = 60 * 60 * 24;

    it('renders term remaining, properly formatted, for 10 days, 0 months', () => {
      const termRemaining = 864000
      const result = formatTermRemaining(termRemaining)
      expect(result).toEqual('10 days')
    })

    it('renders term remaining, properly formatted, for 1 day, 0 months', () => {
      const termRemaining = oneDaySeconds
      const result = formatTermRemaining(termRemaining)
      expect(result).toEqual('1 day')
    })

    it('renders term remaining, properly formatted, for 1 day, 1 month', () => {
      const termRemaining = (oneDaySeconds * 32)
      const result = formatTermRemaining(termRemaining)
      expect(result).toEqual('1 month, 1 day')
    })

    it('renders term remaining, properly formatted, for 1 day, 2 months', () => {
      const termRemaining = (oneDaySeconds * 62)
      const result = formatTermRemaining(termRemaining)
      expect(result).toEqual('2 months, 1 day')
    })

    it('renders term remaining, properly formatted, for 0 days, 1 month', () => {
      const termRemaining = (oneDaySeconds * 31)
      const result = formatTermRemaining(termRemaining)
      expect(result).toEqual('1 month')
    })

    it('renders term remaining, properly formatted, for 0 days, 2 months', () => {
      const termRemaining = (oneDaySeconds * 61)
      const result = formatTermRemaining(termRemaining)
      expect(result).toEqual('2 months')
    })
  })
})