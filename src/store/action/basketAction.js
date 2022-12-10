import { ActionType } from '../contents/actionType';

export const setCountIndicator = (data) => {
    return {
        type: ActionType.setCountIndicator,
        payload: data
    };
};
