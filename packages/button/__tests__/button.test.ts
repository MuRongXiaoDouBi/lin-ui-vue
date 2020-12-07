import { mount } from '@vue/test-utils'
import Button from '../src/index.vue'

describe('Button Component', () => {
  test('displays message', () => {
    const wrapper = mount(Button, {
      props: {
        title: 'Hello world'
      }
    })
    expect(wrapper.text()).toContain('Hello world')
  })
})
