import './App.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import { NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>Bootstrap Website</h1>
      <Button variant='primary'>New Button</Button>
      <Nav fill variant='tabs' activeKey='/home'>
        <Nav.Item>
          <Nav.Link href='/home'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/shop'>Shop</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown title='About Us' id='nav-dropdown'>
            <NavDropdown.Item>Locations</NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/account'>Account</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/contact'>Contact Us</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>

  );
}

export default App;
