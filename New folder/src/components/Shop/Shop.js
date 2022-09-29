import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Shop.css'
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons'


const Shop = () => {
    const [activities, setActivities] = useState([])
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('./products.json')
        .then(res =>res.json())
        .then(data =>setActivities(data))
    }, []);


    const handleAddToList= (activity) =>{
        // console.log(activity);
        const newCart = [...cart, activity];
        setCart(newCart);
    }


    return (
            <div  className='shop-container'>      
                      
            <div>
                <div className='yoga'>
                    <span className='icon-2'>
                    <FontAwesomeIcon icon={faPersonWalking}></FontAwesomeIcon>
                    </span>
                    <span>
                    <h1>YOGA ACTIVITY</h1>
                    </span>
                </div>
                    <h2 className='select'>Select Your YOGA</h2>
                <div className="activity-container">
            {
                activities.map(activity =><Activity 
                    key={activity.id}
                    activity={activity}
                    handleAddToList={handleAddToList}
                    ></Activity>)
            }
                </div>
            </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
                <div className='question'>
                    <h1 className='qna'>QNA PART</h1>
                <div className='answer'>
                    <div>
                        <h2>1.How Does React work?</h2>
                        <p><b>Ans :</b> While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                        Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements.</p>
                    </div>
                    <div>
                        <h2>2.Difference between props and state?</h2>
                        <p><b>Ans :</b>Difference between State and Props-
                         <br />
                         <b>State:- </b>
                         <ul>
                            <li>State can be used only with the state components/class component.</li>
                            <li>It is Mutable ( can be modified).</li>
                            <li>State is both read and write.</li>
                         </ul>
                        
                        <b>Props:-</b>
                        <ul>
                            <li>
                            Props:- Props can be used with state and functional components.
                            </li>
                            <li>It is Immutable (cannot be modified).</li>
                            <li>Props are read-only. </li>
                        </ul>
                        </p>
                    </div>
                    <div>
                    <h2>3.What is the use of 'useEffect' without data load??</h2>
                    <p><b>Ans :</b> Some example of useEffect are given below-
                    <ul>
                        <li>Fetching data</li>
                        <li>Directly Updating the dom</li>
                        <li>Timers</li>
                    </ul>
                    By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.
                    </p>
                    </div>
                    </div>
                </div>
            </div>  
    );
};

export default Shop;