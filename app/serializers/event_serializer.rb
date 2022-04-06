class EventSerializer < ActiveModel::Serializer
  attributes :id, :event_title, :date, :purpose, :supplies, :location, :start_time, :end_time, :community_id
end
