class Score < ApplicationRecord
  belongs_to :user

  def self.revenue_with_username
    self.as_json(only: [:totalRevenue], include: {user: {only: :name}})
  end
end
