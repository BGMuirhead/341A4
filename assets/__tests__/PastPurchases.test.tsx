

//test for best sellers 

import React from 'react';
import PastPurchases from "../src/modules/pastPurchases/PastPurchases";


import { shallow  } from 'enzyme';
import PurchasedProductRow from '../src/modules/pastPurchases/PurchasedProductRow';


var details = {
    attributes: {
        "email":"bm",
    }
}

var orders1 = [
    {
        orderDate: 1622608000262,
        orderId:"123",
        books:[
            {
                bookId: "abc",
                quantity: 1,
                price: 5
            }],

    }
]


var book1 =
    {
        
        bookId: "abc",
        quantity: 1,
        price: 5,
        name:"name",
        
    };

it("Is Purchase Header Correct",() =>{
    

    const wrapper = shallow(<PastPurchases />);
    expect(wrapper.find('#PurchasesHeader').text()).toEqual("Past purchases")
})


it("Is Hello Message Correct",() =>{
    

    const wrapper = shallow(<PastPurchases />);
    wrapper.setState({ userInfo: details });
    expect(wrapper.find('#helloheader').text()).toEqual("Hello bm!")
})


it("Order Date Displayed Correctly",() =>{
    

    const wrapper = shallow(<PastPurchases/>);
    wrapper.setState({ orders:orders1 });
    wrapper.setState({ isLoading:false });
    expect(wrapper.find('#dateHeader').text()).toEqual("Order date: 5/2/2021 16:26");
    
})

it("Book Type, Quantity, and Price Displayed Correctly", ()=>{
    

        const wrapper = shallow(<PurchasedProductRow order={book1} key={book1.bookId}/>);
        wrapper .setState({book:book1})
        expect(wrapper.find('#book').text()).toEqual("name1 @ 5");
        
    
    })



