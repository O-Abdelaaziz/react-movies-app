import React from 'react';

export const Like = (props) => {
  let classes = 'fa fa-heart';
  if (!props.liked) {
    classes += '-o';
  }
  return (
    <i
      style={{ cursor: 'pointer' }}
      className={classes}
      onClick={props.onLike}
    />
  );
};
