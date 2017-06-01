export const DEFAULT_AG_GRID_COL_DEFS = [
    {
        headerName: '#',
        width: 30,
        checkboxSelection: true,
        suppressSorting: true,
        suppressMenu: true,
        pinned: true
    },
    {
        headerName: 'Employee',
        children: [
            {
                headerName: 'Name',
                field: 'name',
                width: 150,
                pinned: true
            },
            {
                headerName: 'City',
                field: 'city',
                width: 150,
                pinned: true,
                filterParams: { cellHeight: 20 },
                columnGroupShow: 'open'
            },
            {
                headerName: 'DOB',
                field: 'dob',
                width: 120,
                pinned: true,
                filter: 'date',
                columnGroupShow: 'open'
            }
        ]
    }
];
