Rails.application.routes.draw do
  
  resources :neighbors, only: [:create, :show]
  resources :events, only: [:index, :create, :update]
  resources :communities

  post '/signup', to: "neighbors#create"
  post '/events/create', to: "events#create"
  patch 'events/:id/edit', to: "events#edit"
  post '/login', to: "sessions#create"
  
  get '/authorized_neighbor', to: "neighbor#show"
  get '/me', to: 'neighbors#show'
  # get '/me', to: "event#index"
  # get '/', to: 'neighbors#show'
  get '/events', to: "events#index"
  
  delete '/logout', to: "sessions#destroy" #fetch to this path (method DELETE) - path to login on front end
  
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }




end 
