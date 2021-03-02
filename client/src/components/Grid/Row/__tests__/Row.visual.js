describe('Row', () => {
  let browser;
  beforeAll(async () => {
    // eslint-disable-next-line no-undef
    browser = await getBrowser();
  });

  it('should match snapshot with width 800', async () => {
    const image = await browser.getComponentPageScreenshot('Row', {
      width: 800,
      height: 3100,
    });
    expect(image).toMatchImageSnapshot();
  });

  it('should match snapshot with width 200', async () => {
    const image = await browser.getComponentPageScreenshot('Row', {
      width: 200,
      height: 3500,
    });
    expect(image).toMatchImageSnapshot();
  });

  afterAll(async () => {
    await browser.close();
  });
});
