import EJS from 'ejs'
import Mail from '../../modules/email'

export default class User
{

  static EmailWasChanged (id, email)
  {
    return;
    // Send email to old email
    // Send email to new email
  }

  static PasswordChangeRequested (username, email, link)
  {

    EJS.renderFile(`${homeDirectory}/public/views/common/email/accounts/password_reset.ejs`, { user : { username : username, email : email }, link : link }, ((er, da) => {
      new Mail(email, da)
    }))
  }

  static SuspensionFiled (id)
  {
    return;

    // Send email concerning suspension
  }

  static AccountWasMade (id, email)
  {
    return;
    // Send welcome email
  }


}
