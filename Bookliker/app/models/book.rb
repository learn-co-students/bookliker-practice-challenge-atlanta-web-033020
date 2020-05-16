class Book < ApplicationRecord
    has_many :likes
    has_many :users, through: :likes
end
