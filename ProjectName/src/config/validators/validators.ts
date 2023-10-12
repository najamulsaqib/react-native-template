// Example validation rules
export const loginRules: ValidationRules = {
  email: [
    value => typeof value === 'string',
    value => /\S+@\S+\.\S+/.test(value),
  ],
  password: [value => typeof value === 'string', value => value.length >= 8],
};

export const signupUserRules: ValidationRules = {
  name: [value => typeof value === 'string', value => value !== ''],
  email: [
    value => typeof value === 'string',
    value => /\S+@\S+\.\S+/.test(value),
  ],
  password: [value => typeof value === 'string' && value.length >= 8],
  confirmPassword: [
    (value, obj) => typeof value === 'string' && value === obj.password, // Confirm password should match password
  ],
  image: [value => value && ['object', 'string'].includes(typeof value)],
};
