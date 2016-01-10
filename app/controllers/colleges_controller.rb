class CollegesController < ApplicationController
  def index
    @colleges = College.all.order(:state)
    render status: 200, json: @colleges.to_json
  end

  def show
    @college = College.find(params[:id])
    render status: 200, json: @college.to_json
  end

  def create
    @college = College.new(college_params)
    if @college.save
      render status: 200, json: @college.to_json
    end
  end

  private
  def college_params
    params.require(:college).permit(:name, :address, :city, :state,
    :zipcode, :lat, :long)
  end

end
