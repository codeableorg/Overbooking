class Api::ScoresController < ApplicationController
  skip_before_action :verify_authenticity_token

  def tops
    render json: Score.order(totalRevenue: :desc).limit(5).includes(:user).as_json(only: [:totalRevenue], include: {user: {only: [:name, :id]}})
  end

end

