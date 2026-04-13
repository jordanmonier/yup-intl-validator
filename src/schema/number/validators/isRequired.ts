import type { TReferenceProps } from "../../..";
import type { INumberProps, TNumberValidatorResult } from "../_types";

export type IIsRequiredProps = {};

/**
 * Check if the `number` is defined.
 */
export const isRequired = (
  props?: TReferenceProps<IIsRequiredProps> & INumberProps
): TNumberValidatorResult => {
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
