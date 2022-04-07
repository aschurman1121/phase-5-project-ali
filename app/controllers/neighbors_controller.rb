class NeighborsController < ApplicationController

def show
    neighbor = Neighbor.find_by(username: params[:username])
    if neighbor
        render json: neighbor
    else
        render json: { error: "Not authorized"}, status: unauthorized
    end
end


end
