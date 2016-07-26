$(function () {
  var data_chart = $('#dn-chart-report').data('chart');
    $('#dn-chart-report').highcharts({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Number of Report'
      },
      subtitle: {
        text: 'abc'
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Report'
        }
      },
      legend: {
          enabled: false
      },
      credits: {
        enabled: false
      },
      tooltip: {
          pointFormat: 'Number of reports : <b>{point.y:.1f} reports</b>'
      },
      series: [{
        data: data_chart ,
        dataLabels: {
          enabled: true,
          color: '#FFFFFF',
          align: 'center',
          format: '{point.y:.1f}',
          y: 5,
          style: {
              fontSize: '16px',
              fontFamily: 'Verdana, sans-serif'
          }
        }
      }]
    });
});

function select_date(){
  $(".dn-admin-date-field").change(function(){
    $("#form-admin-date").submit();
  });
};

$(document).on('ready', function() {
  select_date();
});

$(document).on('page:load', function(){
  select_date();
});
