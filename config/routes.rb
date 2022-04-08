Rails.application.routes.draw do
  
  resources :neighbors, only: [:create, ]
  resources :events
  resources :communities

  post '/signup', to: "neighbor#create"
  post '/login', to: "sessions#create"
  post '/login', to: "sessions#login"
  get '/authorized_neighbor', to: "neighbor#show"
  get '/me', to: 'neighbors#show'
  delete '/logout', to: "sessions#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }




end
