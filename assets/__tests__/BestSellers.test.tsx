//test for best sellers 

import React from 'react';
import BestSellers from "../src/modules/bestSellers/BestSellers";

import { shallow  } from 'enzyme';
import BestSellerProductRow  from '../src/modules/bestSellers/BestSellerProductRow';


var book1 =
    {
        
        bookId: "abc",
        quantity: 1,
        price: 5,
        name:"name",
        
    };


it("Is Header Correct",() =>{
    

    const wrapper = shallow(<BestSellers/>);
    expect(wrapper.find('#PageHeader').text()).toEqual("Top 20 best sellers")
})

it("Book Title and Price Renders Correctly", ()=>{
    

    const wrapper = shallow(<BestSellerProductRow bookId={book1.bookId} key={book1.bookId} />);
    wrapper .setState({book:book1})
    expect(wrapper.find('#book').text()).toEqual("name$5");
    

})


