import type * as yup from "yup";
import type { Reference, Maybe } from "yup";

import type { IIntlShapeRich } from "./i18n/placeholder";

export type TReference<T> = T | Reference<T>;

export type TReferenceProps<T extends Maybe<object>> = {
  [key in keyof T]: T[key] extends Maybe<object>
    ? TReferenceProps<T[key]>
    : TReference<T[key]>;
};

export type TValidatorResult<
  S extends yup.AnySchema,
  Element,
  Intl extends IIntlShapeRich<Element>,
> = (schema: S, intl: Intl) => S;

export type TValidator<
  S extends yup.AnySchema,
  T,
  Intl extends IIntlShapeRich<T>,
> = () => TValidatorResult<S, T, Intl>;

export interface IProps {
  /**
   * Whether to enable or not this validator.
   * @default true
   */
  active?: boolean;

  /**
   * Defines a custom message ID for this validator.
   * @default undefined
   */
  message?: string;
}
