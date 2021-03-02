describe('Col', () => {
  let browser;
  beforeAll(async () => {
    // eslint-disable-next-line no-undef
    browser = await getBrowser();
  });

  it('should match snapshot with width 800', async () => {
    const image = await browser.getComponentPageScreenshot('Col', {
      width: 800,
      height: 1800,
    });
    expect(image).toMatchImageSnapshot();
  });

  it('should match snapshot with width 200', async () => {
    const image = await browser.getComponentPageScreenshot('Col', {
      width: 200,
      height: 2000,
    });
    expect(image).toMatchImageSnapshot();
  });

  afterAll(async () => {
    await browser.close();
  });
});
