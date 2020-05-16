# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
require 'pry'

Like.destroy_all
User.destroy_all
Book.destroy_all

10.times do
    User.create(username: Faker::Internet.username)
end

10.times do
    Book.create(title: Faker::Book.title, description: Faker::Books::Dune.quote, img: Faker::Avatar.image)
end

10.times do
    Like.create(user_id: User.all.sample.id, book_id: Book.all.sample.id)
end