class Neighbor < ApplicationRecord
    has_secure_password
    has_many :communities
    has_many :events, through: :communities

    # validates :username, length: { minimum: 3 } && uniqueness: :true #with: /^[A-Za-z0-9]+$/, message: "Please use both letters and numbers"

    # validates :password, length: { minimum: 3 }

    # validates :name, presence: true

    # validates :age, numericality: true, message: "Must be a number!"

    # validates :email, uniqueness: :true

    validates :username, presence: true, uniqueness: :true
end

# when navigating to '/' and inputting a valid username --- receiving undefined in the console
# Started POST "/login" for 127.0.0.1 at 2022-04-13 21:44:38 -0700
# Processing by SessionsController#create as */*
# Parameters: {"session"=>{}}
# Neighbor Load (0.6ms)  SELECT "neighbors".* FROM "neighbors" WHERE "neighbors"."username" IS NULL LIMIT $1  [["LIMIT", 1]]
# ↳ app/controllers/sessions_controller.rb:6:in `create'
# [active_model_serializers] Rendered ActiveModel::Serializer::Null with Hash (0.12ms)
# Completed 401 Unauthorized in 39ms (Views: 0.8ms | ActiveRecord: 0.6ms | Allocations: 2582)  

# https://www.geeksforgeeks.org/how-to-fix-a-401-unauthorized-error/
# It may occur client does not provide the proper authentication credentials to the server within the request time.
# cleared cache
# flushed dns
# still receiving 401 > login with user > undefined in the console
# ran rake db:reset