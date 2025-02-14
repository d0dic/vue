import { expect } from 'vitest'

import { screen, render, asyncWrapper, waitFor } from '../../utils/testUtils'

import Welcome from '../Welcome.vue'

test('it renders', async () => {
  const { getByRole } = render(asyncWrapper(Welcome, {
    props: {
      userName: 'Tester'
    }
  }))

  expect(screen.getByText('Loading...')).toBeDefined()

  await waitFor(() => {
    expect(screen.getByRole('heading', { level: 1, name: 'Welcome Tester' })).toBeDefined()
  })

  expect(getByRole('heading', { level: 3, name: 'Vite + Vue on TS' })).toBeDefined()

  // screen.debug()
})