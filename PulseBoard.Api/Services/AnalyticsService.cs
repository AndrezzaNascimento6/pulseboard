using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PulseBoard.Api.DTOs;
using PulseBoard.Api.Models;

namespace PulseBoard.Api.Services
{
    public class AnalyticsService
    {
        public Task<DashboardResponseDto> GetDashboardAsync()
        {
            var now = DateTime.UtcNow;

            var dto = new DashboardResponseDto
            {
                Metrics = new List<MetricSummary>
                {
                    new MetricSummary { Name = "ActiveUsers", Value = 1234 },
                    new MetricSummary { Name = "Errors", Value = 12 }
                },
                Chart = Enumerable.Range(0, 7).Select(i => new ChartPoint
                {
                    Timestamp = now.AddDays(-i),
                    Value = Math.Round(100 + i * 10 + (new Random().NextDouble() * 10), 2)
                }).Reverse().ToList(),
                Events = new List<ProductEvent>
                {
                    new ProductEvent { ProductId = "prod-1", EventType = "view", Timestamp = now.AddMinutes(-30) },
                    new ProductEvent { ProductId = "prod-2", EventType = "purchase", Timestamp = now.AddHours(-2) }
                }
            };

            return Task.FromResult(dto);
        }
    }
}
