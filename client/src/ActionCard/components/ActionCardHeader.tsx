import React from 'react';
import { ActionCardHeaderProps } from '../type';

function ActionCardHeader({
  icon,
  title,
  titleAddOn,
  badge,
  options,
  popoverBadge,
}: ActionCardHeaderProps) {
  return (
    <div className="actioncard__header">
      {icon && <div className="actioncard__header-icon">{icon}</div>}
      <div className="actioncard__header-content">
        {(title || titleAddOn) && (
          <div className="actioncard__header-content-inner">
            {title && (
              <div className="actioncard__header-title">{title}</div>
            )}
            {titleAddOn && (
              <div className="actioncard__header-title-add-on">
                {titleAddOn}
              </div>
            )}
          </div>
        )}

        {popoverBadge && (
          {popoverBadge}
        )}
      </div>
    </div>
  );
}

export default ActionCardHeader;
