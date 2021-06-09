class Appt < ApplicationRecord
  belongs_to :user
  belongs_to :doctor

  validates :appt_date, :appt_time, :reason, presence:true
end
