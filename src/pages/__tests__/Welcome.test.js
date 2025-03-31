import { expect } from 'vitest'

import { fireEvent, render, waitFor } from '../../utils/testUtils'

import Welcome from '../Welcome.vue'

test('it renders and handles update', async () => {
  const { getByRole } = render(Welcome, {
    props: {
      userName: 'Tester'
    }
  })

  expect(getByRole('heading', { level: 1, name: 'Welcome Tester' })).toBeDefined()
  expect(getByRole('heading', { level: 3, name: 'Vite + Vue on TS' })).toBeDefined()

  fireEvent.click(getByRole('button', { name: 'count is 0' }))

  await waitFor(() => {
    expect(getByRole('button', { name: 'count is 1' })).toBeDefined()
  })

})