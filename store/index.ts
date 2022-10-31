import {
  Action,
  AnyAction,
  CombinedState,
  combineReducers,
  configureStore,
  Reducer,
  Slice,
  ThunkAction
} from '@reduxjs/toolkit'


/**
 * Default reducers like global/common reducer
 */
const staticReducers = {
}
const notProd = process.env.ENV !== 'production'

const reducerManager = createReducersManager(staticReducers)

const store = configureStore({
  reducer: reducerManager.reduce,
  devTools: notProd
})
const makeStore = () => store

/**
 * https://redux.js.org/usage/code-splitting#using-a-reducer-manager
 * Create reducer manager for dynamic reducer
 * @param initReducers
 */
export function createReducersManager (initReducers: {
  [name : string]: Reducer
}) {
  const reducers = {...initReducers}
  const slices: {[x: string]: string} = {}


  let keyToRemove: Array<string> = []

  return {
    getReducerMap: () => reducers,
    getSliceByName: (name: string) => slices[name],

    // The root reducer function exposed by this object
    // This will be passed to the store
    reduce: (
      state: CombinedState<{ [x: string]: any }> | undefined,
      action: AnyAction
    ) => {
      // If any reducers have been removed, clean up their state first
      if(keyToRemove.length > 0) {
        state = {...state}
        for (const key of keyToRemove) {
          delete state[key]
        }
        keyToRemove = []
      }

      return combineReducers(reducers)(state, action)
    },

    // Adds a new reducer with the specified key
    add: (s: Slice | Slice[]) => {
      const arraySlice: Slice[] = Array.isArray(s) ? s : [s]

      arraySlice.forEach(slice => {
        // if slice not has name or slice already exist in reducers -> return
        if(!slice.name || reducers[slice.name]){
          return
        }

        // add reducer to mapping
        reducers[slice.name] = slice.reducer
        slices[slice.name] = slice.name
      })

      // Generate a new combined reducer
      store.replaceReducer(combineReducers(reducers))
      // TODO: HUYNH trigger hydrate here
    },

    // Removes a reducer with the specified key
    remove: (key: string | string[]) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('Slice is not deleted on development mode, please reload the page to avoid outdated slice')
        return
      }

      const arrayKey = Array.isArray(key) ? key : [key]

      arrayKey.forEach(k => {
        if(!k || !reducers[k]) {
          return
        }
        // Remove it from the reducer mapping
        delete reducers[k]
        delete slices[k]

        // Add the key to the list of keys to clean up the state
        keyToRemove.push(k)
      })
      // Generate a new combined reducer
      store.replaceReducer(combineReducers(reducers))
    },
    restoreReducer: () => {
      store.replaceReducer(combineReducers(staticReducers))
    }
  }
}

export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>
