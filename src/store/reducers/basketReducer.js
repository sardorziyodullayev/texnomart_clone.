import { ActionType } from '../contents/actionType';

export const countIndicatorReducer = (state = 0, { type, payload }) => {
    switch (type) {
        case ActionType.setCountIndicator:
            return payload;
        default:
            return state;
    }
};
