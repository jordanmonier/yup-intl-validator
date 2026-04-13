import _isSlug from "validator/lib/isSlug";

import type { TReferenceProps } from "../../..";
import type { IStringProps, TStringValidatorResult } from "../_types";

export type IIsSlugProps = {};

/**
 * Check if the string is of type slug.
 */
export const isSlug = (
  props?: TReferenceProps<IIsSlugProps> & IStringProps
): TStringValidatorResult => {
  const { active = true, message } = props ?? {};

  return (schema, intl) => {
    if (active) {
      schema = schema.test({
        test(value) {
          if (typeof value !== "string") {
            return true;
          }

          return _isSlug(value);
        },
        message: intl.formatErrorMessage({
          id: message ?? "e.y_v.s_must_be_a_slug",
        }),
      });
    }

    return schema;
  };
};
