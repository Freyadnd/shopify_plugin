'use client'
import { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Transition } from '@headlessui/react'
import Connect from "../connect/connect";
import * as React from "react"
import styles from '../../styles/Nav.module.css'
import { useNavigate } from 'react-router-dom';  // 导入 useNavigate

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)
  const navigate = useNavigate();  // 使用 useNavigate 钩子
  const location = useLocation(); // 获取当前的 location 对象
  // 处理菜单项点击事件
  const handleMenuClick = (link: string) => {
    navigate(link);  // 根据 key 跳转到对应的路由
    setMobileNavOpen(!mobileNavOpen)
  }

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul>
            <li>
              <div className={`${styles.tab} ${location.pathname == '/' ? styles.activeTab : ''} sketchy-box mb-6 text-center cursor-pointer`} onClick={() => { handleMenuClick('/') }}>Issue</div>
            </li>
            <li>
              <div className={`${styles.tab} ${location.pathname == '/portfolio' ? styles.activeTab : ''} sketchy-box text-center cursor-pointer`} onClick={() => { handleMenuClick('/portfolio') }}>Portfolio</div>
            </li>
            <li className='w-full flex flex-col justify-center items-center mt-10'>
              <Connect />
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  )
}
