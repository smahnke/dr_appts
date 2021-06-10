Rails.application.routes.draw do
  root 'static#home'

  get '/home', to: 'static#home'

  resources :users 
  resources :doctors do
    resources :appts
  end
end
