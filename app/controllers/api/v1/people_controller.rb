class Api::V1::PeopleController < ApplicationController
  def index
    @people = Person.all
    render "index.json.jbuilder"
  end
  def create
    person = Person.create(
      name: params[:name],
      bio: params[:bio]
      )
    redirect_to "/"
  end
end
