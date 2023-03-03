type Validation = {
    isError: boolean,
    message: string | null
}

type Validator = {
    errorCondition: boolean,
    message: string
}

export type { Validation, Validator }