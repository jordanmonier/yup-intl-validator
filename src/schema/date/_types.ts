import * as yup from 'yup'
import { IIntlShapeRich } from '../../i18n/placeholder'

import { IProps, TValidator, TValidatorResult } from '../../_types'

export type TDateValidatorResult<Intl extends IIntlShapeRich = IIntlShapeRich> = TValidatorResult<
  yup.DateSchema,
  Intl
>

export type TDateValidator<Intl extends IIntlShapeRich = IIntlShapeRich> = TValidator<
  yup.DateSchema,
  Intl
>

export interface IDateProps extends IProps {}
