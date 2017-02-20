import { ComponentAppPage } from './app.po';

describe('component-app App', function() {
  let page: ComponentAppPage;

  beforeEach(() => {
    page = new ComponentAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
