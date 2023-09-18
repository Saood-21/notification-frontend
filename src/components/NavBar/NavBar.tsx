import styles from "./NavBar.module.css";
import { useState, useEffect, useRef } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import { Icon } from "@mui/material";

function NavBar() {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);
  const logoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function handleSettingsClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    setShowLogout(!showLogout);
  }

  function handleClickOutside(event: MouseEvent) {
    if (
      logoutRef.current &&
      !logoutRef.current.contains(event.target as Node)
    ) {
      setShowLogout(false);
    }
  }

  function handleLogOut() {
    navigate("/");
  }

  return (
    <nav
      className={styles.navbar}
      style={{ boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.2)" }}
    >
      <div className={styles.logo}>
        <img src="gosaas.svg" alt="Logo" />
      </div>
      <div className={styles.settings}>
        <button onClick={handleSettingsClick}>
          <Icon>
            <SettingsIcon /> {/* This is where you specify the icon */}
          </Icon>
        </button>
        {showLogout && (
          <div className={styles.logout} ref={logoutRef}>
            <List
              className={styles.list}
              component="nav"
              aria-label="mailbox folders"
            >
              <ListItem>
                <button>Profile</button>
              </ListItem>
              <Divider className={styles.divider} />
              <ListItem>
                <button onClick={handleLogOut}>Logout</button>
              </ListItem>
            </List>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
