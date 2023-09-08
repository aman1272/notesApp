import axios from 'axios';

import { ADDNEW_TODO, GETALL_TODO, DELETE_TODO } from './type';

const API_URL = 'http://localhost:8000';

export const addNewTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/add`, { data: { todo: data, created: new Date() } });
        if (res.status === 200) 
        if (res?.data?.message) return window.alert(`${res.data.message}`)
        dispatch({ type: ADDNEW_TODO, payload: res.data });
    } catch (error) {
        console.log('Error while calling addNewTodo API ', error.message);
    }
}

export const getAllTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/get`);

        dispatch({ type: GETALL_TODO, payload: res.data });
    } catch (error) {
        console.log('Error while calling getAllTodos API ', error.message);
    }
}


export const deleteTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/delete/${id}`);
        if (res.status === 200) 
        dispatch({ type: DELETE_TODO, payload: res.data });
    } catch (error) {
        console.log('Error while calling deleteTodo API ', error.message);
    }
}



