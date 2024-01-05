import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'; 
import { BrowserRouter } from 'react-router-dom';
import appStore from "./../../utils/appStore";
import Header from '../Header'
import '@testing-library/jest-dom'
test('testing header', () => { 
  render(<BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider></BrowserRouter>)
  const loginButton = screen.getByRole('button', {name:'Login'});// better way
  // const loginButton = screen.getByText('Login');// not good way
  expect(loginButton).toBeInTheDocument()
});
it('be should check cart items', () => { 
  render(<BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider></BrowserRouter>)
  // const loginButton = screen.getByRole('button', {name:'Login'});// better way
  const loginButton = screen.getByText('Cart- (1 items)');// not good way
  expect(loginButton).toBeInTheDocument()
});
it('be should check cart items is reg', () => { 
  render(<BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider></BrowserRouter>)
  // const loginButton = screen.getByRole('button', {name:'Login'});// better way
  const loginButton = screen.getByText(/Cart/);// not good way
  expect(loginButton).toBeInTheDocument()
});
it('be should check login button to logout button click', () => { 
  render(<BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider></BrowserRouter>)
  const loginButton = screen.getByRole('button', {name:'Login'});// better way
  fireEvent.click(loginButton);
  const loginOutButton = screen.getByRole('button', {name:'Logout'});// not good way
  expect(loginOutButton).toBeInTheDocument()
});
