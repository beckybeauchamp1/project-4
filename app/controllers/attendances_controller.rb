class AttendancesController < ApplicationController
  def index
    @attendances = current_user.attendances
  end

  def destroy
    @attendance = Attendance.find(params[:id])
    @attendance.destroy
    if @attendance.destroy
      render status: 200, json: @attendance.to_json
    end
  end
end
