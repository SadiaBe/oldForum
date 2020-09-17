class CommentsController < ApplicationController
      
  def index
    @comments = Comment.all
    # comments doesnt need to be instance method because there are no more views. so stll work with or without the @
    render json: @comments
    # also can write: render({json: @comments})
  end
      
  def show
    @comment = Comment.find(params[:id])
    render json: @comment
  end 
      
  def create
    @comment = Comment.create(comment_params)
    render json: @comment
  end  
    #def update
    #     @comment = Comment.find(params[:id])
    #     @comment.update(comment_params)
    #     render json: @comment
    
    
def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render json: @comment
end
    
private

def comment_params
    params.permit(:comment, :post_id)
end

end
