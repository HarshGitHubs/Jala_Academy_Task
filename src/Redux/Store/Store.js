import { createStore } from "redux"

const initialState = {
    list: [],
    editId: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            const { id, data } = action.payload
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        case 'REMOVE':
            const newlist = state.list.filter((elem) => elem.id !== action.payload.id)
            return {
                ...state,
                list: newlist
            }

        case 'EDIT':
            let list = state.list
            list = list.filter((elem) => elem.id !== action.payload.id)
            list.push({id:action.payload.id , data:action.payload.data})
            return {
                ...state,
                list: list
            }
        default:
            return state;
    }
}

export const store = createStore(reducer);