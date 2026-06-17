using PulseBoard.Api.Models;

namespace PulseBoard.Api.DTOs;

public class DashboardResponseDto
{
    public MetricSummary Summary { get; set; } = new();
    public List<ChartPoint> ChartData { get; set; } = new();
    public List<ProductEvent> RecentEvents { get; set; } = new();
}