import type { TReferenceProps } from "../../..";
import type { IBooleanProps, TBooleanValidatorResult } from "../_types";

export type IIsTrueProps = {};

/**
 * Check if the `boolean` is `true`.
 */
export const isTrue = (
  props?: TReferenceProps<IIsTrueProps> & IBooleanProps
): TBooleanValidatorResult => {
  const { active = true, message } = props ?? {};

  return (schema, intl) => {
    if (active) {
      schema = schema.isTrue(
        intl.formatErrorMessage({ id: message ?? "e.y_v.b_is_true" })
      ) as unknown as typeof schema;
    }

    return schema;
  };
};
