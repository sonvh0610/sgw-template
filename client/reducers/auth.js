import { LOGIN_SUCCESS } from '../actions/auth';
import { REHYDRATE } from 'redux-persist';
import { get } from '../../constants/utils';

const initState = {
  accessToken: '',
  refreshToken: '',
};

export function authReducer(state = initState, action = {}) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case REHYDRATE:
      newState = get(action, 'payload.auth', state);
      break;
    case LOGIN_SUCCESS:
      newState.accessToken = action.accessToken;
      newState.refreshToken = action.refreshToken;
      break;
  }

  return newState;
}
