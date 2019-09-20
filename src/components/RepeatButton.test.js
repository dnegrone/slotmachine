import React from 'react';
import { shallow } from 'enzyme';
import RepeatButton from './RepeatButton';

describe('Component Repeat Button <RepeatButton />', () => {
    const wrapper = shallow(<RepeatButton />);
    const mockCallBack = jest.fn();
    
    it('expects render a button', () => {
        // console.log(wrapper.debug());
        expect(wrapper.debug()).toMatchSnapshot();
    })

    it('expect button to have an id equals to repeatButton', () => {
        expect(wrapper.find('#repeatButton').length).toEqual(1);
    })

    it('expects render a button without text', () => {
        expect(wrapper.text()).toEqual('');
    })

    it('expect to have click event to undefined', () => {
        wrapper.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(0);
    })
})