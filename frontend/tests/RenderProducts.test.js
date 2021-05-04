import {render, screen} from '@testing-library/react';
import RenderProducts from '../src/components/products-list/RenderProducts'
describe('Async component',()=>{
    test('renders products cards if request succeeds', async() => {
        window.fetch = jest.fn();
        window.fetch.mockResolvesValueOnce(
            {
                json: async()=>{}
            }
        );
        render(<RenderProducts/>)
        const gridItem= await screen.findAllByRole('griditem')
        expect(gridItem).not.toHaveLength(0);
    }) 
    
})