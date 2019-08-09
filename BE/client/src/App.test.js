import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


describe('App />', () => {

  it('renders without crashing ReactDOM', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render without crasing', () => {
    const app = render(<App />);

    app.getByText(/Registertration Form/i);
  })
})


