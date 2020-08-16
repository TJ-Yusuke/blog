import ArticleDriver from '../../../logic/driver/articleDriver';
import ArticleRepository from '../../../logic/repository/articleRepository';
import ArticleUseCase from '../../../logic/useCase/articleUseCase';
import ArticlePresenter from '../../../logic/presenter/articlePresenter';

const ArticleDriverInstance = new ArticleDriver();
const ArticleRepositoryInstance = new ArticleRepository(ArticleDriverInstance);
const ArticleUseCaseInstance = new ArticleUseCase(ArticleRepositoryInstance);
export const ArticlePresenterInstance = new ArticlePresenter(
  ArticleUseCaseInstance
);
