import Mail from 'nodemailer'

export default class Email
{

  constructor (who, content, subject)
  {
    Mail.createTestAccount((e, a) => {

      let transporter = Mail.createTransport({
          host: 'smtp.zoho.com',
          port: 465,
          secure: true,
          auth: {
              user: 'xhabbo@zoho.com',
              pass: 'passwordLOL'
          }
      })

      let mailOptions = {
          from          : '"xHabbo Automation System 👻" <xhabbo@zoho.com>',
          to            : who,
          subject       : subject,
          text          : content,
          html          : content
      }

      transporter.sendMail(mailOptions, (e, i) => {
        if (e)
        {
          console.log(e)
        }
        else
        {
          console.log(i.response)
        }
      })
    })
  }

}
