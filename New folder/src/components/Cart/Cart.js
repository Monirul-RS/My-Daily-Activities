import './Cart.css'
import img1 from '../../images/img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { addToDb, getStoreCard } from '../../utilities/fakedb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { showingCart } from '../../utilities/fakedb';

const Cart = (props) => {
    const [breakTime, setBreakTime] = useState(0)
    const [cartT, setCart]=useState([]);
    const {cart} = props;

     
    let totalTime = 0;
    for(const activity of cart){
        totalTime = totalTime + activity.time;
    }
    useEffect(()=>{
        const cart=getStoreCard();
       console.log(cart);
        if(cart)
        {
            setBreakTime(cart)
            console.log(cart)

        }
    // let cartvalue;
    // const getTime=localStorage.getItem('breaks time');
  
    // if(getTime)
    // {
    //     cartvalue= JSON.parse(getTime);
    //     //console.log(cartvalue);
    // }
    else {
        localStorage.setItem('breaks time',0);
    }
    


    },[breakTime])
    const clickHandle=(time)=>
    {
     const   newCart=[...cartT,time];
        setCart(newCart);
        //console.log('clicked',id);
    //   setStored(showingCart(newCart))
       
      
       
    }

    const breakTimeHandle= (breaks) =>{
        console.log(breaks);
        addToDb(breaks);
        setBreakTime(getStoreCard())
        
    }
    const diffToast =() => {
        toast.success("Congratulation! You are done with yoga activity", {position: "top-center"});
    }

    return (
        <div className='cart'>
          <div className='my-cart-info'>
            <div>
             <img src={img1} alt="" />
            </div>
            <div className='my-info'>
             <h3>Monirul Hasan</h3>
             <div className='location'>
                <span>
                    <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                </span>
                <span className='city'>Chattogram, Bangladesh.</span>
             </div>
            </div>
          </div>
          <div className='my-info-2'>
            <div>
                <p><b>75</b>Kg</p>
                <p>Weight</p>
            </div>
            <div>
                <p><b>5.9</b></p>
                <p>Height</p>
            </div>
            <div>
                <p><b>23</b>yrs</p>
                <p>Age</p>
            </div>
          </div>
          <div>
            <h2>Add a Break</h2>
            <div className='time-div'>
                <button onClick={() => breakTimeHandle(10)}>10s</button>
                <button onClick={() => breakTimeHandle(20)}>20s</button>
                <button onClick={() => breakTimeHandle(30)}>30s</button>
                <button onClick={() => breakTimeHandle(40)}>40s</button>
                <button onClick={() => breakTimeHandle(50)}>50s</button>
                    
            </div>
          </div>
          <div>
            <h2>Exercise Details</h2>
            <div className='exercise'>
                <h3>Exercise Time:- </h3>
                <p>{totalTime} seconds</p>
            </div>
            <div className='break'>
                <h3>Break Time: </h3>
                <p>{breakTime} seconds</p>
            </div>
          </div>
          <button onClick={diffToast} className='btn-complete'>Yoga Completed</button>
          <ToastContainer />
        </div>
       
    );
};

export default Cart;