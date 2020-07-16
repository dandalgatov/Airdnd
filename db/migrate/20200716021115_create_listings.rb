class CreateListings < ActiveRecord::Migration[6.0]
  def change
    create_table :listings do |t|
      t.string :address
      t.string :apt_num
      t.string :zip
      t.float :beds
      t.float :baths
      t.float :sqft
      t.float :rent
      t.float :security_deposit
      t.float :fee
      t.text :description
      t.boolean :published
      t.references :user, null: false, foreign_key: true
      t.references :neighborhood, null: false, foreign_key: true

      t.timestamps
    end
  end
end
