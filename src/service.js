/**
 * Created by alexander on 22.01.18.
 */
import axios from "axios";


export const loadDepartments = () => (
    axios.get("Departments/")
);


export const saveDepartments = (data)=>{
    // console.log("сохраняем в сервисе", data);
    axios.put('Departments/' , data);
};

export const loadEmployees = () => (
    axios.get("Employees/")
);


export const saveEmployees = (data)=>{
    // console.log("сохраняем в сервисе", data);
    axios.put('Employees/' , data);
};
