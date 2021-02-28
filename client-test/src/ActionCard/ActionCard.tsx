import React, { Component } from 'react';
import { ActionCardProps, ActionCardState } from './type';
import ActionCardHeader from './components/ActionCardHeader';
import ActionCardContent from './components/ActionCardContent';
import { getClass } from '../_lib/helper';
import { Button } from '../main';
import './ActionCard.scss';

class ActionCard extends Component<ActionCardProps, ActionCardState> {
  static Content = ActionCardContent;

  static defaultProps = {
    expandBtnAriaLabel: 'Expand',
  };

  readonly state = {
    isExpanded: false,
  };

  render() {
    const {
      children,
      id,
      header,      
      isExpandable,
      expandBtnAriaLabel,
    } = this.props;
    const { isExpanded } = this.state;
    return (
      <div
        id={id}
        data-testid={`actioncard-${id || 'default'}`}
        className={getClass(
          'actioncard',
          { 'is-expanded': isExpanded },
          { 'is-expandable': isExpandable, 'absolute-header': !this.hasTitle }
        )}
      >
        {header && <ActionCardHeader {...header} />}
        <div className="actioncard__content-wrapper">
          <div className="actioncard__content-inner-wrapper">
            {children}
          </div>
          {isExpandable && (
            <div className="actioncard__expand-btn-wrapper">
              <Button
                isText={true}               
                onClick={this.expandBtnClickHandler}
                ariaLabel={expandBtnAriaLabel}
                ariaExpanded={isExpanded}
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  private get hasTitle() {
    const { header = {} } = this.props;

    return header.title && header.titleAddOn && header.icon;
  }

  private expandBtnClickHandler = () => {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  };
}

export default ActionCard;
