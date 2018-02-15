/**
 * Created by alexander on 23.01.18.
 */
import {call, put, takeLatest, take} from "redux-saga/effects";
import {delay} from "redux-saga";
import * as service from "../service";

export function* fetchDepartmentsIsolated() {
    try {
        yield take('FETCH_NON_BLOCKING');
        yield delay(1000);
        const data = yield call(service.loadDepartments);
        yield put({type: "FETCH_DEPARTMENTS_SUCCESS", payload: data.data});
        // yield call(console.log, 'saga департаменты загрузил :', data);
    } catch (e) {
        yield put({type: "FETCH_DEPARTMENTS_FAILED", message: e.message});
    }
}

function* saveDepartments(action) {
    try {
        const data = yield call(service.saveDepartments, action.payload);
        yield delay(2000);
        yield put({type: "SAVE_DEPARTMENTS_SUCCESS", payload: data});
        // yield call(console.log, 'департаменты собрал:', data);
    } catch (e) {

        yield put({type: "SAVE_DEPARTMENTS_FAILED", message: e.message});
    }
}

export  function* departmentSaga(){
    // yield takeLatest('FETCH_DEPARTMENTS', fetchDepartments);
    yield takeLatest('SAVE_DEPARTMENTS', saveDepartments);
}

