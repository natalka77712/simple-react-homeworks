export type actionType = SORT_NAME_UP_ActionType | SORT_NAME_DOWN_ActionType | SORT_PERSON_AGE_ActionType

export type SORT_NAME_UP_ActionType = {
    type: 'SORT_NAME_UP',
    payload: 'up'
};

export type SORT_NAME_DOWN_ActionType = {
    type: 'SORT_NAME_DOWN',
    payload: 'down'
};

export type SORT_PERSON_AGE_ActionType = {
    type: 'SORT_PERSON_AGE',
    payload: 18
};

type PersonStateType = {
    _id: number
    name: string
    age: number
}

export type StateType = Array<PersonStateType>

const personState: StateType = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]


export const homeWorkReducer = (state: StateType, action: actionType): StateType => {
    switch (action.type) {
        case "SORT_NAME_UP": {
            let newState = [...state]
            return newState.sort((a, b) => a.name > b.name ? 1 : -1)
        }
        case "SORT_NAME_DOWN": {
            let newState = [...state]
            return newState.sort((a, b) => a.name < b.name ? 1 : -1)
        }
        case "SORT_PERSON_AGE": {
            let newState = [...state]
            return newState.filter(a => a.age > action.payload )
        }
        default: return state
    }
};

export const SortNameUpAC = (): SORT_NAME_UP_ActionType => ({type: 'SORT_NAME_UP', payload: 'up'})
export const SortNameDownAC = (): SORT_NAME_DOWN_ActionType => ({type: 'SORT_NAME_DOWN', payload: 'down'})
export const SortPersonAgeAC = (): SORT_PERSON_AGE_ActionType => ({type: 'SORT_PERSON_AGE', payload: 18})