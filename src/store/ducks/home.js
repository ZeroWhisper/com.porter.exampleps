export const Types = {
  SET: 'home/SET',
  REQUEST: 'home/REQUEST',
  SUCCESS: 'home/SUCCESS',
  FAILURE: 'home/FAILURE',
};

const INITIAL = {
  page: 1,
  data: null,
  loading: false,
  error: null,
};

function home(state = INITIAL, { type, payload }) {
  switch (type) {
    case Types.SET:
      if (payload.key) {
        return { ...state, [payload.key]: payload.value };
      }
      return state;

    case Types.REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        data: null,
        page: payload || 1,
      };

    case Types.SUCCESS:
      return { ...state, loading: false, data: payload };

    case Types.FAILURE:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
}

export const Creators = {
  setRequest: payload => ({ type: Types.SET, payload }),

  homeRequest: payload => ({ type: Types.REQUEST, payload }),
  homeSuccess: payload => ({ type: Types.SUCCESS, payload }),
  homeFailure: payload => ({ type: Types.FAILURE, payload }),
};

export default home;
