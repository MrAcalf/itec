import { createGlobalStyle } from "styled-components"

const NavbarStyle = createGlobalStyle`

.nav {
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? 'transparent' : '#eee'};
  width: 100%;
  position: relative;
}

.nav > .nav-header {
  display: inline;
}

.nav > .nav-header > .nav-title {
  display: inline-block;
  color: ${props => props.primary ? '#fff' : '#333'};
  padding: 8px 1rem 7px 10px;
}

.nav > .nav-header > .nav-title a {
  display: flex;
  text-decoration: none;
}

/*Botão escondido*/
.nav > .nav-btn {
  display: none;
}

.nav > .nav-links {
  z-index: 1;
  display: inline;
  float: right;
  font-size: 1.11em;
}

.nav > .nav-links > a {
  display: inline-block;
  padding: 12px 10px 12px 10px;
  text-decoration: none;
  color: ${props => props.primary ? '#fff' : '#333'};
}

.nav > .nav-links > a:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

/*Checkbox escondido*/
.nav > #nav-check {
  display: none;
}

@media (max-width:600px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    color: ${props => props.primary ? '#ffffffbb' : '#333333bb'};
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 8px 10px;
  }
  .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }
  .nav > .nav-links > a {
    color: #fff;
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: hidden;
  }
}
`

export default NavbarStyle 