import React from 'react';

function Wrapper({ children }){
    const style = {
    border: '2px solid black',
    pading: '16xp',
};
 return (
     <div style={style}>
         {children}
     </div>
 )
 }
 export default Wrapper;