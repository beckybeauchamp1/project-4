class CreateEventLocations < ActiveRecord::Migration
  def change
    create_table :event_locations do |t|
      t.string :address, null: false
      t.string :city, null: false
      t.integer :zipcode, null: false
      t.float :lat
      t.float :long
      t.references :event, index: true, foreign_key: true
      t.timestamps null: false
    end
  end
end
