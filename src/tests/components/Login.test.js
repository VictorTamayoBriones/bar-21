import React from 'react';
import { shallow } from "enzyme"
import { Login } from "../../views/Login"

describe('Test in <Login/>', () => {
    
    const wrapper = shallow( <Login/> )

    test('should show corectly <Login/>', () => {
        
        expect( wrapper ).toMatchSnapshot();

    })
    
    test('should can change the text box', () => {
        
        const Input = wrapper.find('input');
        console.log(Input);

    })
    

})
