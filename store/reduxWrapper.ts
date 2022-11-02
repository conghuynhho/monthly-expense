/**
 * Inspired of https://github.com/kirill-konshin/next-redux-wrapper/tree/7.x/packages/wrapper
 * with some modification to make sure it dispatches HYDRATE correctly
 * Check `triggerHydrate` for more details
 * */

import App, { AppContext, AppInitialProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextComponentType,
  NextPageContext,
} from 'next'
import context from 'react-redux/src/components/Context'


/**
 * Quick note on Next.js return types:
 *
 * Page.getInitialProps https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
 * as-is
 *
 * App.getInitialProps: AppInitialProps https://nextjs.org/docs/advanced-features/custom-app
 * {pageProps: any}
 *
 * getStaticProps https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 * {props: any}
 *
 * getServerSideProps https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
 * {props: any}
 */

export const HYDRATE = '__NEXT_REDUX_WRAPPER_HYDRATE__'

const getIsServer = () => typeof window === 'undefined'

const getDeserializedState = <S extends Store>(initialState: any, {deserializeState}: Config<S> = {}) =>
  deserializeState ? deserializeState(initialState) : initialState

const getSerializedState = <S extends Store>(state: any, {serializeState}: Config<S> = {}) =>
  serializeState ? serializeState(state) : state
export declare type MakeStore<S extends Store> = (context: Context) => S

export interface InitStoreOptions<S extends Store> {
    makeStore: MakeStore<S>;
    context: Context;
}

let sharedClientStore: any



const initStore = <S extends Store>({makeStore, context}: InitStoreOptions<S>): S => {
  const createStore = () => makeStore(context)

  if (getIsServer()) {
    const req: any = (context as NextPageContext)?.req || (context as AppContext)?.ctx?.req
    if (req) {
      // ATTENTION! THIS IS INTERNAL, DO NOT ACCESS DIRECTLY ANYWHERE ELSE
      // @see https://github.com/kirill-konshin/next-redux-wrapper/pull/196#issuecomment-611673546
      if (!req.__nextReduxWrapperStore) {
        req.__nextReduxWrapperStore = createStore()
      }
      return req.__nextReduxWrapperStore
    }

    return createStore()
  }

  // Memoize store if client
  if (!sharedClientStore) {
    sharedClientStore = createStore()
  }

  return sharedClientStore
}

export type Context = NextPageContext|AppContext|GetStaticPropsContext|GetServerSidePropsContext

export interface Config<S extends Store> {
    serializeState?: (state: ReturnType<S['getState']>) => any;
    deserializeState?: (state: any) => ReturnType<S['getState']>;
    debug?: boolean;
}
