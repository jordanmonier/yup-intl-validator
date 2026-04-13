import type { TReferenceProps } from "../../..";
import type { IDateProps, TDateValidatorResult } from "../_types";

export type IIsOptionalProps = {};

/**
 * Allow a `Date` to be `undefined`.
 */
export const isOptional = (
  props?: TReferenceProps<IIsOptionalProps> & Omit<IDateProps, "message">
): TDateValidatorResult => {
  const { active = true } = props ?? {};

  return (schema, intl) => {
    if (active) {
      schema = schema.optional();
    }

    return schema;
  };
};
