import isFullWidth from "validator/lib/isFullWidth";

import type { TReferenceProps } from "../../..";
import type { IStringProps, TStringValidatorResult } from "../_types";

export type IContainsFullWidthCharsProps = {};

/**
 * Check if the string contains any full-width chars.
 */
export const containsFullWidthChars = (
  props?: TReferenceProps<IContainsFullWidthCharsProps> & IStringProps
): TStringValidatorResult => {
  const { active = true, message } = props ?? {};

  return (schema, intl) => {
    if (active) {
      schema = schema.test({
        test(value) {
          if (typeof value !== "string") {
            return true;
          }

          return isFullWidth(value);
        },
        message: intl.formatErrorMessage({
          id: message ?? "e.y_v.s_must_contains_full_width_chars",
        }),
      });
    }

    return schema;
  };
};
