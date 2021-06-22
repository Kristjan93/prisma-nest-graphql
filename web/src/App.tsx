import React from 'react';
import logo from './logo.svg';
import styled, { keyframes } from 'styled-components'
import { GetUsersDocument, useCreateUserMutation, useGetUsersQuery } from './generated';
import { gql } from '@apollo/client';


export const App: React.FC = () => {
  const { loading, error, data } = useGetUsersQuery();
  const [ createUser ] = useCreateUserMutation();

  const handleCreateUser = () => {
    createUser({
      variables: { userData: { name: 'Another Love' } },
      refetchQueries: [{ query: GetUsersDocument }]
    })
  }

  if (loading) {
    return <p>...Loading</p>
  }
  if(error) {
    return <p>Error</p>
  }

  console.log(data)

  return (
    <Container>
      <Header>
        <Logo
          src={logo}
          alt="logo"
        />

        {data && (
          <p>
            {data?.users.map((user, index) => (
              <span key={user.id}>{user.name}{`${index === data.users.length - 1 ? "" : ", "}`}</span>
            ))}
          </p>
        )}

        <div>
          <button type="button" onClick={handleCreateUser}>create user</button>
        </div>

        <Link
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </Header>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Link = styled.a`
  color: #61dafb;
`

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Logo = styled.img`
  animation: ${logoSpin} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`


