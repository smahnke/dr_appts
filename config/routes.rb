Rails.application.routes.draw do
<<<<<<< HEAD
  root 'users#index'
  
=======
  root 'static#home'

  get '/home', to: 'static#home'

>>>>>>> 3a88044386a5c24e19239ac7e7960c580735d519
  resources :users 
  resources :doctors do
    resources :appts
  end
end
