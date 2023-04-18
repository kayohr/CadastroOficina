import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateFields = () => {
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.length >= 6 && password.length >= 6 && EMAIL_REGEX.test(email)) {
      return true;
    }
    return false;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      history.push('/cadastro');
    }, 2000);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {load ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Password:
            <input type={showPassword ? 'text' : 'password'} value={password} onChange={handlePasswordChange} />
            <span onClick={toggleShowPassword}>{showPassword ? <BsFillEyeFill />: <BsFillEyeSlashFill />}</span>
          </label>
          <br />
          <button type="submit" disabled={!validateFields()}>
            Entrar
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;
