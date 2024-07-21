import { shallowMount } from '@vue/test-utils'
import { MyPromt } from '@/components'

describe('MyPromt.vue', () => {
  test('should show the q-dialog element on the user output', () => {
    const wrapper = shallowMount(MyPromt, {
      props: { 
        promt: false,
        tripCategoryId: '1'
      }
    })
    expect(wrapper.find("q-dialog").exists()).toBe(true)
  })

  test('should show the q-btn element on the user output', () => {
    const wrapper = shallowMount(MyPromt, {
      props: { 
        promt: true,
        tripCategoryId: '1'
      }
    })
    expect(wrapper.find("q-dialog > q-card > q-card-actions > q-btn").exists()).toBe(true)
  })

  test('renders props when passed', () => {
    const wrapper = shallowMount(MyPromt, {
      props: { 
        promt: false,
        tripCategoryId: '1'
      }
    })
    expect(wrapper.props().promt).toBe(false)
    expect(wrapper.props().tripCategoryId).toMatch('1')
  })

  test('button trigger event', async () => {
    const wrapper = shallowMount(MyPromt, {
      props: { 
        promt: true,
        tripCategoryId: '1'
      }
    })
    await wrapper.find("q-btn:last-of-type").trigger('click')
    expect(wrapper.emitted()).toHaveProperty('changeValue')
  })

})