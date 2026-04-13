import type * as yup from "yup";

import type { IProps, TValidator, TValidatorResult } from "../../_types";
import type { IIntlShapeRich } from "../../i18n/placeholder";

export type TNumberValidatorResult<
  Element = string,
  Intl extends IIntlShapeRich<Element> = IIntlShapeRich<Element>,
> = TValidatorResult<yup.NumberSchema, Element, Intl>;

export type TNumberValidator<
  Element = string,
  Intl extends IIntlShapeRich<Element> = IIntlShapeRich<Element>,
> = TValidator<yup.NumberSchema, Element, Intl>;

export interface INumberProps extends IProps {}
