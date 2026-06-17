using PulseBoard.Api.DTOs;
using PulseBoard.Api.Models;

namespace PulseBoard.Api.Services;

public class AnalyticsService
{
    public async Task<DashboardResponseDto> GetDashboardAsync()
    {
        var dashboardData = new DashboardResponseDto
        {
            Summary = new MetricSummary
            {
                ActiveUsers = 12840,
                ConversionRate = 7.8,
                Revenue = 45200,
                PageViews = 98200
            },

            ChartData = new List<ChartPoint>
            {
                new() { Date = "2026-06-11", ActiveUsers = 1200 },
                new() { Date = "2026-06-12", ActiveUsers = 1450 },
                new() { Date = "2026-06-13", ActiveUsers = 1320 },
                new() { Date = "2026-06-14", ActiveUsers = 1680 },
                new() { Date = "2026-06-15", ActiveUsers = 1810 },
                new() { Date = "2026-06-16", ActiveUsers = 1760 },
                new() { Date = "2026-06-17", ActiveUsers = 1940 }
            },

            RecentEvents = new List<ProductEvent>
            {
                new()
                {
                    Id = 1,
                    EventName = "checkout_started",
                    UserId = "USR-1029",
                    Platform = "Web",
                    CreatedAt = DateTime.UtcNow.AddMinutes(-12)
                },
                new()
                {
                    Id = 2,
                    EventName = "payment_completed",
                    UserId = "USR-2041",
                    Platform = "Mobile",
                    CreatedAt = DateTime.UtcNow.AddMinutes(-28)
                },
                new()
                {
                    Id = 3,
                    EventName = "feature_used",
                    UserId = "USR-8831",
                    Platform = "Web",
                    CreatedAt = DateTime.UtcNow.AddHours(-1)
                }
            }
        };

        return await Task.FromResult(dashboardData);
    }
}