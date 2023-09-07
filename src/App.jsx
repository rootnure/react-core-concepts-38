import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Todo
        task="Learn React"
        isDone={true}
      ></Todo>
      <Todo
        task="Core Concepts"
        isDone={false}
      ></Todo>
      <Todo
        task="Try JSX"
        isDone={true}
      ></Todo>
      {/* <Device name='Laptop' price='55000'></Device>
      <Device name='mobile' brand='apple' price="60000"></Device>
      <Device name='watch' price="1200"></Device>
      <Student grade="7" score="779"></Student>
      <Student grade={9} score="779"></Student>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
      <Developer2></Developer2> */}
    </>
  )
}

function Person() {
  const { name, age, money } = { name: 'Md. Akkash Miah', age: 25, money: null };
  return <h2>Hi, I am {name}. I am {age} years old. I have {money ? money + 'tk.' : 'no money'} in my pocket</h2>
}

function Student({grade = 0, score = 0}) {
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid gray',
    borderRadius: '20px',
  }
  return (
    <div style={developerStyle}>
      <h3>Developer</h3>
      <p>Coding: </p>
    </div>
  )
}

function Developer2() {
  return (
    <div style={{
    margin: '20px',
    padding: '20px',
    border: '2px solid gray',
    borderRadius: '20px',
  }}>
      <h3>Developer 2</h3>
      <p>Coding: </p>
    </div>
  )
}

function Device(props) {
  console.log(props);
  return <h2>This device: {props.name}, {props.price}, {props.brand ? props.brand : 'N/A'}</h2>
}

export default App