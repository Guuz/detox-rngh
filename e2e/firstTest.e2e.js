describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should press a React Native TouchableHighlight by text', async () => {
    await expect(element(by.text('React Native'))).toBeVisible();
    await element(by.text('React Native')).tap();
  });
});
