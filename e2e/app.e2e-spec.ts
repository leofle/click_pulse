import { ClickPulsePage } from './app.po';

describe('click-pulse App', function() {
  let page: ClickPulsePage;

  beforeEach(() => {
    page = new ClickPulsePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
