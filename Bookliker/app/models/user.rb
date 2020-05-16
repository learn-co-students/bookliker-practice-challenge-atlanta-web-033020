class User < ApplicationRecord
    has_many :likes
    has_many :books, through: :likes
end
