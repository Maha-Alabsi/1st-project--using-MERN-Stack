import Main from '../src/components/Header';
import {render, screen} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
describe('render Main component',()=>{
test('render text field', () => {
    render(<Main/>)
    const furnitureText =screen.getByLabelText('Search Products...');
    expect(furnitureText).toBeInTheDocument();
})
 
test('Check if textfield workes correctly', () => {
    render(<Main/>)
    const textField =screen.getByRole('TextField')
    userEvent.type(textField,'Hello World')
    expect(textField).toHaveValue('Hello World')
})
})