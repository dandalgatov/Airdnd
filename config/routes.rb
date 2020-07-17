Rails.application.routes.draw do
  resources :users 
  resources :neighborhoods 
  resources :listings do
    resources :images
    resources :amenities
  end


  post '/users/:user_id/neighborhoods/:neighborhood_id/listings/', to: 'listings#create'
  get '/users/:user_id/listings/', to: 'listings#show_by_user'
  get '/neighborhoods/:neighborhood_id/listings/', to: 'listings#show_by_neighborhood'

  post '/listings/search', to: 'listings#search'


  # get '/neighborhoods/:neighborhood_id/listings/?min=1234&max=5678&beds=1&baths=1', to: 'listings#show_by_neighborhood'

  # get '/neighborhoods/:neighborhood_id/listings/?min=1234&max=5678&beds=1&baths=1', to: 'listings#show_by_neighborhood'
  




  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
