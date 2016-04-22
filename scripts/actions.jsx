export const ADD_EMPLOYEE = 'ADD_EMPLOYEE'
export const addEmployee = (name) => ({
    type: ADD_EMPLOYEE,
    name
})

export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE'
export const removeEmployee = (index) => ({
    type: REMOVE_EMPLOYEE,
    index
})
