class Listing < ApplicationRecord
  belongs_to :user
  belongs_to :neighborhood
  has_many :images, dependent: :destroy
  has_and_belongs_to_many :amenities
end
