import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: red;
`

function Nav() {
  return (
    <Navbar>
      Chicken butt
    </Navbar>
  );
}

export default Nav;