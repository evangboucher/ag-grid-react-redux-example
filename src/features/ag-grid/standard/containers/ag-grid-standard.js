import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AgGridStandardComponent from '../components/ag-grid-standard.comp';

class AgGridTable extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {colDefs, rowData} = this.props;

        return (<AgGridStandardComponent
            className='ag-grid-container'
            colDefs={colDefs}
            rowData={rowData}/>);
    }
}

AgGridTable.propTypes = {
    colDefs: PropTypes.array,
    rowData: PropTypes.array
};

export default AgGridTable;