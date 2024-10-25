// src/components/DropZone.js
import React from 'react';

const DropZone = ({ id, answer, onDrop, dropZoneClass, isCheckColor, disabled }) => {

  return (
    <span
      className={`dropzone ${isCheckColor ? dropZoneClass: ""} dropzone-custom`}
      onDragOver={(e) => e.preventDefault()}
      // onDrop={(e) => onDrop(e, id)}
      onDrop={!disabled ? (e) => onDrop(e, id) : null} 
      style={{
        padding: '5px 6px',
        minWidth: '50px',
        display: 'inline-block',
        // color: 'white',
        borderRadius: '5px',
      }}
    >
      {/* {answer || '_input'} */}
      {answer || <span style={{color: 'black'}}>______</span>}
    </span>
  );
};

export default DropZone;
