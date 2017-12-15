export default class Messages
{

  static launch (cb)
  {
    process.stdout.write('\x1B[2J')
    cb(null, 'xHabbo Administration by Chris Pettyjohn')
  }

  static write (type, message)
  {

    switch (type)
    {
      // Success
      case 100:
        if (Array.isArray(message))
        {
          message.forEach(m => {
            console.log(`[Success] ${m}`)
          })
        }
        else
        {
          console.log(`[Success] ${message}`)
        }
      break

      // Error
      case 200:
        if (Array.isArray(message))
        {
          message.forEach(m => {
            console.log(`[Error] ${m}`)
          })
        }
        else
        {
          console.log(`[Error] ${message}`)
        }
      break

      // Fatal Error
      case 300:
        if (Array.isArray(message))
        {
          message.forEach(m => {
            console.log(`[Fatal Error] ${m}`)
          })
        }
        else
        {
          console.log(`[Fatal Error] ${message}`)
        }
      break

      // Informative Message
      case 400:
        if (Array.isArray(message))
        {
          message.forEach(m => {
            console.log(`[Info] ${m}`)
          })
        }
        else
        {
          console.log(`[Info] ${message}`)
        }
      break

    }
  }

}
