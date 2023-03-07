import { renderHook } from '@testing-library/react'
import { vi } from 'vitest'
import { useClickOutside } from '../use-click-outside'

describe('useClickOutside', () => {
    const ref = { current: { contains: vi.fn() } }
    
    beforeEach(() => {
        ref.current.contains.mockReset()
    })

    it('should set isClickedOutside to false when clicked inside', () => {
        ref.current.contains.mockReturnValueOnce(false)

        const { result } = renderHook(() => useClickOutside([ref]))

        expect(result.current.isClickedOutside).toBe(false)

        document.dispatchEvent(new MouseEvent('mousedown'))

        expect(result.current.isClickedOutside).toBe(false)
    })
})
  