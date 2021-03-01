describe('Container', () => {
  let browser;
  beforeAll(async () => {
    // eslint-disable-next-line no-undef
    browser = await getBrowser();
  });

  it('should match snapshot with width 800', async () => {
    const image = await browser.getComponentPageScreenshot('Container', {
      width: 800,
      height: 800,
    });
    expect(image).toMatchImageSnapshot();
  });

  it('should match snapshot with width 200', async () => {
    const image = await browser.getComponentPageScreenshot('Container', {
      width: 200,
      height: 800,
    });
    expect(image).toMatchImageSnapshot();
  });

  afterAll(async () => {
    await browser.close();
  });
});
