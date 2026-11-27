import React from 'react'
import {Link} from 'react-router';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footerInner'>
        <div className='footerTop'>
          <nav className='footerNav'>
            <Link to="/sub/wish">회사소개</Link>
            <Link to="/sub/wish">이용약관</Link>
            <Link to="/sub/wish">개인정보처리방침</Link>
            <Link to="/sub/wish">여행약관</Link>
            <Link to="/sub/wish">해외여행자보험</Link>
            <Link to="/sub/wish">마케팅제휴</Link>
            <Link to="/sub/wish">공식인증예약센터 검색</Link>
          </nav>

          <div className='footerSns'>
            <Link to="/sub/wish"><i className='fa-brands fa-facebook-f'></i></Link>
            <Link to="/sub/wish"><i className="fa-brands fa-instagram"></i></Link>
            <Link to="/sub/wish"><i className="fa-solid fa-comment"></i></Link>
            <Link to="/sub/wish"><i className="fa-brands fa-youtube"></i></Link>
          </div>
        </div>

        <div className='footerCompany'>
          <p><strong>(주)하나투어</strong> <span className='bar'>|</span>대표집행임원 :000<span className='bar'>|</span>주소 : (00000) 서울특별시 종로구 00동 0길 00 <span className='bar'>|</span>사업자등록번호 : 000-00-00000<span className='bar'>|</span><strong><Link to="/sub/wish">사업자정보확인</Link></strong></p>
          <p>통신판매업신고번호 : 0000-0000호<span className='bar'>|</span> 관광사업자 등록번호 : 제0000-000000호 <span className='bar'>|</span>호스팅 사업자 : 하나투어, 000000<span className='bar'>|</span>등록관청 : 서울특별시 종로구청</p>
          <p>개인정보 보호책임자 : 000<span className='bar'>|</span>영업보증공제 15억 1천만원 가입<span className='bar'>|</span>기획여행보증공제 7억원 가입<span className='bar'>|</span>FAX : 00-000-0000<span className='bar'>|</span>이메일 : 00000@0000.000</p>
        </div>

        <div className='footerContact'>
          <p className='contactItem'>
            <i className='fa-solid fa-phone-volume' aria-hidden='true'></i>
            <span>고객센터 0000-0000</span>
          </p>

          <p className='contactItem'>
            <i className='fa-solid fa-headset' aria-hidden='true'></i>
            <span>해외항공권문의 0000-0000</span>
          </p>
        </div>
        
        <div className='footerNotice'>
          <p>• 부득이한 사정에 의해 여행일정이 변경되는 경우 사전 동의를 받습니다.</p>
          <p>• 하나투어는 개별 항공권 및 일부 여행상품에 대하여 통신판매중개자의 지위를 가지며, 해당 상품의 정보 및 거래 등에 관한 책임은 판매자에게 있습니다.</p>
          <p>• 예금주 하나투어가 아닌 계좌(개인, 대리점 등)로 입금하실 경우 당사에 대한 유효한 지급이 아니며, 당사는 책임지지 않습니다.<br/>
          하나투어 가상 계좌가 아닌 다른 계좌(개인, 대리점 등)에 대한 입금 유도가 있는 경우, 반드시 입금 전에 하나투어 고객센터로 문의/신고 하여 주시기 바랍니다.</p>
        </div>
        <p className='footerCopyright'>COPYRIGHT© HANATOUR SERVICE INC. ALL RIGHTS RESERVED</p>

        <div className='footerEscrow'>
          <p>하나은행 구매안전 서비스</p>
          <p>고객님은 안전거래를 위해 현금으로 결제시<br/> (주)하나투어에서 가입한 하나은행으로<br/> 구매안전 서비스를 이용하실 수 있습니다.</p>
          <p><Link to='/sub/wish'>서비스 가입사실 확인</Link></p>
        </div>

        <div className='footerAwards'>
          <div className='footerAwardsLeft'>
            <img src='/images/footer/f_L_1.png' alt='...' />
            <p>소비자중심경영(CCM)
                <br />
                7회 연속 사업자 지정
                <br />
                (2012~2026) 및
                <br />
                2025년 &apos;명예의 전당&apos; 포상
            </p>
            <img src='/images/footer/f_L_2.png' alt='...' />
            <p>
                KMAC 선정
                <br />
                15년 연속(2009~2026)
                <br />
                한국산업의 고객만족도 여행
                <br />
                사부문 1위
            </p>
            <img src='/images/footer/f_L_3.png' alt='...' />
              <p>
                한국표준협회 선정
                <br />
                5년 연속(2019~2026)
                <br />
                한국서비스품질지수 여행사
                <br />
                부문 1위
              </p>

          </div>  
        </div>

      </div>
    </footer>
  )
}

export default Footer