import React from 'react';
import { ActionCardContentProps } from '../type';

function ActionCardContent({
  icon,
  heading,
  headingAddOn,
  children,
  role,
}: ActionCardContentProps) {
  return (
    <div className="actioncard__content" role={role}>
      <div className="actioncard__content-header-wrapper">
        <div className="actioncard__content-header">
          <div className="actioncard__content-icon">{icon}</div>
          <div className="actioncard__content-heading">{heading}</div>
          {headingAddOn}
        </div>
      </div>
      <div className="actioncard__content-content">{children}</div>
    </div>
  );
}

export default ActionCardContent;
