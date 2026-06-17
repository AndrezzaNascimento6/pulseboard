namespace PulseBoard.Api.Models;

public class ProductEvent
{
    public int Id { get; set; }
    public string EventName { get; set; } = string.Empty;
    public string UserId { get; set; } = string.Empty;
    public string Platform { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
}