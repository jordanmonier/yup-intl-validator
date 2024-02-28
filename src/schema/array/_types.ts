import * as yup from 'yup'
import { IIntlShapeRich } from '../../i18n/placeholder'

import { IProps, TValidator, TValidatorResult } from '../../_types'

export type TArrayValidatorResult<
  T extends yup.AnySchema,
  Element = string,
  Intl extends IIntlShapeRich<Element> = IIntlShapeRich<Element>,
> = TValidatorResult<yup.ArraySchema<T>, Element, Intl>

export type TArrayValidator<
  T extends yup.AnySchema,
  Element = string,
  Intl extends IIntlShapeRich<Element> = IIntlShapeRich<Element>,
> = TValidator<yup.ArraySchema<T>, Element, Intl>

export interface IArrayProps extends IProps {}
