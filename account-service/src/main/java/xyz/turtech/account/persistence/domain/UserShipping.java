package xyz.turtech.account.persistence.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "user_shippings", schema = "turtech")
public class UserShipping implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Long id;

    @Column(name = "user_shipping_name")
    private String userShippingName;

    @Column(name = "user_shipping_street1")
    private String userShippingStreet1;

    @Column(name = "user_shipping_street2")
    private String userShippingStreet2;

    @Column(name = "user_shipping_city")
    private String userShippingCity;

    @Column(name = "user_shipping_country")
    private String userShippingCountry;

    @Column(name = "user_shipping_zipcode")
    private String userShippingZipcode;

    @Column(name = "default_user_shipping")
    private boolean defaultUserShipping;

    @Column(name = "user_id")
    private Long userId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserShippingName() {
        return userShippingName;
    }

    public void setUserShippingName(String userShippingName) {
        this.userShippingName = userShippingName;
    }

    public String getUserShippingStreet1() {
        return userShippingStreet1;
    }

    public void setUserShippingStreet1(String userShippingStreet1) {
        this.userShippingStreet1 = userShippingStreet1;
    }

    public String getUserShippingStreet2() {
        return userShippingStreet2;
    }

    public void setUserShippingStreet2(String userShippingStreet2) {
        this.userShippingStreet2 = userShippingStreet2;
    }

    public String getUserShippingCity() {
        return userShippingCity;
    }

    public void setUserShippingCity(String userShippingCity) {
        this.userShippingCity = userShippingCity;
    }

    public String getUserShippingCountry() {
        return userShippingCountry;
    }

    public void setUserShippingCountry(String userShippingCountry) {
        this.userShippingCountry = userShippingCountry;
    }

    public String getUserShippingZipcode() {
        return userShippingZipcode;
    }

    public void setUserShippingZipcode(String userShippingZipcode) {
        this.userShippingZipcode = userShippingZipcode;
    }

    public boolean isDefaultUserShipping() {
        return defaultUserShipping;
    }

    public void setDefaultUserShipping(boolean defaultUserShipping) {
        this.defaultUserShipping = defaultUserShipping;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserShipping that = (UserShipping) o;
        return id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "UserShipping{" +
                "id='" + id + '\'' +
                ", userShippingName='" + userShippingName + '\'' +
                ", userShippingStreet1='" + userShippingStreet1 + '\'' +
                ", userShippingStreet2='" + userShippingStreet2 + '\'' +
                ", userShippingCity='" + userShippingCity + '\'' +
                ", userShippingCountry='" + userShippingCountry + '\'' +
                ", userShippingZipcode='" + userShippingZipcode + '\'' +
                ", defaultUserShipping=" + defaultUserShipping +
                ", userId='" + userId + '\'' +
                '}';
    }
}
