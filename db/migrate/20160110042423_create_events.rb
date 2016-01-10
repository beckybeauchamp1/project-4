class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.string :image
      t.string :content
      t.date :start_date
      t.date :end_date
      t.time :starting_time
      t.time :ending_time
      t.decimal :cost, precision: 8, scale: 2
      t.references :user, index: true, foreign_key: true
      t.references :college, index: true, foreign_key: true
      t.timestamps null: false
    end
  end
end
