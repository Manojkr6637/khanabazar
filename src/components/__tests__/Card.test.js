import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import MOCK_DATA from '../Mock-data/card.json'
import Card from '../Card'
it('should card list', () => { 
  render(<Card data={MOCK_DATA} />);
    const name = screen.getByText('Dining');
    expect(name).toBeInTheDocument();
})