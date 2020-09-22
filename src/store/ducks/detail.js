export const Types = {
  SET: 'detail/SET',
  REQUEST: 'detail/REQUEST',
  SUCCESS: 'detail/SUCCESS',
  FAILURE: 'detail/FAILURE',
};

const INITIAL = {
  selected: null,
  data: null,
  loading: false,
  error: null,
};

function detail(state = INITIAL, { type, payload }) {
  switch (type) {
    case Types.SET:
      if (payload.key) {
        return { ...state, [payload.key]: payload.value };
      }
      return state;

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
  setRequest: payload => ({ type: Types.SET, payload }),

  detailRequest: payload => ({ type: Types.REQUEST, payload }),
  detailSuccess: payload => ({ type: Types.SUCCESS, payload }),
  detailFailure: payload => ({ type: Types.FAILURE, payload }),
};

export default detail;
