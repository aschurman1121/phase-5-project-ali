class NeighborSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :username, :email #, :image, :community_id,
  has_many :events

end
