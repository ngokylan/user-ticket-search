import {
  getClass,
  mapProp,  
  removeArrayItem,
  removeClassToElement,
  addClassToElement,
  isElementOfType,
  closestParentById,
} from '../';

describe('_lib::helper', () => {
  describe('getClass', () => {
    it.each([
      [
        '1-base-class',
        {
          'base-bold': true,
          'base-italic': false,
          'custom-class': true,
        },
        {
          on: true,
          off: false,
        },
        '1-base-class base-bold custom-class 1-base-class--on',
      ],
      [
        '2-base-class',
        'base-bold',
        {
          on: true,
          off: false,
        },
        '2-base-class base-bold 2-base-class--on',
      ],
      [
        '3-base-class',
        'base-bold',
        {
          on: true,
          off: false,
          className: 'more-custom-class',
        },
        '3-base-class base-bold 3-base-class--on more-custom-class',
      ],
      [
        null,
        {
          'base-bold': true,
          'base-italic': false,
          'custom-class': true,
        },
        {
          on: true,
          off: false,
        },
        'base-bold custom-class null--on',
      ],
    ])(
      'should return proper className when base is base %s',
      (name, classes, modifiers, expectedString) => {
        const classNames = getClass(name, classes, modifiers);
        expect(classNames).toBe(expectedString);
      }
    );
  });

  describe('mapProp', () => {
    it('should get a maped value from map object correctly', () => {
      const expected = 'a';
      const result = mapProp({ a: 'a', b: 'b', c: 'c' }, 'a');
      expect(result).toBe(expected);
    });

    it('should get a maped value from map object correctly when using a default key', () => {
      const expected = 'b';
      const result = mapProp({ a: 'a', b: 'b', c: 'c' }, '-', 'b');
      expect(result).toBe(expected);
    });

    it('should return undefined when a key deos not exist', () => {
      const expected = undefined;
      const result = mapProp({ a: 'a', b: 'b', c: 'c' }, '-');
      expect(result).toBe(expected);
    });
  });

  describe('removeArrayItem', () => {
    it('should remove the item properly', () => {
      const items = ['a', 'b', 'c', 'd'];
      removeArrayItem(items, 'a');
      expect(items.length).toBe(3);
    });

    it('should only remove the first item that has been found properly', () => {
      const items = ['a', 'b', 'c', 'a', 'd'];
      removeArrayItem(items, 'a');
      expect(items.length).toBe(4);
    });

    it('should not remove anything if the item does not exist', () => {
      const items = ['a', 'b', 'c', 'a', 'd'];
      removeArrayItem(items, 's');
      expect(items.length).toBe(5);
    });
  });

  describe('removeClassToElement', () => {
    it('should remove class from element properly', () => {
      let result = undefined;
      const element = {
        getAttribute: () => 'class-a class-b class-c class-d',
        setAttribute: (name, classNames) => {
          result = classNames;
        },
      };
      removeClassToElement(element, 'class-d');
      expect(result).toBe('class-a class-b class-c');
    });

    it('should not remove class from element if it does not exist', () => {
      let result = undefined;
      const element = {
        getAttribute: () => 'class-a class-b class-c class-d',
        setAttribute: (name, classNames) => {
          result = classNames;
        },
      };
      removeClassToElement(element, 'class-z');
      expect(result).toBe('class-a class-b class-c class-d');
    });
  });

  describe('addClassToElement', () => {
    it('should add class to element properly', () => {
      let result = undefined;
      const element = {
        getAttribute: () => 'class-a class-b class-c',
        setAttribute: (name, classNames) => {
          result = classNames;
        },
      };
      addClassToElement(element, 'class-d');
      expect(result).toBe('class-a class-b class-c class-d');
    });

    it('should add class to element even if already exist :(', () => {
      let result = undefined;
      const element = {
        getAttribute: () => 'class-a class-b class-c class-d',
        setAttribute: (name, classNames) => {
          result = classNames;
        },
      };
      addClassToElement(element, 'class-d');
      expect(result).toBe('class-a class-b class-c class-d class-d');
    });
  });

 
  describe('closestParentById', () => {
    it.each([
      [false, '<div id="WrongPopoverContainer"><div id="Target" /></div>'],
      [true, '<div id="PopoverContainer"><div id="Target" /></div>'],
    ])('should find PopoverContainer %s', (expectedResult, element) => {
      document.body.innerHTML = element;
      const Target = document.getElementById('Target');
      expect(
        closestParentById(Target, 'PopoverContainer') === null ? false : true
      ).toBe(expectedResult);
    });
  });
});
