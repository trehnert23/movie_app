class CommentsController < ApplicationController
	def index
		@comments = Comment.all
	end

	def new
		@comment = Comment.new
	end

	def create
	  @comment = Comment.new(message_params)
	  if @comment.save
	  	redirect_to :back
	    # redirect_to '/movies/:id'
	  else 
	    render 'new'
	  end
	end
	
	private
	def message_params
	  params.require(:comment).permit(:content)
	end
end





