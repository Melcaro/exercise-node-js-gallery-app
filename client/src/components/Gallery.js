import React from 'react';

export const Gallery = ({ directoryContent }) => {
  return (
    <div>
      <h1>Content</h1>
      <div>
        {directoryContent.map(({ name, isFile }) => (
          <div>
            {isFile === true ? (
              <div>I'm a file</div>
            ) : (
              <div>I'm a directory</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
