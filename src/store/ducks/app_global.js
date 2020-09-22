// api_key = '198d3d3577c1913a6ecdced77d704e60'

export const Types = {
  SET: 'app/SET',
};

const INITIAL = {
  api_key: '198d3d3577c1913a6ecdced77d704e60',
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
