import type * as yup from "yup";

import type { TReferenceProps } from "../../..";
import type { INumberProps, TNumberValidatorResult } from "../_types";

export type IIsNullableProps = {};

/**
 * Allow a `number` to be `null`.
 */
export const isNullable = (
  props?: TReferenceProps<IIsNullableProps> & Omit<INumberProps, "message">
): TNumberValidatorResult => {
  const { active = true } = props ?? {};

  return (schema, intl) => {
    if (active) {
      schema = schema.nullable() as yup.NumberSchema;
    }

    return schema;
  };
};
