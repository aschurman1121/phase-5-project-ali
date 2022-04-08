class AddPasswordToNeighbors < ActiveRecord::Migration[6.1]
  def change
    add_column :neighbors, :password_digest, :string
  end
end
