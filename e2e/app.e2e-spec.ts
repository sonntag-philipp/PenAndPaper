import { PenAndPaperPage } from './app.po';

describe('pen-and-paper App', () => {
  let page: PenAndPaperPage;

  beforeEach(() => {
    page = new PenAndPaperPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
