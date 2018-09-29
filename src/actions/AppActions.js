export const SET_MODELS = 'SET_MODELS';
export const ADD_MODEL = 'ADD_MODEL';

export const setModels = models => ({
  type: SET_MODELS,
  payload: Object.keys(models).map(name => ({
    ...models[name],
    name
  }))
});

export const addModel = model => ({
  type: ADD_MODEL,
  payload: model
});