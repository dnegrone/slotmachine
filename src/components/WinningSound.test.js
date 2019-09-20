import React from 'react';
import { shallow } from 'enzyme';
import WinningSound from './WinningSound';

describe('Component Winning Sound <WinningSound />', () => {
    const wrapper = shallow(<WinningSound />);
    const mockCallBack = jest.fn();
    
    it('expects Winning Sound component to be rendered', () => {
        expect(wrapper.debug()).toMatchSnapshot();
    })
    
    it('expect to have a player', () => {
        // console.log(wrapper.debug());
        expect(wrapper.find('.player').length).toEqual(1);
    })

    it('expect to autoplay without preloading a sound', () => {
        expect(wrapper.find({ autoplay: 'autoplay' }));
        expect(wrapper.find({ preload: false }));
    })
    
    it('expect to have a sound', () => {
        expect(wrapper.find('source').length).toEqual(1);
    })

    it('expect the sound to be winning_slot.wav', () => {
        expect(wrapper.find({ src: 'winning_slot.wav' }));
    })

})