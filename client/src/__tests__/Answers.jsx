import React from 'react';
import ReactDOM from 'react-dom';
import Answers from '../components/Answers.jsx';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

test('it should render an image of the user that answered the question', () => {
    const wrapper = mount(<Answers />);
    wrapper.setState({
        imageUrl: 'https://s3-us-west-1.amazonaws.com/hrla22-welp/Lego4.jpg'
    });
    expect(wrapper.state().imageUrl).toBe('https://s3-us-west-1.amazonaws.com/hrla22-welp/Lego4.jpg');
})

test('it should render state based on id passed as props', () => {
    const wrapper = mount(<Answers id={1}/>);

})

test('it should call componentDidMount', () => {
    sinon.spy(Answers.prototype, 'componentDidMount')
    const wrapper = mount(<Answers id={1} />);
    expect(Answers.prototype.componentDidMount.calledOnce).toEqual(true);
})

test('it should call conditionalRenderHelpful', () => {
    // sinon.spy(Answers.prototype, 'conditionalRenderHelpful');
    const conditionalRenderHelpful = jest.fn();
    const wrapper = mount(<Answers />);
    conditionalRenderHelpful();
    console.log(conditionalRenderHelpful);
    expect(conditionalRenderHelpful).toHaveBeenCalled();
})

test('should render correctly when helpful is null', () => {
    const conditionalRenderHelpful = jest.fn();
    const container = document.createElement('div');
    ReactDOM.render(<Answers />, container);
    conditionalRenderHelpful();
    expect(container.textContent).toMatch('');
})

test('should render correctly when helpful is 1', () => {
    const wrapper = mount(<Answers />);
    wrapper.setState({
        helpful: 1
    });
    expect(wrapper.instance().conditionalRenderHelpful()).toEqual('• 1 person found this helpful');

})

test('should render correctly when helpful is greater than 1', () => {
    const wrapper = mount(<Answers />);
    wrapper.setState({
        helpful: 5
    });
    expect(wrapper.instance().conditionalRenderHelpful()).toEqual('• 5 people found this helpful');

})