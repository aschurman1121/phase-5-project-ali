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





puts 'seeding neighbors...'


N1 = Neighbor.create(name: "Rose", username: "Rose1", age: 37, image: "" , email: "alexandraschurman@gmail.com", password:"yyyy"  )
N2 = Neighbor.create(name: "Penny", username: "Penny1", age: 29, image: "", email: "alexandraschurman@gmail.com", password:"yyyy"  )
N3 = Neighbor.create(name: "Adam",username: "Adam1", age: 43, image: "", email: "alexandraschurman@gmail.com", password:"yyyy" )
N4 = Neighbor.create(name: "Mickey", username: "Mickey1", age: 33, image: "", email: "alexandraschurman@gmail.com", password:"yyyy" )
N5 = Neighbor.create(name: "Wendy", username: "Wendy1", age: 52, image: "", email: "alexandraschurman@gmail.com", password:"yyyy")
N6 = Neighbor.create(name: "Tony", username: "Tony1", age: 27, image: "", email: "alexandraschurman@gmail.com", password:"yyyy")



puts 'seeding events...'

E1 = Event.create(event_title: "Panhandle Park Volunteer Project", date: Date.parse(2022-04-24, '%d-%m-%Y') , purpose: "The North of the Panhandle Neighborhood Association needs your help to beautify and maintain the basketball court and landscape around the children’s playground", supplies: "gloves, close toed shoes, long pants, and layers", location: "1639 Oak St, San Francisco, CA 94117", start_time: "11:00 am" , end_time: "1:00pm")
E2 = Event.create(event_title: "HELP OUT: San Francisco AIDS foundation" , date: Date.parse(2022-05-07, '%d-%m%Y'), purpose: "Join San Francisco AIDS Foundation and Syringe Access Services (SAS) in improving the health of the community. Help individuals be safer, promote health, and reduce rates of new HIV and HepC infections in the community.", supplies: "supplies are provided", location: "1035 Market Street, suite 400, San Francisco, CA 94103, US
" , start_time: "6:00pm", end_time: "8:00 pm" )


puts 'seeding communities...'
C1 = Community.create(community_name: "Haight", neighbor_id:  N1.id , event_id: E1.id)
C2 = Community.create(community_name: "SoMa", neighbor_id: N2.id , event_id: E2.id)
C3 = Community.create(community_name: "Pacific Heights", neighbor_id: N3.id , event_id: E1.id )
C4 = Community.create(community_name: "Marina", neighbor_id: N4.id , event_id: E2.id )
C5 = Community.create(community_name: "Nob Hill", neighbor_id: N5.id , event_id: E1.id  )
C6 = Community.create(community_name: "Tenderloin", neighbor_id: N6.id , event_id: E2.id )
# C7 = Community.create(community_name: "Castro", neighbor_id:  ,event_id: )
# C8 = Community.create(community_name: "North Beach", neighbor_id:  ,event_id: )
# C9 = Community.create(community_name: "Sunset", neighbor_id:  ,event_id: )
# C10 = Community.create(community_name: "Richmond", neighbor_id:  ,event_id: )
# C11 = Community.create(community_name: "Mission",  neighbor_id:  ,event_id: )
# C12 = Community.create(community_name: "Noe Valley", neighbor_id:  ,event_id: )
# C13 = Community.create(community_name: "NoPa", neighbor_id:  ,event_id: )

puts 'done seeding!'