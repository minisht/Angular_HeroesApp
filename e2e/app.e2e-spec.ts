import { HeroesappPage } from './app.po';

describe('heroesapp App', () => {
  let page: HeroesappPage;

  beforeEach(() => {
    page = new HeroesappPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
