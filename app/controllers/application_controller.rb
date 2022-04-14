class ApplicationController < ActionController::API
  before_action :authorized_neighbor
  include ActionController::Cookies

  def current_neighbor
    Neighbor.find_by(id: session[:current_neighbor])
  end

  def authorized_neighbor
    return render json: {error: "Not Authorized"}, status: :unauthorized unless current_neighbor
  end

end
