class ChangeApptDateStringToIntegerInAppts < ActiveRecord::Migration[6.1]
  def change
    change_column :appts, :date, 'integer USING CAST(date AS integer)'
  end
end
