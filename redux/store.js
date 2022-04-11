import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import reducer from 'redux/reducers/index'

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null)
    },
    setItem(_key, value) {
      return Promise.resolve(value)
    },
    removeItem(_key) {
      return Promise.resolve()
    },
  }
}

const storage =
    typeof window !== 'undefined'
        ? createWebStorage('local')
        : createNoopStorage()

let store

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

function makeStore(initialState) {
  return createStore(
      persistedReducer,
      initialState,
      composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? makeStore(preloadedState)

  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    })
    store = undefined
  }

  if (typeof window === 'undefined') return _store
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}

