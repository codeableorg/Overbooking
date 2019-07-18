class AddTotalToScores < ActiveRecord::Migration[5.2]
  def change
    add_column :scores, :totalRevenue, :integer
  end
end
