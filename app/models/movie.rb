class Movie < ActiveRecord::Base
  has_many :parts
  has_many :comments
  has_many :actors, through: :parts
end
