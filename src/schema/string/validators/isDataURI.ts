import _isDataURI from "validator/lib/isDataURI";

import type { TReferenceProps } from "../../..";
import type { IStringProps, TStringValidatorResult } from "../_types";

export type IIsDataURIProps = {};

/**
 * Check if the string is a [data uri format](https://developer.mozilla.org/en-US/docs/Web/HTTP/data_URIs).
 */
export const isDataURI = (
  props?: TReferenceProps<IIsDataURIProps> & IStringProps
): TStringValidatorResult => {
  const { active = true, message } = props ?? {};

  return (schema, intl) => {
    if (active) {
      schema = schema.test({
        test(value) {
          if (typeof value !== "string") {
            return true;
          }

          return _isDataURI(value);
        },
        message: intl.formatErrorMessage({
          id: message ?? "e.y_v.s_must_be_data_uri",
        }),
      });
    }

    return schema;
  };
};
