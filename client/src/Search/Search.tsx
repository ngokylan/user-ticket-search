import React, { ChangeEvent, Component } from 'react';
import SearchClearButton from './component/SearchClearButton';
import SearchCloseButton from './component/SearchCloseButton';
import SearchSubmitButton from './component/SearchSubmitButton';
import { getClass } from '../_lib/helper';
import { SearchProps } from './type';
import Input from '../Input';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import './Search.scss';

class Search extends Component<SearchProps> {
  static displayName = 'Search';
  static defaultProps = {
    placeholder: 'Search',
    ariaLabel: 'Search field',
  };

  handleOnClose = () => {
    const { onClose } = this.props;
    if (onClose) {
      onClose();
    }
  };

  handleOnSubmit = () => {
    const { onSubmit } = this.props;
    if (onSubmit) {
      onSubmit();
    }
  };

  handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setValue(e.target.value);
  };

  handleOnClear = () => {
    this.setValue('');
  };

  setValue(value: string) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    }
  }

  get value() {
    return this.props.value || '';
  }

  render() {
    const {
      onKeyPress,
      id,
      onFocus,
      onBlur,
      isVisible,
      onClose,
      placeholder,
      ariaLabel,
      isSubmitEnabledAlways,
    } = this.props;
    const { value } = this;

    return (
      <div
        id={id}
        className={getClass('search', {}, { open: isVisible })}
        data-testid={`search-${id || 'default'}`}
      >
        <div className="search__wrapper">
          <Row isNoGutters={true} className="flex-nowrap" role="presentation">
            <Col isFill={true} role="presentation">
              <div className="search__input" role="search">
                <Input
                  value={value}
                  onChange={this.handleOnChange}
                  onEnterPress={this.handleOnSubmit}
                  onKeyPress={onKeyPress}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  placeholder={placeholder}
                  autoFocus={isVisible}
                  ariaLabel={ariaLabel}
                  htmlType="search"
                  name="search"
                />
                <SearchClearButton value={value} onClear={this.handleOnClear} />
                <SearchSubmitButton
                  value={value}
                  onSubmit={this.handleOnSubmit}
                  isSubmitEnabledAlways={isSubmitEnabledAlways}
                />
              </div>
            </Col>
            {onClose && (
              <Col isAuto={true} role="presentation">
                <SearchCloseButton onClick={this.handleOnClose} />
              </Col>
            )}
          </Row>
        </div>
      </div>
    );
  }
}

export default Search;
