# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_19_230154) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "amenities", force: :cascade do |t|
    t.string "name"
    t.string "category"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "amenities_listings", id: false, force: :cascade do |t|
    t.bigint "listing_id", null: false
    t.bigint "amenity_id", null: false
  end

  create_table "images", force: :cascade do |t|
    t.string "url"
    t.bigint "listing_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["listing_id"], name: "index_images_on_listing_id"
  end

  create_table "listings", force: :cascade do |t|
    t.string "address"
    t.string "apt_num"
    t.string "zip"
    t.float "beds"
    t.float "baths"
    t.float "sqft"
    t.float "rent"
    t.float "security_deposit"
    t.float "fee"
    t.text "description"
    t.boolean "published"
    t.bigint "user_id", null: false
    t.bigint "neighborhood_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["neighborhood_id"], name: "index_listings_on_neighborhood_id"
    t.index ["user_id"], name: "index_listings_on_user_id"
  end

  create_table "neighborhoods", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "phone"
    t.string "email"
    t.string "profile_picture"
    t.float "rating"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "images", "listings"
  add_foreign_key "listings", "neighborhoods"
  add_foreign_key "listings", "users"
end
