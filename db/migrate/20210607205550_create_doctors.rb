class CreateDoctors < ActiveRecord::Migration[6.1]
  def change
    create_table :doctors do |t|
      t.string :dr_name
      t.string :specialty

      t.timestamps
    end
  end
end
