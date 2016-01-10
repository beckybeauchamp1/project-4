class EventsController < ApplicationController
  def index
    @events = Event.all
    render status: 200, json: @events.to_json
  end

  def show
    @event = Event.find(params[:id])
    render status: 200, json: @event.to_json
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      render status: 200, json: @event.to_json
    end
  end

  def update
    @event = Event.find(params[:id])
    if @event.update(event_params)
      render status: 200, json: @event.to_json
    end
  end

  def destroy
    @event = Event.find(params[:id])
    if @event.destroy
      render status: 200, json: @event.to_json
    end
  end

  private
  def event_params
    params.require(:event).permit(:title, :image, :content, :start_date,
    :end_date, :starting_time, :ending_time, :cost)
  end
  
end
