import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { formData, amount } = location.state || {};
    
    const [paymentMethod, setPaymentMethod] = useState('Card');
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        nameOnCard: ''
    });
    const [upiId, setUpiId] = useState('');

    const handleCardChange = (e) => {
        setCardDetails({
            ...cardDetails,
            [e.target.name]: e.target.value
        });
    };

    const handlePayment = () => {
        // Handle payment processing based on selected method
        alert(`Payment of $${amount} processed via ${paymentMethod}`);
        navigate('/success'); // Redirect to success page
    };

    const renderPaymentForm = () => {
        switch(paymentMethod) {
            case 'Card':
                return <CardPayment amount={amount} cardDetails={cardDetails} onChange={handleCardChange} />;
            case 'PayPal':
                return <PayPalPayment amount={amount} />;
            case 'UPI':
                return <UPIPayment amount={amount} upiId={upiId} onChange={setUpiId} />;
            default:
                return <CardPayment amount={amount} cardDetails={cardDetails} onChange={handleCardChange} />;
        }
    };

    return (
        <div className="payment-container">
            <h2>Complete Your Payment</h2>
            
            <div className="payment-summary">
                <p><strong>Amount:</strong> ${amount}</p>
                <p><strong>Service:</strong> {formData?.consultationType}</p>
                <p><strong>Consultation:</strong> {formData?.topic}</p>
            </div>

            {/* Payment Method Selection */}
            <div className="payment-method-section">
                <h3>Select Payment Method</h3>
                <div className="payment-methods">
                    <div 
                        className={`payment-method ${paymentMethod === 'Card' ? 'active' : ''}`}
                        onClick={() => setPaymentMethod('Card')}
                    >
                        <div className="method-icon">💳</div>
                        <span>Credit/Debit Card</span>
                    </div>
                    <div 
                        className={`payment-method ${paymentMethod === 'PayPal' ? 'active' : ''}`}
                        onClick={() => setPaymentMethod('PayPal')}
                    >
                        <div className="method-icon">🔵</div>
                        <span>PayPal</span>
                    </div>
                    <div 
                        className={`payment-method ${paymentMethod === 'UPI' ? 'active' : ''}`}
                        onClick={() => setPaymentMethod('UPI')}
                    >
                        <div className="method-icon">📱</div>
                        <span>UPI</span>
                    </div>
                </div>
            </div>

            {/* Payment Form */}
            {renderPaymentForm()}

            {/* Pay Button */}
            <button className="pay-now-btn" onClick={handlePayment}>
                Pay ${amount}
            </button>
        </div>
    );
};

// Card Payment Component
const CardPayment = ({ amount, cardDetails, onChange }) => (
    <div className="payment-form card-form">
        <h3>Card Details</h3>
        <div className="form-group">
            <label>Name on Card *</label>
            <input
                type="text"
                name="nameOnCard"
                value={cardDetails.nameOnCard}
                onChange={onChange}
                placeholder="John Doe"
                required
            />
        </div>
        <div className="form-group">
            <label>Card Number *</label>
            <input
                type="text"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={onChange}
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                required
            />
        </div>
        <div className="form-row">
            <div className="form-group">
                <label>Expiry Date *</label>
                <input
                    type="text"
                    name="expiryDate"
                    value={cardDetails.expiryDate}
                    onChange={onChange}
                    placeholder="MM/YY"
                    maxLength="5"
                    required
                />
            </div>
            <div className="form-group">
                <label>CVV *</label>
                <input
                    type="text"
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={onChange}
                    placeholder="123"
                    maxLength="3"
                    required
                />
            </div>
        </div>
    </div>
);

// PayPal Payment Component
const PayPalPayment = ({ amount }) => (
    <div className="payment-form paypal-form">
        <h3>PayPal Payment</h3>
        <p>You will be redirected to PayPal to complete your payment.</p>
        <div className="paypal-button-container">
            <button className="paypal-btn">
                Continue with PayPal
            </button>
        </div>
        <div className="paypal-note">
            <p>After completing payment on PayPal, you'll be redirected back to our site.</p>
        </div>
    </div>
);

// UPI Payment Component
const UPIPayment = ({ amount, upiId, onChange }) => (
    <div className="payment-form upi-form">
        <h3>UPI Payment</h3>
        <div className="form-group">
            <label>UPI ID *</label>
            <input
                type="text"
                value={upiId}
                onChange={(e) => onChange(e.target.value)}
                placeholder="yourname@upi"
                required
            />
        </div>
        <div className="upi-apps">
            <p>Pay using your preferred UPI app:</p>
            <div className="upi-apps-grid">
                <div className="upi-app">Google Pay</div>
                <div className="upi-app">PhonePe</div>
                <div className="upi-app">Paytm</div>
                <div className="upi-app">BHIM</div>
            </div>
        </div>
    </div>
);

export default PaymentPage;