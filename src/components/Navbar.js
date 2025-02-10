import {Navbar, Container} from "react-bootstrap";

export const Navbar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
                {/* We can have a name here or an image, like a logo*/}
                <img src={''} alt="Logo" /> {/* TODO add source */}
            </Navbar.Brand>
            {/* When image is on the mobile menu and minimized, so we can add an icon here */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <span className="navbar-toggler-icon"></span>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#Projects">Projects</Nav.Link>
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