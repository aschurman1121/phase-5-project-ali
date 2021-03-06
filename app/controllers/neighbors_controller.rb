class NeighborsController < ApplicationController
    skip_before_action :authorized_neighbor, only: :create


def index
    neighbor = Neighbor.all
    render json: neighbor
end


def create
    neighbor = Neighbor.create!(neighbor_params)
    # byebug
    if neighbor.valid?
        render json: neighbor, status: :created
    else
        render json: { errors: neighbor.errors.full_messages }, status: :unprocessable_entity
    end
end


def show
    neighbor = Neighbor.find_by(id: session[:current_neighbor])
    if neighbor
        render json: neighbor
    else
        render json: { error: "Not authorized, or not the current user"}, status: :unauthorized
    end
end

private

def neighbor_params
    # params.require(:username).permit(:password, :email, :age ,:name)
    params.permit(:username, :password, :email, :age ,:name, :event_id, :neighbors, :event)
end



end
