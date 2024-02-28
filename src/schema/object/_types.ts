import * as yup from 'yup'
import { ObjectShape } from 'yup/lib/object'
import { IIntlShapeRich } from '../../i18n/placeholder'

import { IProps, TValidator, TValidatorResult } from '../../_types'

export type TObjectValidatorResult<
  T extends ObjectShape = {},
  Element = string,
  Intl extends IIntlShapeRich<Element> = IIntlShapeRich<Element>,
> = TValidatorResult<yup.ObjectSchema<T>, Element, Intl>

export type TObjectValidator<
  T extends ObjectShape = {},
  Element = string,
  Intl extends IIntlShapeRich<Element> = IIntlShapeRich<Element>,
> = TValidator<yup.ObjectSchema<T>, Element, Intl>

export interface IObjectProps extends IProps {}
