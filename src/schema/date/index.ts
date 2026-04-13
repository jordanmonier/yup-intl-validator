import * as yup from "yup";

import type { IIntlShapeRich } from "../../i18n/placeholder";

import type { TDateValidatorResult } from "./_types";

export const schema = <
  Element = string,
  Intl extends IIntlShapeRich<Element> = IIntlShapeRich<Element>,
>(
  intl: Intl,
  ...validators: TDateValidatorResult<Element, Intl>[]
): yup.DateSchema => {
  let value = yup
    .date()
    .typeError(intl.formatErrorMessage({ id: "e.y_v.d_type_error" }))
    .default(null)
    .nullable() as yup.DateSchema;

  for (const validator of validators) {
    value = validator(value, intl);
  }

  return value;
};

export * from "./_types";
export * from "./transformers/add";
export * from "./transformers/set";
export * from "./transformers/setEndOf";
export * from "./transformers/setStartOf";
export * from "./transformers/subtract";
export * from "./validators/isDifferentThan";
export * from "./validators/isEqualTo";
export * from "./validators/isInFuture";
export * from "./validators/isMinMax";
export * from "./validators/isNotInFuture";
export * from "./validators/isNullable";
export * from "./validators/isOptional";
export * from "./validators/isRequired";
