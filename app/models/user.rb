class User < ApplicationRecord
    has_many :listings
    
    has_secure_password

    validates :first_name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, length: { minimum: 6 }, on: :create
    
end
