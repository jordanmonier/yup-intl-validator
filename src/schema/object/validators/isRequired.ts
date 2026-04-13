import type * as yup from "yup";
import type { ObjectShape } from "yup";

import type { TReferenceProps } from "../../..";
import type { IObjectProps, TObjectValidatorResult } from "../_types";

export type IIsRequiredProps = {};

/**
 * Check if the `object` is defined.
 */
export const isRequired = <T extends ObjectShape = {}>(
  props?: TReferenceProps<IIsRequiredProps> & IObjectProps
): TObjectValidatorResult<T> => {
  const { active = true, message } = props ?? {};

  return (schema, intl) => {
    if (active) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return schema.required(
        intl.formatErrorMessage({ id: message ?? "e.y_v.is_required" })
      ) as unknown as yup.ObjectSchema<T>;
    }

    return schema;
  };
};
