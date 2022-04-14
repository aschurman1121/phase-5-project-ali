class Event < ApplicationRecord
    has_many :communities
    has_many :neighbors, through: :communities

    # validates :purpose, :supplies, length: { maximum: 500 }
end
