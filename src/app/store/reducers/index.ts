import { reducer , appReducerState } from './appReducers'
//import { ActionReducerMap } from '@ngrx/store'

export interface AppState {
    appReducer : appReducerState
}

//export const reducers : ActionReducerMap<AppState> = {
//  appReducer : reducer
//}