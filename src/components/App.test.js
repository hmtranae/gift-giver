import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

configure({ adapter: new Adapter() })

describe('App', () => {
  const app = shallow(<App />)

  it('renders correctly', () => {
    expect(app).toMatchSnapshot()
  })

  it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([])
  })

  describe('when clicking the `add-gift` button', () => {
    it('adds a new gift to `state` when clicking the `add gift` button', () => {
      app.find('.btn-add').simulate('click')

      expect(app.state().gifts).toEqual([{ id: 1 }])
    })

    it('adds a new gift to the rendered list when clicking the `add gift` button', () => {
      app.find('.btn-add').simulate('click')

      expect(app.find('.gift-list').children().length).toEqual(2)
    })
  })
})
