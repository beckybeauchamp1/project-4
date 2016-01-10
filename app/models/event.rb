class Event < ActiveRecord::Base
  belongs_to :user
  belongs_to :event_location
  belongs_to :college
  has_many :attendances, dependent: :destroy
  has_many :users, through: :attendances
  has_many :comments, dependent: :destroy
  has_many :tagged_events, dependent: :destroy
  has_many :tags, through: :tagged_events
end
