import React from 'react'
// 로고, 검색창, 로그인, 회원가입, 상단 서브, PC 네비게이션)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router';
import { utilMenu } from '..//data/menuData';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Gnb from './Gnb';
import '../layout/css/Header.css'


// 수정해야할거
// 1. 전체 메뉴열려있을때 호버 안되게
// 2. 호버 메뉴 가로로 변경
// 3. 전체 메뉴 배치
// 4. 가로선...
// 모바일 태블릿 네비와 고민

function Header() {
  return (
    <>
      <header>
        <div className="header_top">
          {/* 로그인, 회원가입... */}
          <ul className="util">
            {utilMenu.map((item) => (
              <li key={item.id}><Link to={item.path}>{item.title}</Link></li>
            ))}
          </ul>

          <div>
            {/* 로고 */}
            <h1 className="logo">
              <Link to="/">
                <img src={`${process.env.PUBLIC_URL}/images/header/logo_pc.png`} alt='하나투어 메인로고'></img>
              </Link>
            </h1>

            {/* 검색창 */}
            <div className='search_box'>
              <input type="text" placeholder="어디로 떠나실건가요?"></input>
              <button type="button">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>

        </div>
        {/* 하단 네비 */}
        <Gnb />
      </header>
    </>
  )
}

export default Header