import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
   startX = 0,
   startY = 0,
   endX = 0,
   endY = 0,
   idStart = 0,
   PODECRIAR = false,
    }
  },
  mutations: {
    setStartPosition(payload) {
      this.startX = payload.startX;
      this.startY = payload.startY;
    },
     setEndPosition(payload) {
      this.endX = payload.endX;
      this.endY = payload.endY;
      this.PODECRIAR = true;
    },
     addArrow() {
      this.PODECRIAR = false;
      this.idStart = 0;
    },
     setStartId(payload) {
      this.idStart = payload;
    }
  }
})

const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
app.use(store)