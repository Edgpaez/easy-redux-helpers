import { Reducer, AnyAction, ActionCreator, Action } from "redux";
import { Selector } from "reselect";
import { ComponentClass } from "../../../../Library/Caches/typescript/3.1/node_modules/@types/react";

type State = any;
// ***************
// createReducer()
// ***************
/**
 * A reducer with immer is a reducer that optionally returns state
 */
export type ReducerWithImmer<State, A extends Action = AnyAction> = (
  state: State | undefined,
  action: AnyAction
) => State | undefined

export type SetOfReducers<S = State, A extends Action = AnyAction> = {
  [key: string]: ReducerWithImmer<S, A>
}
/**
 * The config of a reducer. It defines the initial state and a set of
 * reducers of type ReducerWithImmer
 */
export type ReducerConfig<State, Action extends AnyAction> = SetOfReducers<State, Action> & {
  initialState: State,
}
export type createReducer<S = State, A extends Action = AnyAction> = (config: ReducerConfig<S, A>) => Reducer


// ***************
// connect()
// ***************
/**
 * An object in which each key is the name of the prop and each value is a string
 * that specifies the part of the state that is mapped to it, for example:
 * title:
 */
export interface PropsConfig<S,R> {
  [key: string]: string | Selector<S,R>
}

export interface ActionsConfig<AnyAction> {
  [key: string]: ActionCreator<AnyAction>
}

export interface ConnectConfig<S, R, A> {
  props: PropsConfig<S, R>
  actions: ActionsConfig<A>
}

export type ConfigurableConnect = {
  to: (ConnectConfig) => ComponentClass
}
export type connect = (ComponentClass) => ConfigurableConnect

