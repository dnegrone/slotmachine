import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

describe('MainPage component', () => {

    let wrapper;
    
    beforeEach(() => {
        const mockProps = {}
        wrapper = shallow(<MainPage { ...mockProps } />)
    });
    
    it('renders MainPage without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    })

})

{/* <Spinner onFinish={this.finishHandler} ref={(child) => { this._child1 = child; }} timer="1000" /> */}