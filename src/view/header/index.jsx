import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCar,
  FaUsers,
  FaLaptop,
  FaCreditCard,
  FaWhatsapp,
  FaSignOutAlt,
  FaBars,
  FaAngleUp,
  FaAngleDown,
  FaTimes,
} from "react-icons/fa";
import {
  MenuList,
  MenuItem,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Collapse,
  Button,
} from "@material-ui/core";

const Header = ({ title }) => {
  const [sidebar, setSidebar] = useState(false);
  const [collapse, setCollapse] = useState({
    site: false,
    financeiro: false,
  });

  return (
    <>
      {window.innerWidth < 576 ? (
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setSidebar(true)}
            >
              <FaBars />
            </IconButton>
            <Typography variant="h6">{title}</Typography>
          </Toolbar>
        </AppBar>
      ) : (
        <header>
          <nav className="main-header navbar navbar-expand-lg navbar-light bg-white py-0">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img src="/logo.png" height="30" alt="CarCRM" loading="lazy" />
              </Link>

              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/vehicles">
                    <FaCar className="icon-lg mr-2" /> Veículos
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link rounded-0 nav-link">
                    <FaUsers className="icon-lg mr-2" /> Proprietários
                  </button>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    data-toggle="dropdown"
                  >
                    <FaLaptop className="icon-lg mr-2" /> Site
                  </Link>
                  <MenuList className="dropdown-menu">
                    <MenuItem className="dropdown-item">
                      Otimização para o Google
                    </MenuItem>
                    <MenuItem className="dropdown-item">
                      Unidades e Telefones
                    </MenuItem>
                    <MenuItem className="dropdown-item">Minha Logo</MenuItem>
                    <MenuItem className="dropdown-item">Domínio</MenuItem>
                    <MenuItem className="dropdown-item">Configurações</MenuItem>
                  </MenuList>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    data-toggle="dropdown"
                  >
                    <FaCreditCard className="icon-lg mr-2" /> Financeiro
                  </Link>
                  <MenuList className="dropdown-menu">
                    <MenuItem className="dropdown-item">Meu Plano</MenuItem>
                    <MenuItem className="dropdown-item">
                      Minhas Transações
                    </MenuItem>
                  </MenuList>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/vehicles">
                    <FaWhatsapp className="icon-lg mr-2" /> Ajuda
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/vehicles">
                    <FaSignOutAlt className="icon-lg mr-2" /> Sair
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      )}

      <Drawer anchor="left" open={sidebar} onClose={() => setSidebar(false)}>
        <div style={{ width: 320, maxWidth: window.innerWidth - 70 }}>
          <Button
            className="position-absolute p-3"
            style={{ right: 0, zIndex: 2 }}
            onClick={() => setSidebar(false)}
          >
            <FaTimes />
          </Button>
          <List component="nav" className="menu-mobile">
            <ListItem>
              <img
                src="/logo.png"
                className="img-fluid logo-mobile"
                alt="CarCRM"
              />
            </ListItem>
            <ListItem>user@test.com</ListItem>
            <Divider className="my-2" />
            <ListItem>
              <ListItemIcon>
                <FaCar />
              </ListItemIcon>
              <ListItemText primary="Veículos" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FaUsers />
              </ListItemIcon>
              <ListItemText primary="Proprietários" />
            </ListItem>
            <ListItem
              button
              onClick={() => setCollapse({ site: !collapse.site })}
            >
              <ListItemIcon>
                <FaLaptop />
              </ListItemIcon>
              <ListItemText primary="Site" />
              {collapse.site ? <FaAngleUp /> : <FaAngleDown />}
            </ListItem>
            <Collapse in={collapse.site} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText
                    className="pl-3"
                    primary="Otimização para o Google"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="pl-3"
                    primary="Unidades e Telefones"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText className="pl-3" primary="Minha Logo" />
                </ListItem>
                <ListItem>
                  <ListItemText className="pl-3" primary="Domínio" />
                </ListItem>
                <ListItem>
                  <ListItemText className="pl-3" primary="Configurações" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              button
              onClick={() => setCollapse({ financeiro: !collapse.financeiro })}
            >
              <ListItemIcon>
                <FaCreditCard />
              </ListItemIcon>
              <ListItemText primary="Financeiro" />
              {collapse.financeiro ? <FaAngleUp /> : <FaAngleDown />}
            </ListItem>
            <Collapse in={collapse.financeiro} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText className="pl-3" primary="Meu Plano" />
                </ListItem>
                <ListItem>
                  <ListItemText className="pl-3" primary="Minhas Transações" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem>
              <ListItemIcon>
                <FaWhatsapp />
              </ListItemIcon>
              <ListItemText primary="Ajuda" />
            </ListItem>
            <Divider className="my-2" />
            <ListItem>
              <ListItemIcon>
                <FaSignOutAlt />
              </ListItemIcon>
              <ListItemText primary="Sair" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
