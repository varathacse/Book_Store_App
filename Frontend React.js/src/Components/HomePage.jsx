import React from 'react'

const HomePage = () => {
let u=localStorage.getItem('user');
let user=JSON.parse(u);


  return (
    <div style={{margin:"3%"}}>Hii {user.userName}</div>
  )
}

export default HomePage