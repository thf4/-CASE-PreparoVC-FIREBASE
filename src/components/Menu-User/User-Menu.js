import React, { useState, useContext } from "react";
import { useHistory } from "react-router";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import "../Menu/menu.css";
import "./user-menu.css";

import { AuthContext } from "../../Auth/Auth-Provider";
import { app } from "../../Auth/Config-fire";

export const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  const logout = async () =>{
    await app.auth().signOut();
  }

  return (
    <div className="containerNavbar">
      <Navbar className="navmenu" light expand="md">
        <div className="logop">
          <NavbarBrand href="/">
            <img
              alt="preparo-logo"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAABQCAYAAACu/a1QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATnSURBVHgB7ZvNbttGEMdnlhQiozn4EehDkyhwEOkQII4LWHqCxIcCRi9xniDxE8h+gjpPEOeSGOjFfoIoQGsX7UEuYkRucjD7BHEPiYOY3MnM+lP+kMWlJZEif4Yh2qRI/rk7u7MzQwRLms3mqHvdLReo8BAIPAIqo8JRIhqFHoKAG3ytHfncw73VOz/eaYAlCBF59/Fd1SX3MSI+6rXQbuD72OH7WAkweBn1QXQt/kB0nTerkFwaEMKTUqnkd3PwpeKle49cH6nz030GKYFNYnH38+5CpVLZ6XxcB1qtlgcOvOFND9KHz72g1qkXqIt2bH7YLKOLTUincMFDB5ubm5vliw44t+VFuIvumyQMaHFhE9gJvgW18fHxjbP7TpHyrn4u8gAopMppE2jr9jK4DZtwgf0Co8voO0GbeBnVYciEn8Ab+cHoO+Ko2x90920YdvZngIZsHre8Ay8gCzhw1Pqm5WV0d8BpQlY4aH3T8iz8KWQIQnokn6bltz5ufYo7p5vpBGhFk/4PegRfw+PfKd7wIAZyr+z+jrmyYIkjXE6ktV4o3SotQp94v/X+mXJU3fa+ZeorFotlpbSqgiXGe4KgdvvW7b4JF+R6AQU1Wc6CJdL1lUI1BZZIi4/fOOs29gO5rg71AtjjIdt7k7tPOfJXCfzSzdIYDJgY45Uvo70HNiAHDhIAD7AvwQI22VFlPWho+gcSgAZtZXYy6CmwRCttPdgkBWvxw0AuPqvk4rNKLj6r5OKzSi4+q1iL5yBI9GVwD0BCDywR8T5YgArvQgKIEYzxrcUzVU50VGGASPwR7IslfMXrWvt1OSc6TKZnAMh1XXKtEy0Sj1C2wYADTEa33w/gSjLJGhrY3G6OFveKnyA+SxwVWtWo/b3CXk8CHde+XStzxPYhb85CXEIYM0mL1oeWPMUqZIdG6Uaptj/VhRAnBJw+QjBBz+MU9b+t7bhpoFRwIuR+7OTojLT+CZ1tNTkZsH1j64d/tLu3ITyJk/9KMpJXFH0n/9cmXqqVKKA5GEIopLmO1VgCH7DEg8Jw2T/rMbpOcWH5KY/+87y3DmlHhN8szZ+3q2PtrRQB8OrtV0gp7L/PdaoduLTq2vjRiv3oNPkAPJeHGE5fVjvQdb29mAH3gqdJrsc1dUFEz79++bp4Wbn5/vEROOgFs7z5OEk9Iaro4+9ZIoGM/boWNSXv10CfkXdstNZvOYy1clhRGf0cV4QpZAydfpiE3+1rJDk5OTk5ORnnwnn+j3s/l9F1q4j77qwivaFJbUz8uezDkHBG/Pr9marjYJ0uCGexZ7UUhnphGB5Cm/i/Jn95wa7qbDdfVITz99ZepTrocSQ+ivBDSMPc/fXXfa21v0qM+L8fzNQ14jxYEFBQmVz7bSA193FRbOOeBpwFSwropjbSo/inGmdtLgPj+k8zVUghykEOTMQEQ0xEiUpUFEH82hqlKBElKlHhuP1VxOTQgxTC4uOnpzTR/5BC5B2bK8jNoQ8pRNJVqxATTcl40yoqihStQDz8B+uv455jIKiJ35cbCNQAS9jeU+vfmyxtKHlril6MyL5xY2JteQlSihEvy9MAcDrKA2DhG4XC7jSkmKP8/OTaK86AUI2XapfaLyE8Z+G1SmMl1VUc50ZyjK9OMKsA7/KncYIQJfNJb4su58NSLvqQ74oD/pRrB+03AAAAAElFTkSuQmCC"
            ></img>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
        </div>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="navmenu" href="/"></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navmenu">
                <strong>EXPLORAR</strong>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navmenu">
                <strong>INSCRIÇÕES</strong>
              </NavLink>
            </NavItem>
            <NavItem>
              <div className="toogle-nav">
                <NavLink>
                  <UncontrolledDropdown setActiveFromChild>
                    <DropdownToggle className="nav-link" caret>
                      p
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        onClick={() => {
                          logout()
                          history.push("/login");
                        }}
                      >
                        Logout
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => {
                          history.push(`/dados/${currentUser.uid}`);
                        }}
                      >
                        Dados
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => {
                          history.push(`/localização/${currentUser.uid}`);
                        }}
                      >
                        Localização
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavLink>
              </div>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
