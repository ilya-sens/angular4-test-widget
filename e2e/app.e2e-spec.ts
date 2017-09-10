import { Angular4TestWidgetPage } from './app.po';

describe('angular4-test-widget App', () => {
  let page: Angular4TestWidgetPage;

  beforeEach(() => {
    page = new Angular4TestWidgetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
