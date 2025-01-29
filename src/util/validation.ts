export type ValidationRule = {
    test: (value: string) => boolean | Promise<boolean>,
    message: string
}

export type ValidationRules = {
    [key: string]: ValidationRule[];
  };

  export const validate = (value: string, rules: ValidationRule[]): string => {
    for (const rule of rules) {
        if (!rule.test(value)) {
            return rule.message;
        }
    }
    return '';
};

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
        test: (value: string) => value.length < length,
        message: `${length}자 이상 넘으면 안됩니다.`
    }),
    id: () :ValidationRule => ({
        test: (value:string) => /^[A-Za-z]{1}[A-Za-z0-9_-]{3,19}$/.test(value),
        message: '아이디의 형식이 맞지 않습니다.'
    }),
    pwCheck: (password: string): ValidationRule => (
        {
            test: (value: string) => value !== '' && password != '' && value == password,
            message: '값이 비어있거나, 패스워드와 일치하지 않습니다.'
        }
    ),
    email: (): ValidationRule => ({
            test: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            message: `이메일 형식에 맞게 작성해주세요.`
    })
}