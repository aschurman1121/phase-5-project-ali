class NeighborSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :username, :email #, :image, :community_id,
  # attr_accessor :id, :name, :age, :username, :email #, :image, :community_id,
  # attributes  :id, :username
  # is this serializer preventing me from logging in?
end


# I tried to mess with the serializer, reseeded the database, made sure the routes matched. 

# still receiving the error below

# Neighbor Load (0.5ms)  SELECT "neighbors".* FROM "neighbors" WHERE "neighbors"."id" IS NULL LIMIT $1  [["LIMIT", 1]]
# ↳ app/controllers/application_controller.rb:7:in `current_neighbor'
# [active_model_serializers] Rendered ActiveModel::Serializer::Null with Hash (0.05ms)
# Filter chain halted as :authorized_neighbor rendered or redirected
# Completed 401 Unauthorized in 34ms (Views: 0.3ms | ActiveRecord: 12.3ms | Allocations: 6642)




# look inside the last commit