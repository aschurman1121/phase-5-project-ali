class Community < ApplicationRecord
    belongs_to :neighbors
    belongs_to :events

    
end
