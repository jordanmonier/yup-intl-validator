import type * as yup from "yup";
import type { IProps, TValidator, TValidatorResult } from "../../_types";
import type { IIntlShapeRich } from "../../i18n/placeholder";

export type TBooleanValidatorResult<
  Element = string,
  Intl extends IIntlShapeRich<Element> = IIntlShapeRich<Element>,
> = TValidatorResult<yup.BooleanSchema<boolean>, Element, Intl>;

export type TBooleanValidator<
  Element = string,
  Intl extends IIntlShapeRich<Element> = IIntlShapeRich<Element>,
> = TValidator<yup.BooleanSchema<boolean>, Element, Intl>;

export interface IBooleanProps extends IProps {}
