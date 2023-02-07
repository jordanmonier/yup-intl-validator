import * as yup from 'yup'
import { IIntlShapeRich } from '../../i18n/placeholder'

import { IProps, TValidator, TValidatorResult } from '../../_types'

export type TStringValidatorResult<Intl extends IIntlShapeRich = IIntlShapeRich> = TValidatorResult<
  yup.StringSchema,
  Intl
>

export type TStringValidator<Intl extends IIntlShapeRich = IIntlShapeRich> = TValidator<
  yup.StringSchema,
  Intl
>

export interface IStringProps extends IProps {}
