import _isHexColor from "validator/lib/isHexColor";

import type { TReferenceProps } from "../../..";
import type { IStringProps, TStringValidatorResult } from "../_types";

export type IIsHexColorProps = {};

/**
 * Check if the string is a hexadecimal color.
 */
export const isHexColor = (
  props?: TReferenceProps<IIsHexColorProps> & IStringProps
): TStringValidatorResult => {
  const { active = true, message } = props ?? {};

  return (schema, intl) => {
    if (active) {
      schema = schema.test({
        test(value) {
          if (typeof value !== "string") {
            return true;
          }

          return _isHexColor(value);
        },
        message: intl.formatErrorMessage({
          id: message ?? "e.y_v.s_must_be_an_hexadecimal_color",
        }),
      });
    }

    return schema;
  };
};
