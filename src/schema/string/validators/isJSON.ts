import _isJSON from "validator/lib/isJSON";

import type { TReferenceProps } from "../../..";
import type { IStringProps, TStringValidatorResult } from "../_types";

export type IIsJSONProps = {};

/**
 * Check if the string is valid JSON (note: uses `JSON.parse`).
 */
export const isJSON = (
  props?: TReferenceProps<IIsJSONProps> & IStringProps
): TStringValidatorResult => {
  const { active = true, message } = props ?? {};

  return (schema, intl) => {
    if (active) {
      schema = schema.test({
        test(value) {
          if (typeof value !== "string") {
            return true;
          }

          return _isJSON(value);
        },
        message: intl.formatErrorMessage({
          id: message ?? "e.y_v.s_must_be_a_json",
        }),
      });
    }

    return schema;
  };
};
