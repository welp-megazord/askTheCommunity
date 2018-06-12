import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

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

test('it should initialize with an empty questions array', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state().questions).toEqual([]);
});

test('it should initialize with an empty passedQuestions array', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state().passedQuestions).toEqual([]);
})

test('it should render correctly when no questions are found', () => {
    const wrapper = mount(<App />);
    wrapper.instance().conditionalRender()
    expect(wrapper.textContent).toMatch('Yelp users haven\'t asked any questions yet about this restaurant.');
})

// wrapper.instance().method()