import Header from '../src/components/Header';
import {render, screen} from '@testing-library/react'
test('renders App perfectly', () => {
    render(<Header/>)
    const furnitureText =screen.getByText('Furniture Shop');
    expect(furnitureText).toBeInTheDocument();
})
 