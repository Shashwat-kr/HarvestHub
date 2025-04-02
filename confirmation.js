document.addEventListener('DOMContentLoaded', function() {
    // Generate random 8-digit order ID
    const orderId = Math.floor(10000000 + Math.random() * 90000000);
    document.getElementById('order-id').textContent = orderId;
    
    // Set current date (March 30, 2025)
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('order-date').textContent = currentDate.toLocaleDateString('en-US', options);
    
    // Calculate delivery date (4-6 days from current date)
    const deliveryStartDate = new Date(currentDate);
    deliveryStartDate.setDate(currentDate.getDate() + 4);
    
    const deliveryEndDate = new Date(currentDate);
    deliveryEndDate.setDate(currentDate.getDate() + 6);
    
    const deliveryStartFormatted = deliveryStartDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long' });
    const deliveryEndFormatted = deliveryEndDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long' });
    
    document.getElementById('delivery-date').textContent = `${deliveryStartFormatted} - ${deliveryEndFormatted}`;
    
    // Get total amount from localStorage or use default
    let subtotal = 0;
    let shipping = 19; // Default shipping cost
    let discount = 0;
    let gst = 0;
    let total = shipping; // Default total with just shipping
    
    // Try to get the cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length > 0) {
        subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const discountStr = localStorage.getItem('discount') || '0';
        discount = parseFloat(discountStr);
        
        // Calculate GST (18% of subtotal)
        gst = subtotal * 0.18;
        
        // Calculate total including GST
        total = subtotal + shipping + gst - discount;
    }
    
    document.getElementById('total-amount').textContent = `Rs ${total.toFixed(2)}`;
    
    // Get payment method from localStorage or use default
    let paymentMethod = 'Credit Card'; // Default value
    const storedPaymentMethod = localStorage.getItem('paymentMethod');
    if (storedPaymentMethod) {
        switch(storedPaymentMethod) {
            case 'credit-card':
                paymentMethod = 'Credit Card';
                break;
            case 'upi':
                paymentMethod = 'UPI';
                break;
            case 'netbanking':
                paymentMethod = 'Net Banking';
                break;
            case 'cod':
                paymentMethod = 'Cash on Delivery';
                break;
            default:
                paymentMethod = 'Credit Card';
        }
    }
    
    document.getElementById('payment-method').textContent = paymentMethod;
    
    // Clear the cart after successful order
    localStorage.removeItem('cart');
    localStorage.removeItem('discount');
    localStorage.removeItem('paymentMethod');
    document.querySelector('.cart-count').textContent = '0';
});
