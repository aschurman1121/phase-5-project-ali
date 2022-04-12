class NeighborsController < ApplicationController

def create
    neighbor = Neighbor.create!(neighbor_params)
    # byebug
    if user.valid?
        render json: user, status: :created
    else
        render json: { errors: neighbor.errors.full_messages }, status: :unprocessable_entity
    end
end


def show
    neighbor = Neighbor.find_by(username: params[:username])
    if neighbor
        render json: neighbor
    else
        render json: { error: "Not authorized"}, status: unauthorized
    end
end

private

def neighbor_params
    params.permit(:username, :password, :password_confirmation)
end



end
