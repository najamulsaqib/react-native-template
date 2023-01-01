import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .required('Email is required.')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email format.',
    ),
  password: yup.string().required('Password is required.'),
});

export const userSchema = yup.object({
  email: yup
    .string()
    .required('Email is required.')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email format.',
    ),
  name: yup
    .string()
    .required('Name is required.')
    .min(3, 'Name must contain minimum 3 characters.')
    .max(30, 'Name exceeds the limit of 30 characters.'),
  number: yup
    .string()
    .required('Phone number is required.')
    .matches(/\(\d{3}\) \d{3}-\d{4}/, 'Invalid phone number.'),
  password: yup
    .string()
    .required('Password is required.')
    .matches(/^\S*$/, 'White Spaces are not allowed in password.')
    .matches(/\w*[a-z]\w*/, 'Password must have a lowercase letter.')
    .matches(/\w*[A-Z]\w*/, 'Password must have a uppercase letter.')
    .matches(/\d/, 'Password must have a number.')
    .matches(
      /[!+@#$%^&*()\-_"=+{};:,<.>]/,
      'Password must have a special character.',
    )
    .min(8, 'Password must contain minimum 8 characters.'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords do not match.s'),
});
