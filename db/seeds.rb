# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'json'

Event.destroy_all
College.destroy_all
Comment.destroy_all
User.destroy_all
Attendance.destroy_all
Tag.destroy_all

json_file = File.read('db/college.json')

colleges_array = []
colleges = JSON.parse(json_file)
take_out_colleges = ["Community", "Beauty", "Cosmetology", "Phoenix", "ITT Technical", "Therapy", "Skin",
  "Aveda", "Healing", "Paul Mitchell", "Hair", "Hairstyling", "Health", "Culinary", "Dental", "Aveda", "Massage",
  "Medical", "Make-up"]

  colleges.each do |college|
    colleges_array << college
  end

  colleges = []

  colleges_array.each_with_index do |college, index|
    college_type = college["Name"]
    take_out_colleges.each do |type|
      if college_type.include?(type)
        colleges_array.delete_at(index)
      end
    end
  end

  colleges_array.each do |college|
    college = College.create!(
    name: college["Name"],
    address: college["Address"],
    city: college["City"],
    state: college["State"],
    zipcode: college["Zip"],
    lat: college["Lat"],
    long: college["Long"]
    )
    colleges << college
  end

  events_array = []
  tags_array = []

  100.times do |event|
    event = Event.create!(
    title: Faker::Name.title,
    image: Faker::Placeholdit.image,
    content: Faker::Hipster.paragraph,
    start_date: Faker::Date.forward(1),
    end_date: Faker::Date.forward(1),
    starting_time: Faker::Time.forward(1, :morning),
    ending_time: Faker::Time.forward(1, :evening),
    cost: Faker::Commerce.price
    )
    events_array << event
  end

  events_array[0..10].each do |event|
    event.college = colleges[0]
    event.save
  end

  events_array[10..20].each do |event|
    event.college = colleges[1]
    event.save
  end

  events_array[20..30].each do |event|
    event.college = colleges[2]
    event.save
  end

  events_array[30..40].each do |event|
    event.college = colleges[3]
    event.save
  end

  events_array[40..50].each do |event|
    event.college = colleges[3]
    event.save
  end

  events_array[50..60].each do |event|
    event.college = colleges[4]
    event.save
  end

  events_array[60..70].each do |event|
    event.college = colleges[5]
    event.save
  end

  events_array[70..80].each do |event|
    event.college = colleges[6]
    event.save
  end

  events_array[80..90].each do |event|
    event.college = colleges[7]
    event.save
  end

  events_array[90..100].each do |event|
    event.college = colleges[8]
    event.save
  end

  10.times do |tag|
    tag = Tag.create({
      title: Faker::SlackEmoji.activity
      })
      tags_array << tag
    end
