import { renderHook } from '@testing-library/react-hooks'
import { useValidation } from '../use-validation'

describe('useValidation', () => {
  it('should return an object with isError set to false when all validators pass', () => {
    const validatedValue = 'random value'

    const validators = [
      { errorCondition: validatedValue.length < 13, message: 'Error 1' },
      
      // @ts-ignore
      { errorCondition: isNaN(validatedValue), message: 'Error 2' }
    ]
    const { result } = renderHook(() => useValidation(validatedValue, validators))
    expect(result.current).toEqual({ isError: true, message: 'Error 1' })
  })

  it('should return an object with isError set to true and message set to the second error message when at least one validator fails', () => {
    const validatedValue = '123frenchfries'
    
    const validators = [
      { errorCondition: false, message: 'Error First' },
      { errorCondition: validatedValue.length < 20, message: 'Error Second' }
    ]
    const { result } = renderHook(() => useValidation('validated value', validators))
    expect(result.current).toEqual({ isError: true, message: 'Error Second' })
  })
})