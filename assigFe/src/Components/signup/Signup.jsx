import {useState} from 'react';

import { signup } from '../../utils/fetch';

const Signup = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
    console.log(state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Hello from signup handlesubmit");
    await signup(username, email, password);
  };

  return (
    <div>
      <h3>Sign up</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username" 
          onChange={(e) => changeHandler(e, setUsername, username) }
        />

<input
          placeholder="email" 
          onChange={(e) => changeHandler(e, setEmail, email) }
        />

<input
          placeholder="password" 
          onChange={(e) => changeHandler(e, setPassword, password) }
        />

        <button type="submit">  Sign up</button>

      </form>
      
    </div>
  )
}

export default Signup;
