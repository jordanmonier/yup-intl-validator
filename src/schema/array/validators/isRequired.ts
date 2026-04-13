import type * as yup from "yup";

import type { TReferenceProps } from "../../..";
import type { IArrayProps, TArrayValidatorResult } from "../_types";

export type IIsRequiredProps = {};

/**
 * Check if the `array` is defined.
 */
export const isRequired = <T extends yup.AnySchema>(
  props?: TReferenceProps<IIsRequiredProps> & IArrayProps
): TArrayValidatorResult<T> => {
  const { active = true, message } = props ?? {};

  return (schema, intl) => {
    if (active) {
      schema = schema.required(
        intl.formatErrorMessage({ id: message ?? "e.y_v.is_required" })
      ) as yup.ArraySchema<T>;
    }

    return schema;
  };
};
