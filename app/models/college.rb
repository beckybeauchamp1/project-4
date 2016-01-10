class College < ActiveRecord::Base
  has_many :events
  has_many :users

  def self.take_out_colleges
    colleges = College.all
    types = ["Community", "Beauty", "Cosmetology", "Phoenix", "ITT Technical", "Therapy", "Skin",
      "Aveda", "Healing", "Paul Mitchell", "Hair", "Hairstyling", "Health", "Culinary", "Dental", "Aveda", "Massage",
      "Medical", "Make-up"]
      colleges.each_with_index do |college, index|
        types.each do |type|
          if college.include?(type)
            colleges.delete_at(index)
          end
        end
      end
      return colleges
  end

end
