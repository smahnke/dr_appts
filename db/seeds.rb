# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
5.times do
  user = User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name
  )
end
5.times do
  doctor = Doctor.create(
    dr_name: Faker::Name.name,
    specialty: Faker::Movies::StarWars.specie
  )
end
5.times do |u, i|
  appt = Appt.create(
    appt_date: Faker::Date.backward(days: 365),
    appt_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :long),
    reason: Faker::Quotes::Shakespeare.king_richard_iii_quote,
    user_id: u,
    doctor_id: i
  )
end
puts 'Data Seeded'