class MoviesController < ApplicationController
  	def index
    	@movies = Movie.all
  	end

  	def new
  	  @comments = Comment.new
  	end

  	def show
      @movie = Movie.find(params[:id])
      @actors = @movie.actors

      @comments = Movie.find(params[:id]).comments

      # @list = Comment.find(params[:id])
      # @comments = @list.comments

      @comment = Comment.new(params[:comment_id])
      # if @comment.save
      #   redirect_to '/movies/:id'
      # else 
      #   render 'new'
      # end
    end

    private
    def comment_params
      params.require(:comment).permit(:content)
    end
end
