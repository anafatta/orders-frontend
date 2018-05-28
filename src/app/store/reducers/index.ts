import { reducer , appReducerState } from './appReducers'
import { ActionReducerMap } from '@ngrx/store'

interface AppStore {
    appReducer : appReducerState
}

export const reducers : ActionReducerMap<AppStore> = {
    appReducer : reducer
}