Rails.application.routes.draw do
  get '/movies' => 'movies#index'
  get '/movies/:id' => 'movies#show', as: :movie

  get '/actors' => 'actors#index'
  get '/actors/:id' => 'actors#show', as: :actor

  get '/comments' => 'comments#index'
  get '/comments/new' => 'comments#new'

  post 'comments' => 'comments#create'

end