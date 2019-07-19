class User < ApplicationRecord
  has_many :games
  has_many :scores

  accepts_nested_attributes_for :games
  accepts_nested_attributes_for :scores
end
