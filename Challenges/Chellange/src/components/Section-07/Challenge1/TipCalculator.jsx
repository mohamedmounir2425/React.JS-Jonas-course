import React, { useState } from 'react'

export const TipCalculator = () => {
    const [formValue, setFormValue] = useState({
        bill: '',
        likeMe: 0,
        likeFriend:0
    })
    const handleChange = (e) => {
        const { value ,name} = e.target;
        setFormValue({
            ...formValue,
            [name]:+value
         })
    }
    const handleReset = () => {
        setFormValue({
            bill: 0,
            likeMe: 0,
            likeFriend:0
        })
    }
    const { bill, likeMe, likeFriend } = formValue
    const avg = ((likeMe + likeFriend) / 200 ) * bill;
    const avgFixed = avg;
    const totalPrice = bill +  avg;
  console.log(formValue)
  return (
      <>
          {/* <Calc question={'How much was the bill?'}>
        <input value={formValue.bill} type="text" name='bill' onChange={handleChange}/>
              
          </Calc>
          <Calc question={'How did you like the service?'}>
              <select value={formValue.likeMe } name='likeMe' onChange={handleChange } >
                  <option value="0">Dissatisfied(0%)</option>
                  <option value="5">it was okay(5%)</option>
                  <option value="10">it was good(10%)</option>
                  <option value="20">Absolutely amazing!(20%)</option>
              </select>
        </Calc>
          <Calc question={'How did your friend like the service'}>
          <select value={formValue.likeFriend } name='likeFriend' onChange={handleChange } >
                  <option value="0">Dissatisfied(0%)</option>
                  <option value="5">it was okay(5%)</option>
                  <option value="10">it was good(10%)</option>
                  <option value="20">Absolutely amazing!(20%)</option>
              </select>
          </Calc>

          <h2>You pay ${ totalPrice} (${bill } + ${avgFixed } tip)</h2>
          <button onClick={handleReset}>Reset</button>
          <hr/> */}
          <BillInput formValue={formValue} onChange={handleChange} />
          <SelectPresentage name={'likeMe'} formValue={formValue} handleChange={handleChange}>How did you like the service?</SelectPresentage>
          <SelectPresentage name={'likeFriend'} formValue={formValue} handleChange={handleChange}>How did your friend like the service?</SelectPresentage>
          <Output avgFixed={avgFixed} totalPrice={totalPrice} bill={bill} />
          <Reset handleReset={handleReset}/>
    </>
  )
}


function Calc({question, children}) {
    return (
        <div>
        <span>{question}</span> 
        {children}
        </div>
    )
}
function BillInput({onChange , formValue}) {
    return (
        <div>
        <label>How much was the bill?</label> 
        <input value={formValue.bill} type="text" name='bill' placeholder='Bill value' onChange={onChange}/>
        </div>
    )
}

function SelectPresentage({children , formValue, name, handleChange}) {
    return (
        <div>
        <label>{children}</label> 
        <select value={formValue.name}  name={name} onChange={handleChange } >
                  <option value="0">Dissatisfied(0%)</option>
                  <option value="5">it was okay(5%)</option>
                  <option value="10">it was good(10%)</option>
                  <option value="20">Absolutely amazing!(20%)</option>
              </select>
        </div>
    )
}
function Output({totalPrice,bill,avgFixed}) {
    return (
        <h2>You pay ${ totalPrice} (${bill } + ${avgFixed } tip)</h2>
    )
}
function Reset({handleReset}) {
    return (
        <button onClick={handleReset}>Reset</button>
    )
}