class PostsController < ApplicationController
    def index
        @posts = Post.all
        render json: @posts
      end
          
      def show
        @post = Post.find(params[:id])
        # make if statement here to render only if new post persists in backend
        render json: @post
      end 
          
      def create
          @post = Post.create(post_params)
          render json: @post
      end
          
      def update
          @post = Post.find(params[:id])
          @post.update(post_params)
          render json: @post
      end
          
      def destroy
          @post = Post.find(params[:id])
          @post.destroy
          render json: @post
      end
          
      private
    
      def post_params
          params.permit(:title, :content, :likes, :user_id)
      end
        
end
