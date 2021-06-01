//test for best sellers 

import React from 'react';
import BestSellers from "../src/modules/bestSellers/BestSellers";

import { shallow  } from 'enzyme';

it("Is Header Correct",() =>{
    

    const wrapper = shallow(<BestSellers/>);
    expect(wrapper.find("h3").text()).toEqual("Top 20 best sellers"); 
})



