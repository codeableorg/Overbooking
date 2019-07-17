class AddUserToScores < ActiveRecord::Migration[5.2]
  def change
    add_reference :scores, :user, foreign_key: true
  end
end
