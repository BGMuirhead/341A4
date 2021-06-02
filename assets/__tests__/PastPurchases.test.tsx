//test for best sellers 

import React from 'react';
import PastPurchases from "../src/modules/pastPurchases/PastPurchases";

import { shallow  } from 'enzyme';


it("Is Purchase Header Correct",() =>{
    

    const wrapper = shallow(<PastPurchases/>);
    //expect(wrapper.find('#PageHeader').text()).toEqual("Top 20 best sellers")
})


it("Is Hello Message Correct",() =>{
    

    const wrapper = shallow(<PastPurchases/>);
    //expect(wrapper.find('#PageHeader').text()).toEqual("Top 20 best sellers")
})

it("Are Order Displayed Correctly",() =>{
    

    const wrapper = shallow(<PastPurchases/>);
    //expect(wrapper.find('#PageHeader').text()).toEqual("Top 20 best sellers")
})


