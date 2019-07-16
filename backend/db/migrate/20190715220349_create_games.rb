class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.references :user, foreign_key: true
      t.string :destination
      t.integer :totalSeats
      t.integer :pricePerSeat
      t.float :demandFactor
      t.integer :underageCost
      t.integer :overbookingCost
      t.float :criticalRatio
      t.integer :suggestedOverbooking
      t.float :myCriticalRatio
      t.integer :overbookingNumber
      t.integer :cancellations
      t.integer :totalRevenue
      t.integer :netRevenue

      t.timestamps
    end
  end
end
