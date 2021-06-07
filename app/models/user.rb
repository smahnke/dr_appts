class User < ApplicationRecord
  has_many :appts, dependent: :destroy
  has_many :doctors, through: :appts

  validates :first_name, :last_name, presence:true
end
