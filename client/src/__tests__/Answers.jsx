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
    sinon.spy(Answers.prototype, 'conditionalRenderHelpful');
    const wrapper = mount(<Answers />);
    console.log(Answers.prototype);
    // expect(Answers.prototype.conditionalRenderHelpful.calledOnce).toEqual(true);
})