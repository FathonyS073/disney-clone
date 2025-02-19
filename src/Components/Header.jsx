import React from 'react'
import logo from './../assets/picture/header.png'
import avatar from './../assets/picture/avatar.png'
import { HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlus,
  HiPlayCircle,
  HiTv,
 } from 'react-icons/hi2'
import HeaderItem from './HeaderItem'

function Header() {
  const menu = [
    {
      name: 'Home',
      icon: HiHome,
    },
    {
      name: 'Search',
      icon: HiMagnifyingGlass,
    },
    {
      name: 'Watch List',
      icon: HiPlus,
    },
    {
      name: 'Original',
      icon: HiStar,
    },
    {
      name: 'Movies',
      icon: HiPlayCircle,
    },
    {
      name: 'Series',
      icon: HiTv,
    },
  ]
  return (
    <div className='flex w-full items-center justify-between p-5'>
    <div className='flex items-center gap-9'>
      <img src={logo} className='w-[80px] md:w-[115px] object-cover' />
      {menu.map((item, index) => (
        <HeaderItem key={index} name={item.name} Icon={item.icon} />
      ))}
    </div>
    <img src={avatar} className='w-[60px] rounded-full object-cover ml-auto' />
  </div>
  )
}

export default Header