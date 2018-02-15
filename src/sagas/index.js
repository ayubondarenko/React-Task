/**
 * Created by alexander on 22.01.18.
 */
import {all, fork, put, takeLatest} from 'redux-saga/effects';
import {departmentSaga,fetchDepartmentsIsolated} from './department';
import {employeeSaga, fetchEmployeesIsolated} from './employees';

function* fetchData() {
    yield put({type: "FETCH_NON_BLOCKING", payload: {}});
}

function* dataSaga(){
    yield takeLatest('FETCH_DATA', fetchData);
}

export default function* rootSaga() {
    yield all([
        fork(departmentSaga),
        fork(employeeSaga),
        fork(dataSaga),
        fork(fetchDepartmentsIsolated),
        fork(fetchEmployeesIsolated)
    ])
}