import { RxjsSubscribePage } from './app.po';

describe('rxjs-subscribe App', () => {
  let page: RxjsSubscribePage;

  beforeEach(() => {
    page = new RxjsSubscribePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
