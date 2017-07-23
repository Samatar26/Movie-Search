import React from 'react'
import App from './App'
import CoreTestWrapper from '../config/test-wrapper'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <CoreTestWrapper>
      <App/>
    </CoreTestWrapper>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})