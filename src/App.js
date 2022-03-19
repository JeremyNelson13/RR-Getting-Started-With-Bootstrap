import './App.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import { NavDropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

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
      <Form>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type='email' placeholder='Enter Email' />
          <Form.Text className='text-muted'>
            We do not share user emails with any other parties.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Group controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit Form
        </Button>
      </Form>
      <div>
        <Form.Group>
          <Form.Label>Form Dropdown Menu</Form.Label>
          <Form.Control as='select'>
            <option>Option 1</option>
            <option>Option 2</option>
          </Form.Control>
        </Form.Group>
      </div>
    </div>

  );
}

export default App;
