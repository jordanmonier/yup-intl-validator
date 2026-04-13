import _isMongoId from "validator/lib/isMongoId";

import type { TReferenceProps } from "../../..";
import type { IStringProps, TStringValidatorResult } from "../_types";

export type IIsMongoIdProps = {};

/**
 * Check if the string is a valid hex-encoded representation of a [MongoDB ObjectId](http://docs.mongodb.org/manual/reference/object-id/).
 */
export const isMongoId = (
  props?: TReferenceProps<IIsMongoIdProps> & IStringProps
): TStringValidatorResult => {
  const { active = true, message } = props ?? {};

  return (schema, intl) => {
    if (active) {
      schema = schema.test({
        test(value) {
          if (typeof value !== "string") {
            return true;
          }

          return _isMongoId(value);
        },
        message: intl.formatErrorMessage({
          id: message ?? "e.y_v.s_must_be_a_mongo_id",
        }),
      });
    }

    return schema;
  };
};
