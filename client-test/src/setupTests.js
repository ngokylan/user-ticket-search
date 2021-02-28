import React from 'react';
import { shallow, render, mount, configure } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import puppeteer from 'puppeteer';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
const { getComponentUrl } = require('../scripts/util/test');

// Set the default serializer for Jest to be the from enzyme-to-json
// This produces an easier to read (for humans) serialized format.
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
expect.extend({ toMatchImageSnapshot });
configure({ adapter: new Adapter() });

/**
 * A browser wrapper
 */
function Browser() {
  this.driver = undefined;
}

/**
 * Get a page
 */
Browser.prototype.getPage = async function getPage(url, viewportOptions) {
  const page = await this.driver.newPage();
  await page.setViewport(viewportOptions);
  await page.goto(url);

  return page;
};

/**
 * Get a component page
 */
Browser.prototype.getComponentPage = function getComponentPage(
  component,
  viewportOptions
) {
  return this.getPage(getComponentUrl(component), viewportOptions);
};

/**
 * Get screenshot of a component page
 */
Browser.prototype.getComponentPageScreenshot = async function getComponentPageScreenshot(
  component,
  viewportOptions
) {
  const page = await this.getPage(getComponentUrl(component), viewportOptions);
  const image = await page.screenshot();

  return image;
};

/**
 * Close browser driver
 */
Browser.prototype.close = function close() {
  return this.driver.close();
};

/**
 * Get a new browser object
 */
async function getBrowser(options = {}) {
  const browser = new Browser();
  browser.driver = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    ...options,
  });

  return browser;
}

// Define globals to cut down on imports in test files
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.getBrowser = getBrowser;
