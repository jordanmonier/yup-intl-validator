import type * as yup from "yup";

import type { TReferenceProps } from "../../..";
import type { IArrayProps, TArrayValidatorResult } from "../_types";

export type IIsOptionalProps = {};

/**
 * Allow an `array` to be `undefined`.
 */
export const isOptional = <T extends yup.AnySchema>(
  props?: TReferenceProps<IIsOptionalProps> & Omit<IArrayProps, "message">
): TArrayValidatorResult<T> => {
  const { active = true } = props ?? {};

  return (schema, intl) => {
    if (active) {
      schema = schema.optional() as yup.ArraySchema<any, any>;
    }

    return schema;
  };
};
