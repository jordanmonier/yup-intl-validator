import type { TReferenceProps } from "../../..";
import type { IDateProps, TDateValidatorResult } from "../_types";

export type IIsRequiredProps = {};

/**
 * Check if the `Date` is defined.
 */
export const isRequired = (
  props?: TReferenceProps<IIsRequiredProps> & IDateProps
): TDateValidatorResult => {
  const { active = true, message } = props ?? {};

  return (schema, intl) => {
    if (active) {
      schema = schema.required(
        intl.formatErrorMessage({ id: message ?? "e.y_v.is_required" })
      );
    }

    return schema;
  };
};
