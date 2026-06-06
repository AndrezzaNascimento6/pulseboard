using System;

namespace PulseBoard.Api.Models
{
    public class ProductEvent
    {
        public string ProductId { get; set; } = string.Empty;
        public string EventType { get; set; } = string.Empty;
        public DateTime Timestamp { get; set; }
    }
}
