import { Router } from 'express';
import { RecipesResponseDto } from '@whiskmate/shared';
import { RECIPES_REPOSITORY_TOKEN } from './recipes.repository';
import { inject } from '../di';

export const greetingsRouter = Router();

greetingsRouter.get('/recipes', async (_, res) => {
  const repo = inject(RECIPES_REPOSITORY_TOKEN);

  const body: RecipesResponseDto = {
    recipes: await repo.getRecipes(),
  };

  res.send(body);
});
