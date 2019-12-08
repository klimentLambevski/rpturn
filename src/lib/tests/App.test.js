import App from './../App';

it('renders without crashing', () => {
  if(!App.init) {
    throw new Error()
  }
});