class CreateNeighbors < ActiveRecord::Migration[6.1]
  def change
    create_table :neighbors do |t|
      t.string :name
      t.integer :age
      t.integer :community_id
      t.string :image
      t.string :email

      t.timestamps
    end
  end
end
