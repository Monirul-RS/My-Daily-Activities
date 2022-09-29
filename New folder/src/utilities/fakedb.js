
// const addToDb=(time)=>{
//     let newCartValue={};
//     const cartValue=localStorage.getItem('time');
//     if(cartValue)
//     {
//      newCartValue=JSON.parse(cartValue);
//      console.log(newCartValue)

//     }
//     console.log(newCartValue)
//     let s=0;
//     time.forEach(element => {
//         s=s+element;
        
//     });
//     //console.log(s);
//     localStorage.setItem('time',s);

// }
// const getToDb=()=>{
//     const storedCard=localStorage.getItem('time');
//     return storedCard;
    
// }
const addToDb =(breaks)=>
{
    const strBreaks= JSON.stringify(breaks);
   
    localStorage.setItem  ('breaks time', strBreaks);
    const getTime=localStorage.getItem('breaks time');
    return getTime;

}

const getStoreCard = ()=>{
    let cartValue={};
    const getTime=localStorage.getItem('breaks time');
  
    if(getTime)
    {
        cartValue= JSON.parse(getTime);
        //console.log(cartvalue);
    }
    return cartValue;

}

const showingCart=(times)=>{
    let s=0;
        times.forEach(time => {
            s=s+time;
            
        });
        return s;
}
export {showingCart,addToDb,getStoreCard}