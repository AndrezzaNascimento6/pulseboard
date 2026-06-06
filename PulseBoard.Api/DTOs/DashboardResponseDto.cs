using System.Collections.Generic;
using PulseBoard.Api.Models;

namespace PulseBoard.Api.DTOs
{
    public class DashboardResponseDto
    {
        public IEnumerable<MetricSummary> Metrics { get; set; } = new List<MetricSummary>();
        public IEnumerable<ChartPoint> Chart { get; set; } = new List<ChartPoint>();
        public IEnumerable<ProductEvent> Events { get; set; } = new List<ProductEvent>();
    }
}
