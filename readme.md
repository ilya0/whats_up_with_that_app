# What's up with that?

![:image](http://ib4.huluim.com/video/50009415?region=US&size=600x400)

It's your first day on the job at professionalnobodies.biz an agency specializing in the MEN stack!

A scrappy start up is trying to get a corner on the Question and Answer market.

"'What's up with that?' aims to be the premiere app for people to ask questions anonymously.", says  the CTO reading from a bar napkin.

Time to get started!

## Instructions

Create a new branch for each section. 
When you've completed that section run `git add`, `git commit`, and then `git checkout master` 
Merge your branch back into master before moving on!

# Day 1

The former developer has left and now it's up to you to pick up where she left off. 

> git checkout -b create-question-post-route

"I think this is a trello?" says the CTO, sliding you her old yellow legal notepad.

- [x] resignation letter
- [ ] run `seeds.js`
- [ ] handle posts to create questions

# Day 2

The next day the CEO reports back on some user testing from his husband. "My husband
doesn't like to type. Can we set some defaults?"

> git checkout -b add-defaults-to-question-model

He gives you a crumbled post-it note

- [ ] don't allow questions without a title
- [ ] set empty body's to "what's up with that?"
- [ ] update seed file to test it out

# Day 3

Things are going well so you've decided to stick with things another day.  The CTO
phones in a party on his yacht. "I'm hanging out with models! I got an idea
that we should put some methods on our question model and add votes!"

> git checkout -b add-votes-to-model

He faxes you over some papers

- [ ] [research methods](http://mongoosejs.com/docs/guide.html#methods)
- [ ] update model with a vote count
- [ ] create a method to vote up or vote down

Later in the day you receive several more explicit faxes from the boat party
and another task.

> git checkout -b create-update-path-for-questions

- [ ] provide api endpoint to vote up or down

# Day 4

The CEO has heard "categories" are all the rage.  "It'd be great to add categories to a
question like 'science' or 'animal facts' he says, burning some receipts. 

> git checkout -b add-categories-to-question-model

"How am I going to do that?" you wonder aloud to your Two Hundred Cupid date.
"You'd probably add them as ["subdocs"](http://mongoosejs.com/docs/subdocs.html) says or just set their data type to [Array](http://mongoosejs.com/docs/schematypes.html). Choose whichever, but I'm into people who read docs and make choices."  They write the following on your arm in sharpee. 

- [ ] read docs
- [ ] make choices
- [ ] research static methods to make "findByCategory"
- [ ] ask me out again

# Day 5

Now we need to start answering questions! People should be able to chime in and create
answers for questions. Questions should have a bunch of answers and then we can all vote on 
the best one that we __feel__ is right. It's better than science!

"But if I'm no good in real relationships, how can I create them in Mongoose!?" You ask your developer-friend-turned-therapist. "Sounds like you're trying to use the new ["Populate" feature](http://mongoosejs.com/docs/populate.html)."

> git checkout -b add-answers-to-questions

# Day 6

The CEO's husband has gotten hold of your personal number and decided to ring you up on the weekend, because it's a start up!

"These links are harsh on my eyes! It'd be great to have questions listed with pretty urls like '/questions/YEAR/whats-up-with-birds'?"

> git checkout -b create-pretty-urls

"Don't worry I think I got it. You could implement some kind of [prehook](http://mongoosejs.com/docs/middleware.html#pre) where you set a slug attribute to the title and the date formatted as "YEAR/question-title" before you save the model. I'm late for mountain climbing!", says your Two Hundred Cupid lover.


