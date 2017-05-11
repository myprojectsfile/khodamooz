import { KhodamoozPage } from './app.po';

describe('khodamooz App', () => {
  let page: KhodamoozPage;

  beforeEach(() => {
    page = new KhodamoozPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
