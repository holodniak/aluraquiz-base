import React from 'react';
import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head'
import { useRouter} from 'next/router'
// const BackgroudeImage = styled.div `
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `

export const QuizContainer = styled.div `
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Modelo Base</title>
      </Head>
      <QuizContainer>  
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={ function(event){
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
            }}>
              <input 
                onChange={function(event) {
                  setName(event.target.value);
                }}
                placeholder="Digite aqui seu nome meu consagrado!" 
              />
              <button type="submit" disabled={name.length === 0}>
                Bora lá!
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
        <Widget.Header>
          <h1>{db.title}</h1>
        </Widget.Header>
        <Widget.Content>
          <p>{db.description}</p>
        </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/holodniak"/>
    </QuizBackground>
  )
}
