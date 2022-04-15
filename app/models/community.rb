class Community < ApplicationRecord
    belongs_to :neighbor
    belongs_to :event

    
end
