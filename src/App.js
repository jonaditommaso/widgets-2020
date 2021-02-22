import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import TextColorChange from './components/TextColorChange';
import './styles/app.css';


const items = [
  {
    title: 'What is React?',
    content: 'React is an open source Javascript library designed to create user interfaces with the aim of facilitating application development on a single page.'
  },
  {
    title: 'Why use React?',
    content: 'One of the reasons to use React is because it allows you to create applications organized in components; each component is connected to each other, like a family tree and you can update the application without having to refresh or reload your browser.'
  },
  {
    title: 'Where can i start?',
    content: 'You can start by inspecting in the React documentation. Go!'
  }
]


const App = () => {

  return ( 
    <div className="app">
      <Header />
      <Route path="/accordion">
        <Accordion items={items} className="accordion" />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/color">
        <TextColorChange />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div> 
  );
}
 
export default App;
