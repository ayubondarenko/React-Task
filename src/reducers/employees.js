/**
 * Created by alexander on 23.01.18.
 */

export default function employees(state = {data: []}, action) {
    if (action.type === 'SET_EMPLOYEES_COL') {
        const newColumns = state.columns.map((col) => {
            if (col.name === action.payload.col.name) {
                col.width = action.payload.width;
                // console.log('подвинул', col.width, action.payload.widthMin);
                const newCol = {...col, width: col.width};
                return newCol;
            } else return col;
        });
        return {...state, columns: newColumns};
    }

    if (action.type === 'MOVE_EMPLOYEES_COL') {
        const newColumns = state.columns.map((col) => {
            if (col.name === action.payload.col.name) {
                col.width = col.width + action.payload.xDiff;
                // console.log('подвинул', col.width, action.payload.widthMin);
                if ( col.width <  action.payload.widthMin )
                    col.width = action.payload.widthMin;
                const newCol = {...col, width: col.width};
                return newCol;
            } else return col;
        });
        return   {...state, columns: newColumns};
    }

    if (action.type === 'SORT_EMPLOYEES_COL') {
        console.log("сортировка:", action.payload);
        let sort = {type: 'no', colName: action.payload.name};
        if (state.sort && state.sort.colName == action.payload.name) sort = state.sort;
        else sort = {type: 'no', colName: action.payload.name};

        let sortOrder = 1;
        switch (sort.type) {
            case 'asc':
                sortOrder = -1;
                sort.type = 'desc';
                break;
            case 'desc':

                sort.type = 'no';
                break;
            default:
                sort.type = 'asc';
                break;
        }


        if (action.payload.type === 'string')
            state.data.sort((a, b) => {
                if (a[action.payload.name].toUpperCase() > b[action.payload.name].toUpperCase()) return 1 * sortOrder;
                if (a[action.payload.name].toUpperCase() < b[action.payload.name].toUpperCase()) return -1 * sortOrder;
                return 0;
            });
        else
            state.data.sort((a, b) => {
                if (a[action.payload.name] > b[action.payload.name]) return 1 * sortOrder;
                if (a[action.payload.name] < b[action.payload.name]) return -1 * sortOrder;
                return 0;
            });
        return Object.assign({}, state, {sort: sort});
    }
    if (action.type === 'SAVE_EMPLOYEES') {
        // console.log("сохранениен сотрудников начато", action);
        return Object.assign({}, state, {saving: true});
    }
    if (action.type === 'SAVE_EMPLOYEES_SUCCESS') {
        // console.log("сохранениен сотрудников начато", action);
        return Object.assign({}, state, {saving: false});
    }

    if (action.type === 'FETCH_EMPLOYEES_SUCCESS') {
        console.log("загрузил сотрудников", action.payload);
        action.payload.columns.sort((a,b)=>{
            return a.num - b.num;
        });
        action.payload.data.sort((a,b)=>{
            return a.id - b.id;
        });

        return action.payload;
    }

    if (action.type === 'CHANGE_EMPLOYEE_CELL') {
        // console.log("в редуксе сохраняем ячейку", action);

        const newData = state.data.map((row, i, arr) => {
            if (row.id === action.payload.id) {
                let newValue = {};
                newValue[action.payload.name] = action.payload.value;

                // row[action.payload.name].value = action.payload.value;
                return Object.assign(row, newValue);//, newValue);
                // return {...row,newValue};
            }
            return row;
        });
        return Object.assign({}, state, {data: newData}, {saving: false});
        // return {...state, data: newData};
    }
    if (action.type === 'CLICK_EMPLOYEE_CELL') {
        // console.log("редактируем ячейку", action);
        const edit = {
            edit: {
                id: action.payload.id,
                name: action.payload.name
            }
        };
        return Object.assign({}, state, edit);
    }



    if (action.type === 'SELECT_EMPLOYEE_ROW') {
        // console.log("выбираем строку", action);

        const newData = state.data.map((row, i, arr) => {
            if (row.id === action.payload.id) {
                const newRow = {...row, select: action.payload.select};
                // row[action.payload.name].select = action.payload.select;
                return newRow;
            } else return row;
        });
        // return Object.assign({}, state, {data:newData}, {edit:{id:-1, name:''}});
        return {...state, data: newData, edit: {id: -1, name: ''}}
    }

    if (action.type === 'ADD_EMPLOYEE_ROW') {
        let maxId = 0;
        state.data.map(d =>{
            if(maxId<d.id) maxId=d.id;
        });
        const newData = [...state.data, {
            id: maxId + 1,
            firstName: '',
            lastName: '',
            birthday: '',
            phone: '',
            department: 0
        }];
        return {...state, data: newData}
    }

    if (action.type === 'DELETE_EMPLOYEES_ROWS') {
        // console.log("удаляем строки", action);
        let newData = [];
        state.data.map((row, i, arr) => {
            if (!row.select) {
                newData.push(row);
            }
        return "";
        });
        if (newData.length === 0) {
            newData.push({
                id: 1,
                name: {value: ''}
            })
        }
        // return Object.assign({}, state, {data: newData});
        return {...state, data: newData};
    }
    return state

}
