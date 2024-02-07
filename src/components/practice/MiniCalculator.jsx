import React from 'react'

const MiniCalculator = () => {
    let sum = (a,b)=>{
        return a+b;
    }
    let sub = (a,b)=>{
        return a-b;
    }
    let mul = (a,b)=>{
        return a*b;
    }
    let div = (a,b)=>{
        let divide =a/b;
        divide = divide.toFixed(2);
        return divide;
    }
  return (
    <div>
        <ul>
            <li>Sum of two no is: {sum(12,10)}</li>
            <li>Sub of two no is: {sub(12,10)}</li>
            <li>Mul of two no is: {mul(2,2)}</li>
            <li>Div of two no is: {div(20,3)}</li>
        </ul>
    </div>
  )
}

export default MiniCalculator