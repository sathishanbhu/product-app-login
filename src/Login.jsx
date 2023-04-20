import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Login.css'; // import the CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    // validate user credentials here
    // if authentication fails, set the error state with a message
    // if authentication succeeds, update the user login status and store their information

    if (email !== 'example@email.com' || password !== 'password') {
        setError('Invalid email or password');
        return;
      }
  }

  return (
    <div className="login-container"> {/* add the login-container class */}
      <Form className="login-form" onSubmit={handleLogin}> {/* add the login-form class */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
<br/>
        <Button variant="primary" type="submit">
          Login
        </Button>
        {error && <div className="mt-3 text-danger">{error}</div>}
      </Form>
    </div>
  );
}

export default Login;
