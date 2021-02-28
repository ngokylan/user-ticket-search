import classNames from 'classnames';
import { ReactNode, Children } from 'react';

// Omit taken from https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * Make a BEM string based on props
 * @param  {string} name Base class.
 * @param  {Object<string, any>} classes Component classes.
 * @param  {Object<string, any>} modifiers Component extra class modifiers passing as props.
 * @return {string} BEM class string.
 */
export function getClass(name: string, classes: any, modifiers?: any): string {
  const modifierClasses: any = {};
  for (const key in modifiers) {
    if (key === 'className') {
      modifierClasses[`${modifiers[key]}`] = true;
    } else if (modifiers[key]) {
      modifierClasses[`${name}--${key}`] = modifiers[key];
    }
  }

  return classNames(name, classes, modifierClasses);
}

/**
 * Get a maped value from map object
 * @param {*} key
 * @param {*} defaultKey
 * @param {*} map
 */
export function mapProp(map: any, key: string, defaultKey: string) {
  return map[key] || map[defaultKey];
}


/**
 * TODO: this function only delete the first item that has been found in the list
 *
 * Remove an item from array by searching string
 * @param Array<string> items
 * @param {string} value
 */
export function removeArrayItem(items: Array<string>, value: string) {
  const index = items.indexOf(value);
  if (index === -1) {
    return;
  }
  items.splice(index, 1);
}

/**
 * Remove a classname from an element
 *
 * @param {HTMLElement} element
 * @param {string} classname
 */
export function removeClassToElement(element: HTMLElement, className: string) {
  // tslint:disable-next-line no-shadowed-variable
  let classNames: any = '';
  let classNameArray = [];
  classNames = element.getAttribute('class');
  if (classNames !== null && classNames.search(' ') >= 0) {
    classNameArray = classNames.split(' ');
  }
  removeArrayItem(classNameArray, className);
  element.setAttribute('class', classNameArray.join(' '));
}

/**
 * Add a classname to an element
 *
 * @param {HTMLElement} element
 * @param {string} classname
 */
export function addClassToElement(element: HTMLElement, className: string) {
  // tslint:disable-next-line no-shadowed-variable
  let classNames: any = '';
  let classNameArray = [];
  classNames = element.getAttribute('class');
  if (classNames !== null && classNames.search(' ') >= 0) {
    classNameArray = classNames.split(' ');
  }
  classNameArray.push(className);
  Array.from(new Set(classNameArray.map((item: any) => item.id)));
  element.setAttribute('class', classNameArray.join(' '));
}



export function isElementOfType(element: any, component: any) {
  return (
    element &&
    element.type &&
    component &&
    element.type.displayName === component.displayName
  );
}








/**
 * Check if two arrays are equal based on key comparison
 * @param children1
 * @param children2
 */
export function childrenIsEqual(children1: ReactNode, children2: ReactNode) {
  if (Children.count(children1) !== Children.count(children2)) {
    return false;
  }

  const children1Arr: any[] = Children.toArray(children1);
  const children2Arr: any[] = Children.toArray(children2);

  for (let i = 0; i < children1Arr.length; i++) {
    if (children1Arr[i].key !== children2Arr[i].key) {
      return false;
    }
  }

  return true;
}

/**
 * Find Closest Element by ID
 */

export function closestParentById(el: Element, id: string) {
  let element: (Node & ParentNode) | null = el;
  while ((element as Element).id !== id) {
    element = element.parentNode;
    if (!element) {
      return null;
    }
  }
  return element;
}
