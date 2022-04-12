class SessionsController < ApplicationController

# def login
#     neighbor = Neighbor.find_by!(username: params[:username])
#     if neighbor&.authenticate(params[:password])
#         session[:current_neighbor] = neighbor.id
#         render json: user, status: :ok

#     else
#         render json: { error: "Invalid Password or Username"}, status: :unprocessable_entity
#     end
# end


def create 
    neighbor = Neighbor.find_by(username: params[:username])
    if params[:password] == neighbor.password
        session[:neighbor_id] = neighbor.id
        render json: neighbor, status: :created
    else
        render json: { error: "Invalid username or password" }, status: :unauthorized
    end
end

def destroy
    session.delete :neighbor_id
    head :no_content
end


end
