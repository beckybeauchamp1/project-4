class CreateColleges < ActiveRecord::Migration
  def change
    create_table :colleges do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zipcode
      t.float :lat
      t.float :long
      t.timestamps null: false
    end
  end
end
