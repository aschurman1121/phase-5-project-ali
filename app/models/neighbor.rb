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
# ran rake db:reset
# rake db:seeded this morning
# commented out before_action in main branch
# branches getting different errors. 
        # Main: 500 on render > login with seed user > { " Not Authorized" } -> main branch has before_action & skip_before commented out
        # Broke: 401 > login with user > undefined in the console

# https://www.reddit.com/r/rails/comments/86342o/500_internal_server_error_with_respond_with/

# answer from 4 years ago
# My suspicion is that respond_with is trying to redirect to the users index action because the user record is valid but not persisted. By convention, users_url should be defined when a users index route is defined. Since it's undefined,  ----> I'm guessing your routes.rb file does not have a users index action.
# The solution depends on what you expect the response to be in the valid case. If it were me, I'd not use responders here and be explicit about what to return in the valid and invalid cases.
