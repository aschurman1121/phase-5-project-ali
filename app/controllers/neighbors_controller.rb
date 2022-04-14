class NeighborsController < ApplicationController
    skip_before_action :authorized_neighbor, only: [:create]

def create
    neighbor = Neighbor.create!(neighbor_params)
    # byebug
    if neighbor.valid?
        render json: neighbor, status: :created
    else
        render json: { errors: neighbor.errors.full_messages }, status: :unprocessable_entity
    end
end

 # rescue_from ActiveRecord::RecordInvalid :rendered_unprocessable_entity
    # rescue ActiveRecord::RecordInvalid => invalid
       


def show
    # neighbor = Neighbor.find_by(username: params[:username])
    # if neighbor
        # render json: neighbor
    # neighbor = Neighbor.find(session[:current_neighbor])
    if current_neighbor
        render json: current_neighbor, status: :ok
    else
        render json: { error: "Not authorized, or not the current user"}, status: unauthorized
    end
end

private

# def rendered_unprocessable_entity(invalid)
#     render json: { error: invalid.record.errors}, status: :unprocessable_entity 
# end

def neighbor_params
    # params.require(:username).permit(:password, :email, :age ,:name)
    params.permit(:username, :password, :email, :age ,:name)
end



end
