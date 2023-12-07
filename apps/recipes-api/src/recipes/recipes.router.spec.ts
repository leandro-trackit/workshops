import { recipesRouter } from './recipes.router';
import { createTestingClient } from '../testing/create-testing-client';
import { register } from '../di';
import { RECIPES_REPOSITORY_TOKEN } from './recipes.repository';
import { RecipesRepositoryFake } from './recipes.repository.fake';

describe(recipesRouter.name, () => {
  it('should return a recipe', async () => {
    const { client } = setUp();

    const response = await client.get('/recipes');

    expect(response.statusCode).toBe(200);
    expect(response.body.items).toContainEqual(
      expect.objectContaining({
        name: "Creamy Tomato Basil Pasta",
      })
    );
  });
});

function setUp() {
  const fakeRepo = new RecipesRepositoryFake();
  register(RECIPES_REPOSITORY_TOKEN, { useValue: fakeRepo });
  return createTestingClient(recipesRouter);
}
