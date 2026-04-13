import type * as yup from "yup";

import type { TReferenceProps } from "../../..";
import type { IDateProps, TDateValidatorResult } from "../_types";

export type IIsNullableProps = {};

/**
 * Allow a `Date` to be `null`.
 */
export const isNullable = (
  props?: TReferenceProps<IIsNullableProps> & Omit<IDateProps, "message">
): TDateValidatorResult => {
  const { active = true } = props ?? {};

  return (schema, intl) => {
    if (active) {
      schema = schema.nullable() as yup.DateSchema;
    }

    return schema;
  };
};
