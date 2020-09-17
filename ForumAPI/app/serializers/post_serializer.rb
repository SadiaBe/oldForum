class PostSerializer < ActiveModel::Serializer
  has_many :comments
  attributes :id, :title, :content, :likes, :user_id
end 

