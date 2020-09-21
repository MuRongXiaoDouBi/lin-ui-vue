import { mount } from '@vue/test-utils'
import mountTest from '../../../../tests/share/mountTest'
import Button from '../src/index'

describe('Button Component', () => {
  mountTest(Button)
  test('displays message', () => {
    const wrapper = mount(Button, {
      props: {
        title: 'Hello world'
      }
    })
    expect(wrapper.text()).toContain('Hello world')
  })
})
