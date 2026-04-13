import _isLatLong from "validator/lib/isLatLong";

import type { TReferenceProps } from "../../..";
import type { IStringProps, TStringValidatorResult } from "../_types";

export type IIsLatLongProps = {};

/**
 * Check if the string is a valid latitude-longitude coordinate in the format:
 * `lat,long` or `lat, long`.
 */
export const isLatLong = (
  props?: TReferenceProps<IIsLatLongProps> & IStringProps
): TStringValidatorResult => {
  const { active = true, message } = props ?? {};

  return (schema, intl) => {
    if (active) {
      schema = schema.test({
        test(value) {
          if (typeof value !== "string") {
            return true;
          }

          return _isLatLong(value);
        },
        message: intl.formatErrorMessage({
          id: message ?? "e.y_v.s_must_be_a_lat_long",
        }),
      });
    }

    return schema;
  };
};
