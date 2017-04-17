
import Error from '../../../../../libraries/error'
import Words from '../../../../../database/models/emu/wordfilter'

class Wordfilter
{

    constructor (Website)
    {
      Website.get('/emu/customize/wordfilter', Wordfilter.view)
      Website.post('/emu/customize/wordfilter/create', Wordfilter.create)
      Website.post('/emu/customize/wordfilter/edit', Wordfilter.edit)
      Website.get('/emu/customize/wordfilter/delete/:id', Wordfilter.delete)
      Website.get('/emu/customize/wordfilter/empty', Wordfilter.empty)
    }

    static view (request, result)
    {
      Words.fetchAll()
        .then ((words) => {
          result.render('user/emu/customize/wordfilter', {
            page       : 'Banned Words',
            wordfilter : words.toJSON()
          })
        })
    }

    static create (request, result)
    {
      const word = { word : request.body.word, replacement : request.body.replacement, addedby : request.user.user.habbo.username, bannable : request.body.bannable }
      new Words(word).save()
        .then ((results) => {
          request.flash('success', `${request.body.word} has been added to blocked words`)
          result.redirect('back')
        })
        .catch ((error) => {
          new Error('normal', error)
          result.render('errors/500')
        })
    }

    static edit (request, result)
    {
      Words.where('id', request.body.id).fetch()
        .then ((results) => {
          results.set('replacement', request.body.replacement)
          results.set('bannable', request.body.bannable)
          if (request.body.origin != request.body.word) {
            results.set('word', request.body.word)
            results.set('addedby', request.user.user.habbo.username)
          }
          results.save()

          request.flash('success', `${request.body.word} has been modified`)
          result.redirect('back')
        })
        .catch ((error) => {
          new Error('normal', error)
          result.render('errors/500')
        })
    }

    static delete (request, result)
    {
      Words.where('id', request.params.id).fetch()
        .then ((results) => {
          Words.where('word', request.params.word).destroy()
          request.flash('success', `<b>${results.toJSON().word}</b> has been removed from the list`)
          result.redirect('back')
        })
        .catch ((error) => {
          new Error('normal', error)
          result.render('errors/500')
        })
    }

    static empty (request, result)
    {
      Words.where('bannable', '1').destroy()
        .then ((results) => {
          request.flash('success', 'The wordfilter has been wiped clean')
          result.redirect('back')
        })
        .catch ((error) => {
          new Error('normal', error)
          result.render('errors/500')
        })
    }

}
module.exports = Wordfilter
