class Api::PostsController < ApplicationController
  before_action :set_post, only: [:update, :destroy, :show]
  def index
    render json: current_user.posts
  end

  def show
    render json: @post
  end

  def create
    post = current_user.posts.new(post_params)
    if post.save
      render json: post
    else
      render json: {}
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
    else 
      render json: @user.post.errors, status: 422
    end
  end

  def destroy
    @post.destroy
  end

  private

  def set_post
    @post = current_user.posts.find(params[:id])
  end

  def item_params
    params.require(:post).permit(:name, :body)
  end
end
