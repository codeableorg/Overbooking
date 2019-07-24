class AddFeedbackToGames < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :feedback, :string
  end
end
