import React, { useState } from 'react'
import logo from './../assets/picture/header.png'
import avatar from './../assets/picture/avatar.png'
import { HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlus,
  HiPlayCircle,
  HiTv} from 'react-icons/hi2'
import { HiDotsVertical } from 'react-icons/hi'
import HeaderItem from './HeaderItem'


function Header() {
  const [toggle, setToggle] = useState(false)

  const menu = [
    {
      id:1,
      name: 'Home',
      icon: HiHome,
    },
    {
      id:2,
      name: 'Search',
      icon: HiMagnifyingGlass,
    },
    {
      id:3,
      name: 'Watch List',
      icon: HiPlus,
    },
    {
      id:4,
      name: 'Original',
      icon: HiStar,
    },
    {
      id:5,
      name: 'Movies',
      icon: HiPlayCircle,
    },
    {
      id:6,
      name: 'Series',
      icon: HiTv,
    },
  ]
  return (
    <div className='flex w-full items-center justify-between p-5'>
      <div className='flex items-center gap-9'>
        <img src={logo} className='w-[80px] md:w-[115px] object-cover' />
        <div className='hidden md:flex gap-9 mt-7 mx-5'>
          {menu.map((item) => (
            <HeaderItem key={item.id} name={item.name} Icon={item.icon} />
            ))}
        </div>
        <div className='flex md:hidden gap-9 mt-5'>
          {menu.map((item, index) => index<3&&(
            <HeaderItem key={index}  name={''} Icon={item.icon} />
            ))} 
        </div>
        <div className="md:hidden mt-5" onClick={()=>setToggle(!toggle)}>
          <HeaderItem name={''} Icon={HiDotsVertical} />
          {toggle?<div className='absolute w-[150px] bg-[#121212] mt-3 mb-3 border-[1px] border-gray-500 p-3 px-3 pb-3'>
             {menu.map((item, index) => index>2&&(
            <HeaderItem key={index}  name={item.name} Icon={item.icon} />
            ))}
          </div>:null}
        </div>
      </div>
      <img src={avatar} className='md:w-[50px] w-[40px] mt-3 rounded-full object-cover ml-auto' />
    </div>

  )
}


export default Header