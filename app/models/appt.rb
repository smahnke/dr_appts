class Appt < ApplicationRecord
  belongs_to :user
  belongs_to :doctor

  validates :date, :time, :reason, presence:true
end
