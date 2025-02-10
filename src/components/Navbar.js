import {useState, useEffect} from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
    // This link tracks which page we are currently on (and which link is currently active)
    const [activeLink, setActiveLink] = useState('home');
    // State to see if the user has scrolled (if they did, then the background would change)
    const [scrolled, setScrolled] = useState(false);
    const bannerHeight = 50;

    // Fired when the user scrolls
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > bannerHeight) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        
        // Add an event listener for scrolling, and calls onScroll when detected.
        window.addEventListener("scroll", onScroll);

        // Cleanup function
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        // change the className based on whether the user scrolled the webpage or not
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="#home">
                {/* We can have a name here or an image, like a logo*/}
                <img src={logo} alt="Logo" /> {/* TODO add source */}
            </Navbar.Brand>
            {/* When screen is smaller, so we see an icon to toggle the navbar on and off*/}
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#Projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                {/* No need for a dropdown menu for now */}
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <span className="navbar-text">
                {/* Here we have mini images to link to social media outlets */}
                {/* TODO: add the images and IDs*/}
                <div className="social-icon">
                    <a href="#"><img src={navIcon1} alt="" /></a>
                    <a href="#"><img src={navIcon2} alt="" /></a>
                    <a href="#"><img src={navIcon3} alt="" /></a>
                </div>
                {/* This is preferred to link since it just brings you down the page */}
                {/* and does not reload like Link would */}
                <HashLink to='#connect'>
                <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                </HashLink>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}