import type * as yup from "yup";
import type { ObjectShape } from "yup";
import type { IProps, TValidator, TValidatorResult } from "../../_types";
import type { IIntlShapeRich } from "../../i18n/placeholder";

export type TObjectValidatorResult<
  T extends ObjectShape = {},
  Element = string,
  Intl extends IIntlShapeRich<Element> = IIntlShapeRich<Element>,
> = TValidatorResult<yup.ObjectSchema<T>, Element, Intl>;

export type TObjectValidator<
  T extends ObjectShape = {},
  Element = string,
  Intl extends IIntlShapeRich<Element> = IIntlShapeRich<Element>,
> = TValidator<yup.ObjectSchema<T>, Element, Intl>;

export interface IObjectProps extends IProps {}
