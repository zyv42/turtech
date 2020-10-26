package xyz.turtech.account.persistence.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "billing_addresses", schema = "turtech")
public class UserBilling implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Long id;

    @Column(name = "user_billing_name")
    private String userBillingName;

    @Column(name = "user_billing_street1")
    private String userBillingStreet1;

    @Column(name = "user_billing_street2")
    private String userBillingStreet2;

    @Column(name = "user_billing_city")
    private String userBillingCity;

    @Column(name = "user_billing_country")
    private String userBillingCountry;

    @Column(name = "user_billing_zipcode")
    private String userBillingZipcode;

    @Column(name = "user_payment_id")
    private Long userPaymentId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserBillingName() {
        return userBillingName;
    }

    public void setUserBillingName(String userBillingName) {
        this.userBillingName = userBillingName;
    }

    public String getUserBillingStreet1() {
        return userBillingStreet1;
    }

    public void setUserBillingStreet1(String userBillingStreet1) {
        this.userBillingStreet1 = userBillingStreet1;
    }

    public String getUserBillingStreet2() {
        return userBillingStreet2;
    }

    public void setUserBillingStreet2(String userBillingStreet2) {
        this.userBillingStreet2 = userBillingStreet2;
    }

    public String getUserBillingCity() {
        return userBillingCity;
    }

    public void setUserBillingCity(String userBillingCity) {
        this.userBillingCity = userBillingCity;
    }

    public String getUserBillingCountry() {
        return userBillingCountry;
    }

    public void setUserBillingCountry(String userBillingCountry) {
        this.userBillingCountry = userBillingCountry;
    }

    public String getUserBillingZipcode() {
        return userBillingZipcode;
    }

    public void setUserBillingZipcode(String userBillingZipcode) {
        this.userBillingZipcode = userBillingZipcode;
    }

    public Long getUserPaymentId() {
        return userPaymentId;
    }

    public void setUserPaymentId(Long userPaymentId) {
        this.userPaymentId = userPaymentId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserBilling that = (UserBilling) o;
        return id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "UserBilling{" +
                "id='" + id + '\'' +
                ", userBillingName='" + userBillingName + '\'' +
                ", userBillingStreet1='" + userBillingStreet1 + '\'' +
                ", userBillingStreet2='" + userBillingStreet2 + '\'' +
                ", userBillingCity='" + userBillingCity + '\'' +
                ", userBillingCountry='" + userBillingCountry + '\'' +
                ", userBillingZipcode='" + userBillingZipcode + '\'' +
                ", userPaymentId='" + userPaymentId + '\'' +
                '}';
    }
}
