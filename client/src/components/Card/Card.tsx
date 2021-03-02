import React, { Component } from 'react';
import { CardProps } from './type';
import { Heading, Paragraph, Text } from '../Typography';
import Image from '../Image';
import Badge from '../Badge';
import { getClass } from '../../_lib/helper';
import './Card.scss';

class Card extends Component<CardProps> {
  renderBadges() {
    const { id, badges } = this.props;
    const keyTemplate = 'card-badge-' + id + '-';
    return (
      badges &&
      badges.map((badge, index) => {
        return (
          <Badge
            icon={badge.icon}
            type={badge.type}
            role={badge.role}
            key={keyTemplate + index}
            data-test-id={keyTemplate + index}
          >
            {badge.children}
          </Badge>
        );
      })
    );
  }

  handleClick = () => {
    const { onClick } = this.props;
    if (onClick) {
      onClick();
    }
    return false;
  };
  handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    const {
      id,
      heading,
      children,
      description,
      className,
      isFullHeight,
      option,
      prefix,
      image,
      badges,
      onClick,
      role,
    } = this.props;

    return (
      <div
        role={role}
        id={id}
        data-testid={`card-${id || 'default'}`}
        className={getClass('card', className, {
          'is-full-height': isFullHeight,
          'is-clickable': onClick,
        })}
        onClick={onClick ? this.handleClick : undefined}
        onKeyPress={this.handleKeyPress}
        tabIndex={onClick ? 0 : undefined}
      >
        {(image || badges) && (
          <div className="card__header-image">
            {image && (
              <Image
                src={image}
                width="100%"
                height="100%"
                alt={typeof heading === 'string' ? heading : 'Course image'}
              />
            )}
            <div className="card__header-badges">
              {this.renderBadges()}
            </div>
          </div>
        )}

        {option && <div className="card__option">{option}</div>}
        {(prefix || heading || description) && (
          <div className="card__header">
            {heading && (
              <Heading className="card__heading">
                {prefix && (
                  <Text
                    size="sm"
                    color="gray"
                    htmlTag="small"
                    className="d-block mb-2 card__heading-prefix"
                  >
                    {prefix}
                  </Text>
                )}
                {heading}
              </Heading>
            )}
            {description && <Paragraph>{description}</Paragraph>}
          </div>
        )}
        <div className="card__content">
          <div className="card__content-inner">{children}</div>
        </div>
      </div>
    );
  }
}

export default Card;
