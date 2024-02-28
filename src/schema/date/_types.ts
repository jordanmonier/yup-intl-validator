import * as yup from 'yup'
import { IIntlShapeRich } from '../../i18n/placeholder'

import { IProps, TValidator, TValidatorResult } from '../../_types'

export type TDateValidatorResult<
  Element = string,
  Intl extends IIntlShapeRich<Element> = IIntlShapeRich<Element>,
> = TValidatorResult<yup.DateSchema, Element, Intl>

export type TDateValidator<
  Element = string,
  Intl extends IIntlShapeRich<Element> = IIntlShapeRich<Element>,
> = TValidator<yup.DateSchema, Element, Intl>

export interface IDateProps extends IProps {}
