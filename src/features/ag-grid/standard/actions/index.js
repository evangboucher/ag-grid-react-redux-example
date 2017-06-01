import {
    DEFAULT_AG_GRID_COL_DEFS
} from './ag-grid-standard.const';
export {DEFAULT_AG_GRID_COL_DEFS};
export const ACTION_SET_COL_DEFS = 'SET_COL_DEFINITIONS';
export function setColumnDefs(colDefs) {
    return {
        type: ACTION_SET_COL_DEFS,
        colDefs: colDefs
    };
}
export const ACTION_SET_TABLE_DATA = 'SET_TABLE_DATA';
export function setTableData(tableData) {
    return {
        type: ACTION_SET_TABLE_DATA,
        rowData: tableData
    };
}