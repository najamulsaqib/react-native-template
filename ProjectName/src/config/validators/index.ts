export const validateObject: validateObject = (obj, validationRules) => {
  const errors: ValidationErrors = {};

  for (const key in validationRules) {
    if (validationRules.hasOwnProperty(key)) {
      const rules = validationRules[key];
      const value = obj[key];
      for (const rule of rules) {
        if (!rule(value, obj)) {
          if (!errors[key]) {
            errors[key] = [];
          }
          errors[key].push(
            `Validation failed for '${key}' with value '${value}'.`,
          );
        }
      }
    }
  }

  return errors;
};

export const isValid: isValid = validationErrors => {
  if (Object.keys(validationErrors).length === 0) {
    return true;
  } else {
    return false;
  }
};

// USAGE ---

// const validate = validateObject(
//   {
//     email: userEmail.toLowerCase(),
//     password: userPassword,
//     role: user,
//   },
//   loginRules,
// );

// return isValid(validate);
