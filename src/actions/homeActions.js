import { SET_SELECTED_USER, RESET_SELECTED_USER } from '../constants/action-types';

export const SetSelectedUser = (data) => ({
  type: SET_SELECTED_USER,
  payload: data,
});

export const ResetSelectedUser = () => ({
  type: RESET_SELECTED_USER,
});
