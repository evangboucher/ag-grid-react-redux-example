import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import DataGenerator from '../../../features/data-generator';
import {
    AgGridStandard,
    setTableData,
    setColumnDefs,
    DEFAULT_AG_GRID_COL_DEFS
} from '../../../features/ag-grid/standard'

class HomePage extends Component {
    static DEFAULT_NUMBER_OF_ROWS = 200;
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Component Did mount!');
        this.initialize();
    }

    initialize() {
        this.props.actions.setColumnDefs(DEFAULT_AG_GRID_COL_DEFS);
        this.props.actions.setTableData(new DataGenerator().setNumberOfRows(HomePage.DEFAULT_NUMBER_OF_ROWS).create());
    }
    render() {
        const {
            rowData,
            colDefs
        } = this.props
        return (
        <div className='home-container'>
        <AgGridStandard rowData={rowData} colDefs={colDefs}/>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        rowData: state.rowData,
        colDefs: state.colDefs
    };
}
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({
        setTableData,
        setColumnDefs
    }, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);