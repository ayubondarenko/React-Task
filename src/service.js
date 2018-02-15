/**
 * Created by alexander on 22.01.18.
 */
import axios from "axios";


export const loadDepartments = () => (
    axios.get("http://localhost:3004/Departments/")
);


export const saveDepartments = (data)=>{
    // console.log("сохраняем в сервисе", data);
    axios.put('http://localhost:3004/Departments/' , data);
};

export const loadEmployees = () => (
    axios.get("http://localhost:3004/Employees/")
);


export const saveEmployees = (data)=>{
    // console.log("сохраняем в сервисе", data);
    axios.put('http://localhost:3004/Employees/' , data);
};