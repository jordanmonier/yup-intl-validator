import type * as yup from "yup";
import type { ObjectShape } from "yup";

import type { TReferenceProps } from "../../..";
import type { IObjectProps, TObjectValidatorResult } from "../_types";

export type IIsOptionalProps = {};

/**
 * Allow an `object` to be `undefined`.
 */
export const isOptional = <T extends ObjectShape = {}>(
  props?: TReferenceProps<IIsOptionalProps> & Omit<IObjectProps, "message">
): TObjectValidatorResult<T> => {
  const { active = true } = props ?? {};

  return (schema, intl) => {
    if (active) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return schema.optional() as unknown as yup.ObjectSchema<T>;
    }

    return schema;
  };
};
