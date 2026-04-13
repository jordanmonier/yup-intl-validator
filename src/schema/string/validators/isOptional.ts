import type { TReferenceProps } from "../../..";
import type { IStringProps, TStringValidatorResult } from "../_types";

export type IIsOptionalProps = {};

/**
 * Allow a `string` to be `undefined`.
 */
export const isOptional = (
  props?: TReferenceProps<IIsOptionalProps> & Omit<IStringProps, "message">
): TStringValidatorResult => {
  const { active = true } = props ?? {};

  return (schema, intl) => {
    if (active) {
      schema = schema.optional();
    }

    return schema;
  };
};
