import { render } from '@testing-library/vue'

import About from '../About.vue'
import { expect } from 'vitest'

test('it renders', () => {
  const { getByRole } = render(About, {
    props: {
      /* ... */
    }
  })

  expect(getByRole('heading', {level: 1, name: 'About us'})).toBeDefined()

})