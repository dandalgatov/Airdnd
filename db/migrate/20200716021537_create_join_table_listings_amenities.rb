class CreateJoinTableListingsAmenities < ActiveRecord::Migration[6.0]
  def change
    create_join_table :listings, :amenities do |t|
      # t.index [:listing_id, :amenity_id]
      # t.index [:amenity_id, :listing_id]
    end
  end
end
