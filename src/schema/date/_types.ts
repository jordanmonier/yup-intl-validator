import type * as yup from "yup";
import type { IProps, TValidator, TValidatorResult } from "../../_types";
import type { IIntlShapeRich } from "../../i18n/placeholder";

export type TDateValidatorResult<
  Element = string,
  Intl extends IIntlShapeRich<Element> = IIntlShapeRich<Element>,
> = TValidatorResult<yup.DateSchema, Element, Intl>;

export type TDateValidator<
  Element = string,
  Intl extends IIntlShapeRich<Element> = IIntlShapeRich<Element>,
> = TValidator<yup.DateSchema, Element, Intl>;

export interface IDateProps extends IProps {}
