import renderer from 'react-test-renderer'
import App from './App'

it('Renders the "Hello World" page', () => {
  const page = renderer.create(<App />)
  const tree = page.toJSON()
  expect(tree).toMatchSnapshot()
})
