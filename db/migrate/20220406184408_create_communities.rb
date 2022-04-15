class CreateCommunities < ActiveRecord::Migration[6.1]
  def change
    create_table :communities do |t|
      t.string :community_name
      t.integer :neighbor_id
      t.integer :event_id

      t.timestamps
    end
  end
end
