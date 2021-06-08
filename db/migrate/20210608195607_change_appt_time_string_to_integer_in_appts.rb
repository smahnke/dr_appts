class ChangeApptTimeStringToIntegerInAppts < ActiveRecord::Migration[6.1]
  def change
    change_column :appts, :time, 'integer USING CAST(time AS integer)'
  end
end
