import React from 'react';

export const Gallery = ({ directoryContent }) => {
  return (
    <div>
      <h1>Content</h1>
      <div>
        {directoryContent.map(({ name, isFile, path }) => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {isFile === true ? (
              <div>
                <div
                  style={{ width: '100px', height: '100px', margin: '0 auto' }}
                >
                  <img
                    style={{ width: '100%', height: '100%' }}
                    src={path}
                    alt={name}
                  />
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <i class="far fa-folder"></i>
                </div>
                <div>{name}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
