class EventsController < ApplicationController

    def index
        # byebug
        event = Event.all   
        render json: event
    end

    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    def update 
        event = find_event
        event.update!(event_params)
        render json: user, status: :created
    end

    private

    def event_params
        params.permit(:event_title, :purpose, :supplies, :location, :start_time, :end_time, :community_id, :date, )
    end

    def find_event
        Event.find_by!(id: params[:id])
    end

end
