require "json"
json_file = File.read('db/college.json')

colleges = JSON.parse(json_file)
puts colleges.length
