import * as yup from "yup";

import type { IIntlShapeRich } from "../../i18n/placeholder";

import type { TBooleanValidatorResult } from "./_types";

export const schema = <
  Element = string,
  Intl extends IIntlShapeRich<Element> = IIntlShapeRich<Element>,
>(
  intl: Intl,
  ...validators: TBooleanValidatorResult<Element, Intl>[]
): yup.BooleanSchema => {
  let value = yup
    .boolean()
    .typeError(intl.formatErrorMessage({ id: "e.y_v.b_type_error" }))
    .default(false)
    .transform((v) => !!v) as unknown as yup.BooleanSchema<boolean>;

  for (const validator of validators) {
    value = validator(value, intl) as yup.BooleanSchema<boolean>;
  }

  return value;
};

export * from "./_types";

export * from "./validators/isDifferentThan";
export * from "./validators/isEqualTo";
export * from "./validators/isFalse";
export * from "./validators/isNullable";
export * from "./validators/isOptional";
export * from "./validators/isRequired";
export * from "./validators/isTrue";
