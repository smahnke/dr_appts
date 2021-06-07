class Doctor < ApplicationRecord
  has_many :appts, dependent: :destroy
  has_many :users, through: :appts

  validates :dr_name, :specialty, presence:true
end
