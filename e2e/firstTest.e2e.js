describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should press a React Native TouchableHighlight by text', async () => {
    await expect(element(by.text('React Native'))).toBeVisible();
    await element(by.text('React Native')).tap();
  });

  it('should press a React Native Button by text', async () => {
    await expect(element(by.text('React Native Button'))).toBeVisible();
    await element(by.text('React Native Button')).tap();
  });

  it('should press a React Native Gesture Handler TouchableHighlight by text', async () => {
    await expect(element(by.text('React Native Gesture Handler'))).toBeVisible();
    await element(by.text('React Native Gesture Handler')).tap();
  });

  it('should press a RectButton by text', async () => {
    await expect(element(by.text('RectButton'))).toBeVisible();
    await element(by.text('RectButton')).tap();
  });
});
