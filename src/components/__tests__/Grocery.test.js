import { render, screen } from "@testing-library/react";
import Grocery from "../Grocery";
import "@testing-library/jest-dom"

describe('grouping', () => {

  test('test Grocessory shop', () => { 
  
  render(<Grocery />)
  const heading = screen.getByRole('heading');

  expect(heading).toBeInTheDocument();
     
});
test('check button inside in grocerry component', () => { 
  
  render(<Grocery />)
  const button = screen.getByRole('button');

  expect(button).toBeInTheDocument();
     
});
test('check text inside in grocerry component', () => { 
  
  render(<Grocery />)
  const button = screen.getByText('Send');

  expect(button).toBeInTheDocument();
     
});
test('check input box inside in grocerry component', () => { 
  
  render(<Grocery />)
  const inputboxes = screen.getAllByRole('textbox');

  // expect(button).toBeInTheDocument();
  // console.log('inputboxesinputboxes', inputboxes);
  expect(inputboxes.length).toBe(2)
     
});

 })

