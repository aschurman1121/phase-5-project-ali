class SessionsController < ApplicationController

def create 
    neighbor = Neighbor.find_by(username: params[:username])
    session[:neighbor_id] = neighbor.id
    render json: neighbor
end

def destroy
    session.delete :neighbor_id
    head :no_content
end


end
