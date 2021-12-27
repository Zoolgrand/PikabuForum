import Navbar from '../../components/Navbar/Navbar';
import Forum from '../../components/Forum/Forum';
import SideBar from '../../components/SideBar/SideBar';
import './MainPage.css';
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';
function MainPage() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <Navbar />
      <Modal isActive={isActive} setIsActive={setIsActive} />
      <div className="forum-with-sidebar">
        <Forum />
        <SideBar
          isActive={isActive}
          setIsActive={setIsActive}
          className="mainpage-sidebar"
        />
      </div>
    </div>
  );
}
export default MainPage;
