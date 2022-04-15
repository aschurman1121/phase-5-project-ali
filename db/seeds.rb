# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# destroy.all.Community
# destroy.all.Neighbor
# destroy.all.Event

# Community.all.destroy
# Neighbor.all.destroy
# Event.destroy


puts 'seeding communities...'

C1 = Community.create(community_name: "Haight" )
C2 = Community.create(community_name: "SoMa" )
C3 = Community.create(community_name: "Pacific Heights" )
C4 = Community.create(community_name: "Marina" )
C5 = Community.create(community_name: "Nob Hill" )
C6 = Community.create(community_name: "Tenderloin" )
C7 = Community.create(community_name: "Castro" )
C8 = Community.create(community_name: "North Beach" )
C9 = Community.create(community_name: "Sunset" )
C10 = Community.create(community_name: "Richmond", neighbor_id: neighbor.id , event)
C11 = Community.create(community_name: "Mission" )
C12 = Community.create(community_name: "Noe Valley" )
C13 = Community.create(community_name: "NoPa" )


puts 'seeding neighbors...'
N1 = Neighbor.create(name: "Rose", username: "Rose1", age: 37, image: "" , email: "rose@email.com", community_id: C3.id, password:"yyyy"  )
N2 = Neighbor.create(name: "Penny", username: "Penny1", age: 29, image: "", email: "penny@email.com", community_id: C4.id, password:"yyyy"  )
N3 = Neighbor.create(name: "Adam",username: "Adam1", age: 43, image: "", email: "adam@email.com", community_id: C8.id, password:"yyyy" )
N4 = Neighbor.create(name: "Mickey", username: "Mickey1", age: 33, image: "", email: "mickey@email.com", community_id: C10.id, password:"yyyy" )
N5 = Neighbor.create(name: "Wendy", username: "Wendy1", age: 52, image: "", email: "wendy@email.com", community_id: C5.id, password:"yyyy")
N6 = Neighbor.create(name: "Tony", username: "Tony1", age: 27, image: "", email: "tony@email.com", community_id: C12.id, password:"yyyy")

puts 'seeding events...'

E1 = Event.create(event_title: "Panhandle Park Volunteer Project", date: "04/16/2022" , purpose: "The North of the Panhandle Neighborhood Association needs your help to beautify and maintain the basketball court and landscape around the children’s playground", supplies: "gloves, close toed shoes, long pants, and layers", location: "1639 Oak St, San Francisco, CA 94117", start_time: "11:00 am" , end_time: "1:00pm", community_id: C13.id )
E2 = Event.create(event_title: "HELP OUT: San Francisco AIDS foundation" , date: "04/28/2022", purpose: "Join San Francisco AIDS Foundation and Syringe Access Services (SAS) in improving the health of the community. Help individuals be safer, promote health, and reduce rates of new HIV and HepC infections in the community.", supplies: "supplies are provided", location: "1035 Market Street, suite 400, San Francisco, CA 94103, US
" , start_time: "6:00pm", end_time: "8:00 pm", community_id: C2.id )


puts 'done seeding!'