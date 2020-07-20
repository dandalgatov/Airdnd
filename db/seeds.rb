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
Amenity.create!(name: 'Laundry in Building', category: 'Building')
Amenity.create!(name: 'Elevator', category: 'Building')
Amenity.create!(name: 'Gym', category: 'Building')
Amenity.create!(name: 'Swimming Pool', category: 'Building')
Amenity.create!(name: 'Doorman', category: 'Building')
Amenity.create!(name: 'Pied-a-Terre Allowed', category: 'Building')
Amenity.create!(name: 'Parking Available', category: 'Building')
Amenity.create!(name: 'Garage Parking', category: 'Building')

Amenity.create!(name: 'Washer/Dryer In-Unit', category: 'Listing')
Amenity.create!(name: 'Dishwasher', category: 'Listing')
Amenity.create!(name: 'Furnished', category: 'Listing')
Amenity.create!(name: 'Outdoor Space', category: 'Listing')
Amenity.create!(name: 'Storage Available', category: 'Listing')
Amenity.create!(name: 'Fireplace', category: 'Listing')
Amenity.create!(name: 'Loft', category: 'Listing')
Amenity.create!(name: 'Sublet', category: 'Listing')
Amenity.create!(name: 'Guarantors Accepted', category: 'Listing')


@user = User.create!(first_name: 'Dan', last_name: 'Dalgatov', profile_picture: 'https://image.shutterstock.com/image-photo/picture-confused-young-man-dressed-260nw-553535785.jpg', phone: '555-555-5555', rating: 2,  email: 'user@email.com', password: '123456')
@listing = Listing.create!(address: '60 Riverside Boulevard', apt_num: '912', zip: '10069', beds: 1, baths: 2, sqft: 1199, rent: 1000, published: true, user_id: @user.id, neighborhood_id: @neighborhood.id)

Listing.create!(address: '60 Riverside Boulevard', apt_num: '913', zip: '10069', beds: 2, baths: 2, sqft: 1199, rent: 2000, published: true, user_id: @user.id, neighborhood_id: @neighborhood.id)

Listing.create!(address: '60 Riverside Boulevard', apt_num: '914', zip: '10069', beds: 3, baths: 2, sqft: 1199, rent: 3000, published: true, user_id: @user.id, neighborhood_id: @neighborhood.id)

Listing.create!(address: '60 Riverside Boulevard', apt_num: '915', zip: '10069', beds: 4, baths: 2, sqft: 1199, rent: 4000, published: true, user_id: @user.id, neighborhood_id: @neighborhood.id)

Listing.create!(address: '60 Riverside Boulevard', apt_num: '916', zip: '10069', beds: 5, baths: 2, sqft: 1199, rent: 5000, published: true, user_id: @user.id, neighborhood_id: @neighborhood.id)

Listing.create!(address: '60 Riverside Boulevard', apt_num: '917', zip: '10069', beds: 6, baths: 2, sqft: 1199, rent: 6000, published: true, user_id: @user.id, neighborhood_id: @neighborhood.id)


@image = Image.create!(url: 'https://imgur.com/WVVgqRR.png', listing_id: @listing.id)
Image.create!(url: 'https://picsum.photos/300/200', listing_id: @listing.id)
Image.create!(url: 'https://picsum.photos/300/200', listing_id: @listing.id)
Image.create!(url: 'https://picsum.photos/300/200', listing_id: @listing.id)
Image.create!(url: 'https://picsum.photos/300/200', listing_id: @listing.id)
Image.create!(url: 'https://picsum.photos/300/200', listing_id: @listing.id)
Image.create!(url: 'https://picsum.photos/300/200', listing_id: @listing.id)
Image.create!(url: 'https://picsum.photos/300/200', listing_id: 2)
Image.create!(url: 'https://picsum.photos/300/200', listing_id: 2)
Image.create!(url: 'https://picsum.photos/300/200', listing_id: 2)
Image.create!(url: 'https://picsum.photos/300/200', listing_id: 2)
Image.create!(url: 'https://picsum.photos/300/200', listing_id: 2)
Image.create!(url: 'https://picsum.photos/300/200', listing_id: 2)
Image.create!(url: 'https://picsum.photos/300/200', listing_id: 3)
Image.create!(url: 'https://picsum.photos/300/200', listing_id: 3)
Image.create!(url: 'https://picsum.photos/300/200', listing_id: 3)
Image.create!(url: 'https://picsum.photos/300/200', listing_id: 3)







@listing.amenities<<@amenity
