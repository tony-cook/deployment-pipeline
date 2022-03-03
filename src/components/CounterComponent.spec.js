import { mount } from '@vue/test-utils'
import CounterComponent from './CounterComponent.vue'

describe("CounterComponent.vue", () => {
    test("increments the counter value when button is clicked", () => {
        const wrapper = mount((CounterComponent))

        expect(wrapper.text()).toContain('counter: 0')
        wrapper.find('button').trigger('click')
        expect(wrapper.text()).toContain('counter: 0')
    })
})