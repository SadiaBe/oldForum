class User < ApplicationRecord
    has_many :comments, through: :posts
    has_many :posts
    
end
