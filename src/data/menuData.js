import { faUser, faCalendarCheck, faHeart, faClockRotateLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
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
  { id: 2, title: '국내여행', path: '/r', sub: [] },  //id 2~ 6부터 path에 이동하려는 페이지 작성
  { id: 3, title: '항공+호텔', path: '/r', sub: [] },
  { id: 4, title: '테마여행', path: '/r', sub: [] },
  { id: 5, title: '투어/입장권', path: '/r', sub: [] },
  { id: 6, title: '혜택', path: '/r', sub: [] },
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