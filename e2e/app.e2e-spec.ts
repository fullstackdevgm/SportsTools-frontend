import { An4sportsPage } from './app.po';

describe('an4sports App', () => {
  let page: An4sportsPage;

  beforeEach(() => {
    page = new An4sportsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
