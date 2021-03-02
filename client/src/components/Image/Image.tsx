import React from 'react';
import { ImageProps } from './type';
import { getClass } from '../../_lib/helper';
import './Image.scss';
import { StyledImage } from './Styles';

function getSrcSet(src: string, srcSet?: any): string {
  return srcSet;
}

function getSizes(sizes?: any): string {
  return sizes;
}

function Image({
  src,
  id,
  alt,
  className,
  width,
  height,
  srcSet,
  sizes,
  objectFit,
  type,
  role,
}: ImageProps) {
  const roleName = role ? role : 'img';

  return (
    <StyledImage
      id={id}
      alt={alt}
      src={src}
      width={width}
      height={height}
      sizes={getSizes(sizes)}
      srcSet={getSrcSet(src, srcSet)}
      data-testid={`image-${id || 'default'}`}
      objectFit={objectFit}
      role={roleName}
      className={getClass('image', className, { [`${type}`]: type })}
    />
  );
}

export default Image;
