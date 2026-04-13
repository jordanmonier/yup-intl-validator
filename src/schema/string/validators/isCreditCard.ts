import _isCreditCard from "validator/lib/isCreditCard";

import type { TReferenceProps } from "../../..";
import type { IStringProps, TStringValidatorResult } from "../_types";

export type IIsCreditCardProps = {};

/**
 * Check if the string is a credit card.
 */
export const isCreditCard = (
  props?: TReferenceProps<IIsCreditCardProps> & IStringProps
): TStringValidatorResult => {
  const { active = true, message } = props ?? {};

  return (schema, intl) => {
    if (active) {
      schema = schema.test({
        test(value) {
          if (typeof value !== "string") {
            return true;
          }

          return _isCreditCard(value);
        },
        message: intl.formatErrorMessage({
          id: message ?? "e.y_v.s_must_be_a_credit_card_number",
        }),
      });
    }

    return schema;
  };
};
