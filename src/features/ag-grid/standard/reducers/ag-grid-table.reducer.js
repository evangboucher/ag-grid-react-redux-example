import { ACTION_SET_COL_DEFS, ACTION_SET_TABLE_DATA } from '../actions';

const initialState = {
    colDefs: [],
    rowData: []
};
export default (state = initialState, action = {}) => {
    switch (action.type) {
    case ACTION_SET_COL_DEFS: {
        return Object.assign({}, state, {
            colDefs: action.colDefs
        });
    }
    case ACTION_SET_TABLE_DATA: {
        return Object.assign({}, state, {
            rowData: action.rowData
        });
    }
    default: {
        return state;
    }
    }
};
