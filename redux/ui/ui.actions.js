export const

  types = {
    SET_UI: 'SET_UI',
    SET_UIS: 'SET_UIS',
  },

  setUi = (key = 'null', data = {}) => ({
    type: types.SET_UI,
    key,
    data,
  }),

  setUis = (data = {}) => ({
    type: types.SET_UIS,
    data,
  })
