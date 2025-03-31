
import { expect } from 'vitest'

import { screen, render, asyncWrapper, waitFor } from '../../utils/testUtils'

import About from '../About.vue'

test('it renders', async () => {
  const { getByRole } = render(asyncWrapper(About, {
    props: {
      /* ... */
    }
  }))

  expect(screen.getByText('Loading...')).toBeDefined()

  await waitFor(() => {
    expect(getByRole('heading', { level: 1, name: 'About us' })).toBeDefined()
  })

  expect(getByRole('button', { name: 'Contribute' })).toBeDefined()
})