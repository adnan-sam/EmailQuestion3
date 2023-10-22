import React from 'react';
import '../styles/email.css';

const EmailListItem = ({ email, onClick }) => {

  const handleItemClick = () => {
    // Pass the email ID to the onClick handler
    // console.log(email);
    onClick(email.id);
  };

  const { date, from, subject, short_description} = email;
  const formattedDate = new Date(date);

  const year = formattedDate.getFullYear();
  const month = String(formattedDate.getMonth() + 1).padStart(2, '0');
  const day = String(formattedDate.getDate()).padStart(2, '0');

  var hours = formattedDate.getHours();
  const minutes = formattedDate.getMinutes();

  const meridiem = hours >= 12 ? 'pm' : 'am';
  if (hours > 12) {
    hours -= 12;
  }

  const displayDate = `${day}/${month}/${year}`;
  const displayTime = `${hours}:${String(minutes).padStart(2, '0')}${meridiem}`;

  return (
    <div className="email-list-item" onClick={handleItemClick}>
      <div className="email-list-item-avatar">F</div>
      <div className="email-list-item-info">
        <div className="email-list-item-from"><p>From: <span>{from.name}</span>{' '}<span>{'<'+from.email+'>'}</span></p></div>
        <div className="email-list-item-subject"><p>Subject: <span>{subject}</span></p></div>
        <div className="email-list-item-short-description"><p>{short_description}</p></div>
        <div className="email-list-item-date">{displayDate+' '+displayTime}</div>
      </div>
    </div>
  );
};

export default EmailListItem;
