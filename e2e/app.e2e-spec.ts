import { LuanhssaPage } from './app.po';

describe('luanhssa App', function() {
  let page: LuanhssaPage;

  beforeEach(() => {
    page = new LuanhssaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
