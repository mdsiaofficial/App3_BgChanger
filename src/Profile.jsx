import React from 'react'

function Profile({name, address, phone, imgURL}) {
  const img = imgURL || "https://th.bing.com/th?id=OIF.skDPdLS%2fElaoPxWmeHV7vQ&rs=1&pid=ImgDetMain";

  const s1 = `text-xl text-white p-2 m-2 border md:4xl bg-slate-600 text-center rounded-xl`;
  return (
    <div>
      <section className=' w-[25rem] h-auto bg-slate-600 rounded-xl p-2 m-4'>
        <h1 className='text-2xl text-white mb-2 md:4xl bg-slate-600 text-center rounded-xl'>{name || "Name"}</h1>
        <img src={img} alt="" className='rounded-xl
        ' />
        <h2 className={`${s1} `}>{address ||"Address"}</h2>
        <h2 className={`${s1} `}>{phone || "Phone Number"}</h2>
      </section>
    </div>
  )
}

export default Profile
