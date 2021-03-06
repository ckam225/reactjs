import React from 'react'
import logo from '../assets/logo.svg';
import styled from 'styled-components'
import MainLayout from '../components/layouts/Main';

const HomeView = () => {
  return <Wrapper>
    <MainLayout>
      <MainLayout.Head>
        <title>Home Page</title>
      </MainLayout.Head>
      <MainLayout.Container>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p> Edit <code>src/App.jsx</code> and save to reload. </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            > Learn React </a>
          </header>
        </div>
      </MainLayout.Container>
    </MainLayout>
  </Wrapper>
}

const Wrapper = styled.div`
.App {
    text-align: center;
  }
  
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
  
  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  
  .App-link {
    color: #61dafb;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export default HomeView