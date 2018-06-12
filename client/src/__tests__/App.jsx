import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';


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
    const conditionalRender = jest.fn();
    const container = document.createElement('div');
    ReactDOM.render(<App />, container);
    conditionalRender();
    // console.log(JSON.stringify(wrapper));
    expect(container.textContent).toMatch('Yelp users haven\'t asked any questions yet about this restaurant.');
})

test('it should render correctly when no questions are found', () => {
    const conditionalRender = jest.fn();
    const container = document.createElement('div');
    ReactDOM.render(<App />, container);
    conditionalRender();
    // console.log(JSON.stringify(wrapper));
    expect(container.textContent).toMatch('Yelp users haven\'t asked any questions yet about this restaurant.');
})

test('it should call componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount')
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount.calledOnce).toEqual(true);
})

test('it should call onSubmitHandler', () => {
    sinon.spy(App.prototype, 'onSubmitHandler')
    const wrapper = mount(<App />);
    expect(App.prototype.onSubmitHandler.calledOnce).toEqual(true);
})

test('should render correctly when more than one question', () => {
    const wrapper = mount(<App />);
    wrapper.setState({
        passedQuestions: ['This is a question', 'Another question']
    });
    console.log('State check....', wrapper.state());
    expect(wrapper.conditionalRender()).toEqual('This is a question');
})

// test('should not render  when question is undefined', () => {
//     const wrapper = mount(<App />);
//     wrapper.setState({
//         passedQuestions: ['This is a quesiton', undefined]
//     });
//     expect(wrapper.instance().conditionalRender()).toEqual('This is a question');
// })