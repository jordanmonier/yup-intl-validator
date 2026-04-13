import * as yup from "yup";

import type { IIntlShapeRich } from "../../i18n/placeholder";

import type { TArrayValidatorResult } from "./_types";

export const schema = <
  T extends yup.AnySchema,
  Element = string,
  Intl extends IIntlShapeRich<Element> = IIntlShapeRich<Element>,
>(
  array: T,
  intl: Intl,
  ...validators: TArrayValidatorResult<T, Element, Intl>[]
): yup.ArraySchema<T> => {
  let value = yup
    .array<T>(array)
    .typeError(intl.formatErrorMessage({ id: "e.y_v.a_type_error" }))
    .default([])
    .nullable()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    .transform((v) => (v === null ? [] : v))
    .strict() as yup.ArraySchema<T>;

  for (const validator of validators) {
    value = validator(value, intl);
  }

  return value;
};

export * from "./_types";
export * from "./transformers/customOrder";
export * from "./transformers/order";
export * from "./validators/isLength";
export * from "./validators/isNullable";
export * from "./validators/isOptional";
export * from "./validators/isRequired";
