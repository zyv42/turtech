package xyz.turtech.account.persistence.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "user_payment_options", schema = "turtech")
public class UserPaymentOption implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Long paymentOptionId;

    @Column(name = "type")
    private String type;

    @Column(name = "card_name")
    private String cardName;

    @Column(name = "card_number")
    private String cardNumber;

    @Column(name = "expiry_month")
    private int expiryMonth;

    @Column(name = "expiry_year")
    private int expiryYear;

    @Column(name = "cvc")
    private int cvc;

    @Column(name = "holder_name")
    private String holderName;

    @Column(name = "default_payment_option")
    private boolean defaultPaymentOption;

    @Column(name = "user_id")
    private String userId;

    @Column(name = "billing_address_id")
    private Long billingAddressId;

    public Long getId() {
        return paymentOptionId;
    }

    public void setId(Long paymentOptionId) {
        this.paymentOptionId = paymentOptionId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCardName() {
        return cardName;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public int getExpiryMonth() {
        return expiryMonth;
    }

    public void setExpiryMonth(int expiryMonth) {
        this.expiryMonth = expiryMonth;
    }

    public int getExpiryYear() {
        return expiryYear;
    }

    public void setExpiryYear(int expiryYear) {
        this.expiryYear = expiryYear;
    }

    public int getCvc() {
        return cvc;
    }

    public void setCvc(int cvc) {
        this.cvc = cvc;
    }

    public String getHolderName() {
        return holderName;
    }

    public void setHolderName(String holderName) {
        this.holderName = holderName;
    }

    public boolean isDefaultPaymentOption() {
        return defaultPaymentOption;
    }

    public void setDefaultPaymentOption(boolean defaultPaymentOption) {
        this.defaultPaymentOption = defaultPaymentOption;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Long getBillingAddressId() {
        return billingAddressId;
    }

    public void setBillingAddressId(Long billingAddressId) {
        this.billingAddressId = billingAddressId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserPaymentOption that = (UserPaymentOption) o;
        return paymentOptionId.equals(that.paymentOptionId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(paymentOptionId);
    }

    @Override
    public String toString() {
        return "UserPayment{" +
                "id='" + paymentOptionId + '\'' +
                ", type='" + type + '\'' +
                ", cardName='" + cardName + '\'' +
                ", cardNumber='" + cardNumber + '\'' +
                ", expiryMonth=" + expiryMonth +
                ", expiryYear=" + expiryYear +
                ", cvc=" + cvc +
                ", holderName='" + holderName + '\'' +
                ", defaultPaymentOption=" + defaultPaymentOption +
                ", userId='" + userId + '\'' +
                ", billingAddressId='" + billingAddressId + '\'' +
                '}';
    }
}
