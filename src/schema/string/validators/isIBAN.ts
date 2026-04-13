import _isIBAN from "validator/lib/isIBAN";

import type { TReferenceProps } from "../../..";
import type { IStringProps, TStringValidatorResult } from "../_types";

export type IIsIBANProps = {};

/**
 * Check if a string is a IBAN (International Bank Account Number).
 */
export const isIBAN = (
  props?: TReferenceProps<IIsIBANProps> & IStringProps
): TStringValidatorResult => {
  const { active = true, message } = props ?? {};

  return (schema, intl) => {
    if (active) {
      schema = schema.test({
        test(value) {
          if (typeof value !== "string") {
            return true;
          }

          return _isIBAN(value);
        },
        message: intl.formatErrorMessage({
          id: message ?? "e.y_v.s_must_be_an_iban",
        }),
      });
    }

    return schema;
  };
};
