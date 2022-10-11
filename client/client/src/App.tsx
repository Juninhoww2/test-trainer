import { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import './App.css'

/*function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault()
    const post = { name: name, email: email, message: message }
    try {
      const res = await axios.post('https://3000-juninhoww2-testtrainer-l4ydzrnfvo2.ws-us70.gitpod.io/invites', post)
      console.log(res.data)
    } catch (e) {
      alert(e)
    }
  }

  const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  font-family: Apercu Arabic Pro;
`;

  const Button = styled.button`
  background: #FAD34F;
  `


  return (
    <>
      <div className="App">
        <div>
          <Title>Reach out to us!</Title>
        </div>

        <div className="container">
          <form onSubmit={onSubmit}>
            <ul className="flex-outer">
              <li>
                <input type="text" id="first-name" placeholder="Your name*" onChange={(event) => {
                  setName(event.target.value)
                }}
                  value={name} />
              </li>
              <li>
                <input type="email" id="email" placeholder="Email" onChange={(event) => {
                  setEmail(event.target.value)
                }}
                  value={email} />
              </li>
              <li>
                <li>
                  <input id="message" placeholder="Enter your message here" onChange={(event) => {
                    setMessage(event.target.value)
                  }}
                    value={message} />
                  <li>
                    <Button type="submit">Submit</Button>
                  </li>
                </li>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
*/

export