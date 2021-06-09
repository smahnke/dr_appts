class CreateAppts < ActiveRecord::Migration[6.1]
  def change
    create_table :appts do |t|
      t.integer :appt_date
      t.integer :appt_time
      t.string :reason
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :doctor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
