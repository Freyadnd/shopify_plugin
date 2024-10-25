
'use client'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'
import styles from '../../styles/Nav.module.css'
import MobileMenu from './mobile-menu'
import { useNavigate } from 'react-router-dom';  // 导入 useNavigate
import { ConnectButton } from '@rainbow-me/rainbowkit';
import * as React from "react"


export default function Header() {

  const [top, setTop] = useState<boolean>(true)
  const navigate = useNavigate();  // 使用 useNavigate 钩子
  const location = useLocation(); // 获取当前的 location 对象

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  // 处理菜单项点击事件
  const handleMenuClick = (link: string) => {
    navigate(link);  // 根据 key 跳转到对应的路由
  }

  return (
    <header className={`fixed w-full z-30 ${!top ? 'backdrop-blur-sm' : ''}`}>
      <div className="max-w-8xl mx-auto px-5 pr-[90px]">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 flex items-center justify-between text-white">
            <div className={styles.title}>

            </div>
            <nav className="hidden md:flex md:grow">
              <ul className="flex grow justify-end flex-wrap items-center">

              </ul>
            </nav>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in divs */}
            <ul className="flex grow justify-end flex-wrap items-center mb-[15px]">
              <ConnectButton />
            </ul>
          </nav>
          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
