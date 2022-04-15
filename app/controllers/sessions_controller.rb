class SessionsController < ApplicationController
    skip_before_action :authorized_neighbor, only: :create
    
    # used for login
    def create
        neighbor = Neighbor.find_by(username: params[:username])

        if neighbor&.authenticate(params[:password]) 
            session[:current_neighbor] = neighbor.id
            render json: neighbor, status: :created
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end



# used for logout
def destroy
    # session.delete :neighbor_id
    session.delete :current_neighbor
    head :no_content
end


end
