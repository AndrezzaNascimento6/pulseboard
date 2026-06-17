namespace PulseBoard.Api.Models;

public class MetricSummary
{
    public int ActiveUsers { get; set; }
    public double ConversionRate { get; set; }
    public decimal Revenue { get; set; }
    public int PageViews { get; set; }
}