# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.first.posts.create(name: 'first post!!!', body: "hey guys this is like my first post ever can't wait to see what it looks like!!!!")
User.first.posts.create(name: 'Random', body: 'so today i saw a squirrel!')
User.first.posts.create(name: 'opinion about music', body: 'I hate main stream music! absolute garbage' )
User.first.posts.create(name: 'just made a friend', body: 'so i made a friend today, first one in a long time, hope it doesnt go down as bad as the last one :)')