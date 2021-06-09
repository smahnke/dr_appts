class DoctorsController < ApplicationController
  before_action :set_doctor, only: [:show, :edit, :update, :destroy]
  def index
    @doctors = Doctor.all
    render component: 'Doctors', props: { doctors: @doctors}
  end

  def show
    render component: 'Doctor', props: { doctor: @doctor}
  end

  def new
    @doctor = Doctor.new
    render component: 'DoctorNew', props: { doctor: @doctor}
  end

  def edit
    render component: 'DoctorEdit', props: { doctor: @doctor}
  end

  def create
    @doctor = Doctor.new(doctor_params)
    if @doctor.save
      redirect_to @doctor
    else
      render component: 'CourseNew', props: {doctor: @doctor}
  end

  def update
    if @doctor.update(doctor_params)
      redirect_to @doctor
    else
      render component: 'CourseEdit', props: {doctor: @doctor}
  end

  def destroy
    @doctor.destroy
    redirect_to root_path
  end
  
  private
    def set_doctor
      @doctor = Doctor.find(params[:id])
    end
    def doctor_params
      params.require(:doctor).permit(:dr_name, :specialty)
end
