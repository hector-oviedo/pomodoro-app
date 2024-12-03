import { NavItem } from './NavItem';
import { useAppContext } from '../../../contexts/AppContext';

import './NavBar.css';
export const NavBar = () => {
  const { SectionsState } = useAppContext();

  return (
    <nav className="nav-bar">
      {
        SectionsState.map((section) => {
          if (section.navPresent)
            return (
              <NavItem
                key={section.id}
                label={section.navLabel}
                navigationTarget={section.navigation}
                sectionTarget={section.id}
                />
            )
        })
      }
    </nav>
  );
}