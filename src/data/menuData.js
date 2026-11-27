import { faUser, faCalendarCheck, faHeart, faClockRotateLeft, faHouse} from '@fortawesome/free-solid-svg-icons';
//faClockRotateLeft가 에러가 나면 faHistory로

export const gnbMenu = [
  {
    id: 1,
    title: '해외여행',
    path: '/', //여기 이름 정하면 그때 넣으면 될것 같아요 아래 sub 포함
    sub: [
      { id: 11, title: '해외여행 홈', path: '/' },
    ],
  },
  { id: 2, title: '국내여행', path: '/r', 
    sub: [
      { id: 21, title: '제주여행', path: '/r' },
      { id: 22, title: '내륙여행', path: '/r' },
      { id: 23, title: '울릉도', path: '/r' },
      { id: 24, title: '섬 여행', path: '/r' },
      { id: 25, title: '내나라여행', path: '/r' },
      { id: 26, title: '국내골프투어', path: '/r' },
    ] },
  { id: 3, title: '항공+호텔', path: '/r', 
    sub: [
      { id: 31, title: '항공', path: '/r' },
      { id: 32, title: '해외호텔', path: '/r' },
      { id: 33, title: '국내숙박', path: '/r' },
      { id: 34, title: '내맘대로', path: '/r' },
      { id: 35, title: '에어텔', path: '/r' },
      { id: 36, title: '하나프리팩', path: '/r' },
    ] },
  { id: 4, title: '테마여행', path: '/r', 
    sub: [
      { id: 41, title: '골프', path: '/r' },
      { id: 42, title: '허니문', path: '/r' },
      { id: 43, title: '크루즈', path: '/r' },
      { id: 44, title: '밍글링 투어', path: '/r' },
      { id: 45, title: '트레킹 투어', path: '/r' },
      { id: 46, title: 'MICE', path: '/r' },
    ] },
  { id: 5, title: '투어/입장권', path: '/r', 
    sub: [
      { id: 51, title: '동남아', path: '/r' },
      { id: 52, title: '유럽', path: '/r' },
      { id: 53, title: '일본', path: '/r' },
      { id: 54, title: '중앙아시아', path: '/r' },
      { id: 55, title: '미주/캐나다', path: '/r' },
      { id: 56, title: '현지투어+', path: '/r' },
    ] },
  { id: 6, title: '혜택', path: '/r', 
    sub: [
      { id: 61, title: '이달의 특가', path: '/r' },
      { id: 62, title: '이벤트&혜택', path: '/r' },
      { id: 63, title: '마일리지', path: '/r' },
    ] }
];

// 상단 작은 링크
export const utilMenu = [
  { id: 1, title: '로그인', path: '/login' },
  { id: 2, title: '회원가입', path: '/join' },
  { id: 3, title: '고객센터', path: '/r' }, //path에 이동하려는 페이지 작성
];

// 헤더 오른쪽: 아이콘 메뉴 ()
// 경로가 PC랑 모바일/태블릿이랑 달랐던것 같아서 추후 고민을 더 해보고....
export const iconMenuPC = [
  { id: 1, title: '마이페이지',  path: '/mypage', icon: faUser }, 
  { id: 2, title: '예약내역', path: '/mypage', icon: faCalendarCheck },
  { id: 3, title: '찜',  path: '/mypage', icon: faHeart },
];

// 태블릿,모바일
export const iconMenuTM = [
  { id: 1, title: '홈',  path: '/', icon: faHouse }, 
  { id: 2, title: '최근본상품', path: '/recent', icon: faClockRotateLeft },
  { id: 3, title: '마이페이지',  path: '/mypage', icon: faUser },
  { id: 4, title: '찜',  path: '/mypage', icon: faHeart },
];