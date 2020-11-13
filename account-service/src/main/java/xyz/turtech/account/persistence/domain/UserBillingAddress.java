package xyz.turtech.account.persistence.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "user_billing_addresses", schema = "turtech")
public class UserBillingAddress implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Long id;

    @Column(name = "billing_address_name")
    private String billingAddressName;

    @Column(name = "billing_address_street1")
    private String billingAddressStreet1;

    @Column(name = "billing_address_street2")
    private String billingAddressStreet2;

    @Column(name = "billing_address_city")
    private String billingAddressCity;

    @Column(name = "billing_address_country")
    private String billingAddressCountry;

    @Column(name = "billing_address_zipcode")
    private String billingAddressZipcode;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBillingAddressName() {
        return billingAddressName;
    }

    public void setBillingAddressName(String billingAddressName) {
        this.billingAddressName = billingAddressName;
    }

    public String getBillingAddressStreet1() {
        return billingAddressStreet1;
    }

    public void setBillingAddressStreet1(String billingAddressStreet1) {
        this.billingAddressStreet1 = billingAddressStreet1;
    }

    public String getBillingAddressStreet2() {
        return billingAddressStreet2;
    }

    public void setBillingAddressStreet2(String billingAddressStreet2) {
        this.billingAddressStreet2 = billingAddressStreet2;
    }

    public String getBillingAddressCity() {
        return billingAddressCity;
    }

    public void setBillingAddressCity(String billingAddressCity) {
        this.billingAddressCity = billingAddressCity;
    }

    public String getBillingAddressCountry() {
        return billingAddressCountry;
    }

    public void setBillingAddressCountry(String billingAddressCountry) {
        this.billingAddressCountry = billingAddressCountry;
    }

    public String getBillingAddressZipcode() {
        return billingAddressZipcode;
    }

    public void setBillingAddressZipcode(String billingAddressZipcode) {
        this.billingAddressZipcode = billingAddressZipcode;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserBillingAddress that = (UserBillingAddress) o;
        return id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "UserBillingAddress{" +
                "id='" + id + '\'' +
                ", billingAddressName='" + billingAddressName + '\'' +
                ", billingAddressStreet1='" + billingAddressStreet1 + '\'' +
                ", billingAddressStreet2='" + billingAddressStreet2 + '\'' +
                ", billingAddressCity='" + billingAddressCity + '\'' +
                ", billingAddressCountry='" + billingAddressCountry + '\'' +
                ", billingAddressZipcode='" + billingAddressZipcode + '\'' +
                '}';
    }
}
