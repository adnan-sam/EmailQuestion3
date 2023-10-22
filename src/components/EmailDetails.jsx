import React, { useEffect, useState } from 'react';

const EmailDetails = ({ emailId }) => {
  const [emailDetails, setEmailDetails] = useState({});

  useEffect(() => {
    // Fetch email details from a different API using the email ID
    fetch(`https://flipkart-email-mock.now.sh/?id=${emailId}`)
      .then((response) => response.json())
      .then((data) => {
        setEmailDetails(data);
      });
  }, [emailId]);

  const htmlText = `${emailDetails.body}`;

  return (
    <div>
        <div className='profile'>
        <button className='favorite-btn'>Mark as favorite</button>
        <div className="email-list-item-avatar">F</div>
        <div>
        <span className='email-name'>Lorem Ipsum</span>
        <p>26/02/2020 8:35pm</p>
        </div>
        </div>
        <div className='message' dangerouslySetInnerHTML={{ __html: htmlText }} />
    </div>
  );
};

export default EmailDetails;