class Api::V1::PeopleController < ApplicationController
  def index
    @people = Person.all
    render "index.json.jbuilder"
  end
  def create
    person = Person.new(
      name: params[:name],
      bio: params[:bio]
      )
    if person.save
      redirect_to "/api/v1/people"
    else
      render json: { errors: person.errors.full_messages}, status: 422
    end
  end
  def destroy
    person = Person.find(params[:id])
    person.destroy
    render json: { message: "person successfully deleted"}
  end
end
