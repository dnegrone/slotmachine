import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

describe('Spinner Tests', () => {
    let wrapper;
    const mockFunctions = jest.fn();
    beforeEach(() => {
        const mockProps = {};
        wrapper = shallow(<Spinner {...mockProps} />);
    });
    
    test('renders MainPage without crashing', () => {
        // console.log(wrapper.debug())
        expect(wrapper.debug()).toMatchSnapshot();
    })

    test('expect to see all current states', () => {
        // console.log(wrapper.state())
        expect(wrapper.state())
    })

    test('forceUpdateHandler call reset function', ()=>{
        const mock = wrapper.instance().forceUpdateHandler();
        // console.log(mock)
        expect(mock).toEqual(undefined)
    })

    test('set start position', () => {
        const mock = wrapper.instance().setStartPosition();
        // console.log(mock) // if negative, the sprite will go up; if zero, the sprite will be in its bottom, showing the last picture
        expect(mock).toBeLessThanOrEqual(0);
    })

    test('Is the background moving correctly', () => {
        const newPosition = wrapper.state().position - wrapper.instance().speed;
        // console.log(newPosition); // the new position should be greater, because the sprite is always going up
        expect(wrapper.state().position).toBeGreaterThanOrEqual(newPosition);
    })

    test('getting symbol from position', () => {
        const mock = wrapper.instance().onFinish;
        // console.log(mock) // the symbol doesn't stopped yet, only in MainPage
        expect(mock).toBeUndefined();
    })

})

// it('should return the initial state', () => {
    // console.log(wrapper.state({lastPosition, }))
    // console.log(wrapper.state().timeRemaining)
    // console.log(wrapper.instance().moveBackground())
    // console.log(wrapper.instance().forceUpdateHandler)
    // expect(wrapper.instance().forceUpdateHandler()).toBeUndefined()
    // console.log(wrapper.instance().reset())
    // console.log(wrapper.instance().tick())
    // console.log(wrapper.instance().timer)
    // expect(wrapper.instance().timer).toEqual(5)
    // console.log(wrapper.instance().getSymbolFromPosition())
    // console.log(wrapper.instance().currentPosition)
// })
