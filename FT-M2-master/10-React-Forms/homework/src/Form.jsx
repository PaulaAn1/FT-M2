import React from 'react';

export default function Form() {
  const [username, setUsarname] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <form>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={username} onChange={e => setUsarname(e.target.value)}/>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <imput type="submit" value="Submit"/>
    </form>
  )
}
