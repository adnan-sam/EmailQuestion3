import React from 'react';
import { useEffect, useState } from 'react';
import EmailListItem from './EmailListItem';
import EmailDetails from './EmailDetails';

const EmailList = () => {
  const [emails, setEmails] = useState([]);
  const [selectedEmailId, setSelectedEmailId] = useState(null);

  const handleEmailItemClick = (emailId) => {
    setSelectedEmailId(emailId);
  };

  useEffect(() => {
    fetch('https://flipkart-email-mock.now.sh/')
      .then((response) => response.json())
      .then((data) => {setEmails(data.list);
      console.log(data.list[0])});
  }, []);

  return (
    <div className={`email-section ${selectedEmailId ? 'with-details' : 'full-width'}`}>
      <div className="email-list">
      {emails.map((email) => (
        <EmailListItem key={email.id} email={email} onClick={handleEmailItemClick} />
      ))}
      </div>
      {
        selectedEmailId && <div className='email-details'><EmailDetails emailId={selectedEmailId} /></div>
      }
    </div>
  );
};

export default EmailList;
