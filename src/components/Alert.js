import React from 'react'
function Alert(props) {
  const capatalize=(word)=>
  {
    const letters=word.toLowerCase();
    const finalWord=letters.charAt(0).toUpperCase()+letters.slice(1);
    return finalWord;

  }
  return (
    <div style={{height:'50px'}}>
    {props.alert &&
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capatalize(props.alert.type)} : </strong> {props.alert.msg}
      </div>}
      </div>
    
  )
}

export default Alert
