import { reactive } from 'vue'

const defaultText =
  'Hello, world! This is a test. It includes a few words. Some repeated words are test, test, test.'

  export const mainStore = reactive({
    text: defaultText,
    changeText(newText: string) {
      this.text = newText
    },
    clearText() {
      this.text = ''
    }
  })
