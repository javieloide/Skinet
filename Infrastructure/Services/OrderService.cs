using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Core.Interfaces;

namespace Infrastructure.Services
{
    public class OrderService : IOrderService
    {
        private readonly IGenericRepository<Order> _orderRepo;
        private readonly IGenericRepository<DeliveryMethod> _dmRepo;
        private readonly IGenericRepository<Product> _productRepo;
        private readonly IBasketRepository _basketRepo;

        public OrderService(IGenericRepository<Order> orderRepo, IGenericRepository<DeliveryMethod> dmRepo,
        IGenericRepository<Product> productRepo, IBasketRepository basketRepo)
        {
            _basketRepo = basketRepo;
            _productRepo = productRepo;
            _orderRepo = orderRepo;
            _dmRepo = dmRepo;
        }

        public async Task<Order> CreateOrderAsync(string buyerEmail, int deliveryMethodId, string basketId, Address shippingAddress)
        {
            // 1. GET A BASKET FROM THE REPO
            var basket = await _basketRepo.GetBasketAsync(basketId);
            
            // 2. GET ITEMS FROM THE PRODUCT REPO
            var items = new List<OrderItem>();
            foreach (var item in basket.Items)
            {
                var productItem = await _productRepo.GetByIdAsync(item.Id);
                var itemOrdered = new ProductItemOrdered(productItem.Id, productItem.Name, productItem.PictureUrl);
                var orderItem = new OrderItem(itemOrdered, productItem.Price, item.Quantity);
                items.Add(orderItem);
            }

            // 3. GET DELIVERY METHOD FROM REPO
            var deliveryMethod = await _dmRepo.GetByIdAsync(deliveryMethodId);
            
            // 4. CALC SUBTOTAL
            var subtotal = items.Sum(item => item.Price * item.Quantity);
            
            // 5. CREATE ORDER
            var order = new Order(items, buyerEmail, shippingAddress, deliveryMethod, subtotal);

            // TODO: 6. SAVE TO DB
            
            // 7. RETURN THE ORDER
            return order;
        }

        public Task<IReadOnlyList<DeliveryMethod>> GetDeliveryMethodsAsync()
        {
            throw new System.NotImplementedException();
        }

        public Task<Order> GetOrderByIdAsync(int id, string buyerEmail)
        {
            throw new System.NotImplementedException();
        }

        public Task<IReadOnlyList<Order>> GetOrdersForUserAsync(string buyerEmail)
        {
            throw new System.NotImplementedException();
        }
    }
}