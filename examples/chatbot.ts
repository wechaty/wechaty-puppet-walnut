import { messageToSayable, WechatyBuilder } from 'wechaty'
import { log } from 'wechaty-puppet'
import PuppetWalnut from '../src/puppet-walnut.js'
// import { FileBox } from 'file-box'

const bot = WechatyBuilder.build({
  puppet: new PuppetWalnut(),
})  // get a Wechaty instance
  .on('login',            user => log.info(`User ${user} logged in`))
  .on('message',       async message => {
    log.info(`Message: ${message}`)
    // console.log(message)
  })

await bot.start()

const contact = await bot.Contact.find({ id: '15751763183' })
await contact.say({
  accuracy  : 15, // in meters
  address   : '北京市北京市海淀区45 Chengfu Rd',
  latitude  : 39.995120999999997,
  longitude : 116.334154,
  name      : 'poi',  // Huan(202109):
})
// contact.say(FileBox.fromUrl('https://fabian.oss-cn-hangzhou.aliyuncs.com/img/mmexport1630917534919.jpg'))
// console.log(msg)
// contact.sync()
// const message = await bot.Message.find({ id: '8dcf7a26-5760-103a-b02f-f7e6c49198e7' })
// console.log(message.age())
// console.log(message.date())
