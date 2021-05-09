import Header from '../components/Header';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

//react testing with @testing-library
test('renders App perfectly', () => {
    render(<Header/>)
    const furnitureText =screen.getByText('Furniture Shop');
    expect(furnitureText).toBeInTheDocument();
})
