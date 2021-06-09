Rails.application.routes.draw do
  root 'users#index'
  
  resources :users 
  resources :doctors do
    resources :appts
  end
end
