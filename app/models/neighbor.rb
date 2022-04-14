class Neighbor < ApplicationRecord
    has_many :communities
    has_many :events, through: :communities
    has_secure_password

    validates :username, length: { minimum: 3 } && uniqueness: :true #with: /^[A-Za-z0-9]+$/, message: "Please use both letters and numbers"

    validates :password, length: { minimum: 3 }

    validates :name, presence: true

    validates :age, numericality: true, message: "Must be a number!"

    validates :email, uniqueness: :true
end
