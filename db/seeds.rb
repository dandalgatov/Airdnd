# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Listing.destroy_all
User.destroy_all
Neighborhood.destroy_all


@neighborhood = Neighborhood.create!(name: 'Upper West Side')
Neighborhood.create!(name: 'Chelsea')
Neighborhood.create!(name: 'Chinatown')
Neighborhood.create!(name: 'Civic Center')
Neighborhood.create!(name: 'East Village')
Neighborhood.create!(name: 'Financial Districtict')
Neighborhood.create!(name: 'Flatiron')
Neighborhood.create!(name: 'Gramercy Park')
Neighborhood.create!(name: 'Greenwich Village')
Neighborhood.create!(name: 'Little Italy')
Neighborhood.create!(name: 'Lower East Side')
Neighborhood.create!(name: 'Nolita')
Neighborhood.create!(name: 'Stuyvesant Town')
Neighborhood.create!(name: 'Tribeca')
Neighborhood.create!(name: 'West Village')
Neighborhood.create!(name: 'Central Park South')
Neighborhood.create!(name: 'Midtown')
Neighborhood.create!(name: 'Midtown East')
Neighborhood.create!(name: 'Kips Bay')
Neighborhood.create!(name: 'Murray Hill')
Neighborhood.create!(name: 'Sutton Place')
Neighborhood.create!(name: 'Turtle Bay')
Neighborhood.create!(name: 'Midtown South')
Neighborhood.create!(name: 'Hell\'s Kitchen')
Neighborhood.create!(name: 'Hudson Yards')
Neighborhood.create!(name: 'Upper East Side')
Neighborhood.create!(name: 'Carnegie Hill')
Neighborhood.create!(name: 'Lenox Hill')
Neighborhood.create!(name: 'Yorkville')
Neighborhood.create!(name: 'Central Harlem')
Neighborhood.create!(name: 'South Harlem')
Neighborhood.create!(name: 'East Harlem')
Neighborhood.create!(name: 'Hamilton Heights')
Neighborhood.create!(name: 'Inwood')
Neighborhood.create!(name: 'Marble Hill')

@amenity = Amenity.create!(name: 'Pets Allowed', category: 'Building')



@user = User.create!(first_name: 'user', email: 'user@email.com', password: '123456')
@listing = Listing.create!(address: '60 Riverside Boulevard', apt_num: '912', zip: '10069', beds: 2, baths: 2, sqft: 1199, rent: 6655, published: true, user_id: @user.id, neighborhood_id: @neighborhood.id)
@image = Image.create!(url: 'https://imgur.com/WVVgqRR.png', listing_id: @listing.id)
@listing.amenities<<@amenity
