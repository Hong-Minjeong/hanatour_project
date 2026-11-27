// PC 1뎁스 + 호버 드롭다운 및 전체 패널
// 왼쪽	전체메뉴 버튼 + 메인 메뉴
//패널 펼침과 메인메뉴는 함수 따로 (아마도)
//맨 오른쪽 아이콘 메뉴 3개

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import React, { useState } from 'react'
import '../layout/css/Header.css'
import { gnbMenu, iconMenuPC } from '../data/menuData';

function Gnb() {
  // 전체 메뉴 버튼 눌렀는지 확인
  const [isAllOpen, setIsAllOpen] = useState(false);

  return (
    <>
      <nav>
        <div className='header_pc'>
          <button type='button' className='btn_all' onClick={() => setIsAllOpen(!isAllOpen)} >
            <FontAwesomeIcon icon={faBars} />
            <span>전체메뉴</span>
          </button>

          <ul className="depth1_pc">
            {gnbMenu.map((menu) => (
              <li key={menu.id}>
                <Link to={menu.path}>{menu.title}</Link>

                {/* 서브 출력(은 css로 조정) */}
                {menu.sub.length > 0 && (
                  <ul className="depth2">
                    {menu.sub.map((item) => (
                      <li key={item.id}>
                        <Link to={item.path}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <ul className="icon_menu">
            {iconMenuPC.map((menu) => (
              <li key={menu.id}>
                <Link to={menu.path}>
                  <FontAwesomeIcon icon={menu.icon} />
                  <span>{menu.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>


        {/* 전체메뉴 패널 */}
        {isAllOpen && (
          <div className="all_menu">
            <div className='all_menu_wrap'>
              {gnbMenu.map((menu) => (
              <dl key={menu.id}>
                <dt>{menu.title}</dt>
                {menu.sub.map((item) => (
                  <dd key={item.id}><Link to={item.path}>{item.title}</Link></dd>
                ))}
              </dl>
            ))}

            {/* 전체메뉴 닫기 버튼 */}
            <button type="button" className="btn_close" onClick={() => setIsAllOpen(false)}>
              <FontAwesomeIcon icon={faX} onClick={() => setIsAllOpen(!isAllOpen)} />
            </button>
            </div>
          </div>
        )}

      </nav>

    </>
  )
}

export default Gnb