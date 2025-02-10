import {useState, useEffect} from 'react';
import {Navbar, Container} from "react-bootstrap";

export const Navbar = () => {
    // This link tracks which page we are currently on (and which link is currently active)
    const {activeLink, setActiveLink} = useState('home');
    // State to see if the user has scrolled (if they did, then the background would change)
    const {scrolled, setScrolled} = useState(false);
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

        window.addEventListener("scroll", onScroll);

        // Remove the event listener when the component is removed from the DOM
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
                <img src={''} alt="Logo" /> {/* TODO add source */}
            </Navbar.Brand>
            {/* When image is on the mobile menu and minimized, so we can add an icon here */}
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#Projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link" onClick={() => onUpdateActiveLink('projects')}}>Projects</Nav.Link>
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
                    <a href="#"><img src={''} alt="" /></a>
                    <a href="#"><img src={''} alt="" /></a>
                    <a href="#"><img src={''} alt="" /></a>
                </div>
                <button className="contactUs" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}