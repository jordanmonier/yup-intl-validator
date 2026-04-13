import type { TReferenceProps } from "../../..";
import type { IBooleanProps, TBooleanValidatorResult } from "../_types";

export type IIsOptionalProps = {};

/**
 * Allow a `boolean` to be `undefined`.
 */
export const isOptional = (
  props?: TReferenceProps<IIsOptionalProps> & Omit<IBooleanProps, "message">
): TBooleanValidatorResult => {
  const { active = true } = props ?? {};

  return (schema, intl) => {
    if (active) {
      schema = schema.optional();
    }

    return schema;
  };
};
