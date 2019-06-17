import React from 'react';
import './App.css';

function ScrollToFunction (event) {
  const idToScrollTo = event.target.dataset["id"]

  const elementToScrollTo = document.getElementById(idToScrollTo)

  window.scrollTo(0, elementToScrollTo.offsetTop)
}


function App() {

  
  return (
    <div className="App">
      <div className="Header">
        <header className="Title">Alex Grisham</header>
        <subheader>Serial Dabbler, Frequent Meetup Attendee, Sometimes Medium Blogger</subheader>
      </div>
      <div className="Menu">
        <ul className="ulMenu">
          <li onClick={ScrollToFunction} data-id="About" className="MenuItem">About Me</li>
          <li onClick={ScrollToFunction} data-id="Experience" className="MenuItem">Professional Experience</li>
          <li onClick={ScrollToFunction} data-id="Contact" className="MenuItem">Contact</li>
        </ul>
      </div>
      <div className="Content">
        <section id="About" className="one">
          <h2>About Me</h2>
          <p>Hello! I am a front-end web developer and a boymom, people person, and Jill-of-all-trades.</p>
        </section>
        <section id="Experience" className="two">Professional Experience</section>
        <section id="Contact" className="three">
          <a href="https://www.instagram.com/flcrackerkj/?hl=en" target="_blank" rel="noopener noreferrer" className="ContactLinks">Instagram</a>
          <a href="https://twitter.com/Alexiskjg16" target="_blank" rel="noopener noreferrer" className="ContactLinks">Twitter</a>
          <a href="https://github.com/Alexiskjg16" target="_blank" rel="noopener noreferrer" className="ContactLinks">Github</a>
          <a href="https://www.linkedin.com/in/alexis-grisham-434401169/" target="_blank" rel="noopener noreferrer" className="ContactLinks">LinkedIn</a>
          <a href="mailto:alexiskjg16@gmail.com" className="ContactLinks">Email</a>
          <a href="tel:9413047266" className="ContactLinks">Phone</a>
        </section>
      </div>
      <div className="Footer">© 2019</div>
    </div>
  );
}

export default App;
