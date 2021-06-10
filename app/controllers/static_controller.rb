class StaticController < ApplicationController
  def home
    render component: 'Home'
  end
end
