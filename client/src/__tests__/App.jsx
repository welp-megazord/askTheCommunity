import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';

// describe('addition', () => {
//     it('knows that 2 and 2 is 4', () => {
//         expect(2 + 2).toBe(4);
//     })
// })

test('should render header', () => {
    const container = document.createElement('div');
    ReactDOM.render(<App />, container);
    expect(container.textContent).toMatch('Ask The Community');
});