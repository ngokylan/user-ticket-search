import { any, string } from 'prop-types';

export type ImageProps = {
  /** Image src */
  src: string;
  /** Image alt */
  alt?: string;
  /** Image custom id attribute */
  id?: string;
  /** Add custom class to class attribute */
  className?: string;
  /** The intrinsic width of the image in pixels. */
  width?: string;
  /** The intrinsic height of the image in pixels */
  height?: string;
  /**
   * A list of one or more strings separated by commas indicating a set of source sizes.
   * Each source size consists of:
   *   1) A media condition. This must be omitted for the last item.
   *   2) A source size value.
   */
  sizes?: string;
  /**
   * A list of one or more strings separated by commas indicating a set of possible
   * image sources for the user agent to use. Each string is composed of:
   *   1) A URL to an image
   *   2) Optionally, whitespace followed by one of:
   */
  srcSet?: string;
  /** The object-fit property of the image */
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  /** The rendering type modifier of the image */
  type?: 'rounded';
  /** The role HTML attribute for accessibility */
  role?: string;
};
