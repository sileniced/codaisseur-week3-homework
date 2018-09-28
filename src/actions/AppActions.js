import slugify from 'slugify';

export const SET_COMPUTER_MODELS = 'SET_COMPUTER_MODELS';
export const ADD_RENDERED_COMPUTER_MODEL = 'ADD_RENDERED_COMPUTER_MODEL';

export const setComputerModels = computerModels => {

  const payload = Object.keys(computerModels).map(name => ({
    ...computerModels[name],
    slug: slugify(name),
    name
  }));

  return {
    type: SET_COMPUTER_MODELS,
    payload
  }
};

export const addRenderedComputerModels = computerModel => ({
  type: ADD_RENDERED_COMPUTER_MODEL,
  payload: computerModel
});