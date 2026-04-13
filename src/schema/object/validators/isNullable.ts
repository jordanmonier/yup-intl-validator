import type * as yup from "yup";
import type { ObjectShape } from "yup";

import type { TReferenceProps } from "../../..";
import type { IObjectProps, TObjectValidatorResult } from "../_types";

export type IIsNullableProps = {};

/**
 * Allow an `object` to be `null`.
 */
export const isNullable = <T extends ObjectShape = {}>(
  props?: TReferenceProps<IIsNullableProps> & Omit<IObjectProps, "message">
): TObjectValidatorResult<T> => {
  const { active = true } = props ?? {};

  return (schema, intl) => {
    if (active) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return schema.nullable() as unknown as yup.ObjectSchema<T>;
    }

    return schema;
  };
};
