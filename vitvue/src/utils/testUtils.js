import { Suspense, defineComponent, h } from 'vue'

import { screen, render, waitFor, fireEvent } from '@testing-library/vue'

// NOTE: Suspense is in experimantal mode
export function asyncWrapper(
  component,
  { props },
) {
  return defineComponent({
    render() {
      return h(
        'div',
        { id: 'root' },
        h(Suspense, null, {
          default() {
            return h(component, props)
          },
          fallback: h('div', 'Loading...'),
        }),
      )
    },
  })
}

export {
    screen,
    render,
    asyncWrapper,
    waitFor,
    fireEvent
}