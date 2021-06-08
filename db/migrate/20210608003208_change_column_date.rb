class ChangeColumnDate < ActiveRecord::Migration[6.1]
  def change
    rename_column :appts, :date, :appt_date
  end
end
