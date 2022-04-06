class AddEmailToNeighbors < ActiveRecord::Migration[6.1]
  def change
    add_column :neighbors, :email, :string
  end
end
