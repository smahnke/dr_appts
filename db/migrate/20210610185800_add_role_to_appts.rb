class AddRoleToAppts < ActiveRecord::Migration[6.1]
  def change
    add_column :appts, :role, :string
  end
end
