class Validator {
    errorCondition: string
    message: string

    constructor(errorCondition: string, message: string) {
        this.errorCondition = errorCondition;
        this.message = message;
    }
}

export { Validator }