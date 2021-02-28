import React from 'react';
import logger from '../';

const mockError = jest.fn();
const mockWarn = jest.fn();
global.console = {
  error: mockError,
  warn: mockWarn,
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('_lib::helper', () => {
  describe('logger.error', () => {
    it('should log proper error', () => {
      const e = new Error();

      logger.error(e);
      expect(mockError.mock.calls.length).toEqual(1);
      expect(mockError).toBeCalledWith(e, undefined);
    });

    it('should log proper error with data', () => {
      const e = new Error();
      const data = 'some data';

      logger.error(e, data);
      expect(mockError.mock.calls.length).toEqual(1);
      expect(mockError).toBeCalledWith(e, data);
    });
  });

  describe('logger.warn', () => {
    it('should log proper warn with data', () => {
      const data = 'some data';

      logger.warn(data);
      expect(mockWarn.mock.calls.length).toEqual(1);
      expect(mockWarn).toBeCalledWith(data);
    });
  });
});
