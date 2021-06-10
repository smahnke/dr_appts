class ApptsController < ApplicationController
  before_action :set_doctor
  before_action :set_user
  before_action :set_appt, only: [:show, :edit, :update, :destroy]

  def index
    @appts = current_user.appts
    render component: 'Appts', props: (appts: @appts, user: current_user)
  end

  def show
    render component: 'Appt', props: {appt: @appt, doctor: @doctor, user: @user}
  end

  def new
    @user = User.all - @doctor.users
    @appt = @doctor.appts.new
    render component: 'ApptNew', props: { doctor: @doctor, appt: @appt, user: @user}
  end

  def edit
    render component: 'ApptEdit', props: { appt: @appt}
  end

  def create
    @appt = Appt.new(appt_params)
    if @appt.save
      redirect_to root_path
    else
      render component: 'ApptNew', props: {appt: @appt}
    end
  end

  def update
    if @appt.update(params[:id])
      redirect_to root_path
    else
      render component: 'ApptEdit', props: { appt: @appt}
    end
  end
  
  def destroy
    @appt.destroy
    redirect_to root_path
  end

  private
    def set_doctor
      @doctor = Doctor.find(params[:doctor_id])
    end

    def set_user
      @user = User.find(params[:doctor_id])
    end

    def set_appt
      @appt = Appt.find(params[:id])
    end

    def appt_params
      params.requre(:appt).permit(:appt_date, :appt_time, :reason, :user_id)
    end
end
