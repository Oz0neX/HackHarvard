import styled from 'styled-components';

const ConatinerShrek = styled.div`
  padding: 20px;
  background-color: green;
  width: 100%;
  height: 500px;
`

const YellButton = styled.div`
  border-radius: 10px;
  background-color: lightblue;
  width: 40px;
`

function Login() {
  return (
    <ConatinerShrek>
      Greenjuice
      <YellButton>
        Click Me!
      </YellButton>
  </ConatinerShrek>
  )
}

function Signup() {

}

export default Login;