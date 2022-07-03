const { EmojiAPI } = require('emoji-api')
const emoji = new EmojiAPI()
console.log(emoji.UnicodeToEmoji('1f97a'))

emoji.get('🥺').then((emoji) => {
  console.log(emoji)
})
