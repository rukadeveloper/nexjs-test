export type ValidationRule = {
    test: (value: string) => boolean | Promise<any>,
    message: string
}

export type ValidationRules = {
    [key: string]: ValidationRule[];
  };

export const validate = (values:  { [key: string]: any }, rules: ValidationRules) => {

    const errors: { [key: string]: string } = {};

    Object.keys(rules).forEach((field) => {
        const fieldRules = rules[field];
        const value = values[field];

        for(const rule of fieldRules) {
            if(!rule.test(value)) {
                errors[field] = rule.message;
                break;
            }
        }
    })

    return errors;
}

export const validationRules = {
    required: (fieldName: string): ValidationRule => ({
        test: (value: string) => value.trim() !== '',
        message: '반드시 입력해주세요'
    }),
    minLength: (length: number): ValidationRule => ({
        test: (value: string) => value.length >= length,
        message: `최소 ${length}자 이상 입력하세요`
    }),
    maxLength: (length: number): ValidationRule => ({
        test: (value: string) => value.length <= length,
        message: `${length}자 이상 넘으면 안됩니다.`
    }),

    email: (): ValidationRule => ({
        test: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        message: `이메일 형식에 맞게 작성해주세요.`
    })
}