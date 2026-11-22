V01 2026-11-22일 작성
작성자 : 홍민정

이미지
public -> images -> 각 페이지 이름 폴더 로 관리

코드 작성
src 폴더

    layout : 모든 페이지 공통 서식
        - css : 공통 서식용 css(우선 App.scss에 공통 서식을 적을 생각인데 길어지면 common.scss에 나누겠습니다!)
    
    pages : 각 페이지 jsx및 css 관리
        - css : 각 jsx 에 적용할 css
    
    components : 여러 페이지에서 쓰이는 콤포넌트(없으면 사용하지 않아도 됩니다!! 예를 들어서 국내 )


아직 정해지지 않은 부분
data관리

데이터명
우선 공통 서식(App.css에) 카멜 케이스(camelCase)로 작성해뒀어요
