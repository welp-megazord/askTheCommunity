import React from 'react';
import ReactDOM from 'react-dom';
import Question from '../components/Question.jsx';
import { shallow, mount } from 'enzyme';

test('should render header', () => {
    const container = document.createElement('h3');
    ReactDOM.render(<Question message={'hello'} />, container);
    expect(container.textContent).toMatch('hello');
});

test('should render header', () => {
    const container = document.createElement('h3');
    ReactDOM.render(<Question id={'3'} />, container);
    expect(container.textContent).toMatch('Yelp users haven\'t answered this question yet');
});