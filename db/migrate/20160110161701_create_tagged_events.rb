class CreateTaggedEvents < ActiveRecord::Migration
  def change
    create_table :tagged_events do |t|
      t.references :tag, index: true, foreign_key: true
      t.references :event, index: true, foreign_key: true
    end
  end
end
