/**
 * Created by alexander on 23.01.18.
 */
import {call, put, takeLatest,take} from "redux-saga/effects";
import {delay} from "redux-saga";
import * as service from "../service";

//
// function* fetchEmployees() {
//     try {
//         yield delay(1000);
//         const data = yield call(service.loadEmployees);
//         yield put({type: "FETCH_EMPLOYEES_SUCCESS", payload: data.data.data});
//         // yield call(console.log, 'департаменты собрал:', data);
//     } catch (e) {
//         yield put({type: "FETCH_EMPLOYEES_FAILED", message: e.message});
//     }
// }

export function* fetchEmployeesIsolated() {
    try {
        yield take('FETCH_NON_BLOCKING');
        yield delay(1000);
        const data = yield call(service.loadEmployees);
        yield put({type: "FETCH_EMPLOYEES_SUCCESS", payload: data.data});
        // yield call(console.log, 'saga сотрудников загрузил:', data);
    } catch (e) {
        yield put({type: "FETCH_EMPLOYEES_FAILED", message: e.message});
    }
}

function* saveEmployees(action) {
    try {
        // for(let i=0; i < action.payload.length; i++){
        //     yield call(service.deleteDepartment, action.payload[i].id);
        // }

        // yield call(console.log, 'сотрудников сохраняю на сервер:');
        // yield call(service.deleteEmployees);
        const data = yield call(service.saveEmployees, action.payload);
        yield delay(2000);
        yield put({type: "SAVE_EMPLOYEES_SUCCESS", payload: data});
        // yield call(console.log, 'департаменты собрал:', data);
    } catch (e) {

        yield put({type: "SAVE_EMPLOYEES_FAILED", message: e.message});
    }
}

export  function* employeeSaga(){
    // yield takeLatest('FETCH_EMPLOYEES', fetchEmployees);
    yield takeLatest('SAVE_EMPLOYEES', saveEmployees);
}

