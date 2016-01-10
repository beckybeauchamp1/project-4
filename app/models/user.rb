class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :trackable, :validatable
  belongs_to :college
  has_many :attendances, dependent: :destroy
  has_many :registered_events, through: :attendances, source: :event, class_name: "Event", dependent: :destroy
  has_many :events
  has_many :comments, through: :events
end
