import React from 'react';
import './App.css';

class HeyMessage extends React.Component {
  render() {
    return (
      <ContactInfoCard
        text={contactInfo.text}
        first={contactInfo.first}
        last={contactInfo.last}
        textTwo={contactInfo.textTwo}
        number={contactInfo.number}
      />
    )
  }
}

function ContactInfoCard(props) {
  return (
    <div>
      <p>{props.text} <span className="fistLastName">{props.first} {props.last}</span> {props.textTwo} <span className="phone">{props.number}</span></p>
    </div>
  );
}

const contactInfo = {
  text: 'You need to contact',
  first: 'Chris',
  last: 'Ferrie',
  textTwo: 'at',
  number: '305-780-9521',
};

export default HeyMessage;
