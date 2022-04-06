# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'seeding neighbors...'
N1 = Neighbor.create(name: "Rose", age: 37, image: , email: "rose@email.com", community_id: )
N2 = Neighbor.create(name: "Penny", age: 29, image: , email: "penny@email.com", community_id: )
N3 = Neighbor.create(name: "Adam", age: 43, image: , email: "adam@email.com", community_id: )
N4 = Neighbor.create(name: "Mickey", age: 33, image: , email: "mickey@email.com", community_id: )
N5 = Neighbor.create(name: "Wendy", age: 52, image: , email: "wendy@email.com", community_id: )
N6 = Neighbor.create(name: "Tony", age: 27, image: , email: "tony@email.com", community_id: )

puts 'seeding events...'

E1 = Event.creat(event_title: "Panhandle Park Volunteer Project", date: "04/16/2022" , purpose: "The North of the Panhandle Neighborhood Association needs your help to beautify and maintain the basketball court and landscape around the children’s playground", supplies: "gloves, close toed shoes, long pants, and layers", location: "1639 Oak St, San Francisco, CA 94117", start_time: , end_time: , community_id: )
E2 = Event.creat(event_title: , date:, purpose: , supplies: , location: , start_time: , end_time: , community_id: )
E3 = Event.creat(event_title: , date:, purpose: , supplies: , location: , start_time: , end_time: , community_id: )
E4 = Event.creat(event_title: , date:, purpose: , supplies: , location: , start_time: , end_time: , community_id: )

puts 'seeding communities...'

C1 = Community.create(community_name: )
C2 = Community.create(community_name: )
C3 = Community.create(community_name: )
C4 = Community.create(community_name: )

puts 'done seeding!'