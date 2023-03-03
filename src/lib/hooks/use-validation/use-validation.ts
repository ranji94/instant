import { useEffect, useState } from 'react'
import { Validation, Validator } from './types'

const useValidation = (validatedValue: any, validators: Validator[]) => {
    const [error, setError] = useState({ isError: false })

    useEffect(() => {
        const isError: boolean = !validators.every((v) => !v.errorCondition)
        const message: string | null = validators.find((v) => v.errorCondition)?.message || null

        const validationResult : Validation = { 
            isError,
            message: isError ? message : null
        }
        
        setError(validationResult)
    }, [validatedValue])

    return error
}

export { useValidation }