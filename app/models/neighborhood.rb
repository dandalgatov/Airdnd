class Neighborhood < ApplicationRecord
    has_many :listings, dependent: :destroy
end
