import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AgGrid from 'ag-grid';
import {AgGridReact} from 'ag-grid-react';

class AgGridStandardComponent extends Component {
    constructor(props) {
        super(props);
        this._onRowSelected = this._onRowSelected.bind(this);
    }

    _onRowSelected() {
        //console.info('A row was selected!!!');
    }

    render() {
        const {rowData, colDefs} = this.props;
        return (
        <AgGridReact
        onRowSelected={this._onRowSelected}
        rowData={rowData}
        columnDefs={colDefs}
        rowSelection="multiple"
        enableSorting="true"
        enableFilter="true"
        rowHeight="22"
        />);
    }
}
AgGridStandardComponent.propTypes = {
    colDefs: PropTypes.array,
    rowData: PropTypes.array
};

export default AgGridStandardComponent;