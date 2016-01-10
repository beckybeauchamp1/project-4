class Tag < ActiveRecord::Base
  has_many :tagged_events
  has_many :events, through: :tagged_events

end
