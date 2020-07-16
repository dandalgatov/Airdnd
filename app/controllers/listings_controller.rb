class ListingsController < ApplicationController
  before_action :set_listing, only: [:show, :update, :destroy]

  # GET /listings
  def index
    @listings = Listing.all

    render json: @listings, include: [:neighborhood, :amenities, :images, :user], except: [:user_id, :neighborhood_id]
  end

  # GET /listings/1
  def show
    render json: @listing, include: [:neighborhood, :amenities, :images, :user], except: [:user_id, :neighborhood_id]
  end

  # GET /neighborhood/1/listings/
  def show_by_neighborhood
    @neighborhood_listings = Listing.where(neighborhood_id: params[:neighborhood_id])
    render json: @neighborhood_listings, include: [:neighborhood, :amenities, :images, :user], except: [:user_id, :neighborhood_id]
  end

  # GET /user/listings/
  def show_by_user
    @user_listings = Listing.where(user_id: params[:user_id])
    render json: @user_listings, include: [:neighborhood, :amenities, :images, :user], except: [:user_id, :neighborhood_id]
  end

  # POST /users/1/neighborhoods/1/listings/
  def create
    @listing = Listing.new(listing_params)
    @listing.user = User.find(params[:user_id])
    @listing.neighborhood = Neighborhood.find(params[:neighborhood_id])
    if @listing.save
      render json: @listing, status: :created
    else
      render json: @listing.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /listings/1
  def update
    if @listing.update(listing_params)
      render json: @listing
    else
      render json: @listing.errors, status: :unprocessable_entity
    end
  end

  # DELETE /listings/1
  def destroy
    @listing.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_listing
      @listing = Listing.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def listing_params
      params.require(:listing).permit(:address, :apt_num, :zip, :beds, :baths, :sqft, :rent, :security_deposit, :fee, :description, :published, :user_id, :neighborhood_id)
    end
end
