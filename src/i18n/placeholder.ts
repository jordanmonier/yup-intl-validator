import { createIntl, IntlShape } from '@formatjs/intl'

export interface IIntlShapeRich<T = never> extends IntlShape<T> {
  formatErrorMessage: IntlShape<T>['formatMessage']
}

const intl = createIntl({
  locale: 'en-US',
  fallbackOnEmptyString: true,
  onError() {},
})

export const DEFAULT_INTL: IIntlShapeRich = {
  ...intl,
  // eslint-disable-next-line jest/unbound-method
  formatErrorMessage: intl.formatMessage,
}
