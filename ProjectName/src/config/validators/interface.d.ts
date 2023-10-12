interface ValidationRule {
  (value: any, object?: any): boolean;
}

interface ValidationRules {
  [key: string]: ValidationRule[];
}

interface ValidationErrors {
  [key: string]: string[];
}

type validateObject = (
  obj: Record<string, any>,
  validationRules: ValidationRules,
) => ValidationErrors;

type isValid = (obj: ValidationErrors) => boolean;
