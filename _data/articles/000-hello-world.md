---
emoji: 🪐
title: '#000 Welcome to my universe!'
description: Hi, my name is Kacper and I am a programmer, more specifically a Frontend developer from Poland. I became a Frontend developer out of love for aesthetics and work in which visual aspects are important. I want to introduce myself and tell you something more about me, my work, and my future plans.
cover: /images/article/000-hello-world.png
date: 01-18-2023
tags:
  - Kacper Adler
  - information
  - about me
---

### 🥱 The boring part - Introduce myself

![Author image](/images/author/author-250.jpg)

I finished school in 2020 and decided to try my hand at college. I didn't want to do it, but I figured if I didn't like it, I could quit, and that's what I did. After 6 months, I quit my studies and focused on programming. My first choice is Python. I really liked this language but something was missing.

In my free time I was learning UX & UI and I liked it, then I combine these two things, passion for programming and love for aesthetics and that's how I started my adventure with Frontend. In 2021 I focus on improving my skills, mainly in React and Typescript. After 4 months of improvement and learning, I found my first job as a Frontend developer.

Currently, my favorite library is React and everything around it like NEXT.js or React Native. I'm also interested in WEB3 and the technology behind it, maybe in the future, you can find something about it here.

### 🤔 Some information - What you can find here?

Basically, everything about Frontend development and React itself, sometimes maybe a piece of knowledge about WEB3. To be more precise here is a list of examples of topics:

- React
- NEXT.js
- React Native
- Useful libraries witch can help you in your projects
- Frontend basics like HTML, CSS, JavaScript or TypeScript

### 🤓 In the end, let’s grab some knowledge

| What is React?                                                                                         |
| ------------------------------------------------------------------------------------------------------ |
| React is an open-source library created by Facebook to improve building interfaces in web applications |

| Should I learn it?                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------- |
| Yes, if you want to be a Frontend developer. At this moment React is one of the most popular libraries to create web applications |

| What do I really need to learn to start my adventure with React?                                                           |
| -------------------------------------------------------------------------------------------------------------------------- |
| At this moment, you need a basic knowledge of JavaScript and HTML. If you want to add some styles, learn the basics of CSS |

### 💻 And some skills

Go to [CodeSandbox](https://codesandbox.io/), In the top right corner, you can find a create button. Press this button and select a React from template. Rewrite this code snippet to your CodeSandbox. This will help you start your own adventure with React 😎.

```jsx
import { useState } from 'react'; //import state function

//create component
const App = () => {
  const [counter, setCounter] = useState(0); //add state to component

  const addition = () => {
    //create a addition function
    setCounter((prevState) => prevState + 1);
  };

  const subtraction = () => {
    //create a subtraction function
    setCounter((prevState) => prevState - 1);
  };

  //here your component is rendered
  return (
    <div>
      {/*Display current state*/}
      <h1>Counter: {counter}</h1>
      <div>
        {/*Assign a addition function*/}
        <button onClick={addition}>Add</button>

        {/*Assign a subtraction function*/}
        <button onClick={subtraction}>Subtract</button>
      </div>
    </div>
  );
};

export default App;
```
