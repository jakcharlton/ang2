export class TestngPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('testng-app h1')).getText();
  }
}
