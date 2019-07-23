class GameSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :destination, :totalSeats, :pricePerSeat, :demandFactor, :underageCost, :overbookingCost, :criticalRatio, :suggestedOverbooking, :myCriticalRatio, :overbookingNumber, :cancellations, :totalRevenue, :netRevenue, :feedback
end
