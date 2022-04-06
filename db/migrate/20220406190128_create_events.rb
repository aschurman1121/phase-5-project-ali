class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :event_title
      t.date :date
      t.string :purpose
      t.string :supplies
      t.string :location
      t.time :start_time
      t.time :end_time
      t.integer :community_id

      t.timestamps
    end
  end
end
