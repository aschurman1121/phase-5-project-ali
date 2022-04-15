class CreateNeighbors < ActiveRecord::Migration[6.1]
  def change
    create_table :neighbors do |t|
      t.string :username
      t.string :name
      t.integer :age
  
      t.string :image
      t.string :email


      t.timestamps
    end
  end
end
