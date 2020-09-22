export const Types = {
  REQUEST: 'token/REQUEST',
  SUCCESS: 'token/SUCCESS',
  FAILURE: 'token/FAILURE',
};

const INITIAL = {
  data: null,
  loading: false,
  error: false,
};

function token(state = INITIAL, { type, payload }) {
  switch (type) {
    case Types.REQUEST:
      return { ...state, loading: true, error: null, data: null };

    case Types.SUCCESS:
      return { ...state, loading: false, data: payload };

    case Types.FAILURE:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
}

export const Creators = {
  tokenRequest: payload => ({ type: Types.REQUEST, payload }),
  tokenSuccess: payload => ({ type: Types.SUCCESS, payload }),
  tokenFailure: payload => ({ type: Types.FAILURE, payload }),
};

export default token;
