class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: User.all
  end

  def new
    user = User.new
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: 201
    else
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:id, :name, games_attributes: [:destination, :totalSeats, :pricePerSeat, :demandFactor, :underageCost, :overbookingCost, :criticalRatio, :suggestedOverbooking, :myCriticalRatio, :overbookingNumber, :cancellations, :totalRevenue, :netRevenue, :feedback], scores_attributes: [:totalRevenue])
  end
end