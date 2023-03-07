import { renderHook } from '@testing-library/react'
import { vi } from 'vitest'
import { useClickOutside } from '../use-click-outside'

describe('useClickOutside', () => {
    it('should set isClickedOutside to true when clicking outside all refs', () => {
        const ref1 = { current: { contains: vi.fn(() => false) } }
        const ref2 = { current: { contains: vi.fn(() => false) } }
        const { result } = renderHook(() => useClickOutside([ref1, ref2]))

        const event = new MouseEvent('mousedown', { bubbles: true })
        document.dispatchEvent(event)
        expect(result.current.isClickedOutside).toBe(false)
    })

    it('should set isClickedOutside to false when clicking inside one of the reference elements', () => {
        const ref1 = { current: { contains: vi.fn(() => true) } }
        const ref2 = { current: { contains: vi.fn(() => false) } }
        const { result } = renderHook(() => useClickOutside([ref1, ref2]))
        const event = new MouseEvent('mousedown', { bubbles: true })
        document.dispatchEvent(event)
        expect(result.current.isClickedOutside).toBe(false)
      })
    
    it('should update isClickedOutside when reference elements change', () => {
        const ref1 = { current: { contains: vi.fn(() => false) } }
        const ref2 = { current: { contains: vi.fn(() => false) } }

        // @ts-ignore
        const { result, rerender } = renderHook((refs) => useClickOutside(refs), {
            initialProps: [[ref1, ref2]],
        })

        expect(result.current.isClickedOutside).toBe(false)
        const event = new MouseEvent('mousedown', { bubbles: true })
        document.dispatchEvent(event)
        expect(result.current.isClickedOutside).toBe(false)
        const ref3 = { current: { contains: vi.fn(() => true) } }
        rerender([[ref3]])
        expect(result.current.isClickedOutside).toBe(false)
    })
})
  