
import './layout/css/Reset.css'; //초기화

import './layout/css/App.css'; //공통

//헤더, 푸터 콤포넌트
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './pages/Main';

function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
