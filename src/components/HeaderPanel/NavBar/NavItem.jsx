import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../contexts/AppContext';

import './NavItem.css';
export const NavItem = ({ label, navigationTarget, sectionTarget }) => {
  const navigate = useNavigate();
  
  const { SectionsState, activateSection } = useAppContext();

  const [ Active, setActive ] = useState(false);

  const getActive = () => {
      const activeSection = SectionsState.find(
      section => section.active && section.id === sectionTarget
    );
    return activeSection ? true : false;
  };

  useEffect(() => {
    setActive(getActive())
  },[SectionsState])


  const onHandleClick = (e) => {
    activateSection(sectionTarget);
    navigate(navigationTarget)
  }
  return (
    <button
      className={`nav-item ${Active ? 'nav-item-selected' : ''}`}
      onClick={onHandleClick}>
      {label}
    </button>
  );
};
