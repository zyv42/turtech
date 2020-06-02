package xyz.turtech.account.persistence.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.Objects;

@Document
public class UserBilling implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;
    private String userBillingName;
    private String userBillingStreet1;
    private String userBillingStreet2;
    private String userBillingCity;
    private String userBillingCountry;
    private String userBillingZipcode;
    private String userPaymentId;

    public String getId() {
        return id;
    }

    public void setId(String id) {
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

    public String getUserPaymentId() {
        return userPaymentId;
    }

    public void setUserPaymentId(String userPaymentId) {
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
