describe('Button', () => {
  let browser;
  beforeAll(async () => {
    // eslint-disable-next-line no-undef
    browser = await getBrowser();
  });

  it('should match snapshot', async () => {
    const image = await browser.getComponentPageScreenshot('Button', {
      width: 800,
      height: 800,
    });
    expect(image).toMatchImageSnapshot();
  });

  afterAll(async () => {
    await browser.close();
  });
});
