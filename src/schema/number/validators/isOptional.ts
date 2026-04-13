import type { TReferenceProps } from "../../..";
import type { INumberProps, TNumberValidatorResult } from "../_types";

export type IIsOptionalProps = {};

/**
 * Allow a `number` to be `undefined`.
 */
export const isOptional = (
  props?: TReferenceProps<IIsOptionalProps> & Omit<INumberProps, "message">
): TNumberValidatorResult => {
  const { active = true } = props ?? {};

  return (schema, intl) => {
    if (active) {
      schema = schema.optional();
    }

    return schema;
  };
};
