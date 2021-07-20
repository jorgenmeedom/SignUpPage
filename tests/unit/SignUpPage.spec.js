import { shallowMount } from '@vue/test-utils'
import SignUpPage from '../../src/pages/SignUpPage.vue'
import {render} from '@testing-library/vue'
import {screen} from '@testing-library/vue'

describe('SignUpPage.vue', () => {
    it('has Sign Up Header', () => {
        render(SignUpPage)
        const header = screen.queryByRole('heading', { name: 'Sign Up'});
        expect(header).not.toBeNull
    })
})