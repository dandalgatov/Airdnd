class ImagesController < ApplicationController
  before_action :set_image, only: [:show, :update, :destroy]

  # GET /listings/1/images/
  def index
    @images = Image.where(listing_id: params[:listing_id])

    render json: @images
  end

  # GET /listings/1/images/1
  def show
    render json: @image
  end

  # POST /listings/1/images/
  def create
    @image = Image.new(image_params)
    @image.listing = Listing.find(params[:listing_id])

    if @image.save
      render json: @image, status: :created
    else
      render json: @image.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /listings/1/images/1
  def update
    if @image.update(image_params)
      render json: @image
    else
      render json: @image.errors, status: :unprocessable_entity
    end
  end

  # DELETE /listings/1/images/1
  def destroy
    @image.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_image
      @image = Image.where(id: params[:id], listing_id: params[:listing_id])
    end

    # Only allow a trusted parameter "white list" through.
    def image_params
      params.require(:image).permit(:url, :listing_id)
    end
end
