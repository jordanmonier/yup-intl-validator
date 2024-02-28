import { createIntl, IntlShape } from '@formatjs/intl'

export interface IIntlShapeRich<Element> extends IntlShape<Element> {
  formatErrorMessage: IntlShape<Element>['formatMessage']
}

const intl = createIntl({
  locale: 'en-US',
  fallbackOnEmptyString: true,
  onError() {},
})

export const DEFAULT_INTL: IIntlShapeRich<string> = {
  ...intl,
  // eslint-disable-next-line jest/unbound-method
  formatErrorMessage: intl.formatMessage,
}
