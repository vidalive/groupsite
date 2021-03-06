import React from 'react';

import "./Home.css";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <h1 className="header">Developers Learn React</h1>
        <div>
          I was at a meetup a few weeks ago in Phoenix where a
          bunch of beginner programmers were getting together to learn React.
          I'm hoping to replicate that here in Calgary!
        </div>
        <div>
          I would say the prerequisites for the meetup is basic
          knowledge of programming. What conditional statements are, what
          loops are, objects, arrays, dictionaries, classes etcetera. If
          anyone is interested in joining this is something that can probably
          be learnt in 5-10 hours, depending on your current knowledge.
        </div>
        <div>
          We also have a mix of everyone from people brand new to
          programming to those currently working in the field.
        </div>
        <div>
          We're open to any ideas on how to structure the
          sessions. If you're a local company and you have space, food or
          something else you think would be useful, we'd love any kind of
          donation or sponsorship.
        </div>
        <div>
          That's how things started. And it was not a long time ago, and not too
          much happened since. The goal is the group to learn together. We started
          with React and will go with whatever we find important.
          <br /><br />
          If you think you would spend a day every month working on a
          project with an awesome group, to learn new technologies and create some
          cool stuff, then join us! The most reasonable thing to do is to join the{' '}
          <a href="https://www.meetup.com/Software-Developers-Learning-Together/events/">
            Meetup group
          </a>
        </div>
      </div>
    );
  }
}

export default HomePage;
