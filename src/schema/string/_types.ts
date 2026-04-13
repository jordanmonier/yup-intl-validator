import type * as yup from "yup";
import type { IProps, TValidator, TValidatorResult } from "../../_types";
import type { IIntlShapeRich } from "../../i18n/placeholder";

export type TStringValidatorResult<
  Element = string,
  Intl extends IIntlShapeRich<Element> = IIntlShapeRich<Element>,
> = TValidatorResult<yup.StringSchema, Element, Intl>;

export type TStringValidator<
  Element,
  Intl extends IIntlShapeRich<Element> = IIntlShapeRich<Element>,
> = TValidator<yup.StringSchema, Element, Intl>;

export interface IStringProps extends IProps {}
