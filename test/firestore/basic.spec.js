import { setup, teardown } from './utils'

const mockData = {
  'potatoe/pepepe': {
    hi: 'hi'
  }
}
const mockAnonymousUser = {
  uid: 'santima10',
  firebase: {
    sign_in_provider: 'anonymous'
  }
}

const mockUser = {
  uid: 'santima10',
  firebase: {
    sign_in_provider: 'password'
  }
}

describe('firestore', () => {
  let db

  describe('unauth user', () => {
    beforeAll(async () => {
      db = await setup({
        data: mockData
      })
    })

    afterAll(async () => {
      await teardown()
    })

    it('fails when writing to any collection', async () => {
      const ref = db.collection('potatoe')
      await expect(ref.doc('pepepe').set({ hi: 'hi' })).toDeny()
    })

    it('fails when reading from any collection', async () => {
      const ref = db.collection('potatoe').doc('pepepe')
      await expect(ref.get()).toDeny()
    })
  })

  describe('auth anonymous user', () => {
    beforeAll(async () => {
      db = await setup({
        auth: mockAnonymousUser,
        data: mockData
      })
    })

    afterAll(async () => {
      await teardown()
    })

    it('allows a writing to any collection', async () => {
      const ref = db.collection('potatoe')
      await expect(ref.doc('pepepepe').set({ hi: 'hi' })).toDeny()
    })

    it('allows a reading from any collection', async () => {
      const ref = db.collection('potatoe').doc('pepepe')
      await expect(ref.get()).toAllow()
    })
  })

  describe('auth user', () => {
    beforeAll(async () => {
      db = await setup({
        auth: mockUser,
        data: mockData
      })
    })

    afterAll(async () => {
      await teardown()
    })

    it('allows a writing to any collection', async () => {
      const ref = db.collection('potatoe')
      await expect(ref.doc('pepepepe').set({ hi: 'hi' })).toAllow()
    })

    it('allows a reading from any collection', async () => {
      const ref = db.collection('potatoe').doc('pepepe')
      await expect(ref.get()).toAllow()
    })
  })
})
