import React from 'react';
import '../pages/css/Main.css';
// import {Swiper, SwiperSlide} from 'swiper/react';
// import {pagination, Nvaigation, Autoplay} from 'swiper/modules';

function MainSlide() {
  return (
    <>
      <section className="heroSection">
        <article className="mainSlide swiper">
          <div className="mainSlideText swiperslide">
            <div className="mainSlideTextInner">
              <h2>계절의 끝 겨울 여행</h2>
              <p>상반기 추천 여행과 <br/>설 여행 응원선물 이벤트</p>
            </div>
            <p className="pagenation">n/8</p>
          </div>
          <img src={`${process.env.PUBLIC_URL}/images/main/slideImg1.png`} alt=""/>
        </article>
        <article className="dtInputForm">
          <div className="dtInputFormInner">
            <div className="selectDtMenu">
              <input type="radio" value="해외여행" name="dt" id="dtMenuAboard"/><label for="dtMenuAboard">해외여행</label>
              <input type="radio" value="국내여행" name="dt" id="dtMenuLocal"/><label for="dtMenuLocal">국내여행</label>
            </div>
            <div className="dt"><span>어디로 떠나세요?</span></div>
            <div className="start"><span>출발지 선택</span></div>
            <div className="date"><span>여행시작일 선택</span></div>
            <button type="submit">검색</button>
          </div>
        </article>
      </section>
    </>
  )
}

export default MainSlide