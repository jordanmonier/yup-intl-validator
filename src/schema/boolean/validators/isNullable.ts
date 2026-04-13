import type * as yup from "yup";

import type { TReferenceProps } from "../../..";
import type { IBooleanProps, TBooleanValidatorResult } from "../_types";

export type IIsNullableProps = {};

/**
 * Allow a `boolean` to be `null`.
 */
export const isNullable = (
  props?: TReferenceProps<IIsNullableProps> & Omit<IBooleanProps, "message">
): TBooleanValidatorResult => {
  const { active = true } = props ?? {};

  return (schema, intl) => {
    if (active) {
      schema = schema.nullable() as yup.BooleanSchema<boolean>;
    }

    return schema;
  };
};
