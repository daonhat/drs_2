class Admin::DashboardController < Admin::BaseController
  def index
    @users = User.all
    @data = Hash.new
    @progesses = Progess.all
    @date = params[:date] || Date.today
    @progesses.each do |progess|
      @data[progess.name] = progess.reports.where(report_date: @date).size
    end

    @request_types = Request.request_types
    @data1 = Hash.new
    @request_types.each do |request_type|
      @data1[request_type] = Request.where(create_at: "" ).group(request_type)
    end
    # byebug
  end
end
