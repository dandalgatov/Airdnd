Rails.application.routes.draw do
  resources :users 
  resources :neighborhoods 
  resources :amenities
  resources :listings do
    resources :images
  end



  get '/users/:user_id/listings/', to: 'listings#show_by_user'
  get '/neighborhoods/:neighborhood_id/listings/', to: 'listings#show_by_neighborhood'
  post '/listings/search', to: 'listings#search'
  delete '/images/:id', to: 'images#destroy'

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
