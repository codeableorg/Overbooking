Rails.application.routes.draw do
  namespace :api do
    get "/ranking", to: "scores#tops"

    resources :users, only: [:index, :new, :create]
  end
end
