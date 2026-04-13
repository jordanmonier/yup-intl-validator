import type * as yup from "yup";

import type { TReferenceProps } from "../../..";
import type { IStringProps, TStringValidatorResult } from "../_types";

export type IIsNullableProps = {};

/**
 * Allow a `string` to be `null`.
 */
export const isNullable = (
  props?: TReferenceProps<IIsNullableProps> & Omit<IStringProps, "message">
): TStringValidatorResult => {
  const { active = true } = props ?? {};

  return (schema, intl) => {
    if (active) {
      schema = schema.nullable() as yup.StringSchema;
    }

    return schema;
  };
};
