import _isISRC from "validator/lib/isISRC";

import type { TReferenceProps } from "../../..";
import type { IStringProps, TStringValidatorResult } from "../_types";

export type IIsISRCProps = {};

/**
 * Check if the string is a [ISRC](https://en.wikipedia.org/wiki/International_Standard_Recording_Code).
 */
export const isISRC = (
  props?: TReferenceProps<IIsISRCProps> & IStringProps
): TStringValidatorResult => {
  const { active = true, message } = props ?? {};

  return (schema, intl) => {
    if (active) {
      schema = schema.test({
        test(value) {
          if (typeof value !== "string") {
            return true;
          }

          return _isISRC(value);
        },
        message: intl.formatErrorMessage({
          id: message ?? "e.y_v.s_must_be_an_isrc",
        }),
      });
    }

    return schema;
  };
};
