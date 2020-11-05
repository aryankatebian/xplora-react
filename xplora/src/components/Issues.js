import React, { useEffect } from 'react';
import SingleIssue from './SingleIssue';
import { getIssues } from 'xplora-crud-api';
const Issues = ({ setIsOpen }) => {
  const [issue, setIssue] = React.useState([]);
  useEffect(() => {
    const data = getIssues();
    setIssue(data);
  }, []);

  return (
    <div className='section'>
      <div className='section-grid'>
        {issue.length > 0 ? (
          issue.map((e) => {
            return (
              <SingleIssue
                issue={e}
                key={e[0].id}
                setIsOpen={setIsOpen}
                setIssue={setIssue}
              />
            );
          })
        ) : (
          <h5 style={{ textAlign: 'center' }}>
            there is no issue here, please click the button to add a new issue
          </h5>
        )}
      </div>
    </div>
  );
};

export default Issues;
