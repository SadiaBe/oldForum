# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# puts "destroying old users & posts but id will not reset!..."
# User.destroy_all
# Post.destroy_all
Comment.destroy_all

# puts "re-seeding"

# users = [
#     {
#         name: "Fabia",
#         password: "123"
#     },
#     {
#         name: "Arfan",
#         password: "321"
#     },
#     {
#         name: "Nanu",
#         password: "nana"
#     },
#     {
#         name: "Sadia",
#         password: "no"
#     }
# ]

# posts = [
#     {
#         title: "Girls who code",
#         content: "girls who code are amazing",
#         likes: 100,
#         user_id: 1
#     },
#     {
#         title: "Why should I",
#         content: "what is this even.. omg what are you ... ugh whatever",
#         likes: 0,
#         user_id: 2
#     },
#     {
#         title: "Not all old people hate tech!",
#         content: "women in tech should involve more older women",
#         likes: 12,
#         user_id: 3
#     },
#     {
#         title: "i really needa pass this",
#         content: "supper nervous how my project is going to turn out",
#         likes: 3,
#         user_id: 4
#     },
# ]

comments = [
    {
        comment: "I dont like this",
        post_id: 2
    },
    {
        comment: "I agree, girls are better",
        post_id: 1
    },
    {
        comment: "I need more wisdom from nanu in my life",
        post_id: 3
    },
]

#ran comments twice but forgot user id the first time so each comment id might have a different Id in thje database, however the user and post only ran once & was commented out when running comments. 

# User.create(users)
# puts "created users"
# Post.create(posts)
# puts "created posts"
Comment.create(comments)
puts 'created comments'
puts "done seeding"