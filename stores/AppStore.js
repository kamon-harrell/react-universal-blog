  // AppStore.js
  import { EventEmitter } from 'events'
  import _ from 'lodash'

  export default _.extend({}, EventEmitter.prototype, {

    // initial data
    data: {
      ready: false,
      globals: {},
      pages: [],
      item_num: 5
    },

    // emit change events
    emitChange () => {
      this.emit('change')
    },

    addChangeListener (callback) => {
      this.on('change', callback)
    },

    // remove change listener
    removeChangeListener (callback) => {
      this.removeListener('change', callback)
    }

  })
