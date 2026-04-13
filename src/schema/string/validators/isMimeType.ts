import _isMimeType from "validator/lib/isMimeType";

import type { TReferenceProps } from "../../..";
import type { IStringProps, TStringValidatorResult } from "../_types";

export type IIsMimeTypeProps = {};

/**
 * Check if the string matches to a valid [MIME type](https://en.wikipedia.org/wiki/Media_type) format.
 */
export const isMimeType = (
  props?: TReferenceProps<IIsMimeTypeProps> & IStringProps
): TStringValidatorResult => {
  const { active = true, message } = props ?? {};

  return (schema, intl) => {
    if (active) {
      schema = schema.test({
        test(value) {
          if (typeof value !== "string") {
            return true;
          }

          return _isMimeType(value);
        },
        message: intl.formatErrorMessage({
          id: message ?? "e.y_v.s_must_be_a_mime_type",
        }),
      });
    }

    return schema;
  };
};
