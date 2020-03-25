class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    render json: User.getItemsHash
  end

  def show
    render json: @user
  end

  def create
  end

  def update
  end

  def destroy
  end

  private 
  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username)
  end
end
