import firebase from 'firebase/app'
import 'firebase/firestore'

import { SET_TALKS } from './mutation-types'

export const state = () => ({
  talks: []
})

export const mutations = {
  [SET_TALKS](state, talks) {
    state.talks = talks
  }
}

export const actions = {
  async fetchTalks({ commit }) {
    const querySnapshot = await firebase
      .firestore()
      .collection('talks')
      .orderBy('hour')
      .orderBy('track')
      .get()

    const talks = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    commit(SET_TALKS, talks)
  }
}

export const getters = {}
