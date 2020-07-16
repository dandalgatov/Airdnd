# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Neighborhood.destroy_all
Listing.destroy_all
User.destroy_all


@neighborhood = Neighborhood.create!(name: 'Upper West Side')
@amenity = Amenity.create!(name: 'Pets Allowed', category: 'Building')



@user = User.create!(first_name: 'user', email: 'user@email.com', password: '123456')
@listing = Listing.create!(address: '60 Riverside Boulevard', apt_num: '912', zip: '10069', beds: 2, baths: 2, sqft: 1199, rent: 6655, published: true, user_id: @user.id, neighborhood_id: @neighborhood.id)
@image = Image.create!(url: 'https://imgur.com/WVVgqRR.png', listing_id: @listing.id)
@listing.amenities<<@amenity
